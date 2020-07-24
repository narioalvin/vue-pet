import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import Overview from '../components/Overview.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/signin' },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    props: true,
    meta: { title: 'SignIn - Personal Expense Tracker' },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { title: 'Sign Up - Personal Expense Tracker' },
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview,
    props: true,
    meta: { title: 'Overview - Personal Expense Tracker' },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
