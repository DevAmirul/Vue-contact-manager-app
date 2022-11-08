<script setup>
import { reactive, ref } from "vue";
import { useRoute, useRouter, RouterLink } from "vue-router";
import dbConnection from "../assets/database/dbConnection.js";
const route = ref(useRoute());
const route1 = ref(useRouter());
const id = ref(route.value.params.id);
let singleContactsData = reactive({ data: {} });
let singleGroupData = reactive({ data: {} });

async function getSingleContacts(id) {
   const result = await dbConnection.getSingleContacts(id);
   const groupResult = await dbConnection.getSingleGroup(result.data.id);
   singleContactsData.data = result.data;
   singleGroupData.data = groupResult.data;
}
getSingleContacts(id.value);
</script>
<template>
   <div class="container">
      <div class="row mb-3">
         <div class="col">
            <h3>View Contact</h3>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
               vitae possimus minima obcaecati consequatur odio sunt. Sapiente
               quasi explicabo facere atque laborum. Magnam, inventore!
            </p>
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
                  <div>
                     <button
                        @click="route1.back()" class="btn btn-success m-2" > Go Back </button>

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
