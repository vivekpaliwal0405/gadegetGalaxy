
import React, { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'

const menuItems = [
  {
    name: "Home",
    href: "/Home",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Contact",
    href: "/Contact",
  },
];

export function Contact() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "", 
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleContactSubmit = async (ev) => {
    ev.preventDefault();

    console.log(form);
    if (form.firstName && form.lastName && form.email && form.mobile && form.message) {
      try {
        const response = await fetch("http://localhost:4001/contact", {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data) {
          console.log("User data:", data);
          // Clear the form after successful submission
          setForm(initialFormState);
        } else {
          alert(data.error || "An unknown error occurred");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };




  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm">
              Share your thoughts
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            CONTACT US
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            "Have questions or feedback? We're here to help! Feel free to reach
            out to us via the contact form below or directly at [email address].
            Our team strives to respond to all inquiries promptly. We look
            forward to hearing from you!"
          </p>
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" method="POST" onSubmit={handleContactSubmit} className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 "
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 text-black"
                        type="text"
                        value={form.firstName}
                        id="first_name"
                        name='firstName'
                        placeholder="First Name"
                        onChange={(ev) => handleChange(ev)}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 "
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 text-black"
                        type="text"
                        id="last_name"
                        name='lastName'
                        value={form.lastName}
                        placeholder="Last Name"
                        onChange={(ev) => handleChange(ev)}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 "
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 text-black"
                      type="text"
                      id="email"
                      placeholder="Email"
                      value={form.email}
                      name='email'
                      onChange={(ev) => handleChange(ev)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 text-black"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                      name='mobile'
                      value={form.mobile}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700  "
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed  dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 text-black "
                      id="message"
                      placeholder="Leave us a message"
                      cols={4}
                      name='message'
                      value={form.message}
                      onChange={(ev) => handleChange(ev)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  );
}
