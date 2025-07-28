import Navbar from "@/components/layout/navbar";
import SubNavbar from "@/components/layout/sub-navbar";
import DashboardContent from "@/components/dashboard/dashboard-content";
import Footer from "@/components/layout/footer";
import CookieConsent from "@/components/ui/cookie-consent";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNavbar />
      <main className="flex-grow bg-[#f0f5fa] dark:bg-[#0e1525]">
        <div className="gomining-container py-8">
          <DashboardContent />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
