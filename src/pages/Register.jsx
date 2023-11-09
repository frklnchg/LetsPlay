
//  EXTERNAL IMPORTS
import { useState } from 'react';
import Input from '../components/Input';
import { register } from '../controllers/auth';
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handlOnChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlOnchangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlOnChangeserName = (e) => {
        setUserName(e.target.value);
    }

    const handlOnSubmit = async (e) => {
        e.preventDefault();
        const isGood = await register(email, password, userName);
        if (isGood) {
            navigate('/')

        } else {
            console.log('probleme')
        }
    }
    return (
        <div className='container'>
            <h1 className='title'>Inscription</h1>
            <form onSubmit={handlOnSubmit}>
                <Input
                    type="text"
                    className="input-form"
                    placeholder="Nom d'utilisateur"
                    value={userName}
                    setValue={handlOnChangeserName}
                />
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

                <button type='submit' className="btn btn-connexion">Inscription</button>
            </form>

        </div>
    )
}

export default Register