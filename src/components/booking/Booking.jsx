import React, { useState } from "react";
import axios from "axios";
import config from "../../config";
import "./styles.css";

function Booking() {
  const url = config.API_ENDPOINT;
  const formDefaultValues = {
    name: "",
    email: "",
    phone: "",
    info: "",
    files: [],
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleChange = (e) => {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value.trim(),
    }));
  };
  const handleChangeFile = (e) => {
    const target = e.target;

    console.log(target.files);
    for (let file in target.files) {
      if (typeof target.files[file] === "object") {
        formValues.files.push(target.files[file]);
        console.log(formValues);
      }
    }
  };
  console.log(formValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setFormSubmitted(true);
    const data = new FormData();
    for (let file of formValues.files) {
      data.append("files", file);
    }
    data.append("name", formValues.name);
    data.append("email", formValues.email);
    data.append("phone", formValues.phone);
    data.append("info", formValues.info);

    const config = {
      header: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(`${url}/upload`, data, config)
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const bookingForm = (
    <form className="booking-form form-group" onSubmit={handleSubmit}>
      <input
        className="form-control"
        required
        type="text"
        placeholder="name"
        name={"name"}
        onChange={handleChange}
      />
      <input
        className="form-control"
        required
        type="email"
        placeholder="email"
        name={"email"}
        onChange={handleChange}
      />
      <input
        className="form-control"
        required
        type="text"
        placeholder="phone#"
        name={"phone"}
        onChange={handleChange}
      />
      <textarea
        className="form-control"
        required
        type="text"
        placeholder="What's your tattoo idea?"
        name={"info"}
        onChange={handleChange}
      />
      <input
        className="form-control"
        type="file"
        name="file"
        multiple
        onChange={handleChangeFile}
      />
      <input
        id="booking-bttn"
        className="btn btn-primary"
        type="submit"
        className="button"
        value="send"
      ></input>
    </form>
  );

  return (
    <div className="contacts-div text-center mb-3" id="booking">
      <h4 className="contacts-line text-center">booking</h4>
      {formSubmitted ? <h5>We received your inquiry</h5> : bookingForm}
    </div>
  );
}

export default Booking;
