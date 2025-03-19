import React from "react";

function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold">SPS REACT TEST</h1>

      <ul className="flex flex-col gap-2 my-4">
        {localStorage.getItem("jwt") ? null : (
          <li>
            <a className="hover:font-bold" href="/sign-in">
              Página de Login
            </a>
          </li>
        )}
        <li>
          <a className="hover:font-bold" href="/users">
            Página de Usuários
          </a>
        </li>
      </ul>
    </main>
  );
}

export default Home;
