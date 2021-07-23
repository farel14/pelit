const request = require("supertest");
const app = require("../app");
const { User } = require("../models");

// Test Login
describe("POST /login [SUCCESS CASE]", () => {
  test("Shoud send a object with key: access_token", (done) => {
    request(app)
      .post("/login")
      .send({
        email: "tesAja@mail.com",
        password: "12345",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(200);
          expect(res.body).toHaveProperty("access_token", expect.any(String));
          expect(res.body).toHaveProperty("data", expect.any(Object));
          done();
        }
      });
  });
});

// describe("POST /login [ERROR CASE]", () => {
//   test("Failed because of wrong password", (done) => {
//     request(app)
//       .post("/login")
//       .send({
//         email: "tesAja@mail.com",
//         password: "123324",
//       })
//       .end((err, res) => {
//         if (err) done(err);
//         else {
//           expect(res.status).toBe(401);
//           expect(res.body).toHaveProperty("message", "Wrong Email/Password");
//           done();
//         }
//       });
//   });
//   test("Failed because of the email is not registered", (done) => {
//     request(app)
//       .post("/login")
//       .send({
//         email: "tesAja@mail.com",
//         password: "123324",
//       })
//       .end((err, res) => {
//         if (err) done(err);
//         else {
//           expect(res.status).toBe(401);
//           expect(res.body).toHaveProperty("message", "Wrong Email/Password");
//           done();
//         }
//       });
//   });
// });
