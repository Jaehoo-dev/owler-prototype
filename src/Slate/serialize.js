import escapeHtml from 'escape-html';
import { Text } from 'slate';

const serialize = node => {
  if (Text.isText(node)) {
    console.log(node);
    let string = escapeHtml(node.text);

    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }

    if (node.big) {
      string = `<span style="font-size:72px;">${string}</span>`;
    }

    return string;
  }

  const children = node.children.map(n => serialize(n)).join('');

  switch (node.type) {
    case 'quote':
      return `<blockquote><p>${children}</p></blockquote>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return children;
  }
};

export default serialize;