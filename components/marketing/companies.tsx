"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

import { companiesConfig } from "@/config/hero";

import Container from "../global/container";

export default function CompaniesSection() {
  const [logos, setLogos] = useState(companiesConfig);
  const [visible, setVisible] = useState(true);

  const shuffleArray = (array: any) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setLogos((prev) => shuffleArray(prev));
        setVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="divide-border grid w-full grid-cols-2 divide-x divide-y md:grid-cols-6 md:divide-y-0">
        <AnimatePresence>
          {visible &&
            logos.map((company, index) => (
              <div
                key={company.logo}
                className="flex items-center justify-center p-6"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={company.logo}
                    alt={"Company Logo"}
                    height={80}
                    width={80}
                  />
                </motion.div>
              </div>
            ))}
        </AnimatePresence>
      </div>
    </Container>
  );
}
