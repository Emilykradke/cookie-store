import axios from "axios";

export default {
  // Gets all Documents
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the Document with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  getUsers: function() {
    return axios.get("/api/users")
  },
  createUsers: function(userData) {
    return axios.post("/api/users", userData)
  }
};
