import Member from "../models/Member.js";

const postMember = async (req, res) => {
    const { uname, age, email, number, months, totalAmount, mode, status, user } = req.body;

    const member = new Member({
        uname,
        age,
        email,
        number,
        months,
        totalAmount,
        mode,
        status,
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
            // message: "Sorry,This Email is already exists",
            message: e.message,
            data: null
        })
    }
}

// const getMember = async (req, res) => { 

//     const { memberName } = req.query


//     const goals = await Member.find({uname : memberName }).sort({ createdAt: -1 })

//     res.json({
//         success: true,
//         message: `Member Fetched Successfully`,
//         data: goals
//     })
// }

const getMember = async (req, res) => {
    try {
        const { memberName } = req.query;

        const query = memberName ? { uname: { $regex: new RegExp(memberName, 'i') } } : {};

        const members = await Member.find(query).sort({ createdAt: -1 });

        res.json({
            success: true,
            message: 'Members fetched successfully',
            data: members
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
}


// const putMember = async (req, res) => {

//     const {        
//         uname,
//         age,
//         email,
//         number,
//         months,
//         totalAmount,
//         mode,
//         status,
//         user } = req.body;

//     const { id } = req.params

//     await Member.updateOne({ _id: id },
//         {
//             $set: {
//                 uname: uname,
//                 age: age,
//                 email: email,
//                 number: number,
//                 months: months,
//                 totalAmount: totalAmount,
//                 mode : mode,
//                 status : status,
//                 user : user
//             }
//         })

//         const updatedMember = await Member.findById(id)

//         res.json({
//             success : true,
//             message : "Member Updated Successfully",
//             data : updatedMember
//         })
// }


const putMember = async (req, res) => {

    const { status } = req.body;

    const { id } = req.params

    await Member.updateOne({ _id: id },
        {
            $set: {
                status: status
            }
        })

    const updatedMember = await Member.findById(id)

    res.json({
        success: true,
        message: "Member Updated Successfully",
        data: updatedMember
    })
}


export { postMember, getMember, putMember }