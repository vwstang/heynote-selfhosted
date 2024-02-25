import express from "express";

const app = express();

app.get("/api/asdf", (req, res) => {
  res.json({ hello: "world" });
});

export const handler = app;
