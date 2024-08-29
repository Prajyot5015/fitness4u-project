import Member from "../models/Member.js";


const postMember = async (req,res)=>{
    const {name,age, email, number, months, totalAmount, user} = req.body;

    const member = new Member({
        name,
        age,
        email,
        number,
        months,
        totalAmount,
        user
    })

    try {
        const savedMember = await member.save();

        res.json({
            success: true,
            message: `Congratulations! You are our member Now`,
            data: savedMember
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}

export { postMember }