import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import logoImage from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function NewIncident() {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ value, setValue ] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewIncident( event ) {
        event.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch( error ) {
            alert('Erro ao cadastrar caso. Tente novamente.')
        }
    } 

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                <img src={ logoImage } alt="Be The Hero"/>

                <h1> Cadastrar novo caso </h1>

                <p>
                    Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                </p>
                <Link className="back-link" to="/profile"> 
                    <FiArrowLeft size={ 16 } color="#e02041" />
                    Voltar para home
                </Link>
                </section>

                <form onSubmit={ handleNewIncident }>
                    <input 
                    value={ title }
                    onChange={ e => setTitle(e.target.value) }
                    type="text" 
                    placeholder="Título do caso"
                    />
                    <textarea 
                    value={ description }
                    onChange={ e => setDescription(e.target.value) }
                    placeholder="Descrição"
                    />
                    <input 
                    value={ value }
                    onChange={ e => setValue(e.target.value) }
                    type="text" 
                    placeholder="Valor em reais"
                    />

                    <div className="button-group">
                        <Link className="button-cancelar" to="/profile"><button style={{ border: 0 }} type="submit"> Cancelar </button></Link>
                        <button className="button" type="submit"> Cadastrar </button>
                    </div>
                </form>
            </div>
        </div>
    )
}