import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userAge: '40 - 50',
    userGender: 'male',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form submitted : ', formData);
  };

  const handleFormChnge = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="userForm" onSubmit={submitHandler}>
      <div className="row">
        <label>Name</label>
        <input
          name="userName"
          type="text"
          onChange={handleFormChnge}
          value={formData.userName}
        />
      </div>
      <div className="row">
        <label>Email</label>
        <input
          name="userEmail"
          type="text"
          onChange={handleFormChnge}
          value={formData.userEmail}
        />
      </div>
      <div className="row">
        <label>Age</label>
        <select
          name="userAge"
          onChange={handleFormChnge}
          value={formData.userAge}
        >
          <option> 30 - 40 </option>
          <option> 40 - 50 </option>
          <option> Over 50 </option>
        </select>
      </div>

      <div className="row">
        <label>Gender</label>
        <span>
          <input
            name="userGender"
            type="radio"
            onChange={handleFormChnge}
            value="male"
            checked={formData.userGender === 'male'}
          />
          Male
        </span>
        <span>
          <input
            name="userGender"
            type="radio"
            onChange={handleFormChnge}
            value="female"
            checked={formData.userGender === 'female'}
          />
          Female
        </span>
      </div>

      <div className="row">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
