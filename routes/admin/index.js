const router = require("express").Router();
const User = require("../../model/User");
const History = require("../../model/History");
const { ensureAdmin } = require("../../config/auth");
const bcrypt = require("bcryptjs/dist/bcrypt");

router.get("/", ensureAdmin, async (req, res) => {
    try {
        const customers = await User.find({ isAdmin: false });
        return res.render("admin/index", { layout: "admin/layout", pageTitle: "Welcome", customers, req });
    }
    catch (err) {
        return res.redirect("/admin");
    }
});

router.get("/edit-user/:id", ensureAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await User.findOne({ _id: id });
        return res.render("admin/editUser", { layout: "admin/layout", pageTitle: "Welcome", customer, req });
    }
    catch (err) {
        return res.redirect("/admin");
    }
});

router.post("/edit-user/:id", ensureAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const {
            firstname,
            lastname,
            age,
            email,
            gender,
            marriageType,
            country,
            town,
            city,
            homeAddress,
            referralName,
            referralAddress,
            referralPhone
        } = req.body;
        await User.updateOne({ _id: id }, {
            firstname,
            lastname,
            age,
            email,
            gender,
            marriageType: marriageType || "",
            country,
            town,
            city,
            homeAddress,
            referralName,
            referralAddress,
            referralPhone
        });
        req.flash("success_msg", "account updated");
        return res.redirect("/admin/edit-user/" + id);
    }
    catch (err) {
        console.log(err);
        return res.redirect("/admin");
    }
});

router.get("/delete-account/:id", ensureAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.redirect("/admin");
        }
        await User.deleteOne({ _id: id });
        return res.redirect("/admin");
    } catch (err) {
        return res.redirect("/admin")
    }
});

router.get("/deposit", ensureAdmin, async (req, res) => {
    try {
        const customers = await User.find({});
        return res.render("admin/deposit", { layout: "admin/layout", pageTitle: "Deposit", customers, req });
    } catch (err) {
        return res.redirect("/admin")
    }
});

router.post("/deposit", ensureAdmin, async (req, res) => {
    try {
        const { amount, userID, debt } = req.body;
        if (!amount || !userID || !debt) {
            req.flash("error_msg", "Please provide all fields");
            return res.redirect("/admin/deposit");
        }
        const customer = await User.findOne({ _id: userID });
        const newHistData = {
            type: "Credit",
            userID,
            amount,
            status: 'successful',
            account: customer.email
        }
        const newHist = new History(newHistData);
        await newHist.save();

        await User.updateOne({ _id: userID }, {
            balance: Number(customer.balance) + Number(amount),
            active_deposit: Number(customer.active_deposit) + Number(amount),
            debt,
            total_deposit: Number(customer.total_deposit) + Number(amount)
        });

        req.flash("success_msg", "Deposit successful");
        return res.redirect("/admin/deposit");

    } catch (err) {
        console.log(err);
        return res.redirect("/admin");
    }
})

router.get("/change-password", ensureAdmin, async (req, res) => {
    try {
        return res.render("admin/changePassword", { layout: "admin/layout", pageTitle: "Change Password", req });
    } catch (err) {
        console.log(err);
        return res.redirect("/admin");
    }
})

router.post("/change-password", ensureAdmin, async (req, res) => {
    try {
        const { password, password2 } = req.body;
        console.log(req.body);
        if (!password || !password2) {
            req.flash("error_msg", "Please provide fill all fields");
            return res.redirect("/admin/change-password");
        }
        else if (password !== password2) {
            req.flash("error_msg", "Both passwords must be same");
            return res.redirect("/admin/change-password");
        }
        else if (password.length < 6) {
            req.flash("error_msg", "Password too short")
            return res.redirect("/admin/change-password");
        } else {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(password2, salt);
            await User.updateOne({ _id: req.user.id }, {
                password: hash
            });
            req.flash("success_msg", "password updated successfully");
            return res.redirect("/admin/change-password");
        }

    } catch (err) {
        console.log(err);
        return res.redirect("/admin");
    }
})

module.exports = router;