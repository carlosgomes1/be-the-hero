import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImage from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'

export default function Login() {
    const [ id, setId ] = useState('')

    const history = useHistory()

    async function handleLogin( event ) {
        event.preventDefault()

        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch( error ) {
            alert('Falha no Login, tente novamente.')
        }   
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={ logoImage } alt="Be The Hero"/>

                <form onSubmit={ handleLogin }>
                    <h1> Faça seu login </h1>

                    <input 
                        type="text" 
                        placeholder="Seu ID"
                        onChange={ e => setId(e.target.value) }
                    />
                    <button type="submit" className="button"> Entrar </button>

                    <Link className="back-link" to="/register"> 
                    <FiLogIn size={ 16 } color="#e02041" />
                    Não tenho cadastro 
                    </Link>
                </form>
            </section>
            <img src={ heroesImage } alt="Heroes" />
        </div>
    )
}