const express = require('express')
const app = express()
const port = process.env.PORT || 80
const si = require('systeminformation');

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`${new Date()}: server is listening on ${port}`)
  console.log('env: %o', process.env)
})

app.get('/', async (req, res) => {
  let data = {
    "COLOUR": process.env.COLOUR || "none",
    "ENV": process.env
  }

  res.send(data);
})

app.get('/sysinfo', async (req, res) => {
  let data = await allStaticData();
  console.log(data);

  res.send(data);
})

app.get('/health', async (req, res) => {
  res.send();
})

async function allStaticData() {
        try {
                const data = await si.getStaticData();
                return data;
        } catch (e) {
                console.log(e);
        }
}