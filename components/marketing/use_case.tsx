"use client";

import Container from "../global/container";
import SectionHeading from "../global/section-heading";
import FifthCard from "./features-secondary/fifth";
import FirstCard from "./features-secondary/first";
import FourthCard from "./features-secondary/fourth";
import SecondCard from "./features-secondary/second";
import SixthCard from "./features-secondary/sixth";
import ThirdCard from "./features-secondary/third";

export default function UseCaseSection() {
  return (
    <Container>
      <SectionHeading heading="USE CASES" />
      <div className="grid grid-cols-1 divide-x divide-y md:grid-cols-3">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        {/* <FourthCard />
        <FifthCard />
        <SixthCard /> */}
      </div>
    </Container>
  );
}
