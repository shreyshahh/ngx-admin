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
    children: [
      {
        title: 'Pending Orders',
        icon: 'clock',
        link: '/alive-e-commerce-main/alive-product-orders-main',
      },
      {
        title: 'Delivered Order',
        icon: 'car',
        link: '/alive-e-commerce-main/alive-delivered-products-main',
      },
    ],
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
        link: '/alive-e-commerce-main/alive-frame-category-main',
      },
      {
        title: 'Glass Categories',
        icon: 'recording',
        link: '/alive-e-commerce-main/alive-glass-category-main',
      },
      {
        title: 'Material Categories',
        icon: 'recording',
        link: '/alive-e-commerce-main/alive-material-category-main',
      },
      {
        title: 'Brand Categories',
        icon: 'recording',
        link: '/alive-e-commerce-main/alive-frame-lens-brand-name-main',
      },
    ],
  },
  {
    title: 'Manage Coupon Codes',
    icon: 'pricetags',
    link: '/alive-e-commerce-main/alive-coupon-code-main',
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
];
