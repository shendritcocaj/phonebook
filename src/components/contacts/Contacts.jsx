import "./contacts.css";
import SelectedContact from "./SelectedContact";

import { useState } from "react";

const Contacts = ({
  showAddContact,
  setShowAddContact,
  contacts,
  onDelete,
  selectedContact,
  onSelection,
  setSelectedContact,
}) => {
  return (
    <>
      <div className={"contact"}>
        <div className="contact-header">
          <p className="contact-name">Contacts </p>
          <button
            onClick={() => {
              setShowAddContact((show) => !show);
              setSelectedContact(false);
            }}
            className={showAddContact ? "add-contact close" : "add-contact"}
          >
            {showAddContact ? "Close" : " Add Contact"}
          </button>
        </div>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last&nbsp;Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, i) => (
              <SelectedContact
                key={i}
                contact={contact}
                onDelete={onDelete}
                onSelection={onSelection}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contacts;
