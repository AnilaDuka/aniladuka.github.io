import spimSaaSImageThumbnail from "@/assets/images/spimSaaSThumbnail.svg";
import SpimSaasImage from "@/assets/images/spimSaas.svg";
import spimSaasImage2 from "@/assets/images/spimLogistics.svg";
import digitWebsiteImage from "@/assets/images/digitWebsite.svg";
import digitWebsiteImageThumbnail from "@/assets/images/digitWebsiteThumbnail.svg";
import spimWebsiteImageThumbnail from "@/assets/images/spimWebsiteThumbnail.svg";
import spimWebsiteImage from "@/assets/images/spimWebsite.svg";
import biteCosmeticsImageThumbnail from "@/assets/images/biteCosmeticsThumbnail.svg";
import biteCosmeticsImage from "@/assets/images/biteCosmetics.svg";
import biteCosmetics2 from "@/assets/images/biteCosmetics2.svg";
import biteCosmetics3 from "@/assets/images/biteCosmetics3.svg";
import biteCosmetics4 from "@/assets/images/biteCosmetics4.svg";
import biteCosmetics5 from "@/assets/images/biteCosmetics5.svg";
import biteCosmetics6 from "@/assets/images/biteCosmetics6.svg";
import hmdEcommerceImageThumbnail from "@/assets/images/hmdEcommerceThumbnail.svg";
import hmdEcommerceImage from "@/assets/images/hmdEcommerce.svg";
import hmdEcommerceImage2 from "@/assets/images/hmdEcommerce2.svg";
import cielImageThumbnail from "@/assets/images/cielWebsiteThumbnail.svg";
import cielImage from "@/assets/images/cielWebsite.svg";
import airbnbImageThumbnail from "@/assets/images/airbnbImageThumbnail.svg";
import airbnbImage from "@/assets/images/airbnbImage.svg";
import layoffsImageThumbnail from "@/assets/images/layoffsImageThumbnail.svg";
import layoffsImage from "@/assets/images/layoffsImage.svg";
import cryptoAnalyzerThumbnail from "@/assets/images/cryptoAnalyzerThumbnail.svg";
import cryptoAnalyzer from "@/assets/images/cryptoAnalyzer.svg"

export const projects = [
    {
    slug: "crypto-analyzer",
    name: "Automating Crypto API Analyzer",
    description: `
    Crypto Trend Analyzer is a Python-based project designed to collect, store, and visualize real-time cryptocurrency performance data using the CoinMarketCap API. The tool retrieves live data for the top 15 cryptocurrencies, including percent changes over multiple timeframes such as 1 hour, 24 hours, 7 days, 30 days, 60 days, and 90 days. It automatically stores historical data in a CSV file, making it easy to track and analyze trends over time. Built with Python and developed in Jupyter Notebook, the project leverages libraries such as Pandas, Seaborn, and Matplotlib to handle data manipulation and create polished trend visualizations.
  `,
    thumbnail: cryptoAnalyzerThumbnail,
    images: cryptoAnalyzer,
    link: "https://github.com/AnilaDuka/Automating-Crypto-API-Analyzer",
  },
  {
    slug: "airbnb-dashboard",
    name: "Airbnb Dashboard",
    description: `
    This project is a Tableau dashboard designed to analyze Airbnb data, focusing on uncovering key insights related to pricing, revenue trends, and bedroom distribution across various zip codes. The visualizations provide a comprehensive view of factors influencing the Airbnb market, allowing users to explore the patterns in pricing and revenue across different locations and property types. By utilizing Tableau's advanced features, I aimed to help businesses and analysts gain actionable insights for better decision-making.
  `,
    thumbnail: airbnbImageThumbnail,
    images: airbnbImage,
    link: "https://public.tableau.com/app/profile/anila.duka/viz/Airbnb_17421454662190/Dashboard1?publish=yes",
  },
  {
    slug: "layoffs-analysis",
    name: "Layoffs Data Analysis",
    description: `
    In this project, I focused on cleaning and analyzing a dataset containing company layoffs using MySQL. The process involved various data cleaning steps such as removing duplicates, standardizing fields (company, industry, country), converting date formats, and handling missing values. I then performed exploratory data analysis (EDA) to uncover meaningful insights, such as trends in layoffs over time, top companies with the highest layoffs by year, and other industry-specific patterns. The project offers a comprehensive look into the dynamics of layoffs across different companies and industries.
  `,
    thumbnail: layoffsImageThumbnail,
    images: layoffsImage,
    link: "https://github.com/AnilaDuka/WorldLayoffs",
  },
  {
    slug: "spim-saas",
    name: "Spim SaaS",
    description: `
    In my role working with SPIM SaaS, I developed and enhanced this sophisticated web application platform, particularly within the SPIM Fashion module.

    My role required an understanding of Vue.js and a strong commitment to delivering high-quality software. Through these efforts, I contributed significantly to the platform’s success and the satisfaction of our clients.
  `,
    thumbnail: spimSaaSImageThumbnail,
    images: [SpimSaasImage, spimSaasImage2],
    link: null,
  },
  {
    slug: "bite-cosmetics",
    name: "Bite Cosmetics",
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
    link: "https://github.com/AnilaDuka/BiteCosmetics",
  },
  {
    slug: "hmd-ecommerce",
    name: "Handmade Dresses E-commerce",
    description: `
    I developed a fully functional e-commerce platform using Shopify, featuring a bilingual interface and dynamic currency adjustment based on the user's location. The platform supports secure payment methods, accommodating various types of payments to enhance user convenience. I was responsible for the design and implementation of the entire site, as well as adding all the products. The result is a robust, user-friendly e-commerce solution that meets the needs of a global audience.
  `,
    thumbnail: hmdEcommerceImageThumbnail,
    images: [hmdEcommerceImage, hmdEcommerceImage2],
    link: "https://handmadedresses.no/",
  },
  {
    slug: "digit-website",
    name: "DigIT Website",
    description: `
    I independently developed the DigIT website using Vue.js, transforming a detailed UI/UX design into a fully functional, responsive website. The site features a multilingual interface with three languages, powered by Vue i18n for seamless translations. I implemented a fully functional contact form and ensured that the entire site is responsive across various devices.
  `,
    thumbnail: digitWebsiteImageThumbnail,
    images: digitWebsiteImage,
    link: "https://www.digitbusiness.ch/",
  },
  {
    slug: "spim-website",
    name: "Spim Website",
    description: `
    I developed the SPIM website from scratch, transforming the provided UI/UX designs into a high-functioning, responsive website using Vue.js. The site includes a fully operational contact form and adheres to SEO best practices, with carefully crafted meta tags, descriptions, and a sitemap to enhance search engine visibility. The project reflects my ability to translate design into code while ensuring both functionality and optimization for search engines.
  `,
    thumbnail: spimWebsiteImageThumbnail,
    images: spimWebsiteImage,
    link: "https://www.spim.app/",
  },
  {
    slug: "ciel-website",
    name: "Ciel De Beaute Website",
    description: `I developed the Ciel De Beauté website using Vue.js, turning the provided UI/UX design into a fully functional and visually appealing site. The website allows users to add products to their cart and place orders directly through the site. Upon placing an order, users immediately receive a confirmation email that includes details such as the product name and image. The site is designed to provide a seamless shopping experience, ensuring that users can easily browse and purchase products while receiving prompt and detailed order confirmations.
  `,
    thumbnail: cielImageThumbnail,
    images: cielImage,
    link: "https://www.ciel-debeaute.com/",
  },
];
