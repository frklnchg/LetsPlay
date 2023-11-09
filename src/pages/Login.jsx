//  EXTERNAL IMPORTS

import { useState } from 'react'
import Input from '../components/Input'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


//  INTERNAL IMPORTS

import { login } from "../controllers/auth"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlOnchangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlOnSubmit = async (e) => {
        e.preventDefault();
        const isGood = await login(email, password);
        if (isGood) {
            navigate('/Home')

        } else {
            console.log('Erreur')
        }
    }
    return (
        <div className='container'>
            <h1 className='title'>Connexion</h1>
            <form onSubmit={handlOnSubmit}>
                <Input
                    type="email"
                    className="input-form"
                    placeholder='Address Email'
                    value={email}
                    setValue={handlOnChangeEmail}
                />
                <Input
                    type="password"
                    className="input-form"
                    placeholder='Mot De Passe'
                    value={password}
                    setValue={handlOnchangePassword}
                />
                <button type='submit' className="btn btn-connexion">Connexion</button>
            </form>
            <Link className="register-link" to='/Register'>Vous n’avez pas de compte ? Inscrivez-vous ici.</Link>

        </div>
    )
}

export default Login