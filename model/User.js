const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    marriageType: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    referralName: {
        type: String,
        required: true
    },
    referralAddress: {
        type: String,
        required: true
    },
    referralPhone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    clearPassword: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    userIP: {
        type: String,
        required: true
    },
    regDate: {
        type: Date,
        required: false,
        default: Date.now()
    }
});

module.exports = User = model("User", UserSchema);