import React from 'react';

interface ArticleTagProps {
  tag: string;
}

export default function ArticleTag ({ tag } : ArticleTagProps){
  return (
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-text-light dark:text-text-dark">
      {tag}
    </span>
  );
};