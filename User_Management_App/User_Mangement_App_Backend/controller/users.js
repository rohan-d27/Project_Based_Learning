import { v4 as uuid } from "uuid";
import mongoose from "mongoose";

const allUsers = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    phone: {
        type: 'string',
        required: true
    }
})

const userObj = mongoose.model('User', allUsers);



let users = [];

//Get All
export const getUsers = async (req, res) => {
    const users = await userObj.find();
    res.send(users);
};


export const createUser = async (req, res) => {
    const user = new userObj({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone

    })

    const a1 = await user.save()
    res.send("User Added successfully");
};

export const getUser = async (req, res) => {

    const users = await userObj.findById(req.params.id)
    res.send(users);

};



//Insert
/*export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuid() });
    res.send("User Added Successfully");
};

//Find By Id
export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
};*/

//Delete
export const deleteUser = async (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    await userObj.deleteOne({ _id: req.params.id });
    res.send("User Deleted Successfully");
};

//Update
export const updateUser = async (req, res) => {
    /*  const user = users.find((user) => user.id === req.params.id);
  
      user.name = req.body.name;
      user.email = req.body.email;
      user.phone = req.body.phone;*/
    await userObj.updateOne({ _id: req.params.id }, { $set: { name: req.body.name, email: req.body.email, phone: req.body.phone } });
    // users.push({ ...user, id: req.params.id });
    res.send("User updated Successfully");
};