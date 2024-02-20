import React, { useState } from 'react';
import './doctordashboard.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DoctorForm() {
  const [formData, setFormData] = useState({
    name: '',
    speciality: '',
    number: '',
    email: '',
    thumbnail: '',
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  
    const formDataWithImage = new FormData();
    formDataWithImage.append('name', formData.name);
    formDataWithImage.append('speciality', formData.speciality);
    formDataWithImage.append('number', formData.number);
    formDataWithImage.append('email', formData.email);
    formDataWithImage.append('thumbnail', imageFile); // Append the File object
  
    axios
      .post('http://localhost:8080/doctorsdash/add', formDataWithImage)
      .then((res) => {
        console.log(res.data);
        alert('Doctor added successfully!');
      })
      .catch((error) => console.error('Error:', error));
  };
  
  
  return (
    <form onSubmit={onSubmit}>
      <label>
        name:</label><br></br>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      
      <label>
      speciality:</label><br></br>
        <input type="text" name="speciality" value={formData.speciality} onChange={handleChange} />
      
      <label>
      number:</label><br></br>
        <input type="text" name="number" value={formData.number} onChange={handleChange} />
      
      <label>
      email:</label><br></br>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      
      <label>
        Upload  Image:</label><br></br>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      
      <button type="submit">Submit</button>
    </form>
  );
}
