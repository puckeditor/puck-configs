import { Config as PuckConfig, Data as PuckData } from "@puckeditor/core";

import Header, {
  HeaderProps,
} from "./components/header";
import Hero, { HeroProps } from "./components/hero";
import Customers, {
  CustomersProps,
} from "./components/customers";
import Testimonials, {
  TestimonialsProps,
} from "./components/testimonials";
import TwoColumn, {
  TwoColumnProps,
} from "./components/two-column";
import Bento, { BentoProps } from "./components/bento";
import FeatureCards, {
  FeatureCardsProps,
} from "./components/feature-cards";
import CardGrid, {
  CardGridProps,
} from "./components/card-grid";
import Stats, { StatsProps } from "./components/stats";
import ArticleCard, {
  ArticleCardProps,
} from "./components/article-card";
import Articles, {
  ArticlesProps,
} from "./components/articles";
import Faq, { FaqProps } from "./components/faq";
import Cta, { CtaProps } from "./components/cta";
import Pricing, {
  PricingProps,
} from "./components/pricing";
import ContactUs, {
  ContactUsProps,
} from "./components/contact-us";
import Footer, {
  FooterProps,
} from "./components/footer";

import Root from "./root";

import "@puckeditor/ai-types";

export type Props = {
  ArticleCard: ArticleCardProps;
  Header: HeaderProps;
  Hero: HeroProps;
  Customers: CustomersProps;
  Testimonials: TestimonialsProps;
  Bento: BentoProps;
  FeatureCards: FeatureCardsProps;
  CardGrid: CardGridProps;
  TwoColumn: TwoColumnProps;
  Stats: StatsProps;
  Articles: ArticlesProps;
  Faq: FaqProps;
  Cta: CtaProps;
  Pricing: PricingProps;
  ContactUs: ContactUsProps;
  Footer: FooterProps;
};

export type Config = PuckConfig<Props>;

// We avoid the name config as next gets confused
export const conf: Config = {
  categories: {
    navigation: {
      components: ["Header", "Footer"],
    },
    introduction: {
      components: ["Hero"],
    },
    content: {
      components: [
        "Bento",
        "ArticleCard",
        "FeatureCards",
        "CardGrid",
        "TwoColumn",
        "Articles",
        "Faq",
        "Cta",
      ],
    },
    socialProof: {
      title: "Social Proof",
      components: ["Testimonials", "Stats", "Customers"],
    },
    business: {
      components: ["Pricing", "ContactUs"],
    },
  },
  components: {
    ArticleCard,
    Header,
    Hero,
    Customers,
    Testimonials,
    Bento,
    FeatureCards,
    CardGrid,
    TwoColumn,
    Stats,
    Articles,
    Faq,
    Cta,
    Pricing,
    ContactUs,
    Footer,
  },
  root: Root,
};

export type Data = PuckData<Props>;

export default conf;
