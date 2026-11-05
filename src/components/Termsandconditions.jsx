import { Link } from "react-router-dom";

const COMPANY = {
  brand: "KT Glow",
  firm: "Thalor Manufacturer",
  phone: "+919728303738",
  email: "vikash61289@gmail.com",
  address: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
};

const LAST_UPDATED = "3 November 2026";

const sections = [
  {
    title: "Acceptance of Terms",
    text: `By accessing or using the ${COMPANY.brand} website, you agree to be bound by these Terms & Conditions. These terms apply to all visitors, customers, and users accessing our website. If you do not agree with these terms, please discontinue using our website.`,
  },
  {
    title: "About Our Company",
    text: `The ${COMPANY.brand} website is operated by ${COMPANY.firm}, based in Hisar, Haryana, India. We manufacture steel polishing and abrasive products for industrial applications. This website provides information about our company, products, and business services.`,
  },
  {
    title: "Website Usage",
    text: `You agree to use this website only for lawful purposes. You must not attempt to damage, disrupt, interfere with, or gain unauthorized access to our website, servers, or related systems. Any activity involving fraudulent information, misuse of content, or violation of applicable laws is prohibited.`,
  },
  {
    title: "Product Information and Specifications",
    text: `We make reasonable efforts to provide accurate product descriptions, images, specifications, and technical information. However, product details may be updated or modified without prior notice. Actual products may differ slightly from displayed images due to manufacturing, design, or presentation variations. Customers should confirm product specifications, quality requirements, and suitability for their intended application directly with our team before placing an order.`,
  },
  {
    title: "Product Suitability and Application",
    text: `Customers are responsible for evaluating whether a product is suitable for their specific industrial application, equipment, and operating conditions. Technical information provided on this website is for general reference and should not be treated as a substitute for professional evaluation or product-specific guidance.`,
  },
  {
    title: "Enquiries and Quotations",
    text: `Submitting an enquiry, contact form, or quotation request does not constitute a confirmed order or create a binding contract. Quotations are subject to confirmation by ${COMPANY.firm}. Product specifications, quantities, prices, payment terms, and delivery schedules will be agreed upon between the company and the customer before an order is finalized.`,
  },
  {
    title: "Orders and Order Confirmation",
    text: `All orders are subject to acceptance and confirmation by ${COMPANY.firm}. An enquiry or preliminary discussion does not guarantee product availability or order acceptance. Any confirmed order shall be governed by the mutually agreed commercial terms, specifications, and conditions.`,
  },
  {
    title: "Pricing and Payment Terms",
    text: `Product prices may vary based on specifications, quantity, raw material costs, market conditions, and other business factors. Final pricing, applicable taxes, payment schedules, and payment methods will be communicated and agreed upon during order confirmation. Customers are responsible for complying with the agreed payment terms.`,
  },
  {
    title: "Shipping and Delivery",
    text: `Delivery schedules, shipping arrangements, transportation costs, and applicable delivery conditions shall be mutually agreed upon at the time of order confirmation. Estimated delivery timelines may be affected by manufacturing requirements, transportation delays, or circumstances beyond our reasonable control.`,
  },
  {
    title: "Cancellation, Returns, and Replacement",
    text: `Order cancellation, product returns, and replacement requests shall be handled according to the terms agreed upon between ${COMPANY.firm} and the customer for the relevant order. Customers should communicate any concerns regarding received products directly to our team with relevant order details. Applicable return or replacement conditions will be confirmed during the order process.`,
  },
  {
    title: "Intellectual Property",
    text: `All website content, including the ${COMPANY.brand} name, logo, text, images, graphics, product descriptions, and website design, belongs to ${COMPANY.firm} unless otherwise stated. Such content is protected by applicable intellectual property laws. Reproduction, distribution, modification, or commercial use of website content without prior written permission is prohibited.`,
  },
  {
    title: "Privacy and Personal Information",
    text: `Information submitted through our website, including names, contact details, email addresses, and enquiry information, may be used to respond to requests and communicate about our products and services. We aim to handle personal information responsibly and in accordance with applicable laws. Please refer to our Privacy Policy for additional details.`,
  },
  {
    title: "Third-Party Links",
    text: `Our website may contain links to third-party websites for information or convenience. These external websites are not controlled or operated by ${COMPANY.firm}. We are not responsible for their content, accuracy, privacy policies, security, or practices. Accessing third-party websites is at your own discretion.`,
  },
  {
    title: "Limitation of Liability",
    text: `To the extent permitted by applicable law, ${COMPANY.firm} shall not be liable for losses or damages arising from website interruptions, technical errors, reliance on general website information, or inability to access the website. Nothing in these terms is intended to exclude liability that cannot be excluded under applicable law.`,
  },
  {
    title: "Force Majeure",
    text: `${COMPANY.firm} shall not be responsible for delays or failure to perform obligations caused by circumstances beyond reasonable control, including natural disasters, government actions, transportation disruptions, supply chain interruptions, industrial disputes, or other unforeseen events. The affected parties shall communicate regarding the impact and any revised arrangements.`,
  },
  {
    title: "User Responsibilities",
    text: `Users must provide accurate and complete information when submitting enquiries or communicating with our company. Users must not submit fraudulent, misleading, harmful, or unlawful content or misuse the website. We reserve the right to restrict access where appropriate in response to misuse.`,
  },
  {
    title: "Changes to These Terms",
    text: `We reserve the right to modify, update, or revise these Terms & Conditions at any time. Updated terms will become effective once published on this page. The Last Updated date indicates the latest revision. Continued use of the website after publication of changes indicates acceptance of the revised terms, to the extent permitted by applicable law.`,
  },
  {
    title: "Governing Law and Jurisdiction",
    text: `These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising in connection with these terms or website usage shall be subject to the jurisdiction of the competent courts located in Hisar, Haryana, India, subject to applicable law.`,
  },
  {
    title: "Contact Us",
    text: `For questions, concerns, or clarification regarding these Terms & Conditions, product information, or our services, you may contact ${COMPANY.firm} using the contact details provided below.`,
  },
];

const TermsAndConditions = () => {
  return (
    <main className="bg-white text-left">
      
      <section className="border-b border-[#E5E7EB] bg-[#F8FAFC] pt-24 pb-10 sm:pt-40 sm:pb-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black sm:text-sm">
            Legal Information
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-black sm:text-base sm:leading-8">
            Please review our terms carefully before accessing or using the
            {` ${COMPANY.brand}`} website. These terms outline the conditions
            applicable to website usage, product enquiries, quotations, and
            business interactions.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-medium text-[#475569] sm:text-sm">
              Last Updated: {LAST_UPDATED}
            </span>

            <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-medium text-[#475569] sm:text-sm">
              {sections.length} Legal Sections
            </span>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="space-y-9 sm:space-y-11">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="border-b border-[#E5E7EB] pb-8 last:border-b-0 last:pb-0 sm:pb-10"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1F5F9] text-xs font-bold text-[#475569] sm:h-9 sm:w-9 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold leading-7 text-[#06182E] sm:text-xl lg:text-2xl">
                    {section.title}
                  </h2>

                  <p className="mt-3 max-w-4xl text-sm leading-7 text-black sm:text-base sm:leading-8">
                    {section.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        
        <section className="mt-12 rounded border border-[#E5E7EB] bg-[#F8FAFC] p-5 sm:mt-16 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black sm:text-sm">
              Get in Touch
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#06182E] sm:text-3xl">
              Contact Information
            </h2>

            <p className="mt-3 text-sm leading-7 text-black sm:text-base sm:leading-8">
              If you have any questions regarding these Terms & Conditions,
              product details, or business enquiries, please contact our team.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                Company Name
              </p>

              <p className="mt-2 text-sm font-semibold text-[#06182E] sm:text-base">
                {COMPANY.firm}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                Brand Name
              </p>

              <p className="mt-2 text-sm font-semibold text-[#06182E] sm:text-base">
                {COMPANY.brand}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                Phone Number
              </p>

              <a
                href={`tel:${COMPANY.phone}`}
                className="mt-2 inline-block text-sm font-medium text-[#06182E] transition-colors hover:text-black sm:text-base"
              >
                +91 97283 03738
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                Email Address
              </p>

              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-2 inline-block break-all text-sm font-medium text-[#06182E] transition-colors hover:text-black sm:text-base"
              >
                {COMPANY.email}
              </a>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                Business Address
              </p>

              <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-[#06182E] sm:text-base">
                {COMPANY.address}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[#E5E7EB] pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#12345A]"
            >
              Contact Our Team
            </Link>
          </div>
        </section>

        
        <div className="mt-8">
          <p className="text-xs leading-6 text-[#94A3B8] sm:text-sm">
            These Terms & Conditions are intended to provide general information
            about website usage and business interactions. Specific commercial
            transactions may be subject to separate mutually agreed terms.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;