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
  // Deletes the Document with the given id
  deleteDocument: function(id) {
    return axios.delete("/api/collectionName/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/collectionName", bookData);
  }
};
