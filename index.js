import http from "http";

const port = 3000
const grades = [
    {
        studentName: "Yuri",
        subject: "English",
        grade: "8",
    },
];

const server = http.createServer((request, response)=>{
    // funções do backend
    const {method, url} = request

    if (url === '/grades' && method === 'GET'){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(grades));
    }else{
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({message: 'Route not found'}));
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})