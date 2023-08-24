"use client";
import { Button } from "@/components/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full md:max-w-lg h-screen flex-col items-center">
      <div className="w-full h-[45%] bg-[url('../assets/images/hero-bg.png')] bg-top bg-no-repeat bg-cover border-b-4 border-b-primary" />
      <section className="flex flex-col px-4 py-7 gap-6">
        <h1 className="font-bold text-dark text-2xl">
          Pesquisa BiB - Viva o Centro
        </h1>
        <p className="text-base text-dark ">
          Lorem ipsum dolor sit amet consectetur. Ipsum lorem duis facilisis
          orci purus in id rhoncus. Imperdiet ultricies mauris dis et vel
          imperdiet. Tincidunt tempus aliquet amet sagittis nisl urna. Tristique
          ac urna id diam eget leo enim.
        </p>
        <div className="flex">
          <div className="w-full flex flex-col items-start">
            <span className="flex font-medium text-base italic px-2 border border-dark rounded-full text-dark">
              <Icon
                icon="openmoji:timer"
                width={24}
                className="ml-[-15px] mt-[-5px]"
              />
              Tempo estimado
            </span>
            <strong className="px-6 font-bold text-3xl text-dark">5 min</strong>
          </div>
        </div>
        <div className="flex w-full justify-end pr-2">
          <Link href="/form">
            <Button variant="continue" size="12.5rem">
              Continuar
              <Icon icon="solar:arrow-right-broken" width={24} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
