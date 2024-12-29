import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import HelloWorld from "../client/pages/HelloWorld";
import Calculator from "../client/pages/Calculator";
import History from "../client/pages/History";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(<HelloWorld />);
  const indexFile = path.resolve(__dirname, "../dist/index.html");

  fs.readFile(indexFile, "utf8", (error, data) => {
    if (error) {
      console.error("Could not read index.html", error);
      res.status(500);
      res.send("Internal Server Error");
      return;
    }

    const result = data.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );
    res.send(result);
  });
});

app.get("/calculator", (req, res) => {
  const content = ReactDOMServer.renderToString(<Calculator />);
  const indexFile = path.resolve(__dirname, "../dist/index.html");

  fs.readFile(indexFile, "utf-8", (error, data) => {
    if (error) {
      console.error("Could not read index.html", error);
      res.status(500);
      res.send("Internal Server Error");
      return;
    }

    const result = data.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );
    res.send(result);
  });
});

app.get("/history", (req, res) => {
  const content = ReactDOMServer.renderToString(<History />);
  const indexFile = path.resolve(__dirname, "../dist/index.html");

  fs.readFile(indexFile, "utf-8", (error, data) => {
    if (error) {
      console.error("Could not read index.html", error);
      res.status(500);
      res.send("Internal Server Error");
      return;
    }

    const result = data.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );
    res.send(result);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
