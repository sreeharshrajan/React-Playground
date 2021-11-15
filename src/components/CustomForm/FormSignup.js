import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>
          Get started with us today! <br />
          Create your account by filling out the information below.
        </h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-input"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            placeholder="Enter your Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-input"
            name="password"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="confirmPassword" className="form-label">
            Confrim Password
          </label>
          <input
            type="text"
            className="form-input"
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="form-input-btn">
          Sign Up
        </button>
        <span className="form-input-login">
          Already have an account? Loginhere.
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
