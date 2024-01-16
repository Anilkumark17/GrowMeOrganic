interface LoginProp {
    name: string;
    email: string;
    phone: number;
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onContactChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmitHandler:(event: React.FormEvent<HTMLFormElement>) => void;
  }

  export default LoginProp;