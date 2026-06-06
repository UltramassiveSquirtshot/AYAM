import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { RecentArticles } from "@/components/sections/RecentArticles";
import { MysoreSection } from "@/components/sections/MysoreSection";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { SkipLink } from "@/components/ui/SkipLink";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content">
        <Hero />
        <Manifesto />
        <RecentArticles />
        <MysoreSection />
        <NewsletterCTA />
      </main>

      <Footer />
    </>
  );
}
