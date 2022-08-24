import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const stylesT = {
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
  };

  return (
    <form>
      <div styles={stylesT.row}>
        <label>Name</label>
        <input name="userName" />
      </div>
    </form>
  );
};

export default UserForm;
