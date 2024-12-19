const request = require("supertest");
const app = require("../src/app");

describe("To-Do API", () => {
  it("should add a new to-do", async () => {
    const response = await request(app)
      .post("/api/todos")
      .send({ title: "Test Todo" });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Test Todo");
  });

  it("should get all to-dos", async () => {
    const response = await request(app).get("/api/todos");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should update a to-do", async () => {
    const addResponse = await request(app)
      .post("/api/todos")
      .send({ title: "Old Title" });

    const response = await request(app)
      .put(`/api/todos/${addResponse.body.id}`)
      .send({ title: "Updated Title" });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe("Updated Title");
  });

  it("should delete a to-do", async () => {
    const addResponse = await request(app)
      .post("/api/todos")
      .send({ title: "To Be Deleted" });

    const response = await request(app).delete(`/api/todos/${addResponse.body.id}`);
    expect(response.status).toBe(204);
  });
});
