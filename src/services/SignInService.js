import axios from "axios";

class SignInService {
  static async doSignIn({ email, password, onSuccess }) {
    try {
      const {
        data: { token },
      } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("jwt", token);
      alert("Autenticação bem sucedida")
      onSuccess();
    } catch (error) {
      const errorMessage = error.response.data.error;
      alert(`Erro: ${errorMessage}`);
    }
  }
}

export default SignInService;
