import React from "react";
import { SparklesIcon, PhoneIcon, SupportIcon } from "@heroicons/react/outline";

const supportLinks = [
  {
    name: "Always here for you",
    description:
      "You can always reach us by phone or email. We are always here to help you.",
    icon: PhoneIcon,
  },
  {
    name: "Technical Support",
    description:
      "We provide great technical support to our customers. When explaining how to use our services, we will try to explain it in a way that is easy to understand.",
    icon: SupportIcon,
  },
  {
    name: "Complete solutions",
    description:
      "We provide complete solutions to our customers. We will help you to find the best solution for your needs. You can also contact us for a custom solution.",
    icon: SparklesIcon,
  },
];

const About = () => {
  return (
    <div className="bg-white" id="about">
      {/* Header */}
      <div className="relative pb-32 bg-gradient-to-r from-blue-400 to-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            About us
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
            Get to know about our company and all of the services we provide. We
            focus on building meaningful relationships with our clients and our
            customers.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white shadow-xl rounded-2xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-blue-600 shadow-lg rounded-xl">
                  <link.icon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
