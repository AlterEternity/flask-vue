import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Ping from '@/components/Ping';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
