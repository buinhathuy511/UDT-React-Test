import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import App from "../client/App";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);
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

app.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
