// ...existing code...
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { footerConfig } from "@/config/marketing";

import Container from "../global/container";

export default function Footer() {
  const { description, email, socials, links, rights, love } = footerConfig;

  return (
    <Container>
      <div className="pt-12 pb-8">
        <div className="grid grid-cols-1 gap-8 px-12 md:grid-cols-[4fr_7fr]">
          <div>
            <div className="space-y-2">
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
              <p className="text-muted-foreground max-w-xs text-xs">
                {description}
              </p>
              <div>
                <Link href="#" className="text-muted-foreground text-xs">
                  {email}
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-3">
                {socials.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Link key={idx} className="text-muted-foreground" href="#">
                      <Icon size={16} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 md:col-span-1">
            {Object.values(links).map((section, idx) => (
              <div key={idx}>
                <h4 className="text-accent text-xs font-medium">
                  {section.heading}
                </h4>
                <ul className="mt-3 space-y-2">
                  {section.links.map((l, i) => (
                    <li key={i}>
                      <Link
                        href={l.href}
                        className="text-muted-foreground hover:text-foreground text-xs"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 text-center">
        <p className="text-muted-foreground text-xs italic">
          {" "}
          {footerConfig.love}
        </p>
      </div>
    </Container>
  );
}
