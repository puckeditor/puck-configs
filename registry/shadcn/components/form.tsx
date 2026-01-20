import { Button, ButtonProps } from "@/registry/shadcn/components/button";
import { FieldProps, Field } from "@/registry/shadcn/components/field";

export const formMethods = ["get", "post", "put", "patch", "delete"] as const;

export type FormMethods = (typeof formMethods)[number];

export interface FormProps {
  title?: string;
  fields: FieldProps[];
  action: string;
  method: FormMethods;
  button: ButtonProps;
  disableSubmitNavigation?: boolean;
}

export const Form = (props: FormProps) => {
  return (
    <form
      action={props.action}
      method={props.method}
      className="rounded-md max-w-sm flex flex-col border p-8 gap-4"
      onSubmit={
        props.disableSubmitNavigation ? (e) => e.preventDefault() : undefined
      }
    >
      {props.title && <p>{props.title}</p>}
      {props.fields.map((field, index) => (
        <Field key={index} id={`field-${index}`} {...field} />
      ))}
      {props.button && (
        <Button
          label={props.button.label}
          url={props.button.url}
          variant={props.button.variant}
          size={props.button.size}
          icon={props.button.icon}
          type="submit"
          disableNavigation={props.disableSubmitNavigation}
        />
      )}
    </form>
  );
};
