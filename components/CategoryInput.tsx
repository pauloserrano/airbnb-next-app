"use client"

import { IconType } from "react-icons"

interface CategoryInputProps {
  label: string
  selected?: boolean
  icon: IconType
  onClick: (value: string) => void
}

export default function CategoryInput({ icon: Icon, label, onClick, selected}: CategoryInputProps) {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
        rounded-xl
        border-2
        p-4
        flex
        items-center
        gap-3
        hover:border-black
        transition
        cursor-pointer
        ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      <Icon size={30} />
      <p className="font-semibold">{label}</p>
    </div>
  )
}
