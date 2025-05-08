import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ginric Alayon",
          from_email: form.email,
          to_email: "gnrccc@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="sm:px-10 px-5 my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 xl:mt-34 mt-12">
          <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Let's talk
          </h3>

          <p className="text-lg text-slate-400 mt-3">
            Need help in your project? Want to work together?
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className=" w-full bg-gray-950 px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-500 text-lg text-white shadow-gray-900 shadow-2xl focus:outline-none"
                placeholder=" e.g Eljien Dela Cruz"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-white">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className=" w-full bg-gray-950 px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-500 text-lg text-white shadow-gray-900 shadow-2xl focus:outline-none"
                placeholder=" e.g eljiendelacruz@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-white">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className=" w-full bg-gray-950 px-5 py-2 min-h-14 rounded-lg placeholder:text-gray-500 text-lg text-white shadow-gray-900 shadow-2xl focus:outline-none"
                placeholder=" e.g Hi, I am interested in your work..."
              />
            </label>
            <button
              className="bg-gray-950 px-5 py-2 min-h-12 rounded-lg shadow-gray-900 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending" : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
