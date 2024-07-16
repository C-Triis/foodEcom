import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vothanhtri:Trii312281@appfood.ialim4q.mongodb.net/").then(
        () => {
            console.log("Data connect MongoDB")
        })
}