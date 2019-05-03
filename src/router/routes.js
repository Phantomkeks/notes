
const routes = [
  {
    path: '/',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: 'settings/:tab?', component: () => import('pages/Settings.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/NotesLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Notes.vue') },
      { path: 'notes', component: () => import('pages/Notes.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/TrashLayout.vue'),
    children: [
      { path: 'trash', component: () => import('pages/Trash.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/DetailLayout.vue'),
    children: [
      { path: 'notes/detail/:id?', component: () => import('pages/NoteDetail.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/DetailTrashLayout.vue'),
    children: [
      { path: 'deletedNotes/detail/:id?', component: () => import('pages/TrashDetail.vue') }
    ]
  },
  {
    path: '/error',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/access_token*',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      { path: '/:access', component: () => import('pages/Auth.vue') }
    ]
  }
]

export default routes
