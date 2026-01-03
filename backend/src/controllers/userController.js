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

    const {firstName , lastName , email, phoneNumber, password} = await req.body;

    if(!firstName|| !lastName || !email|| !phoneNumber || !password){
        return res.status(400).json({status:false, message:"All Fields are required"})
    }


    
    
    
}