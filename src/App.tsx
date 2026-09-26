import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getPreviewRouterBasename } from "@/lib/previewBase";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Preloader } from "@/components/layout/Preloader";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import Home from "./pages/Home";
import OurProcess from "./pages/OurProcess";
import Faqs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Sonner />
    <BrowserRouter
      basename={getPreviewRouterBasename()}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <div className="min-h-screen bg-background font-sans selection:bg-accent/30 selection:text-primary">
        <Preloader />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-process" element={<OurProcess />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
