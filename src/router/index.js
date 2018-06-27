import Vue from 'vue';
import Router from 'vue-router';
import TendermintMonitoring from '@/components/TendermintMonitoring';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:app',
      name: 'tendermint-monitoring',
      component: TendermintMonitoring,
      props: true,
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
  ],
});
