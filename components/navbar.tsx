"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { Dropdown } from "@nextui-org/dropdown";
import { useState } from "react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo } from "@/components/icons";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

// Currency data with corresponding flags (sample data, add flags for each country)
const currencyData = {
  Portugal: { currency: "EUR", flag: "/path-to-flags/portugal.png" },
  "United States": { currency: "USD", flag: "/path-to-flags/usa.png" },
  "United Kingdom": { currency: "GBP", flag: "/path-to-flags/uk.png" },
  Japan: { currency: "JPY", flag: "/path-to-flags/japan.png" },
  Canada: { currency: "CAD", flag: "/path-to-flags/canada.png" },
  Australia: { currency: "AUD", flag: "/path-to-flags/australia.png" },
  Brazil: { currency: "BRL", flag: "/path-to-flags/brazil.png" },
  China: { currency: "CNY", flag: "/path-to-flags/china.png" },
  Denmark: { currency: "DKK", flag: "/path-to-flags/denmark.png" },
  // Add more locations...
};

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{
    label: string;
    currency: string;
    flag: string;
  } | null>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCountrySelect = (country: {
    label: string;
    currency: string;
    flag: string;
  }) => {
    setSelectedCountry(country);
    handleCloseModal(); // Close the modal after selection
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSave = () => {
    // Logic to save if needed (e.g., update backend)
    setIsModalOpen(false);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <>
      <NextUINavbar maxWidth="xl" shouldHideOnScroll>
        {/* Left - Brand */}
        <NavbarContent className="flex items-center justify-between w-full">
          <NavbarBrand as="li" className="flex items-center gap-3">
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Logo />
              <p className="font-bold text-inherit">Aura Vista</p>
            </NextLink>
          </NavbarBrand>

          {/* Centered Theme Switch */}
          <div className="flex-grow flex justify-center">
            <ThemeSwitch />
          </div>

          {/* Right Side Navigation Items */}
          <ul className="hidden lg:flex gap-4 ml-2 items-center">
            <li>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleModalToggle}
              >
                <GlobeAltIcon className="h-5 w-5 text-gray-600" />
                <span>
                  {selectedCountry ? (
                    <>
                      <img
                        alt={selectedCountry.label}
                        src={selectedCountry.flag}
                        className="w-6 h-6 inline-block mr-2"
                      />
                      {selectedCountry.label} ({selectedCountry.currency})
                    </>
                  ) : (
                    "Select Location"
                  )}
                </span>
              </div>
            </li>
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex items-center gap-2">
            <NavbarMenuToggle />
          </div>
        </NavbarContent>

        {/* Menu for mobile view */}
        <NavbarMenu>
          {searchInput}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  href="#"
                  size="lg"
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>

      
     
    </>
  );
};
