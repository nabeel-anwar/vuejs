import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import NotFound from './components/NotFound.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        }, // /teams/t1
      ],
    }, // our-domain.com/teams => TeamsList
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savePosition) {
    console.log(to, from, savePosition); // position is saved when coming back
    if (savePosition) {
      return savePosition;
    }
    return { top: 0, left: 0 };
  },
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
});

const app = createApp(App);

app.use(router);
app.mount('#app');
