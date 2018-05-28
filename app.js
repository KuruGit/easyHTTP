const http = new EasyHTTP();

//new get
// http.get("https://jsonplaceholder.typicode.com/users").then(data => console.log(data)).catch(err=>console.log(err));

const data = {
    name: "John Doe",
    username: "jdoe",
    email: "jdoe@gmail.com"
}

http.get("https://jsonplaceholder.typicode.com/users",data)
.then(data => console.log(data))
.catch(err=>console.log(err));