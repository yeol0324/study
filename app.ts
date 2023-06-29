const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// const customerRoute = require("./routes/customer");

const figlet = require("figlet");
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});

app.get("/user", (req, res) => {
  res.send("get user");
});

app.post("/user", (req, res) => {
  res.send("post user");
});

//next Object
app.get(
  "/example",
  (req, res, next) => {
    console.log("first");
    next(); // 다음 콜백 함수 호출
  },
  (req, res) => {
    res.send("second"); //client response
  }
);

//callback function array
const ex0 = (req, res, next) => {
  console.log("first");
  next();
};
const ex1 = (req, res, next) => {
  console.log("second");
  next();
};
const ex2 = (req, res, next) => {
  res.send("third"); //client response
};
app.get("/example2", [ex0, ex1, ex2]); //define callback function array

//응답 메서드(한 가지 방법으로 응답해야함)

// app
//   .route("/customer")
//   .get((res, req) => {
//     console.log("고객 조회");
//   })
//   .post((res, req) => {
//     console.log("고객 추가");
//   })
//   .put((res, req) => {
//     console.log("고객 수정");
//   })
//   .delete((res, req) => {
//     console.log("고객 삭제");
//   });

// app.get("/user", (req, res) => {
//   throw new Error("에러");
// });

// // next를 이용해 정보 전달
// app.get("/user", (req, res, next) => {
//   next(new Error("에러"));
// });

// // err, 에러 처리 핸들러 미들웨어 함수로 처리
// app.get("example", (req, res, next) => {
//   next(new Error("에러"));
// });
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ statusCode: res.statusCode, errMessage: err.message });
// });
// app.use("customer", customerRoute);
