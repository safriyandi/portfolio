import portfolioImg01 from "../images/simdes.png";
import portfolioImg02 from "../images/mitrabumdes.png";
import portfolioImg03 from "../images/appspyd.png";
import portfolioImg04 from "../images/paybis.png";
import portfolioImg05 from "../images/EIS.png";
import portfolioImg06 from "../images/webdesa.png";
import portfolioImg07 from "../images/msig.png";
import portfolioImg08 from "../images/aaji.png";
// import portfolioImg06 from "../images/portfolio-06.jpg";
// import portfolioImg07 from "../images/portfolio-07.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Product Manager",
    title: "Simpeldesa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React Native", "Bootstrap css", "PHP DJango", "MongoDB"],
    siteUrl: "https://medium.com/@safriyandi932/nurturing-products-a-product-managers-tale-24bfb560fc51",
   
  },
  {
    id: "02",
    imgUrl: portfolioImg05,
    category: "QA Engineer",
    title: "EIS",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://medium.com/@safriyandi932/navigating-quality-a-freelance-qa-testers-55748be9b044",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Product Manager",
    title: "Mitra Bumdes by Simpeldesa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Flutter", "Tailwind css", "PHP Django", "MongoDB"],
    siteUrl: "https://medium.com/@safriyandi932/nurturing-products-a-product-managers-tale-24bfb560fc51",
  },
  {
    id: "04",
    imgUrl: portfolioImg06,
    category: "Product Manager",
    title: "Website Desa",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://medium.com/@safriyandi932/crafting-digital-horizons-a-continuing-journey-as-a-product-manager-6ad8e883ea52",
  },
  {
    id: "05",
    imgUrl: portfolioImg07,
    category: "QA Engineer",
    title: "MSIG Life",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://medium.com/@safriyandi932/my-journey-as-a-qa-automation-engineer-at-msig-life-5162be299bfa",
  },

  {
    id: "06",
    imgUrl: portfolioImg08,
    category: "QA Engineer",
    title: "Automation License Download",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://medium.com/@safriyandi932/automating-license-downloads-from-aaji-license-with-katalon-studio-99a23aafb78d",
  },
  // {
  //   id: "07",
  //   imgUrl: portfolioImg07,
  //   category: "Web Design",
  //   title: "Appointment Booking Website",
  //   description:
  //     `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
  //       temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
  //       animi doloribus saepe!`,
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "08",
  //   imgUrl: portfolioImg01,
  //   category: "Web Design",
  //   title: "Finance Technology Website",
  //   description:
  //     `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  //     Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
  //     temporibus dignissimos atque repellendus amet a velit. Dolorem 
  //     quidem animi doloribus saepe!`,
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "09",
  //   imgUrl: portfolioImg02,
  //   category: "Product Manager",
  //   title: "Mitra Bumdes by Simpeldesa",
  //   description:
  //     `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  //     Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque 
  //     repellendus amet a velit. Dolorem quidem animi doloribus saepe!`,
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  {
    id: "10",
    imgUrl: portfolioImg03,
    category: "QA Engineer",
    title: "Paydia Wallet",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim,
       temporibus dignissimos atque repellendus amet a velit. Dolorem 
       quidem animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "PHP", "MySQLDB"],
    siteUrl: "https://medium.com/@safriyandi932/elevating-quality-journey-as-a-qa-engineer-at-paydia-indonesia-d23f0de8bc2e",
  },
  {
    id: "11",
    imgUrl: portfolioImg04,
    category: "QA Engineer",
    title: "Paydia Bisnis",
    description:
      `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, 
      temporibus dignissimos atque repellendus amet a velit. Dolorem quidem 
      animi doloribus saepe!`,
    technologies: ["React", "Tailwind css", "PHP & Node", "MySQLDB"],
    siteUrl: "https://medium.com/@safriyandi932/elevating-quality-journey-as-a-qa-engineer-at-paydia-indonesia-d23f0de8bc2e",
  },
  // {
  //   id: "12",
  //   imgUrl: portfolioImg05,
  //   category: "Web Design",
  //   title: "Landing Page",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "13",
  //   imgUrl: portfolioImg06,
  //   category: "Web Design",
  //   title: "Online Therapy Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
  // {
  //   id: "14",
  //   imgUrl: portfolioImg07,
  //   category: "ux",
  //   title: "Appointment Booking Website",
  //   description:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
  //   technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
  //   siteUrl: "#",
  // },
];

export default portfolios;
