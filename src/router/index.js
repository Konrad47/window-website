import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView";
import OfferView from "../views/OfferView.vue";
import ContactView from "../views/ContactView.vue";
import SingleOfferView from "../views/SingleOfferView.vue";
import OfferPcvView from "../views/OfferPcvView.vue";
import OfferDoorView from "../views/OfferDoorView.vue";
import ServiceView from "../views/ServiceView.vue";
import SinglePcvView from "../views/SinglePcvView.vue";

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
    path: "/stolarka-aluminiowa",
    name: "offer",
    component: OfferView,
  },
  {
    path: "/stolarka-aluminiowa/:routerName",
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
    path: "/stolarka-pcv",
    name: "offerPcv",
    component: OfferPcvView,
  },
  {
    path: "/stolarka-pcv/:routerName",
    name: "singlePcv",
    component: SinglePcvView,
    props: true,
  },
  {
    path: "/drzwi-aluminiowe",
    name: "offerDoor",
    component: OfferDoorView,
  },
  {
    path: "/serwis",
    name: "service",
    component: ServiceView,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
