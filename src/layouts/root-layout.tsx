import { Outlet } from "react-router-dom";
import {TopBar, Footer, ComingSoon} from "../components/shared";

const displayComingSoon = import.meta.env.VITE_REACT_APP_DISPLAY_COMING_SOON === 'true';

export default function RootLayout() {
  if(displayComingSoon) return <ComingSoon />

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
