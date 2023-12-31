import { ContentNavItem, NavItem } from "@/types";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";

// const content: ContentNavItem[] = [
//   {
//     title: "Blog",
//     href: "/posts",
//     description: "Blogposts. Mostly about web development. Or chicken fingers",
//   },
//   {
//     title: "Speaking",
//     href: "/speaking",
//     description: "My previous (and current) talks, workshops, and other speaking engagements.",
//   },
//   {
//     title: "Videos",
//     href: defaultAuthor.social.youtube,
//     description: "My YouTube channel where I talk about nerdy stuff.",
//   },
//   {
//     title: "Newsletter",
//     href: siteMetadata.newsletterUrl,
//     description: "My newsletter about software development",
//   },
//   {
//     title: "Teaching",
//     href: "/teaching",
//     description: "I teach others. Sometimes for free, sometimes for money.",
//   },
// ];

export const navigationLinks: NavItem[] = [
  {
    title: "Blog",
    href: "/posts",
  },

  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Uses",
    href: "/setup",
  },
  {
    title: "Media Kit",
    href: "/media-kit",
  },
  {
    title: "About",
    href: "/about-me",
  },
];
