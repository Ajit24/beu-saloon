const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://beu:beu1122@cluster0.fb66r.mongodb.net/beu?retryWrites=true&w=majority")
}

//database 
// mongodb+srv://beu:beu1122@cluster0.fb66r.mongodb.net/beu?retryWrites=true&w=majority