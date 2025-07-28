import Navbar from "@/components/layout/navbar";
import SubNavbar from "@/components/layout/sub-navbar";
import EmptyState from "@/components/mining-farm/empty-state";
import CookieConsent from "@/components/ui/cookie-consent";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <main className="min-h-screen bg-[#f0f5fa] dark:bg-[#0e1525]">
        <EmptyState />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
