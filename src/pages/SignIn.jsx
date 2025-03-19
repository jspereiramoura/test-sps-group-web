import React from "react";
import SignInService from "../services/SignInService";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    SignInService.doSignIn({
      email: data.get("email"),
      password: data.get("password"),
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <main className="flex flex-col items-center w-full">
      <h1 className="font-bold text-2xl mb-4">Página de Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmitLogin}>
        <SignIn.Input label="E-mail" name="email" type="email" />
        <SignIn.Input label="Senha" name="password" type="password" />
        <SignIn.SubmitButton />
      </form>
    </main>
  );
}

SignIn.Input = ({ label, name, type }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
    </div>
  );
};

SignIn.SubmitButton = () => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
    >
      Entrar
    </button>
  );
};

export default SignIn;
