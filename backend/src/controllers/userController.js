import { prisma } from "../config/db.js";

export const getUser = async (req, res)=>{

    let text = req.url;
    let username = text.replace("/","")

    const existUser = await prisma.user.findUnique({
        where:{username:username},
        select:{
            id:true,
            email:true,
            fullName:true,
            profileUrl:true,
            bio:true,
            isPrivate:true,
            isVerified:true,
            followersCount:true,
            followingCount:true,
            
        }
    })

    if(!existUser){
        return res.status(400).json({message:"No user found"})
    }


    res.status(200).json({
        status:true,
        user:existUser
    })

    
    

}