import Purchase from "../models/Purchase.js";

const postPurchase = async (req, res) => {
    const { uname,email, number, address, city, state, pincode, mode,totalAmount, user } = req.body;

    const purchase = new Purchase({      
        uname,
        email,
        number,
        address,
        city,
        state,
        pincode,
        mode,
        totalAmount,
        user
    })
   

    try {
        const savedPurchase = await purchase.save();

        res.json({
            success: true,
            message: `Thank  You! Your Order will Delivere Soon`,
            data: savedPurchase
        });
    }
    catch (e) {
        res.json({
            success: false,
            // message: "Sorry, Order not Placed",
            message: e.message,
            data: null
        })
    }
}

export { postPurchase }