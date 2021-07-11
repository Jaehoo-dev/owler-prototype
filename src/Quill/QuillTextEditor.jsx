import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

export default function QuillTextEditor() {
  const [value, setValue] = useState('');
  const editorRef = useRef(null);

  function handleClick() {
    console.log(editorRef.current.editor.getContents());
    console.log(value);
  }

  return (
    <div>
      <ReactQuill
        theme='bubble'
        value={value}
        onChange={setValue}
        ref={editorRef}
        placeholder='Quilljs'
      />
      <button onClick={handleClick}>제출</button>
    </div>
  );
}
