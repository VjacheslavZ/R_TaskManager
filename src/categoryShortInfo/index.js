import React from 'react'

export const Info = (props) => {
    return(
      <div className="category-list__short-info">
          <span className="category-list__task-name">{props.description.taskName}</span>
          <span className="category-list__task-text">{props.description.taskText}</span>
      </div>
    )
};