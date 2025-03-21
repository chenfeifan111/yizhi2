import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/:catchAll(.*)",
      redirect: "/",
      meta: { showHeaderFooter: true },
    },
    {
      path: "/",
      name: "main",
      component: home,
      meta: { showHeaderFooter: true },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/contactUs",
      name: "contactUs",
      component: () => import("../views/ContactUs.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/cookie",
      name: "cookie",
      component: () => import("../views/Cookie.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/refundPolicy",
      name: "refundPolicy",
      component: () => import("../views/RefundPolicy.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/termsOfService",
      name: "termsOfService",
      component: () => import("../views/TermsOfService.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/privacyPolicy",
      name: "privacyPolicy",
      component: () => import("../views/PrivacyPolicy.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/iosGuidance",
      name: "iosGuidance",
      component: () => import("../views/IosGuidance.vue"),
      meta: { showHeaderFooter: true },
    },
    {
      path: "/playerShare",
      name: "playerShare",
      component: () => import("../views/share/playerShare/index.vue"),
      meta: { showHeaderFooter: false },
    },
    {
      path: "/customerShare",
      name: "customerShare",
      component: () => import("../views/share/customerShare/index.vue"),
      meta: { showHeaderFooter: false },
    },
    {
      path: "/facebookShare",
      name: "facebookShare",
      component: () => import("../views/share/facebookShare/index.vue"),
      meta: { showHeaderFooter: false },
    },
  ],
});

export default router;
