"use client";

import ThemeToggle from "./ThemeToggle";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Definir as seções e links
const sections = [
  {
    title: "Fruits",
    links: [
      { name: "Apple", href: "#" },
      { name: "Banana", href: "#" },
    ],
  },
  {
    title: "Smartphones",
    links: [
      { name: "iPhone", href: "#" },
      { name: "Samsung", href: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "Electronics", href: "#" },
      { name: "Fashion", href: "#" },
    ],
  },
  {
    title: "Electronic Brands",
    links: [
      { name: "Apple", href: "#" },
      { name: "Sony", href: "#" },
    ],
  },
  {
    title: "Essentials",
    links: [
      { name: "Toiletries", href: "#" },
      { name: "Groceries", href: "#" },
    ],
  },
];

const AsideNav = () => {
  const pathname = usePathname(); // Obtém o pathname atual

  return (
    <Sheet>
      {/* Botão do menu hamburguer */}
      <SheetTrigger>
        <CiMenuBurger size={30} className="text-accent mt-2" />
      </SheetTrigger>

      {/* Conteúdo do Menu Lateral */}
      <SheetContent
        side="left"
        className="bg-white p-6 text-gray-800 sm:w-[75%] md:w-[60%] lg:w-[40%] border-2 border-accent"
      >
        <div className="absolute mt-[800px]">
          <ThemeToggle />
        </div>

        {/* Cabeçalho do menu */}
        <SheetHeader className="border-b-2 dark:border-b-gray-800 mb-4">
          <SheetTitle className="text-3xl font-bold text-accent dark:text-accent">
            AllMart
          </SheetTitle>
          <SheetDescription className="text-lg text-primary dark:text-white/85">
            Your shopping, simplified
          </SheetDescription>
        </SheetHeader>

        {/* Links de navegação */}
        <nav className="dark:text-white flex flex-col space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="grid grid-flow-row gap-1">
              <h3 className="text-xl font-semibold text-accent">
                {section.title}
              </h3>
              {section.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`hover:text-accent transition-colors text-black dark:text-white dark:hover:text-accent text-base ${
                    pathname === link.href ? "text-accent" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* Adiciona separador após cada seção, exceto a última */}
              {index < sections.length - 1 && (
                <hr className="border-t-2 dark:border-gray-800 my-4" />
              )}
            </div>
          ))}
        </nav>

        {/* Rodapé do menu */}
        <footer className="mt-[130px] border-t-2 dark:border-t-gray-800 pt-4">
          <p className="text-sm text-primary dark:text-white/85">
            © 2024 AllMart. All rights reserved.
          </p>
        </footer>
      </SheetContent>
    </Sheet>
  );
};

export default AsideNav;
