"use client"

import Image from "next/image"

export default function Avatar() {
  return (
    <Image 
      alt="avatar"
      height="30"
      width="30"
      className="rounded-full"
      src="/images/placeholder.jpg"
    />
  )
}
