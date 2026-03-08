import React from 'react';

interface ArticleTagProps {
  tag: string;
}

export default function ArticleTag ({ tag } : ArticleTagProps){
  return (
    <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
      {tag}
    </span>
  );
};
