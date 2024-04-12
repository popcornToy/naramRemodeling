import React from 'react';

export type FormProps = {
  onSubmit: any;
  children: React.ReactNode;
};

function Form({ onSubmit, children }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <div>{children}</div>
    </form>
  );
}

export default Form;
