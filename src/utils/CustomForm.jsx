import React, { useState } from "react";
import Lottie from 'react-lottie';
import Modal from "react-bootstrap/Modal";
import animationData from '../assets//37147-contact-us.json';
import _ from "lodash/fp";
import { useForm } from "react-hook-form";






const CustomForm = () => {
  
  const { register, handleSubmit,  errors } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = (data) => {  }; 


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };





  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          name="firstName"
          ref={register({
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {_.get("firstName.type", errors) === "required" && (
          <p>This field is required</p>
        )}
        {_.get("firstName.type", errors) === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {_.get("firstName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Laste Name</label>
        <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
        {_.get("lastName.type", errors) === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Message</label>
        <textarea name="age" type="text" ref={register({ min: 5, max: 99 })} />
        {errors.age && (
          <p>You Must be older then 18 and younger then 99 years old</p>
        )}
        <input   variant="primary" onClick={handleShow} type="submit" />
      </form>



      <Modal show={show} onHide={handleClose}>

        <Modal.Body>
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
        </Modal.Body>

      </Modal>


      {/* modal  end */}
</div>
  );
};

export default CustomForm;
