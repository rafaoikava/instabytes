import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts() { // função para busca de DB
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
  };

export async function criarpost(novopost) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  return colecao.insertOne(novopost);
  
}  

export async function attnpost(id, novopost) {
  const db = conexao.db("instabytes");
  const colecao = db.collection("posts");
  const objId = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novopost});
};
