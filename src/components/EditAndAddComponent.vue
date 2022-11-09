<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//import db connection class.
import dbConnection from "../assets/database/dbConnection";

const routePush = useRouter();
let allContactsData = reactive({ data: {} });
let allGroupData = reactive({ data: {} });

//define props
const props = defineProps({
   pageName: {
      type: String,
      required: true,
   },
   id: {
      type: Number,
   },
});
//get all group data fun
(async function getAllGroup(id) {
   try {
      const result = await dbConnection.getAllGroup();
      allGroupData.data = result.data;
   } catch (error) {
      console.log(error);
   }
})();

//checking component call for which class,if edit page call then run if condition.
if (props.pageName == "editPage") {
   //get single data for editing
   (async function getSingleContactsForEdit(id) {
      try {
         const result = await dbConnection.getSingleContacts(id);
         allContactsData.data = result.data;
      } catch (error) {
         console.log(error);
      }
   })(props.id);
}

//add new contact func
async function addNewContact(data) {
   try {
      const result = await dbConnection.addNewContact(data);
      routePush.push("/");
   } catch (error) {
      console.log(error);
   }
}

//update edited data func,if this component call by edit page,then work it.
async function updateData(id) {
   try {
      const result = await dbConnection.updateContacts(
         id,
         allContactsData.data
      );
      routePush.push("/");
   } catch (error) {
      console.log(error);
   }
}
</script>
<template>
   <div class="container">
      <div class="row mb-3">
         <div class="col">
            <h3 v-if="pageName == 'addPage'">Add page</h3>
            <h3 v-if="pageName == 'editPage'">Edit page</h3>
         </div>
         <hr class="mt-3" />
      </div>
      <div class="row">
         <div
            class="col d-flex justify-content-between bg-success bg-opacity-25 p-3"
         >
            <div class="col-6">
               <form>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.name"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Name"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="email"
                        v-model="allContactsData.data.email"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="number"
                        v-model="allContactsData.data.phone"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="phone"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.company"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Company"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.title"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Title"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <select
                        v-model="allContactsData.data.groupId"
                        class="form-select bg-transparent border-dark"
                        aria-label="Default select example"
                        placeholder="select group"
                        required
                     >
                        <option :value="null">Select group</option>
                        <option
                           v-for="group in allGroupData.data"
                           :key="group.id"
                           :value="group.id"
                        >
                           {{ group.name }}
                        </option>
                     </select>
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.photo"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp"
                        placeholder="Paste your image link ....."
                        required
                     />
                  </div>
                  <!-- if this component call by edit page then this button will be show -->
                  <button
                     v-if="pageName == 'editPage'"
                     @click.prevent="updateData(allContactsData.data.id)"
                     type="submit"
                     class="btn btn-success float-end mt-3"
                  >
                     Update Contact
                  </button>
                  <!-- if this component call by add page then this button will be show -->
                  <button
                     v-if="pageName == 'addPage'"
                     @click.prevent="addNewContact(allContactsData.data)"
                     type="submit"
                     class="btn btn-success float-end mt-3"
                  >
                     Save Contact
                  </button>
               </form>
            </div>
            <div class="col-6 rounded-circle m-auto w-auto">
               <img
                  :src="allContactsData.data.photo"
                  alt="Please upload your picture"
                  class="img-fluid rounded-circle img-height"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.img-height {
   height: 250px;
}
</style>
