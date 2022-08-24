import React, { useState, useEffect } from 'react';

const UserForm = () => {
  return (
    <form className="userForm">
      <div className="row">
        <label>Name</label>
        <input name="userName" />
      </div>
    </form>
  );
};

export default UserForm;
