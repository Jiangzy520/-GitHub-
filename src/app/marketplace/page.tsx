import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import MarketplaceContent from "@/components/marketplace/marketplace-content";

export const metadata = {
  title: "GoMining - Marketplace",
  description: "Browse and purchase miners in the GoMining marketplace",
};

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-[#f0f5fa]">
        <MarketplaceContent />
      </main>
      <Footer />
    </div>
  );
}
