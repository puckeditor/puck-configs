import { Img, Text } from "@react-email/components";

import theme from "@/registry/react-email/puck/constants/theme";

export type LogoProps = {
  label?: string;
  src: string;
  alt: string;
};

const Logo = ({ label, src, alt }: LogoProps) => {
  return (
    <div
      style={{ width: "fit-content", maxWidth: "120px", textAlign: "center" }}
    >
      {src && (
        <Img
          height="42"
          width="42"
          alt={alt}
          src={src}
          style={{ margin: "auto", objectFit: "cover" }}
        />
      )}
      {label && (
        <Text
          style={{
            marginTop: 0,
            margin: "auto",
            fontWeight: 600,
            color: theme.palette.light.text.primary,
          }}
        >
          {label}
        </Text>
      )}
    </div>
  );
};

export default Logo;
