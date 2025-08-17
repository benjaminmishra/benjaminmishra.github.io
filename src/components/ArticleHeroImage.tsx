import React from 'react';

interface ArticleHeroImageProps {
  imageUrl: string;
  title: string;
}

export default function ArticleHeroImage({ imageUrl, title }: ArticleHeroImageProps) {
  return (
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
    />
  );
};