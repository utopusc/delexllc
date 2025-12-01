import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents - Secure Document Portal",
  description: "Access authorized company documents including insurance cards and authority documents. PIN protected for security.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
