import React from "react";
import { motion } from "framer-motion";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactForm = () => {
  return (
    <section className="py-5" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container bg-[#141414] border hover-border border-transparent rounded-[20px] md:px-9 px-5 md:py-10 py-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rajdhani text-[32px] mb-5 text-white font-bold text-center md:text-left"
        >
          GET IN TOUCH
        </motion.h2>

        <motion.form
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Name & Phone */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5"
          >
            <InputField placeholder="Your Name" fieldName="md:w-1/2 w-full" />
            <InputField placeholder="Phone Number" fieldName="md:w-1/2 w-full" />
          </motion.div>

          {/* Email & Subject */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5"
          >
            <InputField placeholder="Your Email" fieldName="md:w-1/2 w-full" />
            <InputField placeholder="Subject" fieldName="md:w-1/2 w-full" />
          </motion.div>

          {/* Message Box */}
          <motion.textarea
            variants={itemVariant}
            rows={3}
            placeholder="Any specific requirements..."
            className="w-full text-[#ffffff]/50 placeholder:text-[#ffffff]/50 rajdhani border-2 border-[#e5e7eb]/10 p-2 rounded-md focus:ring-2 focus:ring-[#ff014f] outline-none mb-5"
          />

          {/* Button */}
          <motion.div variants={itemVariant} className="mt-4">
            <Button className="w-full">Appointment Now</Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
