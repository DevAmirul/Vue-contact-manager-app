import axios from "axios";

export default class dbConnection {
   static url = "http://localhost:9000";

   // get all contact and searching contacts
   static getAllContacts(searchString) {
      let dataUrl = `${this.url}/contacts?q=${searchString}`;
      return axios.get(dataUrl);
      // console.log(data);
   }
   //get single contact details by id
   static getSingleContacts(id) {
      let dataUrl = `${this.url}/contacts/${id}`;
      return axios.get(dataUrl);
   }
   //update single contact by id
   static updateContacts(id, data) {
      let dataUrl = `${this.url}/contacts/${id}`;
      return axios.put(dataUrl, data);
   }
   //delete single contact
   static deleteContacts(id) {
      let dataUrl = `${this.url}/contacts/${id}`;
      return axios.delete(dataUrl);
   }
   //create/add new contact
   static addNewContact(data) {
      let dataUrl = `${this.url}/contacts`;
      return axios.post(dataUrl, data);
   }
   //get all group list
   static getAllGroup(id) {
      let dataUrl = `${this.url}/groupId`;
      http: return axios.get(dataUrl);
   }
   //get single group name by id
   static getSingleGroup(id) {
      let dataUrl = `${this.url}/groupId/${id}`;
      return axios.get(dataUrl);
   }
}
