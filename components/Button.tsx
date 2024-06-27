'use client'
import Image from "next/image";

interface ButtonProps {
  type?: 'button' | 'submit';
  title: string;
  startIcon?: string;
  variant?: "btn_dark_green" | string;
  endIcon?: string;
  onClick?: () => void;
  full?: boolean,
}

export default function Button ({type, title, startIcon, variant, endIcon, onClick, full}: ButtonProps) {

  return (
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
      onClick={() => {
        onClick && onClick()
        console.log('Button Clicked', title)
      }}
    >
      {startIcon && <Image src={startIcon} alt={title} width={24} height={24}/>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      {endIcon && <Image src={endIcon} alt={title} width={24} height={24}/>}
    </button>
  )
}