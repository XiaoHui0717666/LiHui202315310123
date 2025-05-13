const http = require('http');

const app = http.createServer();

app.on('request', (req, res) => {
    
    //1.请求方式由method获取
    /*     if(req.method == 'GET'){
            res.end('get method');
        }

        //POST请求需要写一个form表单
        else if(req.method=='POST'){
            res.end('post method');
        }
        else{
            res.end('another method');
        } */


    //2.req.url能够获取请求地址
/*     let url = req.url;
    if (url == '/' || url == '/index') {
        res.end('HomePage');
    }
    else if (url == '/list') {
        res.end('ListPage');
    }
    else {
        res.end('Page not Found');
    } */

        //3.
        res.writeHead(200,{'content-type':'text/html'});
        //如果想输入中文不是乱码，则输入以下代码
       /*  res.writeHead(200,{'content-type':'text/html;charset=utf8'}); */
        res.end('<h1>Hello World</h1>');
});

app.listen(3000, () => {
    console.log('服务器已启动....');
});

