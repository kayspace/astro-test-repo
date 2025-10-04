import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}

// This Astros official RSS package generates a non-HTML document with information about all of your blog posts that can be read by feed readers like Feedly, The Old Reader, and more. This document is updated every time your site is rebuilt.

// Individuals can subscribe to your feed in a feed reader, and receive a notification when you publish a new blog post on your site, making it a popular blog feature.

// View your RSS feed in a reader

// Download a feed reader, or sign up for an online feed reader service and subscribe to your site by adding your own Netlify URL. You can also share this link with others so they can subscribe to your posts, and be notified when a new one is published.