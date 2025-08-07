import React from 'react';

interface ArticlePublishedDateProps {
  publishedDate: string;
}

const ArticlePublishedDate: React.FC<ArticlePublishedDateProps> = ({ publishedDate }) => {
  const formattedDate = new Date(publishedDate).toLocaleDateString();

  return (
    <p className="text-sm text-text-light dark:text-text-dark opacity-75">
      Published on {formattedDate}
    </p>
  );
};

export default ArticlePublishedDate;