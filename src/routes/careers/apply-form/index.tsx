import React, { useEffect, useRef, useState } from "react";
import { ContainerAnimation, Typography } from "../../../components/ui";
import { Button, useToast } from "@chakra-ui/react";
import { constants } from "../../../constants";
import {
  ArrowTopRightOnSquareIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { ApplyFormValues } from "../../../lib/types";
import { FileDropzone } from "./FileDropzone";
import emailjs from "@emailjs/browser";
import { Career } from "../../../lib/types";

interface ApplyFormProps {
  selectedJob: Career | null;
}

const initialState: ApplyFormValues = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

const ApplyForm: React.FC<ApplyFormProps> = ({ selectedJob }) => {
  const [formValues, setFormValues] = useState<ApplyFormValues>(initialState);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (selectedJob) {
      setFormValues((prevValues) => ({
        ...prevValues,
        position: selectedJob.jobDescription,
      }));
    }
  }, [selectedJob]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formValues.fullName ||
      !formValues.position ||
      !formValues.email ||
      !formValues.phone ||
      !formValues.message
    ) {
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

  const sendApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      if (form.current) {
        const result = await emailjs.sendForm(
          import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_REACT_APP_EMAILJS_APPLY_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY
        );

        if (result) {
          toast({
            title: "Application sent successfully!.",
            description: "We'll respond shortly.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setFormValues(initialState);
        }
      }
    } catch (error) {
      toast({
        title: "Failed to send application.",
        description: "Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="apply-form"
      className="page-width flex flex-col lg:flex-row justify-start mt-10 lg:mt-20 gap-5"
    >
      <div className="flex flex-col w-full lg:mt-0 justify-between">
        <ContainerAnimation className="flex flex-col">
          <Typography
            as="h2"
            variant="xl"
            color="black"
            className="leading-tight"
          >
            Contact Us
          </Typography>
          <Typography
            as="p"
            variant="md"
            className="leading-tight lg:leading-none text-gray-700"
          >
            Contact us to explore job opportunities, inquire about our services,
            or receive assistance with your job search. We're here to help you
            take the next step in your career.
          </Typography>
        </ContainerAnimation>

        <ContainerAnimation className="lg:flex flex-col gap-1 hidden">
          <Typography as="p" variant="md" className="text-gray-700">
            <a
              className="flex items-center gap-2 underline w-max"
              href="mailto:careers@stream-engine.io"
            >
              careers@stream-engine.io{" "}
              <ArrowTopRightOnSquareIcon className="w-6 h-6" />{" "}
            </a>
          </Typography>
          <div className="flex items-center gap-[5px]">
            {constants.socials.map((social) => (
              <a
                aria-label={`${social.alt}`}
                key={social.id}
                href={social.url}
                target="_blank"
                className="cursor-pointer transition-all hover:scale-125"
              >
                {social.name.toLowerCase() === "linkedin" && (
                  <social.icon className="text-gray-700" />
                )}
                {social.name.toLowerCase() === "instagram" && (
                  <social.icon className="text-gray-700" />
                )}
                {social.name.toLowerCase() === "x" && (
                  <social.icon className="text-gray-700" />
                )}
              </a>
            ))}
          </div>
        </ContainerAnimation>
      </div>
      <ContainerAnimation className="h-full w-full">
        <form
          className="flex flex-col items-center gap-6 w-full mt-10 lg:mt-0"
          ref={form}
          onSubmit={sendApply}
          id="form"
        >
          <div className="grid gap-6 sm:grid-cols-2 w-full">
            <div className="relative z-0">
              <input
                className="peer form-input"
                type="text"
                placeholder=" "
                value={formValues.fullName}
                onChange={handleChange}
                name="fullName"
                aria-label="First Name"
                id="fullName"
                required
              />
              <label className="form-label">Full Name</label>
            </div>
            <div className="relative z-0">
              <select
                className="peer form-select"
                value={formValues.position}
                onChange={handleChange}
                name="position"
                id="position"
                aria-label="Position"
                required
              >
                <option value="" disabled>
                  Position
                </option>
                {constants.careers.map((position) => (
                  <option
                    key={`${position.jobDescription}-opt`}
                    value={position.jobDescription}
                  >
                    {position.jobDescription}
                  </option>
                ))}
              </select>
            </div>

            <div className=" relative z-0">
              <input
                className="peer form-input"
                value={formValues.email}
                onChange={handleChange}
                type="email"
                placeholder=" "
                aria-label="Email"
                name="email"
                id="email"
                required
              />
              <label className="form-label">Email</label>
            </div>
            <div className=" relative z-0">
              <input
                className="peer form-input"
                type="text"
                placeholder=" "
                value={formValues.phone}
                onChange={handleChange}
                name="phone"
                aria-label="Phone"
                id="phone"
                required
              />
              <label className="form-label">Phone</label>
            </div>

            <FileDropzone
              setFormValues={setFormValues}
              formValues={formValues}
            />

            <div className="relative col-span-2 z-0">
              <textarea
                className="peer resize-none h-32 form-input"
                value={formValues.message}
                onChange={handleChange}
                name="message"
                id="message"
                placeholder=" "
                aria-label="Message"
                maxLength={1000}
                required
              />
              <label className="form-label">Tell us about yourself</label>
              <span className="absolute bottom-0 right-0 mb-2 mr-2 text-sm text-gray-500">
                {formValues.message.length}/1000
              </span>
            </div>
            {error && <div className="text-red-500">{error}</div>}

            <Button
              className="mt-5 col-span-2 flex items-center gap-2"
              bg="#F8F603"
              _hover={{ bg: "#F8F603" }}
              type="submit"
              isLoading={isSubmitting}
            >
              Send Apply <PaperAirplaneIcon className="h-7 w-7" />
            </Button>
          </div>
        </form>
      </ContainerAnimation>
    </section>
  );
};

export default ApplyForm;
