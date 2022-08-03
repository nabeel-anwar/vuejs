import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/NotFound.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  // routes: [
  //   // { component: TeamsList }, // default route

  //   { path: '/', redirect: '/teams' },
  //   // { path: '/teams', component: TeamsList, alias: '/' }, with alias
  //   // { path: '/teams', component: TeamsList },
  //   { path: '/users', component: UsersList },
  //   // { path: '/teams/:teamId', component: TeamMember, props: true },
  //   {
  //     path: '/teams',
  //     component: TeamsList,
  //     children: [{ path: ':teamId', component: TeamMember, props: true }],
  //   },
  //   // { path: '/:notFound(.*)', redirect: '/teams' },
  //   { path: '/:notFound(.*)', component: NotFound },
  // ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);
app.mount('#app');
