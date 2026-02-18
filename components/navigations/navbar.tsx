"use client";

import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { navButtons, navGithub, navLinks } from "@/config/navbar";

import Container from "../global/container";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <Container className="sticky top-0 z-40 backdrop-blur-2xl">
      <nav className="relative flex h-20 items-center justify-between px-6">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex items-center gap-1"
        >
          <Link href="/">
            <Image
              src="/assets/logo_1.png"
              alt="Meridian"
              width={20}
              height={20}
              className="invert"
            />
          </Link>
          <h2 className="font-logo text-2xl">eridian</h2>
        </motion.div>
        <ul className="hidden items-center gap-10 text-sm text-zinc-400 md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex items-center gap-2 hover:text-zinc-200"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href={navGithub.href}
            target="_blank"
            className="text-accent flex items-center gap-1 text-xs"
          >
            <navGithub.icon className="size-4" />
            {navGithub.starred}
          </Link>
          <ButtonGroup>
            {navButtons.map((button, index) => (
              <Button
                key={index}
                variant="outline"
                className="group cursor-pointer rounded-xs"
              >
                <button.icon className="group-hover:text-accent size-4" />
                {button.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <button
          className="text-zinc-400 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {mobileMenuOpen && (
          <div className="border-border absolute top-full left-0 z-50 h-screen w-full border-t bg-black md:hidden">
            <ul className="flex flex-col gap-4 p-6 text-base text-zinc-400">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="after:bg-gold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:text-zinc-200 hover:after:w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex w-full flex-col gap-2">
                {navButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full rounded-xs"
                  >
                    <button.icon className="size-4" />
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-[1px] overflow-hidden">
          <motion.div
            className="from-accent to-accent-foreground h-full bg-gradient-to-r"
            style={{ transformOrigin: "left", scaleX }}
            aria-hidden
          />
        </div>
      </nav>
    </Container>
  );
}
