"use client";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { GLTF } from "three-stdlib";

import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { heroConfig } from "@/config/marketing";

import Container from "../global/container";
import { Button } from "../ui/button";

type ModelProps = {
  url: string;
};

type GLTFResult = GLTF & {
  nodes: Record<string, any>;
  materials: Record<string, any>;
};

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url) as GLTFResult;
  const modelRef = useRef<any>(null);
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.002;
      modelRef.current.rotation.y += 0.003;
      modelRef.current.rotation.z += 0.0015;
    }
  });

  return <primitive ref={modelRef} object={scene} />;
}

export default function HeroSection() {
  return (
    <Container>
      <div className="grid w-full md:grid-cols-[6fr_4fr]">
        <div className="space-y-4 pt-20 pb-12 pl-6 md:py-24 md:pl-12">
          <Badge className="bg-foreground/5 text-foreground border-border relative border px-4 py-1 text-xs md:text-sm">
            {heroConfig.badgeContent}
            <div className="via-accent absolute bottom-0 h-px w-full bg-linear-to-r from-transparent to-transparent" />
          </Badge>
          <motion.h1
            initial={{
              y: 12,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="bg-linear-to-t from-orange-400 via-zinc-400 to-zinc-200 bg-clip-text pb-1 text-4xl text-transparent md:text-6xl"
          >
            {heroConfig.heroHeading}
          </motion.h1>
          <motion.p
            initial={{
              y: 12,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-muted-foreground max-w-xl text-sm text-clip md:text-lg"
          >
            {heroConfig.heroPara}
          </motion.p>
          <motion.div
            initial={{
              y: 12,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <Button className="border-accent/20 bg-muted/20 text-foreground hover:shadow-accent/20 ho flex cursor-pointer items-center border transition-all duration-300 ease-in-out hover:bg-transparent hover:shadow-lg">
              <heroConfig.ctaButton.icon1 />
              {heroConfig.ctaButton.label}
              <heroConfig.ctaButton.icon2 />
            </Button>
          </motion.div>
          <motion.p
            initial={{
              y: 12,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="text-muted-foreground text-sm"
          >
            {heroConfig.supportedPara}
          </motion.p>
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="hidden md:flex"
        >
          <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model url="/model/cube_cascade.glb" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </Container>
  );
}
