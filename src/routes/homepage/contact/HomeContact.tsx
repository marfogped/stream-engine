import React from "react";
import { Button } from "@chakra-ui/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Typography } from "../../../components/ui";

const HomeContact: React.FC = () => {
  const sendMessage = () => {
    // Message logic
  };

  return (
    <section className="page-width flex xs:flex-col sm:flex-col lg:flex-row">
      <div className="flex flex-col gap-2 w-full mt-[80px]">
        <Typography variant="xl" color="black">
          Contact Us
        </Typography>
        <Typography variant="md" className="text-gray-700">
          Get in touch with us to learn more about our innovative solutions, ask
          questions, or receive support.
        </Typography>
      </div>

      <form
        action="POST"
        onSubmit={sendMessage}
        className="flex flex-col items-center gap-6 w-full mt-[40px]"
      >
        <div className="grid gap-6 sm:grid-cols-2 w-full">
          <div className="relative z-0">
            <input
              type="text"
              name="firstName"
              className="peer form-input"
              placeholder=" "
              aria-label="First Name"
            />
            <label className="form-label">First name</label>
          </div>

          <div className="relative z-0">
            <input
              type="text"
              name="lastName"
              className="peer form-input"
              placeholder=" "
              aria-label="Last Name"
            />
            <label className="form-label">Last name</label>
          </div>

          <div className="relative z-0">
            <input
              type="text"
              name="email"
              className="peer form-input"
              placeholder=" "
              aria-label="Email"
            />
            <label className="form-label">Email</label>
          </div>

          <div className="relative z-0">
            <input
              type="text"
              name="phone"
              className="peer form-input"
              placeholder=" "
              aria-label="Phone"
            />
            <label className="form-label">Phone</label>
          </div>

          <div className="relative z-0 col-span-2">
            <textarea
              name="message"
              className="peer resize-none h-32 form-input"
              placeholder=" "
              aria-label="Your Message"
            ></textarea>
            <label className="form-label">Your message</label>
          </div>

          <Button
            className="mt-5 col-span-2 flex items-center gap-2"
            bg="#F8F603"
            _hover={{ bg: "#F8F603" }}
            type="submit"
          >
            Send Message <PaperAirplaneIcon className="h-7 w-7" />
          </Button>
        </div>
      </form>
    </section>
  );
};

export default HomeContact;
