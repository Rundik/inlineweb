import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/editor",
      name: "editor",
      component: () =>
        import(/* webpackChunkName: "editor" */ "./views/Editor.vue")
    }
  ]
});
