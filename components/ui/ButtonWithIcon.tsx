import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <Button className="py-8 px-12 bg-orange-400 ">
      <EnvelopeOpenIcon className="mr-4 h-4 w-4" /> Add to cart
    </Button>
  )
}
