import styled from 'styled-components';
import SlateTextEditor from './Slate/SlateTextEditor';
import QuillTextEditor from './Quill/QuillTextEditor';
import EditorjsTextEditor from './Editorjs/EditorjsTextEditor';

const Wrapper = styled.div`
  width: 600px;
  margin: 70px auto 70px;
  border: 1px solid black;
`;

export default function App() {
  return (
    <>
      <Wrapper>
        <SlateTextEditor />
      </Wrapper>
      <Wrapper>
        <EditorjsTextEditor />
      </Wrapper>
      <Wrapper>
        <QuillTextEditor />
      </Wrapper>
    </>
  );
}
