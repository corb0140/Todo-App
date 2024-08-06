import "./globals.css";
import { StoreProvider } from "@/app/redux/StoreProvider";

export const metadata = {
  title: "Frontend Mentor || Todo App",
  description: "Add and remove tasks from your todo list",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "./favicon.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Josefin">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
