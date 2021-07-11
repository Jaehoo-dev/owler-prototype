import { useMemo, useState, useCallback } from 'react';
import { createEditor, Transforms, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import HoveringToolbar from './HoveringToolbar';
import Leaf from './Leaf';
import serialize from './serialize';

export default function SlateTextEditor() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />;
  }, []);

  function handleSaveClick() {
    console.log(value);
  }

  function handleHtmlClick() {
    console.log(serialize({ children: value }));
  }

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={newValue => setValue(newValue)}
      >
        <HoveringToolbar />
        <Editable
          renderLeaf={renderLeaf}
          placeholder='Slatejs'
          onKeyDown={event => {
            if (event.key === '`' && event.ctrlKey) {
              event.preventDefault();

              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
              });

              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
              );
            }
          }}
        />
      </Slate>
      <button onClick={handleSaveClick}>저장</button>
      <button onClick={handleHtmlClick}>HTML</button>
    </div>
  );
}
