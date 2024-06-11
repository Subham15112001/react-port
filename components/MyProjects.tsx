import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const data = [
  {
    img: "/bloggpage.png",
    desc: "BlogPage is a comprehensive, user-friendly web application . This platform allows users to create, manage, and share their blogs",
    title: "BloggPage website ",
    tools: ["react.js", "redux", "appwrite", "tailwindcss","react router"],
    gitLink: "https://github.com/Subham15112001/Blogging_webpage",
    liveLink: "https://blogging-webpage-vs5s.vercel.app/",
  },
  {
    img: "/shopPage.png",
    desc: "A shopping page built using react.js and appwrite. The application use fakestore api to get items, it has many features like user authentication , using redux to keep track of user basket also store it in appwrite and calculate total price simultaneously",
    title: "Shopping page",
    tools: ["react.js", "appwrite", "Tailwind.css", "redux","react router"],
    gitLink: "https://github.com/Subham15112001/shopping_cart",
    liveLink: "https://shopping-cart-nine-teal.vercel.app/",
  },
  {
    img: "/youtube_crud.png",
    desc: "it is an Api for platform like youtube for crud operation ,it has user,video,subscription,like and playlist models",
    title: "youtube crud operation backend",
    tools: ["express", "mongo DB", "mongoose","cloudinary","node js"],
    gitLink: "https://github.com/Subham15112001/backend-proff",
    liveLink: "https://github.com/Subham15112001/backend-proff",
  },

];

const MyProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.5,
        duration: 0.7,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=" flex max-lg:flex-col justify-between max-lg:items-center max-lg:justify-center max-lg:space-y-5 w-full lg:space-x-5"
    >
      {data.map((project, index) => (
        <motion.div key={index} variants={childVariants}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MyProjects;
