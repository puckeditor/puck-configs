import { Text as ReactEmailText } from "@react-email/components";

export type TextProps = {
  content: string;
};

const Text = ({ content }: TextProps) => {
  return (
    <ReactEmailText style={{ whiteSpace: "pre-wrap" }}>
      {content}
    </ReactEmailText>
  );
};

export default Text;
