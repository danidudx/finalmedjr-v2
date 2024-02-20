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
    formDataWithImage.append('thumbnail', imageFile);

    axios
      .post('http://localhost:8080/blogs/add', formDataWithImage)
      .then((res) => {
        console.log(res.data);
        alert('Blog posted successfully!');
        // Clear form fields
        setFormData({
          title: '',
          content: '',
          date: '',
          thumbnail: '',
        });
        // Clear file input
        setImageFile(null);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error posting blog. Please try again.');
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Title:</label><br></br>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <br></br>
      <label>Content:</label><br></br>
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        rows={10}
      ></textarea>
      <br></br>
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
