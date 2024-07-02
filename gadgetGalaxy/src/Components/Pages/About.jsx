import React from "react";
import about from "../img/about.jpg";
import airpods from "../img/airpods.jpg";
import Agent1 from "../img/Agent1.jpg"; // Adjust the path as necessary
import Agent2 from "../img/Agent2.jpg"; // Adjust the path as necessary
import Agent3 from "../img/Agent3.jpg"; // Adjust the path as necessary
import Agent4 from "../img/Agent4.jpg"; // Adjust the path as necessary

const menuItems = [
  { name: "Home", href: "/Home" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

const users = [
  { name: "John Doe", position: "CEO", image: Agent1 },
  { name: "Jane Smith", position: "CTO", image: Agent2 },
  { name: "Alice Johnson", position: "CFO", image: Agent3 },
  { name: "Bob Brown", position: "COO", image: Agent4 },
];

export function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="flex justify-center items-center font-sans gap-5 h-[489px] relative z-0 w-full">
          <img
            src={about}
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-8 flex justify-center items-baseline font-sans gap-5 h-[489px] w-full z-10">
          <div className="flex flex-col justify-center items-center gap-10 m-12 sm:m-12">
            <span className="text-slate-50 text-8xl font-semibold">
              About us
            </span>
          </div>
        </div>
      </section>

      {/* Greetings */}
      <div className="mt-16 flex justify-center items-center">
        <div className="space-y-6 md:w-3/4 text-center">
          <div>
            <p className="max-w-5xl  font-semibold text-base text-gray-700 md:text-xl mx-auto">
              Welcome to Gadget Galaxy, your ultimate destination for
              cutting-edge electronics and gadgets. At Gadget Galaxy, we're
              passionate about technology and committed to bringing you the
              latest innovations at competitive prices. Whether you're a tech
              enthusiast, a professional seeking productivity tools, or a casual
              consumer looking for the next big thing, Gadget Galaxy is here to
              cater to all your electronic needs.
            </p>
          </div>{" "}
          <br />
          <p className="text-3xl font-medium text-gray-900 md:text-6xl font-sans">
            Meet Our Team
          </p>
          <p className="max-w-4xl text-base font-normal text-gray-700 md:text-xl mx-auto">
            Our development team at Gadget Galaxy is a powerhouse of talent
            dedicated to bringing your electronics shopping experience to life.
            With a keen understanding of both consumer needs and technological
            trends, we craft seamless and intuitive ecommerce solutions. From
            backend architects ensuring robust functionality to UX/UI designers
            creating captivating interfaces, each member is committed to
            delivering excellence. We thrive on innovation, constantly pushing
            boundaries to offer you the latest in digital shopping convenience.
            Discover the expertise and passion that drives us at Gadget Galaxy,
            where your satisfaction is our priority
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <div className="rounded-md border" key={user.name}>
            <img
              src={user.image}
              alt="Team member"
              className="h-[300px] w-full rounded-lg object-cover shadow"
            />
            <p className="mt-6 w-full px-2 text-xl font-semibold text-gray-900">
              {user.name}
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              {user.position}
            </p>
          </div>
        ))}
      </div>

      {/* Hiring Banner */}
      <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-3xl font-bold md:text-4xl">
            We&apos;re just getting started
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            {" "}
            <br />
            <div className=" w-[690px] mr-6 ">
              Welcome to Gadget Galaxy! Discover cutting-edge electronics for
              smartphones, smart homes,and wearable tech. <br />
              Stay ahead with top brands and expert advice. Your journey into
              the future of tech begins here. Embrace the possibilities - we're
              just getting started.
            </div>
          </p>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Now
          </button>
        </div>
        <div className="mt-10 w-full md:mt-0 md:w-auto">
          <img
            src={airpods}
            alt="Getting Started"
            className="rounded-lg w-[489px] h-[475px] object-cover shadow-lg-dark"
          />
        </div>
      </div>

      <hr className="mt-6" />
    </div>
  );
}
