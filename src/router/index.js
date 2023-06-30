import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import HotelsComponent from "../components/HotelsComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import ServicesComponent from "../components/ServicesComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Menu from "../views/Menu.vue";
import BookingSuccess from "../views/BookingSuccess.vue";
import PaymentSuccess from "../views/PaymentSuccess.vue";
import MenuDashboard from "../components/MenuDashboard.vue";
import MenuProfile from "../components/MenuProfile.vue";
import MenuBookNow1 from "../components/MenuBookNow1.vue";
import MenuBookNow2 from "../components/MenuBookNow2.vue";
import MenuBookNow3 from "../components/MenuBookNow3.vue";
import MenuBookNow4 from "../components/MenuBookNow4.vue";
import MenuBookNow5 from "../components/MenuBookNow5.vue";
import MenuBookNow6 from "../components/MenuBookNow6.vue";
import MenuBookServices from "../components/MenuBookServices.vue";
import MenuBookReview from "../components/MenuBookReview.vue";
import MenuReservation from "../components/MenuReservation.vue";
import MenuPayment from "../components/MenuPayment.vue";
import MenuPaymentNext from "../components/MenuPaymentNext.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingPage,
      children: [
        {
          path: "hotels",
          name: "hotels",
          component: HotelsComponent,
        },
        {
          path: "about",
          name: "about",
          component: AboutComponent,
        },
        {
          path: "services",
          name: "services",
          component: ServicesComponent,
        },
        {
          path: "contact",
          name: "contact",
          component: ContactComponent,
        },
        {
          path: "home",
          name: "home",
          component: HomeComponent,
        },
      ],
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/bookingsuccess",
      name: "bookingsuccess",
      component: BookingSuccess,
    },
    {
      path: "/paymentsuccess",
      name: "paymentsuccess",
      component: PaymentSuccess,
    },

    {
      path: "/menu",
      name: "menu",
      component: Menu,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: MenuDashboard,
        },
        {
          path: "profile",
          name: "profile",
          component: MenuProfile,
        },
        {
          path: "booknow1",
          name: "booknow1",
          component: MenuBookNow1,
        },
        {
          path: "booknow2",
          name: "booknow2",
          component: MenuBookNow2,
        },
        {
          path: "booknow3",
          name: "booknow3",
          component: MenuBookNow3,
        },
        {
          path: "booknow4",
          name: "booknow4",
          component: MenuBookNow4,
        },
        {
          path: "booknow5",
          name: "booknow5",
          component: MenuBookNow5,
        },
        {
          path: "booknow6",
          name: "booknow6",
          component: MenuBookNow6,
        },
        {
          path: "menubookservices",
          name: "menubookservices",
          component: MenuBookServices,
        },
        {
          path: "menubookreview",
          name: "menubookreview",
          component: MenuBookReview,
        },
        {
          path: "menupaymentnext",
          name: "menupaymentnext",
          component: MenuPaymentNext,
        },
        {
          path: "reservation",
          name: "reservation",
          component: MenuReservation,
        },
        {
          path: "payment",
          name: "payment",
          component: MenuPayment,
        },
      ],
    },
  ],
});

export default router;
