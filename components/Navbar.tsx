import Link from "next/link";
import Image from "next/image";
import {NAV_LINKS} from "@/constants";
import Button from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between max-container padding-container
     relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo-branding" width={74} height={29}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link: { href: string, key: string, label: string }) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer
              pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Log in"
          startIcon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image src={"/menu.svg"} alt={"menu"} width={32} height={32} className=" inline-block lg:hidden cursor-pointer"/>
    </nav>
  )
}