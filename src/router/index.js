import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: () => import("../views/ContactManager.vue"),
      },
      {
         path: "/View/:id",
         name: "View",
         component: () => import("../views/ViewContact.vue"),
      },
      {
         path: "/Add",
         name: "Add",
         component: () => import("../views/AddContact.vue"),
      },
      {
         path: "/Edit/:id",
         name: "Edit",
         component: () => import("../views/EditContact.vue"),
      },
   ],
});

export default router
