import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { GlobalProvider } from "@/context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "Realestate Finder | Find Your Perfect Rental Property",
  description:
    "Discover apartments, houses, and commercial properties for rent and sale near you.",
  keywords: "real estate, rental property, buy home, apartments, houses, rent",
  openGraph: {
    title: "Realestate Finder",
    description: "Find your next home or investment property easily.",
    url: "https://realestatefinder.vercel.app",
    siteName: "Realestate Finder",
    images: [
      {
        url: "https://realestatefinder.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Realestate Finder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
