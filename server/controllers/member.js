import Member from "../models/Member.js";

const postMember = async (req, res) => {
    const { uname, age, email, number, months, totalAmount, mode, user } = req.body;

    const member = new Member({      
        uname,
        age,
        email,
        number,
        months,
        totalAmount,
        mode,
        user
    })
   

    try {
        const savedMember = await member.save();

        res.json({
            success: true,
            message: `Form Submitted Successfully! Trainer will Response you as soon as Possible`,
            data: savedMember
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: "Sorry,This Email is already exists",
            data: null
        })
    }
}

export { postMember }