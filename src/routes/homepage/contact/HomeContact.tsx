import React, { useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Typography } from "../../../components/ui";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ContainerAnimation } from "../../../components/ui";
import { MapComponent } from "../../../components/shared";
import emailjs from '@emailjs/browser';

const HomeContact: React.FC = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formValues.firstName || !formValues.lastName || !formValues.email || !formValues.message) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      setError("Invalid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const templateParams = {
        from_name: `${formValues.firstName} ${formValues.lastName}`,
        from_email: formValues.email,
        message: formValues.message,
        phone: formValues.phone,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if(response) toast({
        title: 'Message sent successfully!.',
        description: "We'll responde promptly.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

    } catch (error) {
      toast({
        title: 'Failed to send message.',
        description: "Please try again later.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="page-width flex flex-col lg:flex-row justify-start lg:mt-20">
        <div className="flex flex-col w-full lg:mt-0 justify-between">
          <ContainerAnimation className="flex flex-col">
            <Typography as="h2" variant="xl" color="black" className="leading-tight">
              Contact Us
            </Typography>
            <Typography as="p" variant="md" className="text-gray-700">
              Get in touch with us to learn more about our innovative solutions, ask questions, or receive support.
            </Typography>
          </ContainerAnimation>

          <ContainerAnimation className="lg:flex flex-col gap-1 hidden">
            <Typography as="p" variant="md" className="text-gray-700">
              <a
                className="flex items-center gap-2 underline w-max"
                href="mailto:info@stream-engine.io"
              >
                info@stream-engine.io <ArrowTopRightOnSquareIcon className="w-6 h-6" />{" "}
              </a>
            </Typography>
          </ContainerAnimation>
        </div>

        <ContainerAnimation className="w-full h-full">
          <form onSubmit={sendMessage} className="flex flex-col items-center gap-6 w-full mt-10 lg:mt-0">
            <div className="grid gap-6 sm:grid-cols-2 w-full">
              <div className="relative z-0">
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
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
                  value={formValues.lastName}
                  onChange={handleChange}
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Last Name"
                />
                <label className="form-label">Last name</label>
              </div>

              <div className="relative z-0">
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
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
                  value={formValues.phone}
                  onChange={handleChange}
                  className="peer form-input"
                  placeholder=" "
                  aria-label="Phone"
                />
                <label className="form-label">Phone</label>
              </div>

              <div className="relative z-0 col-span-2">
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="peer resize-none h-32 form-input"
                  placeholder=" "
                  aria-label="Your Message"
                ></textarea>
                <label className="form-label">Your message</label>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <Button
                className="mt-5 col-span-2 flex items-center gap-2"
                bg="#F8F603"
                _hover={{ bg: "#F8F603" }}
                type="submit"
                isLoading={isSubmitting}
              >
                Send Message <PaperAirplaneIcon className="h-7 w-7" />
              </Button>
            </div>
          </form>
        </ContainerAnimation>
      </section>
      <section className="page-width mt-5 lg:mt-20">
        <span className="sr-only">Stream Engine Map Location</span>
        <ContainerAnimation className="h-max w-full rounded-xl overflow-hidden shadow-lg">
          <MapComponent
            position={[34.0522, -118.2437]}
            className="xl:h-100 h-50 w-full"
          />
        </ContainerAnimation>
      </section>
    </>
  );
};

export default HomeContact;
