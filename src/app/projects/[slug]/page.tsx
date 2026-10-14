import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import {
  caseStudies,
  getCaseStudy,
  getNextCaseStudy,
} from "../../../data/projectContent";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Project not found" };
  return {
    title: `${study.title} — Charles Onuoha`,
    description: study.sections[0]?.blocks[0]?.paragraphs?.[0] ?? "",
  };
}

const CaseStudyPage = ({ params }: { params: { slug: string } }) => {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const next = getNextCaseStudy(study.slug);
  const hasLive = study.href.trim() !== "";

  return (
    <div className="animate-fadeIn duration-1000 ease-in">
      {/* Title */}
      <header className="mt-40 max-md:mt-32 text-center px-6">
        <h1 className="font-bold text-6xl leading-tight tracking-tight max-md:text-4xl">
          {study.title} Case Study
        </h1>
        <p className="mt-4 text-sm uppercase tracking-wider text-zinc-500">
          {study.sector} &nbsp;|&nbsp; {study.year} &nbsp;|&nbsp; {study.role}
        </p>
        {hasLive && (
          <Link
            target="_blank"
            href={study.href}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b-2 border-current pb-0.5 transition-colors duration-200 hover:text-orange-500"
          >
            View live
            <span aria-hidden="true">&#x2197;</span>
          </Link>
        )}
      </header>

      {/* Contained, rounded hero */}
      <div className="mt-14 w-full px-16 max-lg:px-10 max-md:px-6">
        <Image
          src={study.hero}
          alt={study.heroAlt}
          className="w-full h-auto rounded-lg max-w-6xl mx-auto"
          priority
        />
      </div>

      {/* Body */}
      <div className="mt-20 max-w-3xl mx-auto px-6 max-sm:px-4">
        <div className="space-y-14">
          {study.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-bold text-3xl tracking-tight mb-6 max-md:text-2xl">
                {section.heading}
              </h2>

              <div className="space-y-8">
                {section.blocks.map((block, bi) => (
                  <div key={bi}>
                    {block.subheading && (
                      <h3 className="font-semibold text-xl mb-3 max-md:text-lg">
                        {block.subheading}
                      </h3>
                    )}

                    {block.paragraphs && (
                      <div className="space-y-4">
                        {block.paragraphs.map((para, pi) => (
                          <p
                            key={pi}
                            className="text-lg leading-relaxed text-zinc-700 max-sm:text-base"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}

                    {block.bullets && (
                      <ul className="mt-2 space-y-2 list-disc pl-5">
                        {block.bullets.map((item, li) => (
                          <li
                            key={li}
                            className="text-lg leading-relaxed text-zinc-700 max-sm:text-base pl-1"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {block.image && (
                      <div className="mt-6">
                        <Image
                          src={block.image}
                          alt={block.imageAlt ?? ""}
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Next project */}
        {next && (
          <Link
            href={`/projects/${next.slug}`}
            className="group block mt-20 mb-16 pt-10 border-t border-zinc-200"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Next project
            </p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <span className="font-bold text-3xl tracking-tight group-hover:text-orange-500 transition-colors duration-200 max-md:text-2xl">
                {next.title}
              </span>
              <span
                aria-hidden="true"
                className="text-zinc-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-200"
              >
                &#x2192;
              </span>
            </div>
          </Link>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
