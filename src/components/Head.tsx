import React from "react";
import NextHead from "next/head";

interface HeadProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  jsonLd?: Record<string, any>;
}

export default function Head({ title, description, url, image, jsonLd }: HeadProps) {
  const defaultTitle = "Developed by Will - Portfolio";
  const defaultDescription =
    "A web development portfolio showcasing responsive, modern designs.";
  const defaultUrl = "https://developedbywill.com";
  const placeholderImage = "/images/placeholder-og.jpg";

  return (
    <NextHead>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || placeholderImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || placeholderImage} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url || defaultUrl} />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </NextHead>
  );
}
