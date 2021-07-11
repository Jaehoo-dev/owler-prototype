import React from 'react';

export default function parseJsonToJsx(json) {
  const attributes = { ...json.attrs };
  const { style } = attributes;

  return React.createElement(
    json.tag,
    json.attrs,
    json.children.map(child => {
      return typeof child === 'string' ? child : parseJsonToJsx(child);
    })
  );
}
