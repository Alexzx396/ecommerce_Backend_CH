const winston = require("winston");
const config = require("./config.js");
const path = require("path");

function buildProdLogger() {
  const prodLogger = winston.createLogger({
    transports: [
      new winston.transports.File({
        filename: path.join(path.dirname(""), "/logs/warn.log"),
        level: "warn",
      }),
      new winston.transports.File({
        filename: path.join(path.dirname(""), "/logs/error.log"),
        level: "error",
      }),
      new winston.transports.Console({
        format: winston.format.combine(winston.format.colorize(), winston.format.simple())
      })
    ],
  });
  return prodLogger;
}

function buildDevLogger() {
  const devLogger = winston.createLogger({
    transports: [new winston.transports.Console({ level: "info" })],
  });
  return devLogger;
}

let logger = null;

if (config.srv.NODE_ENV === "PROD") {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

module.exports = logger;
