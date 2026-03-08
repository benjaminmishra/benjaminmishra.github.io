import React from 'react';

interface ArticlePublishedDateProps {
  publishedDate: string;
}

export default function ArticlePublishedDate({ publishedDate }: ArticlePublishedDateProps){
  const formattedDate = new Date(publishedDate).toLocaleDateString();

  return (
    <p className="text-sm text-slate-500 dark:text-slate-400">
      Published on {formattedDate}
    </p>
  );
};
