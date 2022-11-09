<script setup>
import { useRouter, useRoute } from "vue-router";
//import edit and add component.i use same component for edit and add page.
import EditAndAddComponent from "../components/EditAndAddComponent.vue";

const routeBack = useRouter();
const id = parseInt(useRoute().params.id);
</script>
<template>
   <!-- go back button -->
   <div class="container">
      <button @click="routeBack.back()" class="float-end btn btn-success m-2">
         Go Back
      </button>
   </div>
   <!-- passing props -->
   <EditAndAddComponent pageName="editPage" :id="id" />
</template>
