import Navbar from "../components/Navbar";

export const metadata = {
  title: "List View",
  description: "Example list view page",
};

export default function Layout({ children }) {
  return (
    <div className="">
       
  
    
      <main className="  ">{children}</main>
    
    </div>
  );
}
