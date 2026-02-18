import Container from "@/components/global/container";
import CompaniesSection from "@/components/marketing/companies";
import CTASection from "@/components/marketing/cta";
import DemoSection from "@/components/marketing/demo";
import FAQSection from "@/components/marketing/faq";
import FeaturesSection from "@/components/marketing/features";
import HeroSection from "@/components/marketing/hero";
import HowToUseSection from "@/components/marketing/how_to_use";
import StatisticsSection from "@/components/marketing/statistics";
import TestimonialsSection from "@/components/marketing/testimonials";
import UseCaseSection from "@/components/marketing/use_case";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <HeroSection />
      <Separator />
      <CompaniesSection />
      <Separator />
      <DemoSection />
      <Separator />
      <HowToUseSection />
      <Separator />
      <UseCaseSection />
      <Separator />
      <StatisticsSection />
      <Separator />
      <FeaturesSection />
      <Separator />
      <FAQSection />
      <Separator />
      <TestimonialsSection />
      <Separator />
      <CTASection />
    </div>
  );
}
