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

const getMember = async (req, res) => { 

    const { memberName } = req.query

  
    const goals = await Member.find({uname : memberName }).sort({ createdAt: -1 })

    res.json({
        success: true,
        message: `Member Fetched Successfully`,
        data: goals
    })
}




export { postMember, getMember }