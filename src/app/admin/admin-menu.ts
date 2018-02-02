import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/admin/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/admin/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/admin/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/admin/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/admin/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/admin/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/admin/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/admin/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/admin/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/admin/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/admin/components/tree',
      }, {
        title: 'Notifications',
        link: '/admin/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/admin/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/admin/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/admin/maps/bubble',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/admin/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/admin/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/admin/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/admin/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/admin/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/admin/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
