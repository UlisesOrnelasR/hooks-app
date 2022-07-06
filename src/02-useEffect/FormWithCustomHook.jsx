import { useState, useEffect } from "react";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    username: "ulise",
    email: "ulfiornelasro@ittepic.edu.mx",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("useEffect called");
  }, []);

  useEffect(() => {
    //console.log("form state changed");
  }, [formState]);

  useEffect(() => {
    //console.log("emailllllchanged");
  }, [email]);

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="ornelas@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "ulises" && <Message />}
    </>
  );
};
