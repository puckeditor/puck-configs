// TODO: Replace with a fancier loading indicator if needed
const LoadingIndicator = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <p style={{ fontSize: "1.5rem" }}>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
