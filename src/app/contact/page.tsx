"use client";

import Footer from "@/components/footer";
import PagesHeader from "@/components/pages-header";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <main>
      <PagesHeader title=" Contact us" />

      {/* Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map Section */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492346622!3d40.76793497138447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97bdb102b%3A0xea9f8fc0b3ffff55!2s198%20W%2021st%20St%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  aria-label="Map showing office location at 198 West 21th Street, Suite 721 New York NY 10016"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-myblack mb-4">
                  Contact us
                </h2>
                <p className="text-gray-600 text-lg">
                  We're open for any suggestion or just to have a chat
                </p>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-myblack mb-2 text-sm uppercase tracking-wide">
                    ADDRESS:
                  </h3>
                  <address className="text-gray-600 not-italic text-sm leading-relaxed">
                    198 West 21th Street,
                    <br />
                    Suite 721 New York NY
                    <br />
                    10016
                  </address>
                </div>

                <div>
                  <h3 className="font-bold text-myblack mb-2 text-sm uppercase tracking-wide">
                    EMAIL:
                  </h3>
                  <a
                    href="mailto:info@yoursite.com"
                    className="text-gray-600 hover:text-myblue transition-colors text-sm break-all"
                  >
                    info@yoursite.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-myblack mb-2 text-sm uppercase tracking-wide">
                    PHONE:
                  </h3>
                  <a
                    href="tel:+123523559898"
                    className="text-gray-600 hover:text-myblue transition-colors text-sm"
                  >
                    + 1235 2355 98
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myblue focus:border-transparent transition-shadow"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myblue focus:border-transparent transition-shadow"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myblue focus:border-transparent transition-shadow"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Create a message here"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-myblue focus:border-transparent resize-y transition-shadow"
                    aria-required="true"
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div
                    className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-md"
                    role="alert"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-myblue text-white font-medium px-8 py-3 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-myblue focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-sm"
                  aria-label="Send message"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {/* Social Media Links */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-myblack mb-4">
                  Follow us here
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-myblue hover:text-teal-600 font-medium transition-colors uppercase text-sm"
                    aria-label="Visit our Facebook page"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-myblue hover:text-teal-600 font-medium transition-colors uppercase text-sm"
                    aria-label="Visit our Twitter profile"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-myblue hover:text-teal-600 font-medium transition-colors uppercase text-sm"
                    aria-label="Visit our Instagram profile"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-myblue hover:text-teal-600 font-medium transition-colors uppercase text-sm"
                    aria-label="Visit our Dribbble profile"
                  >
                    Dribbble
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
