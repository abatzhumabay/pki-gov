const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://abatzhumabay:zOtH6YPR73mCDUrI@cluster0.rsfjk7e.mongodb.net/")

//checking connection
connect.then(() => {
    console.log("Database connected succsessfully!");
})
.catch(() => {
    console.log("Database cannot be connected...");
});

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", loginSchema);

module.exports = collection;