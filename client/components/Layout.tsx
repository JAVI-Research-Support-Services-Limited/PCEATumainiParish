import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showNav?: boolean;
}

export function Layout({
  children,
  showHeader = true,
  showFooter = true,
  showNav = true,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header showNav={showNav} />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}
