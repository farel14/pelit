const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

describe("GET /user/:userId [SUCCESS CASE]", () => {
  test("Shoud send a object with key: fullName, email, photoProfile, balance and id", (done) => {
    request(app)
      .get("/user/1")
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("fullName", expect.any(String));
          expect(res.body).toHaveProperty("email", expect.any(String));
          expect(res.body).toHaveProperty("photoProfile", expect.any(String));
          expect(res.body).toHaveProperty("balance", expect.any(Number));
          expect(res.body).toHaveProperty("id", expect.any(Number));
          done();
        }
      });
  });
});

describe("PATCH /user/balance/:userId [SUCCESS CASE]", () => {
  test("Shoud send a object with key: message and balance", (done) => {
    request(app)
      .patch("/user/balance/1")
      .send({
        balance: 50000,
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty(
            "message",
            "Balance has been updated successfully"
          );
          expect(res.body).toHaveProperty("balance", expect.any(Number));
          done();
        }
      });
  });
});

describe("PATCH /user/photo-profile/:userId [SUCCESS CASE]", () => {
  test("Shoud send a object with key: message and photoProfile", (done) => {
    request(app)
      .patch("/user/photo-profile/1")
      .send({
        photoProfile:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty(
            "message",
            "Photo profile has been updated successfully"
          );
          expect(res.body).toHaveProperty("photoProfile", expect.any(String));
          done();
        }
      });
  });
});

describe("PATCH /user/email/:userId [SUCCESS CASE]", () => {
  test("Shoud send a object with key: message and email", (done) => {
    request(app)
      .patch("/user/email/1")
      .send({
        email: "baba@mail.com",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty(
            "message",
            "Email has been updated successfully"
          );
          expect(res.body).toHaveProperty("email", expect.any(String));
          done();
        }
      });
  });
});

describe("PATCH /user/password/:userId [SUCCESS CASE]", () => {
  test("Shoud send a object with key: message and password", (done) => {
    request(app)
      .patch("/user/password/1")
      .send({
        password: "baba@mail.com",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty(
            "message",
            "Password has been updated successfully"
          );
          done();
        }
      });
  });
});

describe("PATCH /user/full-name/:userId [SUCCESS CASE]", () => {
  test("Shoud send a object with key: message and full name", (done) => {
    request(app)
      .patch("/user/full-name/1")
      .send({
        fullName: "Baba Dadak",
      })
      .end((err, res) => {
        console.log(res.bod);
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty(
            "message",
            "Full name has been updated successfully"
          );
          expect(res.body).toHaveProperty("fullName", expect.any(String));
          done();
        }
      });
  });
});
