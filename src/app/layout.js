import "./globals.css";
import { Inter } from "next/font/google";
import VerticalNavbar from "@/components/VerticalNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Faihaan Arif",
    description: "Faihaan Arif portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`border-box  ${inter.className} max-w-5xl  mx-auto`}
            >
                <div className="flex min-h-screen p-5">
                    <VerticalNavbar />
                    <main className=" flex-grow p-4 rounded-r-xl bg-blue-50 ">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

//<main className=" flex-grow p-4 bg-blue-50 rounded-r-xl">
// className={`border-box  ${inter.className} max-w-5xl  mx-auto   `}

//bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-100 to-orange-200
