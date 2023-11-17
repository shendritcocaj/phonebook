import React from "react";

const SelectedContact = ({
  contact,
  onDelete,
  onSelection,
  selectedContact,
}) => {
  const isSelected = selectedContact?.id === contact.id;

  const emails = Array.isArray(contact.email) ? (
    <ul>
      {contact.email.map((email, index) => (
        <li key={index}>{email}</li>
      ))}
    </ul>
  ) : (
    contact.email
  );

  const numbers = Array.isArray(contact.number) ? (
    <ul>
      {contact.number.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  ) : (
    contact.number
  );
  return (
    <tr key={contact.id}>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.address}</td>
      <td>{contact.city}</td>
      <td>{contact.country}</td>
      <td>{emails}</td>
      <td>{numbers}</td>

      <td>
        <button
          onClick={() => onSelection(contact)}
          className={isSelected ? "edit-contact close" : "edit-contact"}
        >
          {isSelected ? "Close" : "Edit"}
        </button>{" "}
      </td>
      <td>
        {" "}
        <button onClick={() => onDelete(contact.id)} className="delete-contact">
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default SelectedContact;
