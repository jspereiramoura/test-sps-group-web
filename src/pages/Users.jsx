import React, { useEffect, useRef, useState } from "react";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

function Users() {
  const { current: userService } = useRef(new UserService());
  const [users, setUsers] = useState([]);

  const handlerNewUserSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    userService
      .create({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        type: data.get("type"),
      })
      .then(() => {
        userService.list().then((users) => {
          setUsers(users);
        });
      });
  };

  useEffect(() => {
    userService.list().then((users) => {
      setUsers(users);
    });
  }, [userService]);

  return (
    <main>
      <h1 className="font-bold text-2xl">Usuários</h1>
      <h2 className="font-bold text-xl text-gray-600">
        Cadastrar Novo Usuário
      </h2>
      <form onSubmit={handlerNewUserSubmit} className="flex flex-col p-4 gap-2">
        <input
          className="border p-2 rounded"
          type="text"
          name="name"
          placeholder="Nome do Usuário"
        />
        <input
          className="border p-2 rounded"
          type="email"
          name="email"
          placeholder="email@usuario.com"
        />
        <input
          className="border p-2 rounded"
          type="text"
          name="type"
          placeholder="Tipo do usuário"
        />
        <input
          className="border p-2 rounded"
          type="password"
          name="password"
          placeholder="Senha"
        />
        <button
          type="submit"
          className="p-2 rounded bg-blue-500 text-white hover:cursor-pointer"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-xl text-gray-600">
        Lista de Usuários Cadastrados
      </h2>
      <ul>
        {users.map((user) => (
          <li className="flex gap-2">
            <p>{user.name}</p>
            <Link
              className="text-blue-500 hover:text-blue-800 hover:font-bold"
              to={`/users/${user.id}`}
            >
              editar
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Users;
