"use client";

import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEOHead({
  title = "Shubh Shah (s1834) | Research Intern @ IIT Indore | iOS Developer | World Record Holder",
  description = "Shubh Shah (s1834) is a Research Intern at IIT Indore, iOS Intern at Infosys, and World Record Holder. Specializing in deep learning, computer vision, and iOS development.",
  keywords = [
    "Shubh Shah",
    "s1834",
    "Research Intern",
    "IIT Indore",
    "iOS Developer",
    "Deep Learning",
    "Computer Vision",
    "World Record Holder",
    "Portfolio"
  ],
  image = "/og-image.png",
  url = "https://shubhshah.xyz",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "Shubh Shah",
  section,
  tags = []
}: SEOHeadProps) {
  const fullTitle = title.includes("Shubh Shah") ? title : `${title} | Shubh Shah (s1834)`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const allKeywords = [...keywords, ...tags].join(", ");

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`https://shubhshah.xyz${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Shubh Shah Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://shubhshah.xyz${image}`} />
      <meta name="twitter:creator" content="@s1834_" />
      <meta name="twitter:site" content="@s1834_" />
      
      {/* Article specific meta tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" && tags.length > 0 && (
        tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Structured Data for Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Shubh Shah",
            "alternateName": "s1834",
            "url": "https://shubhshah.xyz",
            "image": "https://shubhshah.xyz/profile-image.jpg",
            "sameAs": [
              "https://github.com/s1834",
              "https://linkedin.com/in/s1834",
              "https://twitter.com/s1834_"
            ],
            "jobTitle": "Research Intern",
            "worksFor": {
              "@type": "Organization",
              "name": "Indian Institute of Technology, Indore"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "SRM Institute of Science and Technology"
            },
            "knowsAbout": [
              "Deep Learning",
              "Computer Vision",
              "iOS Development",
              "Machine Learning",
              "Python",
              "Swift",
              "React",
              "Next.js",
              "TypeScript"
            ],
            "award": [
              "World Record Holder - Longest Martial Arts Marathon in a Relay",
              "NPTEL Star - BELIEVERS",
              "McKinsey Forward Program - Forward Champion & Super Learner",
              "Citi Campus Innovation Challenge 5.0 - Top 20 Finalist"
            ],
            "telephone": "+91-9039151834",
            "email": "ss7455@srmist.edu.in",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN",
              "addressRegion": "Madhya Pradesh"
            },
            "description": "Research Intern at IIT Indore specializing in deep learning and computer vision. iOS Intern at Infosys. World Record Holder and accomplished developer with expertise in AI/ML and mobile development."
          })
        }}
      />
      
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://shubhshah.xyz"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": title.split("|")[0].trim(),
                "item": url
              }
            ]
          })
        }}
      />
    </Head>
  );
}
