"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const INITIAL_WIDTH = "70rem";
const MAX_WIDTH = "800px";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full flex justify-center transition-all duration-300",
      )}
    >
      <motion.div
        className={cn(
          "mx-4 md:mx-0 mt-2",
          hasScrolled ? "mt-3" : "mt-2",
        )}
        initial={{ width: INITIAL_WIDTH }}
        animate={{ width: hasScrolled ? MAX_WIDTH : INITIAL_WIDTH }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
            hasScrolled
              ? "px-2 backdrop-blur-xl bg-white/90 shadow-xl border border-gray-300"
              : "px-7 backdrop-blur-xl bg-white/80 shadow-lg border border-gray-200",
          )}
        >
          <div className="flex h-[56px] items-center justify-between p-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                DELEX
              </span>
              <span className="text-xs font-semibold text-gray-700">
                LLC
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-semibold rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
              <div className="flex items-center space-x-3">
                <Link
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white h-8 hidden md:flex items-center justify-center text-sm font-medium tracking-wide rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-blue-800"
                  href="/quote"
                >
                  Get a Quote
                </Link>
              </div>
              <button
                className="md:hidden min-w-[44px] min-h-[44px] rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition-colors"
                onClick={toggleDrawer}
                aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
              >
                {isDrawerOpen ? (
                  <X className="size-6 text-gray-900" strokeWidth={2.5} />
                ) : (
                  <Menu className="size-6 text-gray-900" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
              onClick={handleOverlayClick}
            />

            <motion.div
              className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-white p-4 rounded-xl shadow-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {/* Mobile menu content */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      DELEX
                    </span>
                    <span className="text-xs font-semibold text-gray-700">
                      LLC
                    </span>
                  </Link>
                  <button
                    onClick={toggleDrawer}
                    className="rounded-md p-1 cursor-pointer"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <motion.ul
                  className="flex flex-col text-sm mb-4 rounded-md bg-gray-100"
                  variants={drawerMenuContainerVariants}
                >
                  <AnimatePresence>
                    {navLinks.map((item) => (
                      <motion.li
                        key={item.href}
                        className="p-2.5 last:border-b-0"
                        variants={drawerMenuVariants}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsDrawerOpen(false)}
                          className={cn(
                            "rounded-md p-2 block transition-colors font-medium",
                            pathname === item.href
                              ? "text-blue-700 bg-white"
                              : "text-gray-800 hover:text-blue-600"
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </motion.ul>

                <div className="flex flex-col gap-2">
                  <Link
                    href="/quote"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
