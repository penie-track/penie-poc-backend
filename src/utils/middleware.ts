import { Request, Response, NextFunction } from "express";
import logger from "./logger";

const SENSITIVE_FIELDS = ["password", "token", "secret"];

const sanitize = (body: any) => {
  if (!body || typeof body !== "object") return body;

  const clean = { ...body };
  for (const key of SENSITIVE_FIELDS) {
    if (clean[key]) clean[key] = "***";
  }
  return clean;
};

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();

  res.on("finish", () => {
    console.log(`
    ---- REQUEST ----
    ${req.method} ${req.originalUrl}
    Status: ${res.statusCode}
    Duration: ${Date.now() - start}ms
    Body: ${JSON.stringify(sanitize(req.body))}
    -----------------
    `);
  });

  next();
};

// Error Handler

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error.message);
  if (error.name === "CastError") {
    return res.status(400).json({ error: "Malformatted id" });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  if (error.code === 11000) {
    return res.status(409).json({ error: "Duplicate key" });
  }
  // Default
  return res.status(500).json({ error: "Internal server error" });
};

export const unKnownEndPoint = (req: Request, res: Response) => {
  res.status(404).send({ error: "UnKnown endpoint" });
};
