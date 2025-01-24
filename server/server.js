// server/server.js
import express from "express";
import bodyParser from "body-parser";
import indexRouter from "./src/routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

// Create a variable for the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

// Serve static files from the client/dist folder
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Use all routers for handling routes
app.use('/', indexRouter); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
