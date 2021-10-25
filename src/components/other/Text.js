import React from 'react';

export const Graphtext = (props) => {
  const { text, color } = props;

  return (
    <div
      className={
        color === 'blue'
          ? 'graph-text-con'
          : color === 'yellow'
          ? 'graph-text-con-2'
          : 'graph-con-other'
      }
    >
      <div
        className={
          color === 'blue'
            ? 'line-blue'
            : color === 'yellow'
            ? 'line-yellow'
            : 'line-other'
        }
      ></div>
      <p>{text}</p>
    </div>
  );
};
