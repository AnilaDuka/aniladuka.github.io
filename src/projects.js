import spimSaaSImageThumbnail from '@/assets/images/spimSaaSThumbnail.svg';
import SpimSaasImage from '@/assets/images/spimSaas.svg';
import spimSaasImage2 from '@/assets/images/spimLogistics.svg';
import digitWebsiteImage from '@/assets/images/digitWebsite.svg';
import digitWebsiteImageThumbnail from '@/assets/images/digitWebsiteThumbnail.svg';
import spimWebsiteImageThumbnail from '@/assets/images/spimWebsiteThumbnail.svg';
import spimWebsiteImage from '@/assets/images/spimWebsite.svg';
import biteCosmeticsImageThumbnail from '@/assets/images/biteCosmeticsThumbnail.svg';
import biteCosmeticsImage from '@/assets/images/biteCosmetics.svg';
import biteCosmetics2 from '@/assets/images/biteCosmetics2.svg';
import biteCosmetics3 from '@/assets/images/biteCosmetics3.svg';
import biteCosmetics4 from '@/assets/images/biteCosmetics4.svg';
import biteCosmetics5 from '@/assets/images/biteCosmetics5.svg';
import biteCosmetics6 from '@/assets/images/biteCosmetics6.svg';
import hmdEcommerceImageThumbnail from '@/assets/images/hmdEcommerceThumbnail.svg';
import hmdEcommerceImage from '@/assets/images/hmdEcommerce.svg';
import hmdEcommerceImage2 from '@/assets/images/hmdEcommerce2.svg';
import cielImageThumbnail from '@/assets/images/cielWebsiteThumbnail.svg';
import cielImage from '@/assets/images/cielWebsite.svg';

export const projects = [
  {
    name: 'Spim SaaS',
    description: `
    In my role working with SPIM SaaS, I developed and enhanced this sophisticated web application platform, particularly within the SPIM Fashion module.

    My role required an understanding of Vue.js and a strong commitment to delivering high-quality software. Through these efforts, I contributed significantly to the platform’s success and the satisfaction of our clients.
  `,
    thumbnail: spimSaaSImageThumbnail,
    images: [SpimSaasImage, spimSaasImage2],
    link: null,
    route: '/spim-saas',
  },
  {
    name: 'DigIT Website',
    description: `
    I independently developed the DigIT website using Vue.js, transforming a detailed UI/UX design into a fully functional, responsive website. The site features a multilingual interface with three languages, powered by Vue i18n for seamless translations. I implemented a fully functional contact form and ensured that the entire site is responsive across various devices.
  `,
    thumbnail: digitWebsiteImageThumbnail,
    image: digitWebsiteImage,
    link: 'digitbusiness.ch',
    route: '/digit-website',
  },
  {
    name: 'Spim Website',
    description: `
    I developed the SPIM website from scratch, transforming the provided UI/UX designs into a high-functioning, responsive website using Vue.js. The site includes a fully operational contact form and adheres to SEO best practices, with carefully crafted meta tags, descriptions, and a sitemap to enhance search engine visibility. The project reflects my ability to translate design into code while ensuring both functionality and optimization for search engines.
  `,
    thumbnail: spimWebsiteImageThumbnail,
    image: spimWebsiteImage,
    link: 'spim.app',
    route: '/spim-website',
  },
  {
    name: 'Bite Cosmetics',
    description: `
    The Bite Cosmetics platform was a university project where I developed a complete web application using HTML, CSS, and JavaScript for the frontend, and PHP with a MySQL database for the backend. The platform requires users to create an account and log in to access the store and view products. All user registrations and product data are stored in a database managed via phpMyAdmin, utilizing XAMPP as the development environment. The application features CRUD functionality, enabling the admin to create, read, update, and delete products. Admin users are automatically redirected to the dashboard upon login, while regular users are directed to the landing page. Additionally, messages sent through the contact form are stored in the database, ensuring comprehensive data management and user interaction.
  `,
    thumbnail: biteCosmeticsImageThumbnail,
    images: [
      biteCosmeticsImage,
      biteCosmetics2,
      biteCosmetics3,
      biteCosmetics4,
      biteCosmetics5,
      biteCosmetics6,
    ],
    link: 'BiteCosmetics',
    route: '/bite-cosmetics',
  },
  {
    name: 'Handmade Dresses E-commerce',
    description: `
    I developed a fully functional e-commerce platform using Shopify, featuring a bilingual interface and dynamic currency adjustment based on the user's location. The platform supports secure payment methods, accommodating various types of payments to enhance user convenience. I was responsible for the design and implementation of the entire site, as well as adding all the products. The result is a robust, user-friendly e-commerce solution that meets the needs of a global audience.
  `,
    thumbnail: hmdEcommerceImageThumbnail,
    images: [hmdEcommerceImage, hmdEcommerceImage2],
    link: 'handmadedresses.no',
    route: '/hmd-ecommerce',
  },
  {
    name: 'Ciel De Beaute Website',
    description: `I developed the Ciel De Beauté website using Vue.js, turning the provided UI/UX design into a fully functional and visually appealing site. The website allows users to add products to their cart and place orders directly through the site. Upon placing an order, users immediately receive a confirmation email that includes details such as the product name and image. The site is designed to provide a seamless shopping experience, ensuring that users can easily browse and purchase products while receiving prompt and detailed order confirmations.
  `,
    thumbnail: cielImageThumbnail,
    image: cielImage,
    link: null,
    route: '/ciel-website',
  },
];
