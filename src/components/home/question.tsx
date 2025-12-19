import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Questions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>How long does the installation process take?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            The installation timeline depends on the size and complexity of the project. On average, sports courts can be installed within 2-4 weeks, while larger projects such as football fields or running tracks may take 6-8 weeks.
          </p>
          <p>
            We will provide a more precise timeline after assessing your specific requirements.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Are your sports turfs suitable for all weather conditions?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes, our sports turfs are designed to withstand various weather conditions, providing a durable, long-lasting solution. We use high-quality synthetic materials that offer great performance in both hot and rainy climates.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How durable is your sports turf?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our sports turf is designed for high performance and durability, typically lasting up to 10 years with proper care and maintenance. We use top-grade materials that can handle frequent use and provide a consistent playing experience.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What maintenance services do you offer?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer comprehensive maintenance services to ensure the longevity of your sports infrastructure. This includes turf cleaning, re-stitching, surface repairs, drainage system checks, and more.
          </p>
          <p>
            Regular maintenance helps preserve the quality and performance of your facilities.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Do you provide after-sales support?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes, we offer comprehensive after-sales support to ensure your facilities continue to perform optimally. Our team is always available for maintenance, troubleshooting, and any questions you may have.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

