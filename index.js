const http = require('http');
const server = http.createServer( (req, res)=> {
   
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        /** add other headers as per requirement */
      };

    const url = req.url;
    const url_method = req.method;
    console.log(url_method);

    if(url == '/'){
        console.log('in /');
        res.writeHead(200, headers);
        var response = {
          "name": "wozniak"   
        };
       // res.write('<h1>Welcome to node app!</h1>');
      return  res.end(JSON.stringify(response));
    }

    else if(url == '/profile'){
        console.log('in /profile');
        var response = {
            "name": "wozniak profile"   
          };
        res.writeHead(200, headers);
      //  res.write('<h1>Welcome to node profile  !</h1>');
       return res.end(JSON.stringify(response));
    }
    
    console.log('out if');
    res.writeHead(200, headers);
   // res.write('<h1>Welcome to node app ta da!</h1>');
    return res.end();
    console.log('nooo');
});

server.listen(3000);
