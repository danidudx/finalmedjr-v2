import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phoneNumber:'',
    preferedDate:'',
    reason:'',
    department:'',
  });

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const onSubmit =(event)=>{
    formData.preferedDate=selectedDate.toISOString().substr(0,10);
    event.preventDefault();
    console.log("formdata", formData); // Logging formData

    // Additional processing or operations can be performed here

    axios.post('http://localhost:8080/appointments/add', formData)
    .then(res => console.log(res.data))
    .catch(error => console.error('Error:', error));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <form action="#" className="row" onSubmit={onSubmit}>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Name</label>
        <input type="text" className="cs_form_field" placeholder="David John" name="name" value={formData.name} onChange={handleChange} />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input type="text" className="cs_form_field" placeholder="(123) 456 - 789" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Email</label>
        <input type="text" className="cs_form_field" placeholder="live@gmail.com" name="email" value={formData.email} onChange={handleChange} />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Preferred Date</label>
        <div className="cs_with_icon_input">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
          />
          <i><Icon icon="fa6-solid:calendar-days" /></i>
          </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">
          Reason for Visit
        </label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reason"
              id="routineCheckup"
              value="routineCheckup"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="routineCheckup">
              Routine Checkup
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reason"
              id="newPatientVisit"
              value="newPatientVisit"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="newPatientVisit">
              New Patient Visit
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reason"
              id="specificConcern"
              value="specificConcern"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="specificConcern">
              Specific Concern
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Department</label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="pediatric"
              value="pediatric"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="pediatric">
              Pediatric
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="obstetricsGynecology"
              value="obstetricsGynecology"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="obstetricsGynecology">
              Obstetrics and Gynecology
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="cardiology"
              value="cardiology"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="cardiology">
              Cardiology
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="neurology"
              value="neurology"
              onChange={handleRadioChange}
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Neurology
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}
