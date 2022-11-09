<script setup>
import { useRouter } from "vue-router";
//import edit and add component.i use same component for edit and add page.
import EditAndAddComponent from "../components/EditAndAddComponent.vue";
const routeBack = useRouter();
</script>
<template>
   <!-- go back button -->
   <div class="container">
         <button @click="routeBack.back()" class="float-end btn btn-success m-2">
            Go Back
         </button>
   </div>
   <!-- passing props  -->
   <EditAndAddComponent pageName="addPage" />
</template>
