import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',

    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'main-page',
        meta: {
          title: 'Main Page',
        },
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/account-book',

    component: () => import('layouts/accountBook/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'account-main-page',
        meta: {
          title: 'Account Main Page',
        },
        component: () => import('pages/accountBook/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/test',
    meta: {
      title: 'title',
    },
    component: () => import('layouts/TestLayout.vue'),
    children: [{ path: '', component: () => import('pages/TestPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
