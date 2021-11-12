import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  padding: 1rem 0 auto;
`;

const Input = styled.input`
  width: 50%;
  padding: 6px;
  border-radius: 8px 0 0 8px;
  border: 1px solid black;
`;

const Button = styled.button`
  padding: 6px 24px;
  border-radius: 0 8px 8px 0;
  border: 1px solid black;
`;

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    resetValue: () => setValue(""),
  };
};

export default React.memo(({ dispatch }) => {
  const { resetValue, ...text } = useInputValue("");

  console.log("<Form /> is rendering...");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ text: text.value, type: "ADD_TODO" });
        resetValue();
      }}
    >
      <Input {...text} placeholder="Add todo here" />
      <Button>ADD</Button>
    </Form>
  );
});
