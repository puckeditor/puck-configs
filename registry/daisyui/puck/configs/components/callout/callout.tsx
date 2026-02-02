import { ReactNode } from "react";
import { PuckComponent } from "@puckeditor/core";
import { MoveRight } from "lucide-react";

import Button from "../../../components/button";

export type CalloutProps = {
  text: string;
  cta: { label: ReactNode; href: string };
};

const Callout: PuckComponent<CalloutProps> = ({ text, cta }) => {
  return (
    <div className="bg-accent w-full py-10 px-4">
      <div className="mx-auto flex flex-col items-center justify-center gap-4 lg:gap-8 lg:flex-row lg:flex-wrap lg:max-w-5xl">
        <p className="text-accent-content text-2xl font-bold text-center lg:text-3xl ">
          {text}
        </p>
        {cta.href && (
          <Button url={cta.href}>
            {cta.label}
            <MoveRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Callout;
