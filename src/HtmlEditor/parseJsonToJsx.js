import React from 'react';

export default function parseJsonToJsx(json) {
  return React.createElement(
    json.tag,
    json.attrs,
    json.children.map(child => {
      return typeof child === 'string' ? child : parseJsonToJsx(child);
    })
  );
}
