import Navbar from "@/components/layout/navbar";
import SubNavbar from "@/components/layout/sub-navbar";
import Footer from "@/components/layout/footer";
import SellingContent from "@/components/selling/selling-content";

export const metadata = {
  title: "GoMining - Selling",
  description: "Sell your miners on the marketplace",
};

export default function SellingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNavbar activeItem="selling" />
      <main className="flex-grow bg-[#f0f5fa] dark:bg-[#0e1525]">
        <SellingContent />
      </main>
      <Footer />
    </div>
  );
}
