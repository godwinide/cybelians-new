const router = require("express").Router();
const { ensureAuthenticated } = require("../config/auth");
const User = require("../model/User");
const bcrypt = require("bcryptjs");

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    try {
        return res.render("dashboard", { pageTitle: "Dashbaord", req, layout: false });
    } catch (err) {
        return res.redirect("/");
    }
});

router.get("/marriage", ensureAuthenticated, (req, res) => {
    try {
        return res.render("marriage", { pageTitle: "Marriage", req, layout: false });
    } catch (err) {
        return res.redirect("/");
    }
});


router.get("/mailbox", ensureAuthenticated, (req, res) => {
    try {
        return res.render("mailbox", { pageTitle: "Mailbox", req, layout: false });
    } catch (err) {
        return res.redirect("/");
    }
});

router.get("/payment", ensureAuthenticated, (req, res) => {
    try {
        return res.render("payment", { pageTitle: "Payment", req, layout: false });
    } catch (err) {
        return res.redirect("/");
    }
});


module.exports = router;