/**
 *  This is a very important interview question for node.js
 */
process.env.UV_THREADPOOL_SIZE = 4; // we are defining the size of threads used by the libuv threadpool.

const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

function doRequest() {
  https
    .request("https:www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("Newtwork: ", Date.now() - start);
      });
    })
    .end();
}

function _hash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash: ", Date.now() - start);
  });
}

doRequest();

fs.writeFile("spartacus.txt", "I am a legeng", (err) => {
  if (err) throw new Error("Something went wrong !!");
  console.log("Create File: ", Date.now() - start);
});

fs.readFile("spartacus.txt", "utf-8", (err, data) => {
  if (err) throw new Error("Something went wrong !!");
  console.log("Read File: ", Date.now() - start);
});

_hash();
_hash();
_hash();
_hash();
_hash();
