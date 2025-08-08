import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shubh Shah (s1834) | Research Intern @ IIT Indore | iOS Developer | World Record Holder",
  description: "Shubh Shah (s1834) is a Research Intern at IIT Indore, iOS Intern at Infosys, and World Record Holder. Specializing in deep learning, computer vision, and iOS development. Explore my portfolio showcasing innovative projects and achievements.",
  keywords: [
    "Shubh Shah",
    "s1834",
    "Research Intern",
    "IIT Indore",
    "iOS Developer",
    "Deep Learning",
    "Computer Vision",
    "World Record Holder",
    "Portfolio",
    "Swift",
    "Python",
    "Machine Learning",
    "iOS Development",
    "Mobile App Development",
    "AI Research",
    "Computer Vision Research",
    "Traffic Sign Detection",
    "Alzheimer's App",
    "Recap App",
    "GTSDB Dataset",
    "CNN Architectures",
    "Occluded Object Detection",
    "SwiftUI",
    "React Native",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "Firebase",
    "AWS",
    "GitHub",
    "Open Source",
    "Hackathon Winner",
    "NPTEL Star",
    "McKinsey Forward Program",
    "Citi Campus Innovation Challenge",
    "Golden Book of World Records",
    "Martial Arts",
    "Taekwon-do",
    "Student Developer",
    "Apple Developer",
    "Infosys",
    "SRM University",
    "Chennai",
    "India"
  ],
  authors: [{ name: "Shubh Shah", url: "https://github.com/s1834" }],
  creator: "Shubh Shah",
  publisher: "Shubh Shah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shubhshah.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhshah.xyz",
    title: "Shubh Shah (s1834) | Research Intern @ IIT Indore | iOS Developer | World Record Holder",
    description: "Research Intern at IIT Indore, iOS Intern at Infosys, and World Record Holder. Specializing in deep learning, computer vision, and iOS development. View my projects and achievements.",
    siteName: "Shubh Shah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubh Shah - Research Intern @ IIT Indore | iOS Developer | World Record Holder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Shah (s1834) | Research Intern @ IIT Indore | iOS Developer | World Record Holder",
    description: "Research Intern at IIT Indore, iOS Intern at Infosys, and World Record Holder. Specializing in deep learning, computer vision, and iOS development.",
    creator: "@s1834_",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#3B82F6",
    "msapplication-TileColor": "#3B82F6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Shubh Shah Portfolio",
    "application-name": "Shubh Shah Portfolio",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shubh Shah",
              "alternateName": "s1834",
              "url": "https://shubhshah.xyz",
              "image": "https://shubhshah.xyz/og-image.png",
              "sameAs": [
                "https://github.com/s1834",
                "https://linkedin.com/in/s1834",
                "https://twitter.com/s1834_"
              ],
              "jobTitle": "Research Intern",
              "worksFor": {
                "@type": "Organization",
                "name": "IIT Indore"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "SRM University"
              },
              "knowsAbout": [
                "Deep Learning",
                "Computer Vision",
                "iOS Development",
                "Full Stack Development",
                "Competitive Programming"
              ]
            })
          }}
        />
        
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
                  "name": "About",
                  "item": "https://shubhshah.xyz/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Experience",
                  "item": "https://shubhshah.xyz/experience"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Projects",
                  "item": "https://shubhshah.xyz/projects"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Achievements",
                  "item": "https://shubhshah.xyz/achievements"
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Skills",
                  "item": "https://shubhshah.xyz/skills"
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "Contact",
                  "item": "https://shubhshah.xyz/contact"
                }
              ]
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Shubh Shah" />
        <meta name="copyright" content="Shubh Shah" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shubh Shah Portfolio" />
        <meta name="application-name" content="Shubh Shah Portfolio" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="preconnect" href="https://twitter.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white dark:bg-black text-black dark:text-white overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
