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
    path: "/o-nas",
    name: "aboutUs",
    component: AboutUsView,
  },
  {
    path: "/oferta",
    name: "offer",
    component: OfferView,
  },
  {
    path: "/oferta/:routerName",
    name: "singleOffer",
    component: SingleOfferView,
    props: true,
  },
  {
    path: "/kontakt",
    name: "contact",
    component: ContactView,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
