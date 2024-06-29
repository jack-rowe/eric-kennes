"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    // sendEmail(data);
  }

  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2">
          <p className="text-xl mb-8 md:mb-4">
            I would love to hear from you! Whether you have questions about my
            work, are interested in a collaboration, or just want to say hello,
            feel free to reach out.
          </p>
        </div>
        <div className="md:w-1/2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-full p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 "
          >
            <label htmlFor="name" className="text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="p-2 border rounded-lg dark:bg-gray-900 "
              {...register("name", { required: true })}
            />
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@domain.com"
              className="p-2 border rounded-lg dark:bg-gray-900 "
              {...register("email", { required: true })}
            />
            <label htmlFor="message" className="text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Type your message"
              className="p-2 border rounded-lg resize-none dark:bg-gray-900 "
              {...register("message", { required: true })}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-xl bg-gray-900  text-white font-semibold rounded-lg  transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
