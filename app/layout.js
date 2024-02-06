import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush",
  description: "Ayush Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

{/* <h1ml>
  <head></head>
  <body>
     
     <main>
     <header></header>
     <section></section>
     <footer></footer>


     </main>
  </body>
</h1ml> */}
