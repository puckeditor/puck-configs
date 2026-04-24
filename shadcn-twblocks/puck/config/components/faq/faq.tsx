import { registerOverlayPortal } from "@puckeditor/core";
import { cn } from "@/puck/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import {
  CompoundContent,
  CompoundContentProps,
} from "@/puck/components/content";

export interface FaqProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  layout?: "single-col" | "two-col";
  type?: "single" | "multiple";
  collapsible?: "true" | "false";
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const Faq = ({
  padding,
  layout = "two-col",
  badge,
  heading,
  description,
  buttons,
  type = "single",
  collapsible = "true",
  faqs,
}: FaqProps) => (
  <CompoundContainer padding={padding}>
    <div
      className={cn("grid gap-10", {
        "lg:grid-cols-1 items-center": layout === "single-col",
        "lg:grid-cols-2": layout === "two-col",
      })}
    >
      <CompoundContent
        badge={badge}
        heading={heading}
        description={description}
        buttons={buttons}
        alignContent={layout === "single-col" ? "center" : "start"}
      />
      <Accordion
        type={type}
        collapsible={collapsible === "true"}
        className="w-full"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={"index-" + index}
            ref={registerOverlayPortal}
          >
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </CompoundContainer>
);
