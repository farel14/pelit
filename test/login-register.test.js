const request = require("supertest");
const app = require("../app");
const { User, Transaction } = require("../models");

let user = {
  email: "test@email.com",
  password: "password123",
};

let targets = [];
let user_id;
let transaction_id;

beforeAll((done) => {
  User.create({
    ...user,
    fullName: "Test User",
    photoProfile: "",
    balance: 2000000,
  }) // create user
    .then((user) => {
      user_id = user.id;

      let trans = {};
      trans.UserId = user_id;
      trans.type = "Expense";
      trans.amount = -300000;
      trans.fullDate = "2021-07-23";
      trans.receiptImage = "";
      trans.category = "Transportation";
      trans.notes = "asdasdasd";
      trans.title = "makan";

      return Transaction.create(trans);
    })
    .then((data) => {
      transaction_id = data.id;

      let trans = {};
      trans.UserId = user_id;
      trans.type = "Income";
      trans.amount = -300000;
      trans.fullDate = "2021-07-23";
      trans.receiptImage = "";
      trans.category = "Transportation";
      trans.notes = "asdasdasd";
      trans.title = "makan";

      return Transaction.create(trans);
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      // console.log('ERRRRRORRR CREATE USER')
      done(err);
    });
});

if (process.env.NODE_ENV == "test") {
  afterAll((done) => {
    User.destroy({ truncate: { cascade: true } })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
}

// Test Register
describe("POST /register [SUCCESS CASE]", () => {
  test("Shoud send a object with key: id and email", (done) => {
    request(app)
      .post("/register")
      .send({
        email: "tesAja@mail.com",
        password: "12345",
        fullName: "Tes aja",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(201);
          expect(res.body).toHaveProperty("data", expect.any(Object));
          expect(res.body).toHaveProperty("message", "Registered Successfully");
          done();
        }
      });
  });
});

describe("POST /register [ERROR CASE]", () => {
  test("Failed because of email not to input", (done) => {
    request(app)
      .post("/register")
      .send({
        password: "12345",
        fullName: "Tes aja",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining(["Email cannot be null"])
          );
          done();
        }
      });
  });
  test("Failed because of password not to input", (done) => {
    request(app)
      .post("/register")
      .send({ email: "ahmadfaisal@mail.com", fullName: "Tes aja" })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining(["Password cannot be null"])
          );
          done();
        }
      });
  });
  test("Failed because of full name not to input", (done) => {
    request(app)
      .post("/register")
      .send({ email: "ahmadfaisal@mail.com", password: "12345" })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining(["Full name cannot be null"])
          );
          done();
        }
      });
  });
  test("Failed because of the email empty", (done) => {
    request(app)
      .post("/register")
      .send({
        email: "",
        password: "12345",
        fullName: "Tes aja",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining([
              "Email cannot be empty",
              "Should be email type",
            ])
          );
          done();
        }
      });
  });
  test("Failed because of the password empty", (done) => {
    request(app)
      .post("/register")
      .send({
        email: "ahmadfaisal@mail.com",
        password: "",
        fullName: "Tes aja",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining([
              "Password should be minimal 5 characters",
              "Password cannot be empty",
            ])
          );
          done();
        }
      });
  });
  test("Failed because of the full name empty", (done) => {
    request(app)
      .post("/register")
      .send({
        email: "ahmadfaisal@mail.com",
        password: "12345",
        fullName: "",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining(["Full name cannot be empty"])
          );
          done();
        }
      });
  });
  // test("Failed because of the email has been registered", (done) => {
  //   request(app)
  //     .post("/register")
  //     .send({
  //       email: "tesAja@mail.com",
  //       password: "12345",
  //       fullName: "Tes aja",
  //     })
  //     .end((err, res) => {
  //       if (err) done(err);
  //       else {
  //         expect(res.status).toBe(400);
  //         expect(res.body.message).toEqual(
  //           expect.arrayContaining(["Email must be unique"])
  //         );
  //         done();
  //       }
  //     });
  // });
  test("Failed because of the email type not valid", (done) => {
    request(app)
      .post("/register")
      .send({
        email: "staff1",
        password: "12345",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(400);
          expect(res.body.message).toEqual(
            expect.arrayContaining(["Should be email type"])
          );
          done();
        }
      });
  });
});

// Test Login
describe("POST /login [SUCCESS CASE]", () => {
  test("Shoud send a object with key: access_token", (done) => {
    request(app)
      .post("/login")
      .send({
        email: "test@email.com",
        password: "password123",
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

describe("POST /login [ERROR CASE]", () => {
  test("Failed because of wrong password", (done) => {
    request(app)
      .post("/login")
      .send({
        email: "tesAja@mail.com",
        password: "123324",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message", "Wrong Email/Password");
          done();
        }
      });
  });
  test("Failed because of the email is not registered", (done) => {
    request(app)
      .post("/login")
      .send({
        email: "tesAjaaaa@mail.com",
        password: "123324",
      })
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.status).toBe(401);
          expect(res.body).toHaveProperty("message", "Wrong Email/Password");
          done();
        }
      });
  });
});
