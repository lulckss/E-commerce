"use client";

import * as React from "react";
import Link from "next/link";

// Função utilitária para combinar classes condicionalmente (substituindo 'cn')
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Ícones (exemplo simples de ícones)
const Icons = {
  logo: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  ),
};

// Importando componentes do Radix UI (Navigation Menu)
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@radix-ui/react-navigation-menu";

// Lista de componentes (dados fictícios)
const components = [
  {
    title: "Alert Dialog",
    href: "",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

// Componente de menu de navegação
const Section = () => {
  return components.map((item, index) => {
    return (
      <div className="hidden xl:flex lg:flex md:flex flex-row items-center justify-center border">
        <NavigationMenu
          key={index}
          className="grid gap-3 sm:w-[200px] md:w-[400px] lg:w-[500px] xl:w-[700px] lg:grid-cols-[.75fr_1fr]"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Fruits</NavigationMenuTrigger>
              <NavigationMenuContent className="grid w-[200px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[200px]">
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                  ></NavigationMenuLink>
                </Link>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Link
                  </NavigationMenuLink>
                </Link>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Link
                  </NavigationMenuLink>
                </Link>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Link
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  });
};
export default Section;
