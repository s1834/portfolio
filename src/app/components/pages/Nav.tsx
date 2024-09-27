"use client"; // Add this to make the component a Client Component

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
} from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function Nav() {
  return (
    <Navbar
      position="static"
      maxWidth="lg"
      className="fixed backdrop-blur-sm bg-opacity-30 bg-white/0 dark:bg-black/0 py-4 px-6"
    >
      <NavbarBrand>
        <p className="font-bold text-inherit text-2xl">s1834</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Changelog</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <IconSun className={className} />
              ) : (
                <IconMoon className={className} />
              )
            }
          ></Switch>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
