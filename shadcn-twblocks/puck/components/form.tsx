import {
  CompoundButton,
  CompoundButtonProps,
} from "@/puck/components/button";
import {
  CompoundFieldProps,
  CompoundField,
} from "@/puck/components/field";
import { useIsEditorMode } from "@/puck/context/is-editor-mode-context";

export const formMethods = ["get", "post", "put", "patch", "delete"] as const;

export type FormMethods = (typeof formMethods)[number];

export interface CompoundFormProps {
  title?: string;
  fields: CompoundFieldProps[];
  action: string;
  method: FormMethods;
  button: CompoundButtonProps;
}

export const CompoundForm = (props: CompoundFormProps) => {
  const isEditorMode = useIsEditorMode();

  return (
    <form
      action={props.action}
      method={props.method}
      className="rounded-md max-w-sm flex flex-col border p-8 gap-4"
      onSubmit={isEditorMode ? (e) => e.preventDefault() : undefined}
    >
      {props.title && <p>{props.title}</p>}
      {props.fields.map((field, index) => (
        <CompoundField key={index} id={`field-${index}`} {...field} />
      ))}
      {props.button && (
        <CompoundButton
          label={props.button.label}
          url={props.button.url}
          variant={props.button.variant}
          size={props.button.size}
          icon={props.button.icon}
          type="submit"
        />
      )}
    </form>
  );
};
