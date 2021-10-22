import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/FIlter/Filter";
import { ContactList } from "./components/ContactList/ContactList";
import s from "./App.module.css";
import shortid from "shortid";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? initialState;
  });
  const [filterData, setFilterData] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    contacts.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    )
      ? alert(`${contact.name} witn ${contact.number} is already in Contacts`)
      : setContacts((prevState) => [...prevState, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const changeFilter = (e) => {
    setFilterData(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filterData.toLowerCase()) ||
        contact.number.includes(filterData)
    );
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <span> Total contacts: {contacts.length}</span>

      <ContactForm onSubmit={addContact} />

      <h2 className={s.title}>Contacts</h2>

      <Filter value={filterData} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
