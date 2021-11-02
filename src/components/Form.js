import React from "react";


const Form = () => {


  const submitForm = (data) => {
    data.preventDefault();
    console.log(data);
  };

  return (
    <div className="Form">
      <div className="form-title">Form Validation</div>
      <div className="wrapper">
        <form onSubmit={submitForm}><button type='submit' /></form>
        
      </div>
    </div>
  );
};

export default Form;
