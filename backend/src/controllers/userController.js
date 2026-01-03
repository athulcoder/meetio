export const sendFeeds =async (req,res)=>{

    res.json([{
        post_1:"Intersteller.jpg"
    },
    {
        post_2:"Intersteller.jpg"

    }   
])

}

export const registerUser = async (req, res)=>{

    const {fullName ,username, dob, email, password} = await req.body;

    if(!fullName|| !username || !dob ||!email || !password){
        return res.status(400).json({status:false, message:"All Fields are required"})
    }






    
    
}