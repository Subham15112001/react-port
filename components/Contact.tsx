import Form from "./Form";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" max-h-screen flex flex-col justify-center items-center "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className=" flex flex-col justify-center items-center mb-4  space-y-1"
      >
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          Get in Touch
        </h2>
        <h1 className=" text-xl xl:text-2xl font-bold text-white">Contact</h1>
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          <a href="mailto:subhambehera889377888@gmail.com">My Email , click to contact</a>
        </h2>
      </motion.div>
    </section>
  );
};

export default Contact;
