
//  EXTERNAL IMPORTS
import React from 'react'
import { useState } from 'react'
import { find } from "../controllers/users";
import { Link } from 'react-router-dom';
import { gameWin, gameLose } from '../controllers/game';

const Home = () => {
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [users, setUsers] = useState([]);
    const isAdmin = sessionStorage.getItem('isAdmin');
    const [isadmin, setIsadmin] = useState(false);
    const [text, setText] = useState('Demarer une partie')
    const [textBtn, setTextBtn] = useState('Jouer !')

    const fetchData = async () => {
        try {
            const response = await find();
            setUsers(response);
        } catch (error) {
            console.log(error)
        }
    }

    if (isFirstLoad == true) {
        setIsFirstLoad(false);
        setIsadmin(isAdmin);

        fetchData();
    }
    const handleOnPlay = async (e) => {
        e.preventDefault();

        setText("Veuillez Patienter...");
        var duree = 4;
        var x = Math.floor(Math.random() * 2);
        var intervalId = setInterval(async function () {
            setTextBtn("Veuillez Patienter..." + duree + " secondes");

            duree--;
            if (duree < 0) {
                clearInterval(intervalId);
                if (x == 0) {
                    const responses = await gameLose();
                    fetchData();
                    setText("Vous avez perdue  !!")
                } else {
                    const responses = await gameWin();
                    fetchData();
                    setText("Vous avez gagner  !!")
                }
                setTextBtn("Rejouer !");
            }
        }, 1000);
    }

    return (
        <div>
            <ul>
                <li><Link className="a" to='../Home'>Home</Link></li>
                <li><Link className="a" to='../Home'>About</Link></li>
                <li><Link className="a" to='../'>Log Out</Link></li>
            </ul>
            <div className="container">
                <form className='form' onSubmit={handleOnPlay}>
                    <h3>
                        {text}
                    </h3>
                    <button type='submit' className='btnPlay' >
                        {textBtn}
                    </button>
                </form>

                <table>
                    <tr>
                        <th>UserName</th>
                        <th>Score</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {
                            users.map(
                                user => {
                                    return <tr>
                                        <td>{user.username}</td>
                                        <td>{user.score}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            < Link className="link" to={`/User/${user.id}`}>+</Link>


                                        </td>
                                    </tr>
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Home