const port = 3000;

import express from "express";

const app = express();

function sayHello(something) {
  console.log("something something something something something something something - ", something);
}

// sayHello(10);
sayHello("Romas n");

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("Response send");
});

app.listen(port, () => {
  console.log(`The server is running on port http://localhost:${port}`);
});
