"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        alert('Email sent successfully!');
        reset(); // Reset the form
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col md:flex-row space-y-0 md:space-y-0 md:space-x-6 bg-">
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
            className="flex flex-col space-y-4 w-full p-6 rounded-lg shadow-lg bg-primaryWhite text-primaryGrey"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="p-2 border rounded-lg bg-primaryWhite text-primaryGrey border-primaryGrey focus:outline-primaryGrey focus:outline-none focus:border-transparent"
                {...register("name", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@domain.com"
                className="p-2 border rounded-lg bg-primaryWhite text-primaryGrey border-primaryGrey focus:outline-primaryGrey focus:outline-none focus:border-transparent"
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message"
                className="p-2 border rounded-lg resize-none bg-primaryWhite text-primaryGrey border-primaryGrey focus:outline-primaryGrey focus:outline-none focus:border-transparent"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-xl bg-primaryGrey text-primaryWhite font-semibold rounded-lg transition duration-300"
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