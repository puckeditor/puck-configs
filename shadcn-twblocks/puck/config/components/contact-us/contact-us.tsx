import {
  CompoundForm,
  CompoundFormProps,
} from "@/puck/components/form";

import {
  CompoundContainer,
  CompoundContainerProps,
} from "@/puck/components/container";
import {
  CompoundContent,
  CompoundContentProps,
} from "@/puck/components/content";

export interface ContactUsProps extends CompoundContentProps {
  padding?: CompoundContainerProps["padding"];
  form: CompoundFormProps;
}

export const ContactUs = (props: ContactUsProps) => {
  return (
    <CompoundContainer padding={props.padding} className={props.className}>
      <div className="grid lg:grid-cols-2 gap-10">
        <CompoundContent
          badge={props.badge}
          heading={props.heading}
          description={props.description}
          features={props.features}
          buttons={props.buttons}
          alignContent="start"
          spacing="normal"
        />

        <div className="justify-center flex items-center">
          <CompoundForm
            title={props.form.title}
            fields={props.form.fields}
            action={props.form.action}
            method={props.form.method}
            button={props.form.button}
          />
        </div>
      </div>
    </CompoundContainer>
  );
};
