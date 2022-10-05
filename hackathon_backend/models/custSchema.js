const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const custSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
})

// Hashing password
// Call this method when save method is called
custSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        // 12 - number of rounds
        this.password = await bcrypt.hash(this.password, 12);
       
    }
    next()
});

// Generating token
// custSchema.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     }
//     catch (err) {
//         console.log(err);
//     }
// }

const Cust = mongoose.model('cust', custSchema);

module.exports = Cust;

