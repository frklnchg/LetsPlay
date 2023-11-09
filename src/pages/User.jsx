//  EXTERNAL IMPORTS
import React from 'react'
import { useState } from 'react'
import { findById, deleteUser } from "../controllers/users";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const User = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const fetchData = async () => {
        try {
            const response = await findById(id);;
            setUser(response);
        } catch (error) {
            console.log(error)
        }
    }
    if (isFirstLoad) {
        setIsFirstLoad(false);
        fetchData();
    }


    const handleOnBack = () => {
        navigate(-1);
    }

    const handleOnDelete = async (e) => {
        try {
            e.preventDefault();
            await deleteUser(id);
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <ul>
                <li><Link className="a" to='../Home'>Home</Link></li>
                <li><Link className="a" to='../Home'>About</Link></li>
                <li><Link className="a" to='../'>Log Out</Link></li>
            </ul>
            <div className="container">
                <h2>Utilisateur</h2>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{user.username}</h5>
                        <p className="card-text">{user.email}</p>
                        <p className="card-text">{user.score}</p>
                        <button onClick={handleOnBack} className="btn btn-back">Retour</button>
                        <button onClick={handleOnDelete} className="btn btn-back">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default User