import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./style.css";

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className="taskContainer"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <div className="taskTitle">{this.props.task.content}</div>
            <div className="taskBody">{this.props.task.body}</div>
            <div>
              <img src={this.props.task.photo} />
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}
