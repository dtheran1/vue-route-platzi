
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const stage = import.meta.env.VITE_STAGE

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/home',
    //   redirect: '/',
    // },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404View.vue')
    },
    {
      path: '/:cathAll(.*)',
      redirect: '/404',
      component: () => import('../views/404View.vue')
    },
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: HomeView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/session',
      name: 'Session',
      component: () => import('../views/SessionView.vue'),
      children: [
        {
          path: '',
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue'),
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chats',
      name: 'Chats',
      component: () => import('../views/ChatsView.vue'),
      meta: {
        requireAuth: true,
        roles: ['admin']
      },
      children: [
        {
          path: ':chatId(\\d+)',
          name: 'ChatId',
          component: () => import('../views/ChatView.vue'),
          props: (route) => {
            return {
              chatId: route.params.chatId
            }
          }
        },
      ]
    },
  ]
});

if (stage === 'test') {
  router.addRoute({
    path: '/profile',
    component: () => import('../views/ProfileView.vue'),
    name: 'Profile'
  })
}

// router.beforeEach((to, from) => {
//   if (to.meta?.requireAuth && to.meta?.roles.includes('admin')) {
//     console.log('Requerido', to.path);
//     return { name: 'Session' }
//   }

//   // if (to.path === '/') return { name: 'About' }
//   return true
// })

export default router;
