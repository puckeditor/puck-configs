import { Config as PuckConfig, Data as PuckData } from "@puckeditor/core";

import root, { RootProps } from "./root";
import Header, { HeaderProps } from "./components/header";
import Footer, { FooterProps } from "./components/footer";
import Heading, { HeadingProps } from "./components/heading";
import Text, { TextProps } from "./components/text";
import BentoGrid, { BentoGridProps } from "./components/bento-grid";
import CardsGrid, { CardsGridProps } from "./components/cards-grid";
import ContentItem, { ContentItemProps } from "./components/content-item";
import FeatureList, { FeatureListProps } from "./components/feature-list";
import Pricing, { PricingProps } from "./components/pricing";
import PricingTier, {
  PricingTierProps,
} from "./components/pricing/pricing-tier-config";
import ShoppingCart, { ShoppingCartProps } from "./components/shopping-cart";

import "@puckeditor/ai-types";

export type Props = {
  Header: HeaderProps;
  Footer: FooterProps;
  Heading: HeadingProps;
  Text: TextProps;
  BentoGrid: BentoGridProps;
  CardsGrid: CardsGridProps;
  ContentItem: ContentItemProps;
  FeatureList: FeatureListProps;
  Pricing: PricingProps;
  PricingTier: PricingTierProps;
  ShoppingCart: ShoppingCartProps;
};

export type Config = PuckConfig<{
  root: RootProps;
  components: Props;
  categories: ["Navigation", "Content", "Business"];
}>;

// We avoid the name config as next gets confused
const conf: Config = {
  root,
  categories: {
    Navigation: {
      components: ["Header", "Footer"],
    },
    Content: {
      components: [
        "Heading",
        "Text",
        "BentoGrid",
        "CardsGrid",
        "ContentItem",
        "FeatureList",
      ],
    },
    Business: {
      components: ["Pricing", "PricingTier", "ShoppingCart"],
    },
  },
  components: {
    Header,
    Footer,
    Heading,
    Text,
    BentoGrid,
    CardsGrid,
    ContentItem,
    Pricing,
    PricingTier,
    ShoppingCart,
    FeatureList,
  },
};

export type Data = PuckData<Props>;

export default conf;
