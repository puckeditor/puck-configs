"use client";
import { registerOverlayPortal, WithPuckProps } from "@puckeditor/core";
import { cn } from "@/registry/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/shadcn/components/ui/accordion";
import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Content, ContentProps } from "@/registry/shadcn/components/content";

export interface FaqProps extends ContentProps {
  padding?: ContainerProps["padding"];
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
  puck,
}: WithPuckProps<FaqProps>) => (
  <Container padding={padding}>
    <div
      className={cn("grid gap-10", {
        "lg:grid-cols-1 items-center": layout === "single-col",
        "lg:grid-cols-2": layout === "two-col",
      })}
    >
      <Content
        badge={badge}
        heading={heading}
        description={description}
        buttons={buttons}
        alignContent={layout === "single-col" ? "center" : "start"}
        disableNavigation={puck?.isEditing}
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
  </Container>
);
