import React from 'react'

export const Info = (props) => {
    const {description} = props;

    return(
      <div className="category-list__short-info">
          <span className="category-list__task-name">{description.taskName}</span>
          <span className="category-list__task-text">{description.taskText}</span>
      </div>
    )
};