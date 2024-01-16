import LoginProp from "../Models/User";

const LoginPage: React.FC<LoginProp> = ({
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onContactChange,
  onSubmitHandler,
}) => {
  return (
    <div>
      <form action="" className="login" onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Name of the User"
          className="login-feild"
        />
        <input
          type="number"
          value={phone}
          onChange={onContactChange}
          placeholder="Enter the phone number"
          className="login-feild"
        />
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Enter the email"
          className="login-feild"
        />
        <input type="submit" value="Submit" className="login-submit" />
      </form>
    </div>
  );
};

export default LoginPage;
