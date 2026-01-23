"use client";
import { ReactNode, useId } from "react";
import { PuckComponent } from "@puckeditor/core";

import Collapse from "../../../components/collapse";
import Content, { ContentProps } from "../../../components/content";

export interface AccordionProps extends ContentProps {
  title: ReactNode;
  description: ReactNode;
  items: { title: string; body: string }[];
}

const Accordion: PuckComponent<AccordionProps> = ({
  title,
  description,
  items,
  buttons,
  puck,
}) => {
  const accordionId = useId();

  return (
    <Content
      title={title}
      description={description}
      buttons={buttons}
      disableNavigation={puck?.isEditing}
    >
      <div className="w-full space-y-4">
        {items.map((item, idx) => (
          <Collapse
            key={idx}
            name={`accordion-${accordionId}`}
            title={item.title}
            content={item.body}
          />
        ))}
      </div>
    </Content>
  );
};

export default Accordion;
