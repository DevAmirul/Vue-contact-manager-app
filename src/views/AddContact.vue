<script setup>
import { onBeforeUnmount, onMounted, onUpdated } from "vue";
onBeforeUnmount(() => {
   console.log('this is add page');
})
</script>
<template>
   <div class="container">
      <div class="row mb-3">
         <div class="col">
            <h3>Add Contact</h3>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
               vitae possimus minima obcaecati consequatur odio sunt. Sapiente
               quasi explicabo facere atque laborum. Magnam, inventore!
            </p>
         </div>
         <hr class="mt-3" />
      </div>
      <div class="row">
         <div class="col d-flex justify-content-between bg-success bg-opacity-25 p-3 rounded-3">
            <div class="col-6 ">
               <form>
                  <div class="mt-1">
                     <input
                        type="text"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder="Name"
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="email"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder="Email"
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="number"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder="phone"
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder="Company"
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder=""
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder="Title"
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        class="form-control bg-transparent border-dark"
                        id=""
                        aria-describedby="emailHelp" placeholder="Select group"
                     />
                  </div>

                  <button type="submit" class="btn btn-success float-end mt-3">Save Contact</button>
               </form>
            </div>
            <div class="col-6 rounded-circle m-auto w-auto">
               <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gXPWxo_fQPzvP2TNGFtHzqQiChF6VklO68Fydsig_A69sVnizAMg_bxzCLvFEDMpwI8&usqp=CAU"
                  class="img-fluid rounded-circle img-height"
                  alt="..."
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
