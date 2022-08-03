import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  GlobeIcon,
  PencilAltIcon,
  PencilIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "E-commerce services",
    description:
      "We provide all types of services to help you to manage your e-commerce business.",
    icon: InboxIcon,
  },
  {
    name: "Experts Advice",
    description:
      "Our team of experts will give you the best advice for your brand. At no extra charges",
    icon: UsersIcon,
  },
  {
    name: "Corporate training",
    description:
      "We provide corporate training services so that you can level-up your team in-house.",
    icon: PencilIcon,
  },
  {
    name: "Content writing",
    description:
      "We provide complete services to make your content writing projects or blogs to go the next level.",
    icon: PencilAltIcon,
  },
  {
    name: "Growth Hacking",
    description:
      "We promise that after working with us your brand will grow towards the sky.",
    icon: DocumentReportIcon,
  },
  {
    name: "Web development",
    description:
      "We provide all kinds of web development services. From simple websites to complex web applications, we build them all.",
    icon: GlobeIcon,
  },
  {
    name: "Social media marketing",
    description:
      "We provide marketing solutions for all social media platforms.",
    icon: ChatAltIcon,
  },
  {
    name: "Connect with Customers",
    description:
      "We help you to connect with your customers and help them build better relationships with you.",
    icon: HeartIcon,
  },
];
const Services = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-blue-700" id="services">
        <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Services that we offer
          </h2>
          <p className="max-w-3xl mt-4 text-lg text-purple-200">
            Our customer leave everything to us, because we provide all-in-one
            solutions to all of your digital needs,
          </p>
          <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                    <feature.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
