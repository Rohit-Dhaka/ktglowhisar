import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 97283 03738",
    href: "tel:+919728303738",
  },
  {
    icon: Mail,
    label: "Email Address",
    value: "vikash61289@gmail.com",
    href: "mailto:vikash61289@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
    href: "https://www.google.com/maps/search/?api=1&query=Plot+No+10+Fees+Market+Industrial+Area+Hisar+Haryana",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-[#06182E]";

  return (
    <section
      id="contact"
      className="bg-white py-14 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
   
<div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
  {/* Left Side - Tag & Heading */}
  <div className="w-full lg:max-w-[50%]">
    <p className="mb-3 inline-flex items-center rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
      Contact Us
    </p>

    <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
      Get in Touch With Our Team
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="w-full lg:max-w-[45%]">
    <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
      Have a product enquiry or need a quotation? Contact us and share
      your requirements. Our team will help you find the right steel
      polishing solutions tailored to your needs. We are committed to
      providing reliable products.
    </p>
  </div>
</div>


        {/* Main Contact Layout */}
        <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 lg:p-8">
          {/* Left Contact Information */}
          <div className="rounded-xl bg-[#06182E] p-5 text-white sm:p-7 lg:p-8">
            <h3 className="text-xl font-semibold text-white">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Connect with us for product details, pricing, bulk
              orders, and business enquiries.
            </p>

            <div className="mt-8 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.icon === MapPin ? "_blank" : undefined
                    }
                    rel={
                      item.icon === MapPin
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-slate-400">
                        {item.label}
                      </p>

                      <p className="mt-1 break-words text-sm font-medium leading-6 text-white transition-colors group-hover:text-slate-300">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-slate-400 transition-colors group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>

            {/* Business Enquiries */}
            <div className="mt-8 rounded-lg border border-white/15 bg-white/5 p-4 sm:p-5">
              <h4 className="text-sm font-semibold text-white">
                Business Enquiries
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                For bulk orders, product availability, and quotations,
                please send us your requirements through the contact form.
              </p>
            </div>
          </div>

          {/* Right Contact Form - White Background */}
          <div className="bg-white lg:pl-4">
            <div className="mb-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Send an Enquiry
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the details below to contact us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject *
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="Product Enquiry">
                      Product Enquiry
                    </option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Request a Quote">
                      Request a Quote
                    </option>
                    <option value="Business Partnership">
                      Business Partnership
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your requirements here..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[140px] resize-y`}
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  role="status"
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#06182E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <Send size={16} />}
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Your information will only be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
