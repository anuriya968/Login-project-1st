const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createserver((req, res) =>{
    if(req.method === 'get'){
        fs.readfile('index.html',(err,data) => {
            res.writehead(200,{
                'Content-Type': 'text/html'});
                res.end(data);
        });
    }else if (req.method === 'post'){
        let body ='';
        req.on('data', chunk => {
         body+= chunk;
        });
    } req.on('end', () => {
        const data = querystring.parse(body);
       if(data.username === 'riya'&& data.password === '1234'){
        res.end('login sucessful');
       }else{
        res.end('wrong username or passwors');
       }
    });
    console.log()
  });

  server.listen(3000, () => {
    console.log('server running')
  });


