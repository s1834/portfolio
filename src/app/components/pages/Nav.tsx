// "use client"; // Add this to make the component a Client Component

// import { useState, useEffect } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Switch,
// } from "@nextui-org/react";
// import { MoonIcon } from "@/app/components/icons/MoonIcon";
// import { SunIcon } from "@/app/components/icons/SunIcon";

// export function Nav() {
//   const [theme, setTheme] = useState<"light" | "dark">("dark");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("theme");
//       if (savedTheme === "light" || savedTheme === "dark") {
//         setTheme(savedTheme);
//         document.documentElement.classList.toggle(
//           "dark",
//           savedTheme === "dark"
//         );
//       }
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <Navbar
//       position="static"
//       maxWidth="lg"
//       className="fixed backdrop-blur-sm bg-opacity-30 bg-white/0 dark:bg-black/0 py-4 px-6"
//     >
//       <NavbarBrand>
//         <p className="font-bold text-inherit text-2xl">s1834</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-8" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Experience
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="#">Projects</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="#">Changelog</Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem>
//           <Switch
//             isSelected={theme === "dark"}
//             size="lg"
//             color="secondary"
//             thumbIcon={({ isSelected, className }) =>
//               isSelected ? (
//                 <SunIcon className={className} />
//               ) : (
//                 <MoonIcon className={className} />
//               )
//             }
//             onValueChange={toggleTheme}
//           />
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
