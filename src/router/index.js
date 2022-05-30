import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView";
import OfferView from "../views/OfferView.vue";
import ContactView from "../views/ContactView.vue";
import SingleOfferView from "../views/SingleOfferView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: AboutUsView,
  },
  {
    path: "/offer",
    name: "offer",
    component: OfferView,
  },
  {
    path: "/offer/:id",
    name: "singleOffer",
    component: SingleOfferView,
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
