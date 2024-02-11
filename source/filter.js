"use strict";

function filter(input, allowedTags) {
  let escapedText = escapeHTML(input);

  allowedTags.forEach((tag) => {
    const openingTagPattern = new RegExp(`&lt;${tag}&gt;`, "g");
    const closingTagPattern = new RegExp(`&lt;/${tag}&gt;`, "g");

    escapedText = escapedText
      .replace(openingTagPattern, `<${tag}>`)
      .replace(closingTagPattern, `</${tag}>`);
  });

  return escapedText;
}

function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
