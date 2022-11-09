<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
//import db connection class.
import dbConnection from "../assets/database/dbConnection.js";

const routeBack = useRouter();
const id = useRoute().params.id;
let singleContactsData = reactive({ data: {} });
let singleGroupData = reactive({ data: {} });

//view details single contacts func
(async function getSingleContacts(id) {
   try {
      const result = await dbConnection.getSingleContacts(id);
      const groupResult = await dbConnection.getSingleGroup(
         result.data.groupId
      );
      singleContactsData.data = result.data;
      singleGroupData.data = groupResult.data;
   } catch (error) {
      console.log(error);
   }
})(id);
</script>
<template>
   <!-- go back button -->
   <div class="container">
      <button @click="routeBack.back()" class="float-end btn btn-success m-2">
         Go Back
      </button>
   </div>
   <!-- go back button end -->
   <div class="container">
      <div class="row mb-3">
         <div class="col">
            <h3>View Contact</h3>
         </div>
         <hr class="mt-3" />
      </div>
      <div class="row">
         <div
            class="col d-flex justify-content-between bg-success bg-opacity-25 p-3 rounded-3"
         >
            <div class="col-6 rounded-circle m-auto w-auto">
               <img
                  :src="singleContactsData.data.photo"
                  class="img-fluid rounded-circle img-height"
                  alt="..."
               />
            </div>
            <div class="col-6 m-auto">
               <div class="d-flex flex-column">
                  <div class="my-2">
                     <h4 class="text-secondary d-inline">Name:</h4>
                     <h4 class="card-text d-inline">
                        {{ singleContactsData.data.name }}
                     </h4>
                  </div>
                  <div class="my-2">
                     <h4 class="text-secondary d-inline">Mobile:</h4>
                     <h4 class="card-text d-inline">
                        {{ singleContactsData.data.phone }}
                     </h4>
                  </div>
                  <div class="my-2">
                     <h4 class="text-secondary d-inline">Email:</h4>
                     <h4 class="card-text d-inline">
                        {{ singleContactsData.data.email }}
                     </h4>
                  </div>
                  <div class="my-2">
                     <h4 class="text-secondary d-inline">Company:</h4>
                     <h4 class="card-text d-inline">
                        {{ singleContactsData.data.company }}
                     </h4>
                  </div>
                  <div class="my-2">
                     <h4 class="text-secondary d-inline">Tittle:</h4>
                     <h4 class="card-text d-inline">
                        {{ singleContactsData.data.title }}
                     </h4>
                  </div>
                  <div class="my-2">
                     <h4 class="text-secondary d-inline">Group:</h4>
                     <h4 class="card-text d-inline">
                        {{ singleGroupData.data.name }}
                     </h4>
                  </div>
               </div>
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
