import mongoose from 'mongoose';
import {registerSchema} from '../models/infModel';

const User = mongoose.model('User', registerSchema);

export const addnewUser =async (req, res) => {
    let newUser = new User(req.body);
    const {firstName, lastName, email,address,contact,nic, password} = req.body;
    const findUser = await User.findOne({email});
    if (findUser) {
        return res.status(200).json({
            success: false,
            message: 'Email already exist!'
        });
        }
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const seeAllUsers = async (req, res) => {
    User.find({},(err,user)=> {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}
export const getUserByID = async(req, res) => {
    const {email, password} = req.body;
    
    const userFind = await User.findOne({email});
    if (!userFind) {

        return res.status(200).json({
            success: false,
            message: 'Incorrect Email!'
        });
    } else {
        const isMatch = await password == userFind.password;
        if (isMatch) {
            

            res.json({
                success: true,
                email: userFind.email,
          
            });

        } else {
 
            res.json({
                success: false,
                message: 'Incorrect Password!'
            });
        }
    }
   
                

}