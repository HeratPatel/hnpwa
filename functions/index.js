const functions = require("firebase-functions");
const admin = require("firebase-admin");
const prpl = require("prpl-server");
const express = require("express");
const rendertron = require("rendertron-middleware");

const app = express();

try {
  admin.initializeApp();
} catch (error) {
  //TODO: ignoring until firebase-functions fix released
}

const rendertronMiddleware = rendertron.makeMiddleware({
  proxyUrl: "https://render-tron.appspot.com/render",
  injectShadyDom: true
});

app.use((req, res, next) => {
  req.headers["host"] = "https://hnpwa-fcf6b.firebaseapp.com/";
  return rendertronMiddleware(req, res, next);
});

app.get("/*", prpl.makeHandler("./build", require("./build/polymer.json")));

exports.app = functions.https.onRequest(app);
