import request from "supertest";
import { app } from "./app"; //não sobe o servidor, o server sim - defini a porta

describe("products", () => {
  it("should list product", async() => {
    const response = await request(app).get("/products");
    console.log(response.body);
  });
});
