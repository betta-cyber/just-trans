import React from 'react';

function renderMarkdownToHTML(renderedHTML) {
  // This is ONLY safe because the output HTML
  // is shown to the same user, and because you
  // trust this Markdown parser to not have bugs.
  return {__html: renderedHTML};
}

export default function MarkdownPreview({ markdown }) {
  const markup = renderMarkdownToHTML(markdown);
  return <div dangerouslySetInnerHTML={markup} />;
}
