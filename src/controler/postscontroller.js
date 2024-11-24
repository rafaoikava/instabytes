import {getTodosPosts, criarpost, attnpost} from "../model/postmodels.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiservices.js"

export async function listarposts(req, res) { //rota de todos os posts
    const posts = await getTodosPosts();
    res.status(200).json(posts); 
};

export async function pnovopost(req, res) {
    const novopost = req.body;
    try {
        const postcriado = await criarpost(novopost);
        res.status(200).json(postcriado);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"erro":"falha na requisção"});

    }
    
};


export async function upimg(req, res) {
    const novopost = {
        descricao: "",
        imgurl: req.file.originalname,
        alt: ""
    };
    
    try {
        const postcriado = await criarpost(novopost);
        const imgatualiz = `uploads/${postcriado.insertedId}.png`;
        fs.renameSync(req.file.path, imgatualiz);
        res.status(200).json(postcriado);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"erro":"falha na requisção"});

    }
    
};

export async function attnovopost(req, res) {
    const id = req.params.id;
    const urlimagem = `http://localhost:3000/${id}.png`
    try {
        const imgbuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricaog = await gerarDescricaoComGemini(imgbuffer);
        const patt ={
            imgurl: urlimagem,
            descricao: descricaog,
            alt: req.body.alt,
        }
        const postcriado = await attnpost(id, patt);
        res.status(200).json(postcriado);
    } catch (erro){
        console.error(erro.message);
        res.status(500).json({"erro":"falha na requisção"});

    }
    
};
