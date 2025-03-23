import React from "react";

const SchemaMarkup = () => {
  return (
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ashutosh Singh",
          "jobTitle": "Front End Developer",
          "url": "https://ashutosh-singh.vercel.app/",
          "sameAs": [
            "https://linkedin.com/in/ashutosh-singh",
            "https://github.com/ashutosh-singh"
          ],
          "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "SASS",
            "TanStack",
            "Shadcn",
            "D3.js",
            "Git",
            "Jira"
          ]
        }
      `}
    </script>
  );
};

export default SchemaMarkup;
