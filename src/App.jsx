import styled from 'styled-components';
import SlateTextEditor from './Slate/SlateTextEditor';
import QuillTextEditor from './Quill/QuillTextEditor';

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
        <QuillTextEditor />
      </Wrapper>
    </>
  );
}
