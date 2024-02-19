'use strict';

/**
 * Filters the input text by allowing specified HTML tags and unescaping them.
 *
 * @param {string} input - The input text to filter.
 * @param {string[]} allowedTags - The array of allowed HTML tags.
 * @returns {string} The filtered text with allowed HTML tags unescaped.
 * @throws {Error} If input is not a string or allowedTags is not an array.
 */
const filter = (input, allowedTags) => {
  if (typeof input !== 'string' && !(input instanceof String)) {
    throw new TypeError('Invalid input. \'input\' must be a string.');
  }

  if (!Array.isArray(allowedTags)) {
    throw new TypeError('Invalid input. \'allowedTags\' must be an array.');
  }

  let escapedText = escapeHTML(input);

  allowedTags.forEach((tag) => {
    const openingTagPattern = new RegExp(`&lt;${tag}&gt;`, 'g');
    const closingTagPattern = new RegExp(`&lt;/${tag}&gt;`, 'g');

    escapedText = escapedText
      .replace(openingTagPattern, `<${tag}>`)
      .replace(closingTagPattern, `</${tag}>`);
  });

  return escapedText;
};

/**
 * Escapes special HTML characters in a given text.
 *
 * @param {string} text - The input text to escape HTML characters from.
 * @returns {string} The text with escaped HTML characters.
 */
const escapeHTML = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
