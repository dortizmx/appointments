import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './component/Formulario';
import Appointment from './component/Appointment';

function App() {

  //Local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments){
    initialAppointments = [];
  }
  //appointments
  const [appointments, setappointments] = useState(initialAppointments); 

  //UseEffect
  useEffect(()=>{
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }
    else{
      localStorage.setItem('appointments', JSON.stringify([]));
    }
}, [appointments] );


  
  const addAppointment = (appointment) =>{
    setappointments([...appointments, appointment]);
    //console.log(appointment);
  }

  const deleteAppointment = (id)=>{
    //console.log(id);
    const newappointments = appointments.filter(appointment => appointment.id !== id);
    setappointments(newappointments);
  }

  //Mensaje
  const titlelist = appointments.length === 0 ? 'No hay citas' : 'Administra tus citas';

  

  return (
    <Fragment>
        <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column"><Formulario
              addAppointment={addAppointment}
            /></div>
            <div className="one-half column">
              <h2>{titlelist}</h2>
              {appointments.map(appointment =>(

                <Appointment 
                  key={appointment.id} 
                  appointment={appointment}
                  deleteAppointment={deleteAppointment} />
              ))}
            </div>
          </div>
        </div>
    </Fragment>
    
  );
}

export default App;
