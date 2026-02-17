import { CSSProperties } from "react";

import InternalHeading from "../../../components/heading";

export const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type HeadingLevel = (typeof headingLevels)[number];

const levelStyleMap: Record<HeadingLevel, CSSProperties> = {
  h1: { padding: "32px 0 16px 0" },
  h2: { padding: "24px 0 12px 0" },
  h3: { padding: "20px 0 10px 0" },
  h4: { padding: "16px 0 8px 0" },
  h5: { padding: "12px 0 6px 0" },
  h6: { padding: "8px 0 4px 0" },
};

export type HeadingProps = {
  content: string;
  level: HeadingLevel;
};

const Heading = ({ content, level }: HeadingProps) => {
  return (
    <InternalHeading style={levelStyleMap[level]} as={level}>
      {content}
    </InternalHeading>
  );
};

export default Heading;
