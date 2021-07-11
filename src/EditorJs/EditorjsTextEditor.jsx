import { useRef } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './constants';
import edjsHTML from 'editorjs-html';

export default function EditorjsTextEditor() {
  const instanceRef = useRef(null);

  async function handleSaveClick() {
    const savedData = await instanceRef.current.save();
    const parser = edjsHTML();

    console.log(savedData);
    console.log(parser.parse(savedData));
  }

  return (
    <>
      <EditorJs
        instanceRef={instance => (instanceRef.current = instance)}
        tools={EDITOR_JS_TOOLS}
        data={initialData}
      />
      <button onClick={handleSaveClick}>저장</button>
    </>
  );
}

const initialData = {
  time: 1556098174501,
  blocks: [
    {
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2,
      },
    },
    {
      type: 'delimiter',
      data: {},
    },
  ],
  version: '2.12.4',
};
