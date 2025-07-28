import Navbar from "@/components/layout/navbar";
import SubNavbar from "@/components/layout/sub-navbar";
import Footer from "@/components/layout/footer";
import DashboardContent from "@/components/dashboard/dashboard-content";

export const metadata = {
  title: "GoMining - Dashboard",
  description: "Monitor your mining performance and rewards",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubNavbar activeItem="dashboard" />
      <main className="flex-grow bg-[#f0f5fa]">
        <DashboardContent />
      </main>
      <Footer />
    </div>
  );
}
