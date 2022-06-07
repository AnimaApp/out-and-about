import Vue from "vue";
import Router from "vue-router";
import OutAndAbout from "./components/OutAndAbout";
import { outAndAboutData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: OutAndAbout,
      props: { ...outAndAboutData },
    },
  ],
});
