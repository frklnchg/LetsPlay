//  EXTERNAL IMPORTS
import React from 'react'
import { Input } from '../components/Input';

const UpdateUser = () => {
    return (
        <div className='container'>
            <h1 className='title'>Inscription</h1>
            <form onSubmit={handlOnSubmit}>
                <Input
                    type="text"
                    className="input-form"
                    placeholder="Veuillez saisir votre nom d'utilisateur"
                    value={userName}
                    setValue={handlOnChangeserName}
                />
                <Input
                    type="email"
                    className="input-form"
                    placeholder='Veuillez saisir votre email'
                    value={email}
                    setValue={handlOnChangeEmail}
                />
                <Input
                    type="password"
                    className="input-form"
                    placeholder='Veuillez saisir un mot de passe'
                    value={password}
                    setValue={handlOnchangePassword}
                />

                <button type='submit' className="btn btn-connexion">Valider</button>
            </form>

        </div>
    )
}

export default UpdateUser