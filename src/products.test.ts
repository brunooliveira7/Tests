import request from "supertest";
import { app } from "./app"; //não sobe o servidor, o server sim - defini a porta

describe("products", () => {
  it("should list product", async() => {
    const response = await request(app).get("/products");
    
    //verifica se o status da resposta é 200 - sucesso
    expect(response.statusCode).toBe(200);
    //verifica o tamanho do array de produtos
    expect(response.body).toHaveLength(3);
  });
});
