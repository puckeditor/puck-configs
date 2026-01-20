import { Label } from "@/registry/shadcn/components/ui/label";
import { Input } from "@/registry/shadcn/components/ui/input";

export const fieldTypes = [
  "text",
  "number",
  "password",
  "date",
  "file",
] as const;

export type FieldTypes = (typeof fieldTypes)[number];

export interface FieldProps {
  id?: string;
  name: string;
  label: string;
  type: FieldTypes;
}

export const Field = (props: FieldProps) => {
  return (
    <Label className="grid w-full max-w-sm items-center gap-1">
      {props.label}
      <Input id={props.id} name={props.name} type={props.type} />
    </Label>
  );
};
