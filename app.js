const http = new EasyHTTP();

//new get
http.get("https://jsonplaceholder.typicode.com/users").then(data => console.log(data)).catch(err=>console.log(err));

