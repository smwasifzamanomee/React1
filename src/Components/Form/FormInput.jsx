import React, { useState } from "react";
import "../../styles/FormInput.css";

const FormInput = ({
  label,
  placeholder,
  value,
  setValue,
  onBlur,
  onFocus,
  type,
  className,
  Icon,
}) => {

  return (
    <>
      <div className="my-6 md:w-[400px] w-full input_box">
        <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
          type={type}
          className={`input_field w-full outline-none  pt-3  pr-12 border-b-[2px] border-dark focus:border-primary`}
          autoComplete="off"
          required
        />
        <label className={`label_name `}>
          <span className="content_name ">{label}</span>
        </label>
      </div>
    </>
  );
};

export default FormInput;
