import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Appointment = ({appointment, deleteAppointment}) => {
    return (  
        <Fragment>
            <div className="cita">
                <p>Paciente: <span>{appointment.fname} {appointment.lname}</span></p>
                <p>Fecha   : <span>{appointment.appointmentdate}</span></p>
                <p>Hora    : <span>{appointment.appointmenttime}</span></p>
                <p>Sintomas: <span>{appointment.symptoms} </span></p>
                <button
                    className="button eliminar u-full-width"
                    onClick={() => deleteAppointment(appointment.id)}
                >Eliminar &times;</button>
            </div>
        </Fragment>
    );
}
Appointment.propTypes ={
    appointment : PropTypes.object.isRequired,
    deleteAppointment : PropTypes.func.isRequired
}
export default Appointment;