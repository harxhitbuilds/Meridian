import Container from "@/components/global/container";
import CompaniesSection from "@/components/marketing/companies";
import DemoSection from "@/components/marketing/demo";
import HeroSection from "@/components/marketing/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Separator />
      <CompaniesSection />
      <Separator />
      <DemoSection />
      <Separator />
    </div>
  );
}
