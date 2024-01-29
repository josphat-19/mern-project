import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
<<<<<<< HEAD
        type: string,
=======
        type: stringify,
>>>>>>> 5fb5a33e302a50b7d676fc3fde2ee83bcc0b36d4
        required: true,
        unique: true,
    },
    email: {
<<<<<<< HEAD
        type: string,
=======
        type: stringify,
>>>>>>> 5fb5a33e302a50b7d676fc3fde2ee83bcc0b36d4
        required: true,
        unique: true,
    },
    password: {
<<<<<<< HEAD
        type: string,
=======
        type: stringify,
>>>>>>> 5fb5a33e302a50b7d676fc3fde2ee83bcc0b36d4
        required: true,
    }
}, { timestamps: true})

const User = mongoose.model('user', userSchema)

export default User