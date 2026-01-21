import { Config as PuckConfig, Data as PuckData } from "@puckeditor/core";

import root, { RootProps } from "@/registry/react-email/puck/configs/root";
import Header, { HeaderProps } from "@/registry/react-email/puck/configs/components/Header";
import Footer, { FooterProps } from "@/registry/react-email/puck/configs/components/Footer";
import Heading, { HeadingProps } from "@/registry/react-email/puck/configs/components/Heading";
import Text, { TextProps } from "@/registry/react-email/puck/configs/components/Text";
import BentoGrid, { BentoGridProps } from "@/registry/react-email/puck/configs/components/BentoGrid";
import CardsGrid, { CardsGridProps } from "@/registry/react-email/puck/configs/components/CardsGrid";
import ContentItem, {
  ContentItemProps,
} from "@/registry/react-email/puck/configs/components/ContentItem";
import FeatureList, {
  FeatureListProps,
} from "@/registry/react-email/puck/configs/components/FeatureList";
import Pricing, { PricingProps } from "@/registry/react-email/puck/configs/components/Pricing";
import PricingTier, {
  PricingTierProps,
} from "@/registry/react-email/puck/configs/components/PricingTier";
import ShoppingCart, {
  ShoppingCartProps,
} from "@/registry/react-email/puck/configs/components/ShoppingCart";

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
