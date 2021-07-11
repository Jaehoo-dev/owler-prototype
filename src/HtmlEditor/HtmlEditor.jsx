import { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import parseJsonToJsx from '../utils/parseJsonToJsx';
import mockBlocks from '../mockData';
import mockBlocks2 from '../mockData2';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const PreMadeBlocks = styled.div`
  width: 240px;
  border: 1px solid yellow;
`;

const Preview = styled.div`
  flex: 1;
  border: 1px solid blue;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  background-color: #f6f9fc;
  padding-bottom: 40px;
`;

const Webkit = styled.div`
  max-width: 600px;
  background-color: #ffffff;
  margin: 0 auto;
`;

const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  font-family: sans-serif;
  color: #4a4a4a;
`;

const Settings = styled.div`
  width: 320px;
  border: 1px solid red;
`;

export default function HtmlEditor() {
  const [blocks, setBlocks] = useState(mockBlocks2);

  function handleDragEnd({ draggableId, source, destination }) {
    console.log(blocks);
    console.log(draggableId, source, destination);
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    setBlocks(prev => {
      if (source.droppableId === destination.droppableId) {
        const copy = [...prev];
        const originalIndex = source.index;
        const destinationIndex = destination.index;
        const blockCopy = copy.splice(originalIndex, 1)[0];

        copy.splice(destinationIndex, 0, blockCopy);

        return copy;
      }
    });
  }

  return (
    <Container>
      <PreMadeBlocks></PreMadeBlocks>
      <Preview>
        <Wrapper>
          {/* <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='preview'>
              {provided => (
                <Webkit ref={provided.innerRef} {...provided.droppableProps}>
                  <Table>
                    {blocks.map((block, index) => (
                      <Draggable
                        draggableId={block.id.toString()}
                        index={index}
                      >
                        {provided => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {parseJsonToJsx(block)}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </Table>
                  {provided.placeholder}
                </Webkit>
              )}
            </Droppable>
          </DragDropContext> */}
          <Webkit>{blocks.map(block => parseJsonToJsx(block))}</Webkit>
        </Wrapper>
      </Preview>
      <Settings></Settings>
    </Container>
  );
}
