import React, { useState } from 'react';
import AddPostView from './AddPostView';
import AddPostModel from './AddPostModel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPostController = () => {
  const navigate = useNavigate();

  const model = new AddPostModel();

  const [form, setForm] = useState(model.state);

  // Inputların Onchanglerini ele alma
  const onInputChange = (label, value) => {
    var newInputState = { ...form };
    newInputState[label] = value;

    setForm(newInputState);
  };

  // form onaylandığında
  const handleSubmit = (e) => {
    e.preventDefault();

    // Yalnızca harfler
    var letters = /^[A-Za-z]+$/;

    // formların doluluğunu kontrol etme
    if (!form.title || !form.user || !form.text) {
      alert('Formu Doldurun');
      return;
    } else if (!form.title.match(letters)) {
      alert('Başlıkta sayı kullanamazsınız');
      return;
    }
    // eğer hepsi doluysa gönderme
    axios.post('http://localhost:3060/post', form).then((res) => navigate('/'));
  };

  return (
    <AddPostView onInputChange={onInputChange} handleSubmit={handleSubmit} />
  );
};

export default AddPostController;