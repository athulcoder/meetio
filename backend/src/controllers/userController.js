import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateJWT.js";
export const sendFeeds = async(req, res) => {

    res.json([{
            post_1: "Intersteller.jpg"
        },
        {
            post_2: "Intersteller.jpg"

        }
    ])

}

export const registerUser = async(req, res) => {

    const { fullName, username, dob, email, password } = await req.body;


    if (!fullName || !username || !dob || !email || !password) {
        return res.status(400).json({ status: false, message: "All Fields are required" })
    }


    const userExist = await prisma.user.findUnique({
        where: { email: email }
    })

    if (userExist) {
        return res.status(400).json({ status: false, message: "User already exists with this email or username" })
    }

    //verify email


    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);





    const user = await prisma.user.create({
        data: {
            fullName: fullName,
            email: email,
            username: username,
            password: hashedPassword,
            dob: new Date(dob),
        },
        select: {
            id: true,
            email: true,
            username: true,
            fullName: true
        }

    })




    res.status(201).json({
        status: true,
        message: "User registered successfully",
        user: user
    })


}




//login

export const loginUser = async(req, res) => {
    const { email, password } = await req.body;

    if (!email || !password) {
        return res.status(400).json({ status: false, message: "All feilds are required" })
    }

    //check user
    const userExist = await prisma.user.findUnique({
        where: { email: email },
        select: {
            id: true,
            email: true,
            username: true,
            password: true,
            fullName: true,
            isPrivate: true,
            isVerified: true,
            profileUrl: true,
            followersCount: true,
            followingCount: true,
        }
    });

    if (!userExist) {
        return res.status(401).json({ satus: false, message: "Invalid email or password" })
    }


    //check passoword

    const isPassowordTrue = await bcrypt.compare(password, userExist.password);

    if (!isPassowordTrue) {
        return res.status(401).json({ satus: false, message: "Invalid email or password" })

    }


    //create a jwt token 

    const token = generateToken(res, userExist.id);
    res.status(200).json({ status: true, message: "login successfull", user: { password, ...userExist }, token: token })
}