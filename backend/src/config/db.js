import prismaPkg from "@prisma/client"

const {PrismaClient} = prismaPkg;

const prisma = new PrismaClient({
    log:process.env.NODE_ENV==="development"?["query","error","warn"]:["error"],


});

const disconnectDB= async ()=>{
     try{
        await prisma.$disconnect()
    }catch(error){  
        console.log("Database disconnetion error : ",error.message)

    }

}


export{disconnectDB,prisma}
