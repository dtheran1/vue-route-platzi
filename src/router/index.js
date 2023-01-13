
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/home',
    //   redirect: '/',
    // },
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: HomeView
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
      children: [
        {
          path: ':chatId',
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

router.beforeEach((to, from) => {
  if (to.path === '/') return { name: 'About' }
  return true
})

export default router;
