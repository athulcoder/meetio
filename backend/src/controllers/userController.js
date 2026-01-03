import { prisma } from "../config/db.js";
import bcrypt from "bcryptjs"
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