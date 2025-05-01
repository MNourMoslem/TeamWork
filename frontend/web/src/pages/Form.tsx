import React, { useRef } from 'react';

function Form() {
  const inputElement = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputElement.current?.focus(); // Safe access with optional chaining
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default Form;
