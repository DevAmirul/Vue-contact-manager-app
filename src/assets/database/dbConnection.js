import axios from "axios";

export default class dbConnection {
   static url = "http://localhost:9000";

   // get all contact details by id
   static getAllContacts() {
      let dataUrl = `${this.url}/contacts`;
      return axios.get(dataUrl);
      // console.log(data);
   }
   //get single contact details by id
   static getSingleContacts(id) {
      let dataUrl = `${this.url}/contacts/${id}`;
      return axios.get(dataUrl);
   }
   //update single contact by id
   static updateContacts(id) {
      let dataUrl = `${this.url}/contacts/${id}`;
      return axios.put(dataUrl);
   }
   //delete single contact
   static deleteContacts(id) {
      let dataUrl = `${this.url}/contacts/${id}`;
      return axios.delete(dataUrl);
   }
   //create/add new contact
   static createContacts(id) {
      let dataUrl = `${this.url}/contacts`;
      return axios.post(dataUrl);
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

// console.log(dbConnection.getAllContacts());

// async function fun() {
//    const res = await dbConnection.getSingleContacts(1);
//    console.log(res.data.id);
// }

// fun();
