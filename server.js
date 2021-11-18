const express = require("express");
const yaml = require("js-yaml");
const { spawn } = require("child_process");
require("dotenv").config();

const app = express();
let allUsers = [];

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index", { output: "", time: "" });
});

app.get("/tali-admin", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_1}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/nl-backend", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_10}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/tali-website", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_2}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/nl-website", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_3}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/nl-admin", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_4}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/api-gateway", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_5}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/pm-auth", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_6}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/pm-subs", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_7}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/pm-payment", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_8}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/qu-website", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_9}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/qu-backend", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_11}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  child.on("exit", function (exitCode) {
    let consumedTime = (Date.now() - begin) / 1000 + "s";
    res.render("pages/index.ejs", {
      output: outputArr,
      time: consumedTime,
    });
    console.log("TALI ADmin Deployed Successfully \u2713");
  });
});

app.get("/qu-frontend", async function (req, res) {
  var begin = Date.now();
  let outputArr = [];
  var child = spawn(
    `sshpass -p ${process.env.SERVER_PASS_1} ssh -o StrictHostKeyChecking=no -l ${process.env.SERVER_USER_1} ${process.env.SERVER_IP_1} "${process.env.COMMAND_12}"`,
    {
      shell: true,
    }
  );
  child.stderr.on("data", function (data) {
    outputArr.push("STDERR: " + data.toString());
  });
  child.stdout.on("data", function (data) {
    outputArr.push("STDOUT: " + data.toString());
  });
  let consumedTime = (Date.now() - begin) / 1000 + "s";
  res.render("pages/index.ejs", {
    output: outputArr,
    time: consumedTime,
  });
  console.log("TALI ADmin Deployed Successfully \u2713");
});

app.set("view engine", "ejs");

app.listen(8080);
console.log("Server is listening on port 8080");
