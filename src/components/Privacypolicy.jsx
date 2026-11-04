import { Link } from "react-router-dom";

const COMPANY = {
  brand: "KT Glow",
  firm: "Thalor Manufacturer",
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "Vikash61289@gmail.com",
  address: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
};

const LAST_UPDATED = "3 November 2026";

const sections = [
  {
    title: "Introduction",
    text: `${COMPANY.firm} ("we", "us", or "our") operates this website under the trademark ${COMPANY.brand}. Based in Hisar, Haryana, India, we manufacture steel polishing and abrasive products for industrial applications. This Privacy Policy explains how we may collect, use, store, and protect information when you visit or interact with our website.`,
  },
  {
    title: "Information We Collect",
    text: `We may collect personal information that you voluntarily provide through contact forms, product enquiries, quotation requests, or other communication. This information may include your name, phone number, email address, company name, business address, and enquiry message. Depending on the website functionality and technologies used, we may also collect technical information such as browser type, device information, IP address, and pages visited.`,
  },
  {
    title: "How We Collect Information",
    text: `Information may be collected directly when you submit an enquiry, contact our team, request product information, or communicate with us. Certain technical information may also be collected automatically through website functionality, server logs, cookies, or similar technologies, where applicable.`,
  },
  {
    title: "How We Use Your Information",
    text: `We may use collected information to respond to enquiries, provide product specifications, prepare quotations, communicate about orders, understand customer requirements, improve our website and services, maintain business records, prevent misuse, and comply with applicable legal obligations. We use information for legitimate business and communication purposes.`,
  },
  {
    title: "Enquiries and Business Communication",
    text: `When you contact ${COMPANY.firm} regarding our products or services, we may use the information you provide to respond to your request, clarify product requirements, share relevant business information, and communicate regarding quotations or potential orders. Please avoid submitting confidential or unnecessary personal information through general website forms.`,
  },
  {
    title: "Sharing of Information",
    text: `We do not sell or rent personal information to third parties. We may share information with service providers who support website hosting, communication, or business operations, where necessary. Information may also be disclosed when required by applicable law, legal proceedings, regulatory obligations, or authorized government requests.`,
  },
  {
    title: "Data Security",
    text: `We take reasonable measures to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse. However, no method of electronic transmission or storage is completely secure. While we make reasonable efforts to safeguard information, we cannot guarantee absolute security.`,
  },
  {
    title: "Cookies and Tracking Technologies",
    text: `Our website may use cookies or similar technologies to support functionality, remember preferences, or understand website usage, depending on the technologies implemented. You may manage or disable cookies through your browser settings. Disabling certain cookies may affect some website features. Any analytics or tracking technologies used should be reviewed in accordance with our actual website configuration.`,
  },
  {
    title: "Third-Party Services and Links",
    text: `Our website may use third-party services or contain links to external websites. These services and websites may have their own privacy policies and data handling practices. We do not control third-party websites and are not responsible for their content, privacy practices, or security. We recommend reviewing their policies before sharing personal information.`,
  },
  {
    title: "Data Retention",
    text: `We may retain personal information for as long as reasonably necessary to respond to enquiries, maintain business records, manage customer communications, fulfill contractual obligations, resolve disputes, and comply with applicable legal requirements. When information is no longer required, we may securely delete or dispose of it where appropriate and legally permitted.`,
  },
  {
    title: "Your Privacy Rights",
    text: `Subject to applicable laws, you may request access to personal information we hold about you, request correction of inaccurate information, or request deletion of information where legally permitted. You may also contact us to ask how your information is collected, used, or handled. We may need to verify your identity before processing certain requests.`,
  },
  {
    title: "Data Processing and Legal Compliance",
    text: `We aim to handle personal information in accordance with applicable data protection and privacy laws in India. The collection, use, retention, and disclosure of information will depend on the nature of your interaction with our website and the legal requirements applicable to our business.`,
  },
  {
    title: "Children's Privacy",
    text: `Our website is intended for businesses, customers, and individuals making legitimate product or business enquiries. We do not knowingly seek to collect personal information from children without appropriate authorization. If you believe a child has provided personal information through our website, please contact us so that we can review the matter and take appropriate action.`,
  },
  {
    title: "Email and Communication Preferences",
    text: `We may communicate with you regarding enquiries, quotations, products, or business matters based on your interaction with us. If you no longer wish to receive non-essential communications, you may contact our team to request that such communications be discontinued, subject to any necessary business or legal communications.`,
  },
  {
    title: "Changes to This Privacy Policy",
    text: `We may update or revise this Privacy Policy to reflect changes in our business practices, website functionality, or applicable laws. Updated versions will be published on this page with a revised Last Updated date. We encourage visitors to review this page periodically.`,
  },
  {
    title: "Contact Us",
    text: `If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact ${COMPANY.firm} using the contact details provided below.`,
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="bg-white text-left">
      {/* Page Header */}
      <section className="border-b border-[#E5E7EB] bg-[#F8FAFC] pt-24 pb-10 sm:pt-40 sm:pb-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black sm:text-sm">
            Legal Information
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-black sm:text-base sm:leading-8">
            Learn how {COMPANY.brand} ({COMPANY.firm}) may collect, use,
            and protect your personal information when you visit our website
            or communicate with our team.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-medium text-[#475569] sm:text-sm">
              Last Updated: {LAST_UPDATED}
            </span>

            <span className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-medium text-[#475569] sm:text-sm">
              {sections.length} Privacy Sections
            </span>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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

        {/* Contact Information */}
        <section className="mt-12 rounded border border-[#E5E7EB] bg-[#F8FAFC] p-5 sm:mt-16 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black sm:text-sm">
              Get in Touch
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#06182E] sm:text-3xl">
              Privacy Support
            </h2>

            <p className="mt-3 text-sm leading-7 text-black sm:text-base sm:leading-8">
              For questions about this Privacy Policy, requests concerning
              your personal information, or privacy-related concerns,
              please contact our team using the details below.
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
                {COMPANY.phoneDisplay}
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

        {/* Bottom Note */}
        <div className="mt-8">
          <p className="text-xs leading-6 text-[#94A3B8] sm:text-sm">
            This Privacy Policy provides general information about our
            information handling practices. Actual data collection,
            cookies, analytics, and third-party services should reflect
            the technologies and processes currently used on our website.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;