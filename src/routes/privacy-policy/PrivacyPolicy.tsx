import React, { useEffect } from "react";
import { Typography } from "../../components/ui";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);

  return (
    <section className="page-width w-full xl:w-10/12 flex flex-col gap-5">
      <Typography
        as="h1"
        variant="xl"
        color="black"
        className="mb-[20px] pt-[120px]"
      >
        Privacy Policy
      </Typography>

      <Typography as="h2" variant="lg" color="black">
        Introduction
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        Welcome to Stream Engine. We are committed to protecting your personal
        information and your right to privacy. If you have any questions or
        concerns about this privacy notice or our practices with regards to your
        personal information, please contact us at info@stream-engine.com.
      </Typography>

      <Typography as="h2" variant="lg" color="black">
        Information We Collect
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        We collect personal information that you voluntarily provide to us when
        registering on the services, expressing an interest in obtaining
        information about us or our products and services, when participating in
        activities on the services, or otherwise contacting us.
      </Typography>

      <Typography as="h2" variant="lg" color="black">
        How We Use Your Information
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        We use personal information collected via our services for a variety of
        business purposes described below. We process your personal information
        for these purposes in reliance on our legitimate business interests, in
        order to enter into or perform a contract with you, with your consent,
        and/or for compliance with our legal obligations. We use the information
        we collect or receive:
      </Typography>
      <ul className="text-gray-700">
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To facilitate account creation and logon process.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To post testimonials.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            Request feedback.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To enable user-to-user communications.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To manage user accounts.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To send administrative information to you.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To protect our services.
          </Typography>
        </li>
        <li className="list-item">
          {" "}
          <Typography as="p" variant="md" className="text-gray-700">
            To enforce our terms, conditions, and policies.
          </Typography>
        </li>
      </ul>

      <Typography as="h2" variant="lg" color="black">
        Sharing Your Information
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        We only share information with your consent, to comply with laws, to
        provide you with services, to protect your rights, or to fulfill
        business obligations.
      </Typography>

      <Typography as="h2" variant="lg" color="black">
        Security of Your Information
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        We aim to protect your personal information through a system of
        organizational and technical security measures.
      </Typography>

      <Typography as="h2" variant="lg" color="black">
        Your Privacy Rights
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        In some regions, such as the European Economic Area, you have rights
        that allow you greater access to and control over your personal
        information. You may review, change, or terminate your account at any
        time.
      </Typography>

      <Typography as="h2" variant="lg" color="black">
        Contact Us
      </Typography>
      <Typography as="p" variant="md" className="text-gray-700">
        If you have questions or comments about this notice, you may email us at
        info@stream-engine.com or by post to:
        <br />
        Stream Engine
        <br />
        Los Angeles, California, EE. UU.
      </Typography>
    </section>
  );
};

export default PrivacyPolicy;
