<script setup >
import { RouterLink } from "vue-router";
</script>
<template>
   <nav class="navbar navbar-dark bg-success mb-3">
      <div class="container-fluid justify-content-around">
         <router-link to="/" class="navbar-brand"
            ><i class="bi bi-person-lines-fill"></i> Vue Contacts Manager</router-link>
         <form class="d-flex" role="search">
            <router-link to="/Add" class="btn btn-success">
               <i class="bi bi-plus-circle"></i> Add New
            </router-link>
         </form>
      </div>
   </nav>
</template>
