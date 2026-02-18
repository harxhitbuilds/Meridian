import Footer from "@/components/navigations/footer";
import Navbar from "@/components/navigations/navbar";
import { Separator } from "@/components/ui/separator";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <Separator />
      {children}
      <Separator/>
      <Footer />
    </div>
  );
}
