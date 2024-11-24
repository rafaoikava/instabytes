import express from "express";
import multer from "multer";
import cors from "cors";



const corsOptions = {
    origin:"http://localhost:8000", 
    optionsSuccessStatus: 200
}

import { listarposts, pnovopost, upimg, attnovopost } from "../controler/postscontroller.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({dest:"./uploads" , storage});


const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));
    app.get("/posts", listarposts);
    app.post("/posts", pnovopost);
    app.post("/upload", upload.single("imagem"), upimg);
    app.put("/upload/:id", attnovopost);
};

export default routes;