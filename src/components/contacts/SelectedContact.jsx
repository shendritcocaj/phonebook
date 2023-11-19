import React from "react";

const SelectedContact = ({
  contact,
  onDelete,
  onSelection,
  selectedContact,
  setSelectedContact,
}) => {
  const isSelected = selectedContact?.id === contact.id;

  const handleDelete = () => {
    onDelete(contact.id);
    setSelectedContact(false);
  };

  const renderContactInfo = (contactInfo, isEmail) => {
    return (
      <ul className="ul-number">
        {Array.isArray(contactInfo)
          ? contactInfo.map((group, index) => (
              <li className="ul-number" key={index}>
                {Array.isArray(group) ? (
                  group.map((singleItem, innerIndex) => (
                    <div key={`${index}-${innerIndex}`}>{singleItem}</div>
                  ))
                ) : isEmail ? (
                  group
                    .split(",")
                    .map((singleItem, innerIndex) => (
                      <div key={`${index}-${innerIndex}`}>{singleItem}</div>
                    ))
                ) : (
                  <div key={`${index}`}>{group}</div>
                )}
              </li>
            ))
          : contactInfo.split(",").map((singleItem, index) => (
              <li className="ul-number" key={index}>
                <div>{singleItem}</div>
              </li>
            ))}
      </ul>
    );
  };

  const emails = renderContactInfo(contact.email, true);

  const numbers = renderContactInfo(contact.number, false);

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
        <button onClick={handleDelete} className="delete-contact">
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};

export default SelectedContact;
