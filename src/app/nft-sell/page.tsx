import Navbar from "@/components/layout/navbar";
import SubNavbar from "@/components/layout/sub-navbar";
import SellingContent from "@/components/selling/selling-content";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";

export default function SellingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNavbar />
      <main className="flex-grow bg-[#f0f5fa] dark:bg-[#0e1525]">
        <div className="gomining-container py-8">
          <SellingContent />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
