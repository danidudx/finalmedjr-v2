import React from 'react'
import Header from '../Header'
import DoctorForm from '../DoctorDashboard'
import './docdash.css';

const DocDashPage = () => {
  return (
    <div className='docpage'>
        <Header />
        
        <div className='docform'>
            <h1>Add a Doctor</h1>
            <DoctorForm />
        </div>
    </div>
  )
}

export default DocDashPage