import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleInput(ev) {
    const { value, name } = ev.target;
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          email: prevValue.email,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          lName: value,
          email: prevValue.email,
          fName: prevValue.fName
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          value={contact.fName}
          onChange={handleInput}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleInput}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleInput}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
