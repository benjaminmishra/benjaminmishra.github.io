import React from 'react';

interface ArticlePublishedDateProps {
  publishedDate: string;
}

export default function ArticlePublishedDate({ publishedDate }: ArticlePublishedDateProps){
  const formattedDate = new Date(publishedDate).toLocaleDateString();

  return (
    <p className="text-sm text-text-light dark:text-text-dark opacity-75">
      Published on {formattedDate}
    </p>
  );
};