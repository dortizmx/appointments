import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({addAppointment}) => {

    //Add state appointments
    const [appointment,setappointment ] = useState({
        fname : '',
        lname : '',
        appointmentdate : '',
        appointmenttime : '',
        symptoms : ''
    });

    const [error, seterror] = useState(false);

    //Handlechange 
    const handleChange = (e)=>{
        //console.log(e.target.name);
        //console.log(e.target.value);
        //console.log("writting....");

        setappointment({
            ...appointment,
            [e.target.name] : e.target.value
        });  
    }

    const submitappointment = (e)=>{
        e.preventDefault();
        //console.log("sending form");
        //validate 
        if(fname.trim() === '' || lname.trim() ==='' || appointmentdate.trim() ==='' || appointmenttime.trim() === '' || symptoms.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);
        //assign id
        
        appointment.id = uuidv4();
        //create appointment
        addAppointment(appointment);
        //restart form
        setappointment({
            fname : '',
            lname : '',
            appointmentdate : '',
            appointmenttime : '',
            symptoms : ''
        });
    }
    const { fname, lname, appointmentdate, appointmenttime, symptoms} = appointment;

    return ( 
        <Fragment>
            <h2>Crear cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
            <form
                onSubmit={submitappointment}
            >

                <label>Nombre Paciente</label>
                <input 
                    type="text"
                    name="fname"
                    className="u-full-width"
                    placeholder="Nombre del paciente"
                    onChange = {handleChange}
                    value = {fname}
                />
                 <label>Apellido Paciente</label>
                <input 
                    type="text"
                    name="lname"
                    className="u-full-width"
                    placeholder="Nombre del paciente"
                    onChange = {handleChange}
                    value = {lname}
                />
                 <label>Fecha de la cita</label>
                <input 
                    type="date"
                    name="appointmentdate"
                    className="u-full-width"
                    onChange = {handleChange}
                    value = {appointmentdate}
                    
                />
                <label>Hora de la cita </label>
                <input 
                    type="time"
                    name="appointmenttime"
                    className="u-full-width"
                    onChange = {handleChange}
                    value = {appointmenttime}
                    
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange = {handleChange}
                    value = {symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
//proptypes
Formulario.propTypes ={
    addAppointment : PropTypes.func.isRequired
}
export default Formulario;
