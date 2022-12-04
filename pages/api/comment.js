import {nanoid} from "nanoid";
import Redis from "ioredis";


export default async function handler(req,res){
    //CREATE
    if (req.method === "POST"){
        const{usertoken,email,url,text}=req.body
        if (!url ||!usertoken || !text || !email){
        return res.status(400).json({message: "Parametreler Eksik Ya Da Hatalı"});
        }
        const userResponse = await fetch(`http://dev-k32gu9l5.us.auth0.com/userinfo`,{
            headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${usertoken}`,

            }
        })
        const user = await userResponse.json();
        const comment = {
            user:{
                name:user.name,
                email:user.email,
            },
            email,
            text,
            createdAt:Date.now(),
            id:nanoid(),
        }
        let redis = new Redis("redis://default:5e433b073d1e4385b1cee6b434cc51f0@us1-faithful-goose-37171.upstash.io:37171");
        redis.lpush(url,JSON.stringify(comment));
        redis.quit();
    }
    //FETCH
    if (req.method === "GET"){
        res.status(200).json({name:"yorumlar"})
    }
}