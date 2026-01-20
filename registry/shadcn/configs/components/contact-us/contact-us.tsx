import { WithPuckProps } from "@puckeditor/core";
import { Form, FormProps } from "@/registry/shadcn/components/form";

import {
  Container,
  ContainerProps,
} from "@/registry/shadcn/components/container";
import { Content, ContentProps } from "@/registry/shadcn/components/content";

export interface ContactUsProps extends ContentProps {
  padding?: ContainerProps["padding"];
  form: FormProps;
}

export const ContactUs = (props: WithPuckProps<ContactUsProps>) => {
  return (
    <Container padding={props.padding} className={props.className}>
      <div className="grid lg:grid-cols-2 gap-10">
        <Content
          badge={props.badge}
          heading={props.heading}
          description={props.description}
          features={props.features}
          buttons={props.buttons}
          alignContent="start"
          spacing="normal"
          disableNavigation={props.puck?.isEditing}
        />

        <div className="justify-center flex items-center">
          <Form
            title={props.form.title}
            fields={props.form.fields}
            action={props.form.action}
            method={props.form.method}
            button={props.form.button}
            disableSubmitNavigation={props.puck?.isEditing}
          />
        </div>
      </div>
    </Container>
  );
};
