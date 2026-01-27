import { Config as PuckConfig, Data as PuckData } from "@puckeditor/core";

import Accordion, { AccordionProps } from "./components/accordion";
import Card, { CardProps } from "./components/card";
import Grid, { GridProps } from "./components/grid";
import Footer, { FooterProps } from "./components/footer";
import Hero, { HeroProps } from "./components/hero";
import Navbar, { NavbarProps } from "./components/navbar";
import Products, { ProductsProps } from "./components/products";
import ProductCard, {
  ProductCardProps,
} from "./components/products/product-card-config";
import RichText, { RichTextProps } from "./components/rich-text";
import Stats, { StatsProps } from "./components/stats";
import Timeline, { TimelineProps } from "./components/timeline";
import Root from "./root";

export type Props = {
  Accordion: AccordionProps;
  Card: CardProps;
  Grid: GridProps;
  Footer: FooterProps;
  Hero: HeroProps;
  Navbar: NavbarProps;
  Products: ProductsProps;
  ProductCard: ProductCardProps;
  RichText: RichTextProps;
  Stats: StatsProps;
  Timeline: TimelineProps;
};

export type Config = PuckConfig<{
  components: Props;
  categories: ["Navigation", "Introduction", "Content", "ECommerce"];
}>;

export const conf: Config = {
  categories: {
    Navigation: {
      components: ["Footer", "Navbar"],
    },
    Introduction: {
      components: ["Hero"],
    },
    Content: {
      components: [
        "Accordion",
        "Card",
        "RichText",
        "Grid",
        "Stats",
        "Timeline",
      ],
    },
    ECommerce: {
      components: ["Products", "ProductCard"],
    },
  },
  components: {
    Accordion,
    Card,
    Grid,
    Footer,
    Hero,
    Navbar,
    Products,
    ProductCard,
    Stats,
    Timeline,
    RichText,
  },
  root: Root,
};

export type Data = PuckData<Props>;

export default conf;
