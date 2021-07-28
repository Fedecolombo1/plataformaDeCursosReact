import "./Form.css";
import { useEffect, useState } from "react";
import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { Fragment } from "react";

import { Redirect } from 'react-router-dom';

const Form = () => {

    const { createOrder } = useContext(CartContext);

    const [name, setName] = useState(undefined)
    const [surname, setSurname] = useState(undefined)
    const [number, setNumber] = useState(undefined)
    const [emailSinConfirmar, setEmailSinConfirmar] = useState(undefined)
    const [email, setEmail] = useState(undefined)

    const [nameError, setNameError] = useState('')
    const [surnameError, setSurnameError] = useState('')
    const [numberError, setNumberError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailRepError, setEmailRepError] = useState('')
    const [vacioError, setVacioError] = useState('')
    const [estaVacio, setEstaVacio] = useState(true)

    const [redirect, setRedirect] = useState(false)

    const handleChange = (event, state) => {
        state(event.target.value)
    }
    

    const validacion = (event) => {
        let emailRepError = ''


        if(email !== emailSinConfirmar){
            emailRepError = 'El mail que ingresaste no coincide'
        }

        if(emailRepError){
            setEmailRepError(emailRepError)
            return false
        }



        //if(email !== emailSinConfirmar && email === undefined && emailSinConfirmar === undefined){
        //    set
        //} else {
        //    event.preventDefault()
        //}
        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const estaValidado = validacion()
        if(estaValidado && name !== undefined && surname !== undefined && number !== undefined && email !== undefined){
            createOrder(name, surname, number, email)
            setRedirect(true)
        } else {
            console.log('Hubo errores :/');
            setVacioError('No pueden quedar campos vacios')
        }
    }
    
    useEffect(() => {
      if(name !== undefined && surname !== undefined && number !== undefined && email !== undefined){
        setEstaVacio(false)
      }
    })

  return (
    <>
     { redirect ? (<Redirect push to="/pagoExitoso"/>) : null }
        <form className='formPago row col-12 col-lg-6' onSubmit={event => {handleSubmit(event)}} >
          <label htmlFor="" for='nombre' className='label'>Nombre</label>
          <input type="text" minLength={2} id='nombre' placeholder='Nombre' className='col-12 inputPago' onChange={(event) => handleChange(event, setName)} value={name}/>
            <p className='errorInput'>{nameError}</p>
          <label htmlFor="" for='Apellido' className='label'>Apellido</label>
          <input type="text" minLength={2} id='Apellido' placeholder='Apellido' className='col-12 inputPago' onChange={(event) => handleChange(event, setSurname)} value={surname}/>
            <p className='errorInput'>{surnameError}</p>
          <label htmlFor="" for='Telefono' className='label'>Telefono</label>
          <input type="number" minLength={2} id='Telefono' placeholder='Telefono' className='col-12 inputPago' onChange={(event) => handleChange(event, setNumber)} value={number}/>
            <p className='errorInput'>{numberError}</p>
          <label htmlFor="" for='Email' className='label'>Email</label>
          <input type='email' id='Email' placeholder='Email' className='col-12 inputPago' onChange={(event) => handleChange(event, setEmailSinConfirmar)} value={emailSinConfirmar}/>
            <p className='errorInput'>{emailError}</p>
          <label htmlFor="" for='RepEmail' className='label'>Repetir Email</label>
          <input  type='email' id='RepEmail' placeholder='Repetir Email' className='col-12 inputPago' onChange={(event) => handleChange(event, setEmail)} value={email}/>
            <p className='errorInput'>{emailRepError}</p>
            <p className='errorInput'>{vacioError}</p>
          
          {estaVacio === false ? (
            <input type='submit' className={`col-12 align btnPagar`} to={`/pagar?title=DisenioUx&price=2500`} value='Pagar'/>
          )
          :(
            <input type='button' className={`col-12 align desabilitado`} value='Pagar'/>
          )}
          
          
          
        </form>
    </>
  );

  
}

export default Form;
