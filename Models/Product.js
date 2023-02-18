import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255,

        
    },
    desc: {
        type: String,
        required: true,
        maxLength: 255,

        
    },
    img: {
        type: String,
        required: true,
        

        
    } ,
    prices: {
        type: [Number],
        required: true,
        maxLength: 255,

        
    }

},
{timeStamps: true}

);

export default mongoose.models.Product || 
mongoose.model("Product", productSchema);