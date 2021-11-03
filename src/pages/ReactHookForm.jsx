import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); 
    console.log(data);
  };

  return (
    <div className="container">
      <Form style={{ paddingTop: "2rem" }} onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />

          {errors?.firstName?.type === "required" && (
            <p style={{ color: "red" }}> ⚠ This field is required</p>
          )}
          {errors?.firstName?.type === "maxLength" && (
            <p style={{ color: "red" }}>
              ⚠ First name cannot exceed 20 characters
            </p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p style={{ color: "red" }}> ⚠ Alphabetical characters only</p>
          )}
        </Form.Field>
        <Form.Field>
          <label>Laste Name</label>
          <input
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.lastName?.type === "pattern" && (
            <p style={{ color: "red" }}> ⚠ Alphabetical characters only</p>
          )}
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            {...register("age", {
              required: true,
              min: 18,
              max: 99,
              pattern: /^[0-9]+$/i,
            })}
          />
          {errors?.age?.type === "required" && (
            <p style={{ color: "red" }}> ⚠ This field is required</p>
          )}
          {errors?.age && (
            <p style={{ color: "red" }}>
              ⚠ You Must be older then 18 and younger then 99 years old
            </p>
          )}
          {errors?.age?.type === "pattern" && (
            <p style={{ color: "red" }}> ⚠ Alphabetical characters only</p>
          )}
        </Form.Field>
        <Button type="submit" color="green">
          Submit
        </Button>
        <Button type="reset" color="red">
          Reset
        </Button>
      </Form>
    </div>
  );
};

export default ReactHookForm;
