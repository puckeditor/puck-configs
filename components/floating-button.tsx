import { PropsWithChildren } from "react";

// TODO: Replace with fancier button if needed
const FloatingButton = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <a
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        backgroundColor: "white",
        padding: "7px 19px",
        border: "1px solid black",
        borderRadius: 4,
        minHeight: "34px",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "black",
        fontWeight: 400,
        textDecoration: "none",
        fontSize: "14px",
      }}
      href={href}
    >
      {children}
    </a>
  );
};

export default FloatingButton;
