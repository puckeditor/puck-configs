import { cn } from "../../lib/utils";

export type ImageData = {
  src: string;
  alt?: string;
};

export type CompoundImageProps = ImageData & {
  className?: string;
};

export const CompoundImage = (props: CompoundImageProps) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={cn("w-full object-cover block", props.className)}
    />
  );
};
