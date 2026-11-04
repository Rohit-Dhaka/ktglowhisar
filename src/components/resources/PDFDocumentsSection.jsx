
import {
  FileText,
  Eye,
  Download,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

import PDF1 from '../../assets/documents/FINAL TM-A OF KT GLOW.pdf'
import PDF2 from '../../assets/documents/RECEIPT-17-06-26.pdf'
import PDF3 from '../../assets/documents/STATUS-KT GLOW.pdf'

const pdfDocuments = [
  {
    id: "01",
    title: "Product Catalogue",
    category: "Product Information",
    description:
      "Explore our complete range of industrial abrasive and steel polishing products.",
    file: PDF1,
    size: "PDF Document",
  },
  {
    id: "02",
    title: "Technical Documentation",
    category: "Technical Resources",
    description:
      "Discover technical details, specifications, and information about our product solutions.",
    file: PDF2,
    size: "PDF Document",
  },
  {
    id: "03",
    title: "Company Profile",
    category: "Company Information",
    description:
      "Learn about our company, manufacturing capabilities, expertise, and commitment to quality.",
    file: PDF3,
    size: "PDF Document",
  },
];

const PDFDocumentsSection = () => {
  return (
    <section
      id="pdf-documents"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
     
<div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
  {/* Left Side - Tag & Heading */}
  <div className="w-full lg:max-w-[50%]">
    <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
      <Layers3 size={15} />
      Document Library
    </span>

    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
      Explore Our
      <span className="block text-black">
        Resources & Documents.
      </span>
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="w-full lg:max-w-[45%]">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      Browse our documentation to learn more about our steel polishing
      products, technical specifications, and company capabilities.
      Access detailed product information, guidelines, and resources
      to better understand our solutions. 
    </p>
  </div>

  {/* Document Count */}
  {/* 
  <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-[#F5F7FA] px-5 py-4">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0F2B46]">
      <FileText size={22} />
    </div>

    <div>
      <p className="text-2xl font-bold text-[#06182E]">
        03
      </p>
      <p className="text-xs font-medium text-black">
        Available Documents
      </p>
    </div>
  </div>
  */}
</div>


        {/* PDF Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pdfDocuments.map((document) => (
            <article
              key={document.id}
              className="group flex flex-col rounded-3xl border border-[#DCE3EC] bg-[#F8FAFC] p-5 transition-colors duration-300 hover:border-[#AAB8CA] sm:p-6"
            >
              {/* Card Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEE2E2] text-[#DC2626]">
                  <FileText size={27} />
                </div>

                <span className="rounded-full border border-[#DCE3EC] bg-white px-3 py-1.5 text-xs font-semibold text-black">
                  {document.id}
                </span>
              </div>

              {/* Card Content */}
              <div className="mt-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black">
                  {document.category}
                </p>

                <h3 className="mt-3 text-xl font-bold leading-tight text-[#06182E] sm:text-2xl">
                  {document.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black">
                  {document.description}
                </p>
              </div>

              {/* PDF Info */}
              <div className="mt-6 flex items-center justify-between border-t border-[#DCE3EC] pt-5">
                <span className="text-xs font-medium text-[#94A3B8]">
                  {document.size}
                </span>

                <span className="text-xs font-semibold text-[#0F2B46]">
                  PDF
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {/* View PDF */}
                <a
                  href={document.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-3 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#06182E] hover:text-white"
                >
                  <Eye size={17} />
                  View PDF
                </a>

                {/* Download PDF */}
                <a
                  href={document.file}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46]"
                >
                  <Download size={17} />
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#06182E] p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              <FileText size={21} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Need More Information?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Contact our team for additional product details,
                technical information, or assistance with your requirements.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
          >
            Contact Our Team
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PDFDocumentsSection;
