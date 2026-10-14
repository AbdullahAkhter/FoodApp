import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "kl39mpgk",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,        // 👈 fast & recommended for read-only
});

// Image builder (for Sanity images)
const builder =  imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
