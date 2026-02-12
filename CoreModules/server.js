import http from 'http'


const app = http.createServer()


const PORT = 3000

app.listen(PORT,()=>{

    console.log(`Server Is on: in the http://localhost:${PORT}`);
    
})