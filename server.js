let http = require('http');
let fs = require('fs');

let successResp = {
    err: null,
    data: null
};

let errResp = {
    err: null,
    data: null
};

let myServer = http.createServer((req, res)=> {
    /**
     * CPS
     */
     fs.readFile('./data/movies.json', 'utf-8', (err, data)=> {
         if (err){

             errResp.err = err;
             res.writeHead(501, {'Content-Type': 'application/json'});
             res.end(JSON.stringify(errResp));

         }else{
             successResp.data = data;
             res.writeHead(200, {'Content-Type': 'application/json'});
             res.end(JSON.stringify(successResp));
         }
     });
    
    



//     fs.createReadStream('./data/' + req.url.substring(1) + '.json')
//         .on('data', function(data){
//             console.log(data);
//             console.log('data');
//         }).on('error', function(err){
//             errResp.err = err;
//             res.writeHead(501, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify(errResp));
//             console.log('error');
//         }).pipe(res)
//         .on('close', function(){
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.end();
//             console.log('close');
//         });
});


myServer.listen(3039);
console.log('We are listen on 3039');
