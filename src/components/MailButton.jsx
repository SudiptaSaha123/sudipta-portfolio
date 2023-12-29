import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const MailButton = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger className='bg-gray-700 text-white px-6 py-4 cursor-pointer rounded-2xl font-semibold tracking-widest'>mail me : sudiptasaha883@gmail.com</HoverCardTrigger>
        <HoverCardContent className='text-center'>
          Let's Build Awesome Projects together. Your Idea Turns into Reality Here.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default MailButton
