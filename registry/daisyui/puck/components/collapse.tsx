"use client";
import { ReactNode } from "react";

import useRegisterPortal from "../hooks/use-portal";

export type CollapseProps = {
  name: string;
  title: string;
  content: ReactNode;
};

const Collapse = ({ name, title, content }: CollapseProps) => {
  const ref = useRegisterPortal<HTMLDetailsElement>();

  return (
    <details className="collapse bg-base-200" name={name} ref={ref}>
      <summary className="collapse-title text-xl font-medium">{title}</summary>
      <div className="collapse-content text-wrap">
        <div className="divider my-0 mb-1" />
        {content}
      </div>
    </details>
  );
};

export default Collapse;
