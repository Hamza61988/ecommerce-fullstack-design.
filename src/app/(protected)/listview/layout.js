import AboutPage from "../../components/side";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "List View",
  description: "Example list view page",
};

export default function Layout({ children }) {
  return (
    <div>
        <Navbar  />
    <div className="flex gap-4   md:mx-[80px]">
    <div className="md:flex hidden">
           <AboutPage />
    </div>
 
      <main className="flex-1 mt-[2px] md:py-14">{children}</main>
    </div>
    </div>
  );
}
