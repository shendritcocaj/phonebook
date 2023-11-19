import React, { useState } from "react";
import "./addContact.css";

const AddContact = ({ handleAddContact, setShowAddContact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState([""]);
  const [number, setNumber] = useState([""]);

  const handleInputChange = (type, index, value, setState) => {
    setState((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const handleAddItem = (type) => {
    if (type === "email") {
      setEmail((prevEmails) => [...prevEmails, ""]);
    } else if (type === "number") {
      setNumber((prevNumbers) => [...prevNumbers, ""]);
    }
  };

  const handleDeleteItem = (type, index) => {
    if (type === "email") {
      handleDelete(index, index === email.length - 1, setEmail);
    } else if (type === "number") {
      handleDelete(index, index === number.length - 1, setNumber);
    }
  };

  const handleDelete = (index, isLast, setState) => {
    setState((prevValues) => {
      if (prevValues.length > 1) {
        if (isLast) {
          return prevValues.map((value, i) => (i === index ? "" : value));
        } else {
          return prevValues.filter((_, i) => i !== index);
        }
      } else {
        return prevValues.map((value, i) => (i === index ? "" : value));
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !country ||
      !email.every((email) => email.trim() !== "") ||
      !number.every((number) => number.trim() !== "")
    )
      return;

    const newContact = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      address,
      city,
      country,
      email: email.filter((email) => email.trim() !== ""),
      number: number.filter((number) => number.trim() !== ""),
    };
    handleAddContact(newContact);

    setShowAddContact(false);
  };

  return (
    <div className="addContact">
      <div className="register">Register New Contact</div>

      <form className="form-add-contact">
        <label>Name:</label>
        <input
          type="text"
          min={1}
          max={1000}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter the name"
          required={true}
        />
        <label>Last Name:</label>
        <input
          type="text"
          min={1}
          max={1000}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter Last Name"
          required={true}
        />
        <label>Address:</label>
        <input
          type="text"
          min={1}
          max={31}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
          required={true}
        />
        <label>City:</label>
        <input
          type="text"
          min={1}
          max={31}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          required={true}
        />
        <label>Country:</label>
        <input
          type="text"
          min={1}
          max={31}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Enter Country"
          required={true}
        />

        <label>Email:</label>
        <div className="add-email">
          {email.map((email, index) => (
            <div key={index}>
              {" "}
              <div className="numbers">
                <input
                  key={index}
                  className="numbers-input"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    handleInputChange("email", index, e.target.value, setEmail)
                  }
                  placeholder={`Enter Email ${index + 1}`}
                  required={true}
                />
              </div>{" "}
              <button
                className={
                  email.length > 1
                    ? "delete-email-input"
                    : "delete-email-input hidden"
                }
                type="button"
                onClick={() => handleDeleteItem("email", index)}
              >
                {email.length > 1 ? "Delete email" : ""}
              </button>
            </div>
          ))}{" "}
        </div>
        <button
          type="button"
          onClick={() => handleAddItem("email")}
          className="add-email-button"
        >
          Add email
        </button>

        <label>Number:</label>
        <div className="add-number">
          {number.map((number, index) => (
            <div key={index}>
              <div className="numbers">
                <input
                  key={index}
                  className="numbers-input"
                  type="number"
                  value={number}
                  onChange={(e) =>
                    handleInputChange(
                      "number",
                      index,
                      e.target.value,
                      setNumber
                    )
                  }
                  placeholder={`Enter Number ${index + 1}`}
                  required={true}
                />
              </div>{" "}
              <button
                className={
                  number.length > 1
                    ? "delete-number-input"
                    : "delete-number-input hidden"
                }
                type="button"
                onClick={() => handleDeleteItem("number", index)}
              >
                {number.length > 1 ? "Delete number" : ""}
              </button>
            </div>
          ))}{" "}
        </div>
        <button
          className="add-num-button"
          type="button"
          onClick={() => handleAddItem("number")}
        >
          Add Number
        </button>

        <button onClick={handleSubmit} type="button" className="save-contact">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddContact;
