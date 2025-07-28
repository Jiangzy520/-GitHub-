import Navbar from "@/components/layout/navbar";
import SubNavbar from "@/components/layout/sub-navbar";
import Footer from "@/components/layout/footer";
import RewardsContent from "@/components/rewards/rewards-content";

export const metadata = {
  title: "GoMining - Rewards",
  description: "Track and withdraw your mining rewards",
};

export default function RewardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNavbar activeItem="rewards" />
      <main className="flex-grow bg-[#f0f5fa] dark:bg-[#0e1525]">
        <RewardsContent />
      </main>
      <Footer />
    </div>
  );
}
