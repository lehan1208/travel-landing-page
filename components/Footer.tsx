import Link from "next/link";
import Image from "next/image";
import {FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS} from "@/constants";
import React from "react";

export default function Footer() {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-5 sm:justify-between md:flex-1 px-2">
            {FOOTER_LINKS.map(links => (
              <FooterColumn
                key={links.title}
                title={links.title}
              >
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {links.links.map(link => (
                    <Link href="/" key={link} className="transition-all hover:font-bold">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map(link => (
                  <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap text-gray-30">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map(link => (
                    <Link href={link.href} key={link.icon}>
                      <Image src={link.icon} alt={link.icon} width={24} height={24}/>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"/>
        <p className="regular-14 text-gray-30 w-full text-center">2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode
};

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrapi">{title}</h4>
      {children}
    </div>
  )
};

