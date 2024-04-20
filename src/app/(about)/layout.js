import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "8+ Years of Experience",
    "Full Stack Engineer",
    "PHP / Golang Developer",
    "Microservices",
    "MySQL",
    "MongoDB",
    "AWS Cloud",
    "CI/CD",
    "Stripe",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
