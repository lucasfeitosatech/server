
const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/easytracking', (req, res) => {
  res.json({ ok: true });
});

app.get('/autotreinamento',(req,res)=>{

  var o = {};
  var key = "question";
  o[key] = [];
  var answer = new Array();

  for(var i=1;i<4;i++){
    
    answer.push(`Resposta ${i}`);

    var question = {
      title:`Pergunta ${i}`,
      option:`a`,
      answer:answer
    };

    o[key].push(question);
  }

	res.json(o);
})


const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
