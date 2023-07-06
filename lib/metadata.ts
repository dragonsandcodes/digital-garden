import { SiteMetaData } from "@/types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const defaultAuthor = {
  name: "Fanni Friedrich",
  handle: "@dragonsandcodes",
  social: {
    github: "https://github.com/dragonsandcodes",
    instagram: "https://instagram.com/fanni_friedrich",
    linkedin: "https://linkedin.com/in/fannifriedrich",
    tiktok: "https://tiktok.com/@dragonsandcodes",
    twitter: "https://twitter.com/dragonsandcodes",
    youtube: "https://youtube.com/@dragonsandcodes",
  },
  email: "fanni@dragonsandcodes.com",
  website: "https://dragonsandcodes.com",
  jobTitle: "Wannabe (game) developer, Content Creator",
  //company: "Unicorns & Co.",
  availableForWork: true,
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Learning to code, because hot girls have quarter-life crisis.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/thedevdavid/digital-garden",
  metadataBase: new URL(BASE_URL),
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
};

export default siteMetadata;
