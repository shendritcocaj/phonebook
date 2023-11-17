import { useState, useEffect } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import AddContact from "./components/addContactForm/AddContact";
import EditContact from "./components/EditContact/EditContact";

function App() {
  const initialContacts = JSON.parse(localStorage.getItem("contacts")) || [
    {
      id: 11881236,
      firstName: "shendrit",
      lastName: "gashi",
      address: "mati1",
      city: "prishtine",
      country: "prishtine",
      email: ["test@gmail.com"],
      number: [66312487],
    },
    {
      id: 11883126,
      firstName: "taulant",
      lastName: "shala",
      address: "bregudilli",
      city: "prishtine",
      country: "prishtine",
      email: ["test@gmail.com"],
      number: [13123487],
    },
    {
      id: 11832836,
      firstName: "agon",
      lastName: "mani",
      address: "dardani",
      city: "prishtine",
      country: "prishtine",
      email: ["test@gmail.com", "test@gmail.com"],
      number: [67812487],
    },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [showAddContact, setShowAddContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function handleSelection(contact) {
    setSelectedContact((cur) => (cur?.id === contact.id ? null : contact));
    setShowAddContact(false);
  }

  function handleAddContact(newContact) {
    setContacts((contacts) => [...contacts, newContact]);
  }

  function handleDeleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }

  function handleEditContact(
    id,
    editedFirstName,
    editedLastName,
    editedAddress,
    editedCity,
    editedCountry,
    editedEmail,
    editedNumber
  ) {
    setContacts((contacts) =>
      contacts.map((contact) =>
        id === contact.id
          ? {
              ...contact,
              firstName: editedFirstName || contact.firstName,
              lastName: editedLastName || contact.lastName,
              address: editedAddress || contact.address,
              city: editedCity || contact.city,
              country: editedCountry || contact.country,
              email: [...contact.email, editedEmail],
              number: [...contact.number, editedNumber],
            }
          : contact
      )
    );

    setSelectedContact(null);
  }

  return (
    <div>
      <Header />

      {selectedContact && (
        <EditContact
          onEdit={handleEditContact}
          selectedContact={selectedContact}
        />
      )}
      {showAddContact && (
        <AddContact
          setShowAddContact={setShowAddContact}
          handleAddContact={handleAddContact}
          setSelectedContact={setSelectedContact}
        />
      )}

      <Contacts
        setShowAddContact={setShowAddContact}
        showAddContact={showAddContact}
        contacts={contacts}
        onDelete={handleDeleteContact}
        onSelection={handleSelection}
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
    </div>
  );
}

export default App;
