import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      src={contact.imgSrc}
      number={contact.tel}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>{contacts.map(createCard)}</div>

    /*<div>
      <Card
        name={contacts[0].name}
        number={contacts[0].tel}
        email={contacts[0].email}
        src={contacts[0].imgSrc}
      />
      <Card
        name={contacts[1].name}
        number={contacts[1].tel}
        email={contacts[1].email}
        src={contacts[1].imgSrc}
      />
      <Card
        name={contacts[2].name}
        number={contacts[2].tel}
        email={contacts[2].email}
        src={contacts[2].imgSrc}
      />
      <Card
        name={contacts[3].name}
        number={contacts[3].tel}
        email={contacts[3].email}
        src={contacts[3].imgSrc}
      />
    </div>*/
  );
}

export default App;
