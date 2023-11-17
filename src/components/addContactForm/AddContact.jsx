import { useState } from "react";
import "./addContact.css";

const AddContact = ({ handleAddContact, setShowAddContact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState([""]);
  const [number, setNumber] = useState([""]);

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

  const handleAddNumber = () => {
    setNumber((prevNumbers) => [...prevNumbers, ""]);
  };

  const handleNumberChange = (index, value) => {
    setNumber((prevNumbers) => {
      const updatedNumbers = [...prevNumbers];
      updatedNumbers[index] = value;
      return updatedNumbers;
    });
  };
  const handleDeleteNumber = (index) => {
    if (number.length > 1) {
      setNumber((prevNumbers) => prevNumbers.filter((_, i) => i !== index));
    }
  };

  const handleAddEmail = () => {
    setEmail((prevEmails) => [...prevEmails, ""]);
  };

  const handleEmailChange = (index, value) => {
    setEmail((prevEmails) => {
      const updatedEmails = [...prevEmails];
      updatedEmails[index] = value;
      return updatedEmails;
    });
  };

  const handleDeleteEmail = (index) => {
    if (email.length > 1) {
      setEmail((prevEmails) => prevEmails.filter((_, i) => i !== index));
    }
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
                  onChange={(e) => handleEmailChange(index, e.target.value)}
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
                onClick={() => handleDeleteEmail(index)}
              >
                {email.length > 1 ? "Delete email" : ""}
              </button>
            </div>
          ))}{" "}
        </div>
        <button
          type="button"
          onClick={handleAddEmail}
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
                  onChange={(e) => handleNumberChange(index, e.target.value)}
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
                onClick={() => handleDeleteNumber(index)}
              >
                {number.length > 1 ? "Delete number" : ""}
              </button>
            </div>
          ))}{" "}
        </div>
        <button
          className="add-num-button"
          type="button"
          onClick={handleAddNumber}
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
