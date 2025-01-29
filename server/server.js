import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import indexRouter from "./src/routes/index.js";
import userRouter from "./src/routes/users.js"; 
import productRouter from "./src/routes/products.js";
import supportBotRouter from "./src/routes/supportBotRoute.js"

import loginRoute from "./src/routes/login.js"
import registerRoute from "./src/routes/register.js"
import accountRoute from "./src/routes/account.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

// use routers
app.use('/', indexRouter);
app.use('/users', userRouter); 
app.use('/products', productRouter);
app.use('/supportBot', supportBotRouter)

//routes for handling user login
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/account', accountRoute)

//simple error-handling middleware for development, primary used by login related routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error", error: err.message });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
