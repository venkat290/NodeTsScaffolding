import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.get('/', (req, res) => {
    res.send('Well done!');
})

app.use(errorHandler);
app.use(notFoundHandler);




app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})