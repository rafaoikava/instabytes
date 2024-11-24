import express from "express";  // chama a importação do express
import routes from "./src/route/postsroutes.js";

const app = express(); //constante para não alteração
app.use(express.static("./uploads"));
routes(app);

app.listen(3000, () => { // sobe o servidorna porta 3000
    console.log("servidor escutando"); //confirma se subiu
});
