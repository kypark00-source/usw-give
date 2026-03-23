import "../public/CSS/common.css";
import "../public/CSS/index.css";
import "./home.css";

import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}