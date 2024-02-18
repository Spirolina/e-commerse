/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className="bg-gray-200">
          <Navbar />
          <div className="flex mt-[60px]">
            <Sidebar />
            {props.children}
          </div>
        </body>
      </html>
    </Providers>
  );
}
