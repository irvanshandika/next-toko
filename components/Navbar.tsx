"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from "@img/logo.ico";

function NavigasiBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Produk",
      href: "#",
    },
    {
      label: "Kontak",
      href: "#",
    },
    {
        label: "Alamat",
        href: "#",
    }
  ];

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
          <NavbarBrand>
            <Image src={Logo} alt="Vercel Logo" className="w-16 h-16" priority />
            <p className="font-bold text-inherit ml-2">MayBeauty.Skin</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full hover:text-blue-500" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"} className="w-full hover:text-blue-500" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavigasiBar;
