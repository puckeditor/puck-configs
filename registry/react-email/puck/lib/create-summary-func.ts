export type CreateSummaryFunc = <T>(
  getItemLabel: (item: T) => string,
  defaultLabel?: string,
  maxLength?: number,
) => (item: T, index?: number) => string;

const createSummaryFunc: CreateSummaryFunc = (
  getItemLabel,
  defaultLabel = "Item",
  maxLength = 12,
) => {
  return (item) => {
    const res = getItemLabel(item);

    return (
      `${res.slice(0, maxLength)}${res.length > maxLength ? "..." : ""}` ||
      defaultLabel
    );
  };
};

export default createSummaryFunc;
