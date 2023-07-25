  import { createRouter, createWebHistory } from "vue-router";
  
  const routes = [
    {
      path: "",
      component: () => import("@/pages/MainPage.vue"),
    },
    {
      path: "/BenefitFinderPage",
      component: () => import("@/pages/BenefitFinderPage.vue"),
    },
    {
      path: "/SearchResultPage",
      component: () => import("@/pages/SearchResultPage.vue"),
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
