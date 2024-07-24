import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import generateHash from './sha256.js';

const app = express();
const port = 4000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    let dataFile = path.join(__dirname,'index.html');
    fs.readFile(dataFile, 'utf8',(err,data)=>{
        if(err) res.status(500);
        res.send(data);
        res.end();
    })
});

app.post('/',async (req,res)=>{
    let data = req.query;
    let hash = await generateHash(data);
    res.send(hash);
    res.end();
});


app.listen(port,()=>{
    console.log(`server listenting at port:${port}`);
})
