import axios from "axios";

class UserService {
  axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${process.env.REACT_APP_SERVER_URL}/users`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
  }

  async list() {
    const { data: users } = await this.axiosInstance.get("/");
    return users;
  }
  async get(id) {
    const { data: user } = await this.axiosInstance.get(`/${id}`);
    return user;
  }
  async create(data) {
    await this.axiosInstance.post("/", data);
  }
  async delete(id) {
    await this.axiosInstance.delete(`/${id}`);
  }
  async update(id, data) {
    await this.axiosInstance.put(`/${id}`, data);
  }
}

export default UserService;
