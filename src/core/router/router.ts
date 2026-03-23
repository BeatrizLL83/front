import { homePage } from '../../pages/home/home-page.js';
import { projectsPage } from '../../pages/projects/projects-page.js';
import { contactPage } from '../../pages/contact/contact-page.js';
import { todoPage } from '../../pages/todo/todo-page.js';

export const routes = [
  {
    path: '/',
    label: 'Inicio',
    component: homePage,
  },
  {
    path: '/projects',
    label: 'Proyectos',
    component: projectsPage,
  },
  {
    path: '/about',
    label: 'Acerca de',
    component: contactPage,
  },
];

//Función de navegación:

export const navigate = (url = '', addHistory = true) => {
  console.log('URL for navigate', url);
  console.log(history.state);

  if (history.state?.url === url) {
    return;
  }

  if (addHistory) {
    history.pushState({ url }, null, url);
  }
  const path = url.split('/').pop() as string;
  const route = routes.find((o) => o.path === '/' + path);

  if (route) {
    route.renderComponent();
  }
};
