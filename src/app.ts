import http from "node:http";

//simulando um banco de dados - lista de produtos
const products = [
  {
    id: 1,
    name: "Camiseta",
    price: 29.99,
  },
  {
    id: 2,
    name: "Jaqueta",
    price: 129.99,
  },
  {
    id: 3,
    name: "Sapato",
    price: 59.99,
  },
];

//criando um servidor http
const app = http.createServer((request, response) => {
  //rota para listar os produtos
  if (request.method === "GET" && request.url === "/products") {
    //retornando os produtos
    response.end(JSON.stringify(products));
  }
});

export { app };