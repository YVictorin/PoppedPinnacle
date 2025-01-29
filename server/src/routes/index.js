// server/src/routes/index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create a router
const router = express.Router();

// Get the directory name of the current module in es6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.resolve(__dirname, '../../../client/dist/index.html');

// Serve the frontend index.html file
router.get('/', (req, res) => {
    res.sendFile(indexPath)
});

export default router;