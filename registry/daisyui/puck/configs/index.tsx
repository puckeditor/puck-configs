import { Config as PuckConfig, Data as PuckData } from "@puckeditor/core";

import Accordion, { AccordionProps } from "./components/accordion";
import Callout, { CalloutProps } from "./components/callout";
import Footer, { FooterProps } from "./components/footer";
import Hero, { HeroProps } from "./components/hero";
import Navbar, { NavbarProps } from "./components/navbar";
import Products, { ProductsProps } from "./components/products";
import ProductCard, {
  ProductCardProps,
} from "./components/products/product-card-config";
import FeaturedProducts, {
  FeaturedProductsProps,
} from "./components/products/featured-products-config";
import RichText, { RichTextProps } from "./components/rich-text";
import Stats, { StatsProps } from "./components/stats";
import Timeline, { TimelineProps } from "./components/timeline";
import Root from "./root";

export type Props = {
  Accordion: AccordionProps;
  Footer: FooterProps;
  Hero: HeroProps;
  Navbar: NavbarProps;
  Products: ProductsProps;
  ProductCard: ProductCardProps;
  FeaturedProducts: FeaturedProductsProps;
  Callout: CalloutProps;
  RichText: RichTextProps;
  Stats: StatsProps;
  Timeline: TimelineProps;
};

export type Config = PuckConfig<{
  components: Props;
  categories: [
    "Navigation",
    "Introduction",
    "Content",
    "ECommerce",
    "Storytelling",
  ];
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
      components: ["Accordion", "RichText", "Callout"],
    },
    ECommerce: {
      components: ["Products", "ProductCard", "FeaturedProducts"],
    },
    Storytelling: {
      components: ["Stats", "Timeline"],
    },
  },
  components: {
    Accordion,
    Callout,
    Footer,
    Hero,
    Navbar,
    Products,
    ProductCard,
    FeaturedProducts,
    Stats,
    Timeline,
    RichText,
  },
  root: Root,
};

export type Data = PuckData<Props>;

export default conf;
