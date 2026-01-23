import { ComponentConfig, Slot } from "@puckeditor/core";

export type GridProps = {
  contents: Slot;
  numberOfCols: number;
};

const conf: ComponentConfig<GridProps> = {
  metadata: {
    ai: {
      instructions: "Arrange items on a 12-col grid",
    },
  },
  fields: {
    numberOfCols: {
      type: "number",
      min: 1,
      max: 12,
    },
    contents: {
      type: "slot",
    },
  },
  defaultProps: {
    contents: [],
    numberOfCols: 4,
  },
  render: ({ contents: Contents, numberOfCols }) => (
    <Contents
      className={`grid gap-4 py-8 max-w-7xl mx-auto my-16 px-4 ${
        numberOfCols === 1
          ? "grid-cols-1"
          : numberOfCols === 2
          ? "grid-cols-2"
          : numberOfCols === 3
          ? "grid-cols-3"
          : numberOfCols === 4
          ? "grid-cols-4"
          : numberOfCols === 5
          ? "grid-cols-5"
          : numberOfCols === 6
          ? "grid-cols-6"
          : numberOfCols === 7
          ? "grid-cols-7"
          : numberOfCols === 8
          ? "grid-cols-8"
          : numberOfCols === 9
          ? "grid-cols-9"
          : numberOfCols === 10
          ? "grid-cols-10"
          : numberOfCols === 11
          ? "grid-cols-11"
          : numberOfCols === 12
          ? "grid-cols-12"
          : ""
      }`}
    />
  ),
};

export default conf;
