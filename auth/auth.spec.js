const request = require("supertest");
const db = require("../database/dbConfig");
const server = require("../api/server");

describe("auth-router.js", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("POST to /api/auth/register", () => {
    it("responds with a status of 201 CREATED", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "Brianna", password: "password" })
        .expect(201);

      done();
    });

    it("responds with JSON", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "Brianna", password: "password" })
        .expect("Content-Type", /json/i);

      done();
    });
  });

  describe("POST to /api/auth/login", () => {
    it("responds with a status of 200 OK", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "Brianna", password: "password" });

      request(server)
        .post("/api/auth/login")
        .send({ username: "Brianna", password: "password" })
        .expect(200);

      done();
    });
    it("responds with JSON", async done => {
      await request(server)
        .post("/api/auth/register")
        .send({ username: "Brianna", password: "password" });

      request(server)
        .post("/api/auth/login")
        .send({ username: "Brianna", password: "password" })
        .expect("Content-Type", /json/i);

      done();
    });
  });
});
