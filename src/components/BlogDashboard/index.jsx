import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
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
    formDataWithImage.append('title', formData.title);
    formDataWithImage.append('content', formData.content);
    formDataWithImage.append('date', formData.date);
    formDataWithImage.append('thumbnail', imageFile); // Append the File object
  
    axios
      .post('http://localhost:8080/blogs/add', formDataWithImage)
      .then((res) => console.log(res.data))
      .catch((error) => console.error('Error:', error));
  };
  
  return (
    <form onSubmit={onSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={10} // Set the number of rows to determine the initial height
        ></textarea>
      </label>
      <label>
        Date:
        <DatePicker selected={formData.date} onChange={(date) => setFormData({ ...formData, date })} />
      </label>
      <label>
        Upload Thumbnail Image:
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
