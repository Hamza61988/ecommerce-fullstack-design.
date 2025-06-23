import Navbar from "../components/Navbar";

export const metadata = {
  title: "Product Details",
  description: "Products details on this page",
};

export default function Layout({ children }) {
  return (
    <div>
        <Navbar/>
  
    
      <main className="flex-1 mx-4 md:mx-[80px] ">{children}</main>
    
    </div>
  );
}
