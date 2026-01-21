export type CreateSummaryFunc = <T>(
  /** Callback to get the item label from the item */
  getItemLabel: (item: T) => string,
  /** Label to use when the item label returned by the callback is empty */
  defaultLabel?: string,
  /** Maximum length of the summary string, defaults to 12 */
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
