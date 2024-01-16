// LoginContainer.tsx
import React, { useState, ChangeEvent } from "react";
import LoginPage from "../Pages/LoginPage";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | undefined>(undefined);

  const navigation = useNavigate();

  const nameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const emailHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.toLowerCase());
  };
  const contactHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const numberValue = parseInt(event.target.value, 10);
    setPhone(isNaN(numberValue) ? undefined : numberValue);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    setName("");
    setEmail("");
    setPhone(undefined);

    if (!name || !email || !phone) {
      navigation("/");
    } else {
      navigation("/secondPage");
    }
  };

  return (
    <div>
      <LoginPage
        name={name}
        email={email}
        phone={phone || 0} // Provide a default value if phone is undefined
        onNameChange={nameHandler}
        onEmailChange={emailHandler}
        onContactChange={contactHandler}
        onSubmitHandler={submitHandler}
      />
    </div>
  );
};

export default LoginContainer;
