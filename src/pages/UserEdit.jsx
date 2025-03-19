import React, { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";

export async function userLoader({ params }) {
  const service = new UserService();
  const user = await service.get(params.userId);
  return { user };
}

function EditUser() {
  const { current: userService } = useRef(new UserService());
  const { user } = useLoaderData();
  const [name, setName] = useState(user.name);
  const navigate = useNavigate()

  const handleEditUserSubmit = (e) => {
    e.preventDefault();

    userService.update(user.id, {
      name,
    });
    navigate("/users")
  };
  return (
    <div>
      <p>Edição de Usuário</p>
      <div>
        <form onSubmit={handleEditUserSubmit}>
          <label>Nome:</label>
          <input
            className="border"
            type="text"
            value={name}
            onChange={({ target }) => {
              setName(target.value);
            }}
          />
          <br />
          <br />
          <button className="bg-blue-500 text-white rounded p-2" type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
