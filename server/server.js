import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import indexRouter from "./src/routes/index.js";
import userRouter from "./src/routes/users.js"; 
import productRouter from "./src/routes/products.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Use routers
app.use('/', indexRouter);
app.use('/users', userRouter); 
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
