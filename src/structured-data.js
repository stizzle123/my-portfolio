export function organizationStructuredData() {
  return JSON.stringify({
    "@context": "http://schema.org/",
    headline: "Frontend Developer - Arifayan Idowu",
    author: '"Arifayan Idowu"',
    description:
      "Arifayan Idowu - Frontend developer | Personal portfolio, I build websites, web applications, mobile responsive web applications, mobile app development using React Native.",
    "@type": "Person",
    name: "Arifayan Idowu",
    alternateName: "Arifayan Idowu",
    url: "https://arifayanidowu.com",
    logo: "https://arifayanidowu.com/logo192.png",
    image: "https://arifayanidowu.com/idowu-sm.jpeg",
    sameAs: [
      "https://github.com/stizzle123",
      "https://twitter.com/arifayanidowu",
      "https://linkedin.com/olatubosun-arifayan",
    ],
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Arifayan Idowu",
    },
  });
}
