import { Fields, DefaultComponentProps } from "@puckeditor/core";

export type FieldResolver<FieldProps> = <
  ComponentProps extends DefaultComponentProps,
>(
  fieldProps: FieldProps,
  fields: Fields<ComponentProps>,
) => Fields<ComponentProps>;
