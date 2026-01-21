import {
  Heading as ReactEmailHeading,
  HeadingProps,
} from "@react-email/components";

const Heading = ({ as, children, style }: HeadingProps) => {
  return (
    <ReactEmailHeading as={as} style={{ fontWeight: 600, ...style }}>
      {children}
    </ReactEmailHeading>
  );
};

export default Heading;
