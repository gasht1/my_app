import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    customer: {
        type: String,
        required: true,
        maxLength: 255,

        
    },
    address: {
        type: String,
        required: true,
        maxLength: 255,

        
    },
    total: {
        type: Number,
        required: true,
        

        
    } ,
    status: {
        type: Number,
        required: true,
        

        
    },
    method: {
        type: Number,
        required: true,
    }
  
    

},
{timeStamps: true}

);

export default mongoose.models.Order|| mongoose.model("order", orderSchema);    
        
