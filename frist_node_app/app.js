const express = require('express');
const router = require("./Routes/Pages");

const app = express();
const PORT = 3000;

app.use(router);


app.get('/', (req, res)=> {
  res.send("hello world");
}); 

app.listen(PORT, ()=>{
  console.log(`Server started on http://localhost:${PORT}`);

});