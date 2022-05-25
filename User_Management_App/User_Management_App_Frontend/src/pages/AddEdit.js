import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./AddEdit.css";

const addUser = async (data) => {
    const response = await axios.post('http://localhost:5000/user', data);
    if (response.status === 200) {
        toast.success(response.data);
    }
}
const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
        toast.success(response.data);
    }
}

const AddEdit = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getSingleUser(id);
        }
    }, [id]);

    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:5000/user/${id}`);
        console.log(response.data);
        if (response.status === 200) {
            setState(response.data);
        }
    }
    const handleUpdate = (event) => {
        if (name) {
            state.name = name;
        }
        if (email) {
            state.email = email;
        }
        if (phone) {
            state.phone = phone;
        }

        setState({ ...state });
        updateUser(state, id);
        navigate("/");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !phone) {

            toast.error("Please fill all the fields");
            return;

        }
        else
            if (!id) {
                state.name = name;
                state.email = email;
                state.phone = phone;
                setState({ ...state });
                console.log(state, name, email, phone);
                addUser(state);
            }



        setTimeout(() => navigate("/"), 500)

    }
    /*const handleInputChange = (e) => {
        let { name, value } = e.target.value;
        setState({ ...state, [name]: value });
        console.log(e);
    }
 
    const changeNameHandler = async function (e) {
 
        setName(e.target.value);
        setState({ ...state, name });
    }
    const changeEmailHandler = async function (e) {
        setEmail(e.target.value);
        setState({ ...state, email });
    }
    const changePhoneHandler = async function (e) {
        setPhone(e.target.value);
        setState({ ...state, phone });
    }
    const handleValueChange = () => {
        console.log(name);
    }
    useEffect(() => {
        handleValueChange();
    });*/

    return (
        <div>
            <center>
                <div style={{ marginTop: "100px", border: "solid", height: "fit-content", width: "fit-content", alignContent: "center" }}>
                    <form style={{
                        margin: "auto", padding: "15px", maxwidth: "400px",
                        alignContent: "center"
                    }} onSubmit={id ? handleUpdate : handleSubmit}>
                        <label htmlFor='name'>Name: </label>
                        <input type="text" id="name" name="name" placeholder="Enter name" onChange={(e) => { setName(e.target.value); }} defaultValue={state.name} />
                        <br />
                        <label htmlFor='email'>Email: </label>
                        <input type="text" id="email" name="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value); }} defaultValue={state.email} />
                        <br />
                        <label htmlFor='phone'>Phone: </label>
                        <input type="text" id="phone" name="phone" placeholder="Enter phone" onChange={(e) => { setPhone(e.target.value); }} defaultValue={state.phone} />
                        <br />
                        <input type="submit" value={id ? "Update" : "Add"} />
                    </form>

                </div>
            </center>
        </div>


    )
}

export default AddEdit