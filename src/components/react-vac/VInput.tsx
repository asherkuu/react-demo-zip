import React from "react";

import { VInputForm } from "./styled";

const VInput = ({ value, onChange, onKeyPress, onSubmit }) => {
  // console.log("input re-render");
  return (
    <VInputForm onSubmit={onSubmit}>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <button type="submit">ADD</button>
    </VInputForm>
  );
};

export default React.memo(VInput);
