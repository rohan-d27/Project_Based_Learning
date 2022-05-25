import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "./View.css";

const View = () => {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id)
            getSingleUser(id);
    }
        , [id]);
    const getSingleUser = async (id) => {
        const response = await axios.get(`http://localhost:5000/user/${id}`);
        if (response.status === 200)
            setUser(response.data);
    }
    return (
        <div style={{ marginTop: "150px" }}>
            <div className="card">
                <div className="card-header">
                    <p>User Contact Details</p>
                </div>
                <div className="container">
                    <strong>ID:
                    </strong>
                    <span>{id}</span><br /><br />
                    <strong>Name:
                    </strong>
                    <span>{user && user.name}</span><br /><br />
                    <strong>Email:
                    </strong>
                    <span>{user && user.email}</span><br /><br />
                    <strong>Phone:
                    </strong>
                    <span>{user && user.phone}</span><br /><br />
                    <Link to="/">
                        <button className="btn-btn-edit">Go Back</button></Link>

                </div>
            </div >
        </div >
    )
}

export default View