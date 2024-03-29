import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import NavBar from "@/components/NavBar";
import SeachBox from "@/components/SearchBox";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
// this makes the website seo firendly
export const metadata = {
  title: "IMDB my first next app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Provider>
          <Header />
          <Suspense>
            <NavBar />
          </Suspense>
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
