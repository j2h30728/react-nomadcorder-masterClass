import { DragDropContext } from "react-beautiful-dnd";

export default function DaragORDrop() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div></div>
    </DragDropContext>
  );
}
