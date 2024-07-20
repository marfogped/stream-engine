import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/TopBar";
import Footer from "../components/shared/Footer";

export default function RootLayout() {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
