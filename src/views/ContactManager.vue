<script setup>
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";
//import db connection class.
import dbConnection from "../assets/database/dbConnection.js";

const allContactsData = reactive({ data: [] });
const searchString = ref("");

// get all contacts and if you searching any contact then run this func.
async function getAllContacts(searchString) {
   try {
      const result = await dbConnection.getAllContacts(searchString);
      allContactsData.data = result.data;
   } catch (error) {
      console.log(error);
   }
}
getAllContacts(searchString.value);

//delete single contact func
async function deleteContacts(id) {
   try {
      const result = await dbConnection.deleteContacts(id);
      getAllContacts(searchString.value);
   } catch (error) {
      console.log(error);
   }
}
</script>
<template>
   <div class="container">
      <div class="row mb-3">
         <div class="col d-flex justify-content-center">
            <nav class="navbar bg-transparent">
               <div class="container-fluid">
                  <form class="d-flex bg-transparent" role="search">
                     <!-- search here any contact -->
                     <input
                        @input="getAllContacts(searchString)"
                        v-model="searchString"
                        class="form-control border-success me-2 bg-transparent"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                     />
                     <button @click.prevent class="btn btn-outline-success" type="submit">
                        Search
                     </button>
                  </form>
               </div>
            </nav>
         </div>
         <hr class="mt-3" />
      </div>
      <div class="row justify-content-center">
         <div
            v-for="data in allContactsData.data"
            :key="data.id"
            class="col-5 m-1 p-2 d-flex bg-success bg-opacity-25 rounded-3"
         >
            <div class="col-3 rounded-circle m-auto w-auto">
               <img
                  :src="data.photo"
                  class="img-fluid rounded-circle img-height"
                  alt="..."
               />
            </div>
            <div class="col-6 m-auto">
               <div class="d-flex flex-column">
                  <div class="my-1">
                     <h6 class="text-secondary d-inline">Name:</h6>
                     <p class="card-text d-inline">{{ data.name }}</p>
                  </div>
                  <div class="my-1">
                     <h6 class="text-secondary d-inline">Mobile:</h6>
                     <p class="card-text d-inline">{{ data.phone }}</p>
                  </div>
                  <div class="my-1">
                     <h6 class="text-secondary d-inline">Email:</h6>
                     <p class="card-text d-inline">{{ data.email }}</p>
                  </div>
               </div>
            </div>
            <div class="col-1 d-flex flex-column m-auto">
               <router-link
                  :to="`/View/${data.id}`"
                  class="btn btn-sm btn-success my-1"
                  ><i class="bi bi-eye"></i
               ></router-link>
               <router-link
                  :to="`/Edit/${data.id}`"
                  class="btn btn-sm btn-warning my-1"
                  ><i class="bi bi-pen"></i
               ></router-link>
               <button
                  @click="deleteContacts(data.id)"
                  class="btn btn-sm btn-danger my-1"
               >
                  <i class="bi bi-trash3"></i>
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.img-height {
   height: 80px;
}
</style>
