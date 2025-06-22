import Navbar from "../components/Navbar";

export const metadata = {
  title: "Sign-in",
  description: "Example list view page",
};

export default function Layout({ children }) {
  return (
    <div>
      
  
    
      <main className="flex-1 ">{children}</main>
    
    </div>
  );
}
