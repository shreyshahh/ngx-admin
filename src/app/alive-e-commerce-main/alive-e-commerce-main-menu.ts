import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Products',
    icon: 'shopping-cart',
    children: [
      {
        title: 'Upload Product',
        icon: 'upload',
        link: '/alive-e-commerce-main/alive-upload-product-main',
      },
      {
        title: 'Edit Products',
        icon: 'edit-2',
      },
    ],
  },
  {
    title: 'Orders',
    icon: 'gift',
  },
  {
    title: 'Customer Details',
    icon: 'people',
  },
  {
    title: 'Customer Queries',
    icon: 'message-circle',
  },
  {
    title: 'Manage Categories',
    icon: 'keypad',
    children: [
      {
        title: 'Frame Category',
        icon: 'recording',
      },
      {
        title: 'Frame Shape Categories',
        icon: 'recording',
      },
      {
        title: 'Glass Categories',
        icon: 'recording',
      },
      {
        title: 'Frame Material',
        icon: 'recording',
      },
    ],
  },
  {
    title: 'Manage Coupon Codes',
    icon: 'pricetags',
  },
  {
    title: 'Manage Payment Methods',
    icon: 'credit-card',
  },
  {
    title: 'Restrict Pin Codes',
    icon: 'pin',
  },
  {
    title: 'Manage AD Banners',
    icon: 'tv',
    children: [
      {
        title: 'Upload Banners',
        icon: 'upload',
      },
      {
        title: 'Edit Banners',
        icon: 'edit-2',
      },
    ],

  },
  {
    title: 'FAQs',
    icon: 'question-mark-circle',
    children: [
      {
        title: 'Add FAQs',
        icon: 'upload',
      },
      {
        title: 'Edit FAQs',
        icon: 'edit-2',
      },
    ],
  },
  {
    title: 'Logout',
    icon: 'log-out',
    link: '/auth/login',
  },
  //   {
  //     title: 'E-commerce',
  //     icon: 'shopping-cart-outline',
  //     link: '/alive-e-commerce-main/dashboard',
  //     home: true,
  //   },
  //   {
  //     title: 'IoT Dashboard',
  //     icon: 'home-outline',
  //     link: '/alive-e-commerce-main/iot-dashboard',
  //   },
  //   {
  //     title: 'FEATURES',
  //     group: true,
  //   },
  //   {
  //     title: 'Layout',
  //     icon: 'layout-outline',
  //     children: [
  //       {
  //         title: 'Stepper',
  //         link: '/alive-e-commerce-main/layout/stepper',
  //       },
  //       {
  //         title: 'List',
  //         link: '/alive-e-commerce-main/layout/list',
  //       },
  //       {
  //         title: 'Infinite List',
  //         link: '/alive-e-commerce-main/layout/infinite-list',
  //       },
  //       {
  //         title: 'Accordion',
  //         link: '/alive-e-commerce-main/layout/accordion',
  //       },
  //       {
  //         title: 'Tabs',
  //         pathMatch: 'prefix',
  //         link: '/alive-e-commerce-main/layout/tabs',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Forms',
  //     icon: 'edit-2-outline',
  //     children: [
  //       {
  //         title: 'Form Inputs',
  //         link: '/alive-e-commerce-main/forms/inputs',
  //       },
  //       {
  //         title: 'Form Layouts',
  //         link: '/alive-e-commerce-main/forms/layouts',
  //       },
  //       {
  //         title: 'Buttons',
  //         link: '/alive-e-commerce-main/forms/buttons',
  //       },
  //       {
  //         title: 'Datepicker',
  //         link: '/alive-e-commerce-main/forms/datepicker',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'UI Features',
  //     icon: 'keypad-outline',
  //     link: '/alive-e-commerce-main/ui-features',
  //     children: [
  //       {
  //         title: 'Grid',
  //         link: '/alive-e-commerce-main/ui-features/grid',
  //       },
  //       {
  //         title: 'Icons',
  //         link: '/alive-e-commerce-main/ui-features/icons',
  //       },
  //       {
  //         title: 'Typography',
  //         link: '/alive-e-commerce-main/ui-features/typography',
  //       },
  //       {
  //         title: 'Animated Searches',
  //         link: '/alive-e-commerce-main/ui-features/search-fields',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Modal & Overlays',
  //     icon: 'browser-outline',
  //     children: [
  //       {
  //         title: 'Dialog',
  //         link: '/alive-e-commerce-main/modal-overlays/dialog',
  //       },
  //       {
  //         title: 'Window',
  //         link: '/alive-e-commerce-main/modal-overlays/window',
  //       },
  //       {
  //         title: 'Popover',
  //         link: '/alive-e-commerce-main/modal-overlays/popover',
  //       },
  //       {
  //         title: 'Toastr',
  //         link: '/alive-e-commerce-main/modal-overlays/toastr',
  //       },
  //       {
  //         title: 'Tooltip',
  //         link: '/alive-e-commerce-main/modal-overlays/tooltip',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Extra Components',
  //     icon: 'message-circle-outline',
  //     children: [
  //       {
  //         title: 'Calendar',
  //         link: '/alive-e-commerce-main/extra-components/calendar',
  //       },
  //       {
  //         title: 'Progress Bar',
  //         link: '/alive-e-commerce-main/extra-components/progress-bar',
  //       },
  //       {
  //         title: 'Spinner',
  //         link: '/alive-e-commerce-main/extra-components/spinner',
  //       },
  //       {
  //         title: 'Alert',
  //         link: '/alive-e-commerce-main/extra-components/alert',
  //       },
  //       {
  //         title: 'Calendar Kit',
  //         link: '/alive-e-commerce-main/extra-components/calendar-kit',
  //       },
  //       {
  //         title: 'Chat',
  //         link: '/alive-e-commerce-main/extra-components/chat',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Maps',
  //     icon: 'map-outline',
  //     children: [
  //       {
  //         title: 'Google Maps',
  //         link: '/alive-e-commerce-main/maps/gmaps',
  //       },
  //       {
  //         title: 'Leaflet Maps',
  //         link: '/alive-e-commerce-main/maps/leaflet',
  //       },
  //       {
  //         title: 'Bubble Maps',
  //         link: '/alive-e-commerce-main/maps/bubble',
  //       },
  //       {
  //         title: 'Search Maps',
  //         link: '/alive-e-commerce-main/maps/searchmap',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Charts',
  //     icon: 'pie-chart-outline',
  //     children: [
  //       {
  //         title: 'Echarts',
  //         link: '/alive-e-commerce-main/charts/echarts',
  //       },
  //       {
  //         title: 'Charts.js',
  //         link: '/alive-e-commerce-main/charts/chartjs',
  //       },
  //       {
  //         title: 'D3',
  //         link: '/alive-e-commerce-main/charts/d3',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Editors',
  //     icon: 'text-outline',
  //     children: [
  //       {
  //         title: 'TinyMCE',
  //         link: '/alive-e-commerce-main/editors/tinymce',
  //       },
  //       {
  //         title: 'CKEditor',
  //         link: '/alive-e-commerce-main/editors/ckeditor',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Tables & Data',
  //     icon: 'grid-outline',
  //     children: [
  //       {
  //         title: 'Smart Table',
  //         link: '/alive-e-commerce-main/tables/smart-table',
  //       },
  //       {
  //         title: 'Tree Grid',
  //         link: '/alive-e-commerce-main/tables/tree-grid',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Miscellaneous',
  //     icon: 'shuffle-2-outline',
  //     children: [
  //       {
  //         title: '404',
  //         link: '/alive-e-commerce-main/miscellaneous/404',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Auth',
  //     icon: 'lock-outline',
  //     children: [
  //       {
  //         title: 'Login',
  //         link: '/auth/login',
  //       },
  //       {
  //         title: 'Register',
  //         link: '/auth/register',
  //       },
  //       {
  //         title: 'Request Password',
  //         link: '/auth/request-password',
  //       },
  //       {
  //         title: 'Reset Password',
  //         link: '/auth/reset-password',
  //       },
  //     ],
  //   },
];
