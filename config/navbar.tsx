import {
  IconBrandGithub,
  IconDevices,
  IconHome,
  IconInbox,
  IconLogin,
  IconPhoneCalling,
  IconUser,
} from "@tabler/icons-react";

export const navLinks = [
  {
    label: "Home",
    href: "#",
    icon: IconHome,
  },
  {
    label: "About",
    href: "#",
    icon: IconInbox,
  },
  {
    label: "Services",
    href: "#",
    icon: IconDevices,
  },
  {
    label: "Contact",
    href: "#",
    icon: IconPhoneCalling,
  },
];

export const navButtons = [
  {
    label: "Login",
    href: "/auth/login",
    icon: IconLogin,
  },
  {
    label: "Get Started",
    href: "/auth",
    icon: IconUser,
  },
];

export const navGithub = {
  icon: IconBrandGithub,
  href: "https://github.com/yuppp",
  starred: 100,
};
