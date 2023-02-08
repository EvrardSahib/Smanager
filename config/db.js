const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://EvrardSahib:Chesstitan87@cluster0.u2pmow2.mongodb.net/smanager", {
            useNewUrlParser: true,
            useUnifiedTopology: true,


        }
    )
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log("Failed to connect to MongoDB", err));