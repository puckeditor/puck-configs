import { Config as PuckConfig, Data, DropZone } from "@puckeditor/core";

import Accordion, { AccordionProps } from "./components/accordion";
import Card, { CardProps } from "./components/card";
import Grid, { GridProps } from "./components/grid";
import Footer, { FooterProps } from "./components/footer";
import Hero, { HeroProps } from "./components/hero";
import Navbar, { NavbarProps } from "./components/navbar";
import Stats, { StatsProps } from "./components/stats";
import Timeline, { TimelineProps } from "./components/timeline";

export type Props = {
  Accordion: AccordionProps;
  Card: CardProps;
  Grid: GridProps;
  Footer: FooterProps;
  Hero: HeroProps;
  Navbar: NavbarProps;
  Stats: StatsProps;
  Timeline: TimelineProps;
};

export type Config = PuckConfig<Props>;

export const conf: Config = {
  categories: {
    Layout: {
      components: ["Footer", "Grid", "Navbar"],
    },
    Content: {
      components: ["Accordion", "Card", "Hero"],
    },
    Data: {
      components: ["Stats", "Timeline"],
    },
  },
  root: {
    render: ({ children }) => {
      return (
        <div
          className="overflow-auto min-h-[100dvh] [&>*]:!h-[100%] [&>*]:!min-h-[100dvh]"
          data-theme="cupcake"
        >
          {children}
        </div>
      );
    },
  },
  components: {
    Accordion,
    Card,
    Grid,
    Footer,
    Hero,
    Navbar,
    Stats,
    Timeline,
  },
};

export type UserData = Data<Props>;

export const initialData: Record<string, UserData> = {};

export const componentKey = Buffer.from(
  `${Object.keys(conf.components).join("-")}-${JSON.stringify(initialData)}`,
).toString("base64");

export default conf;
