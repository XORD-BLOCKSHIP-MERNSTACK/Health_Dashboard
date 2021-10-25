import React, { Fragment } from 'react';

const List = (props) => {
  // Destructuring props
  const { list, Component } = props;
  return (
    <Fragment>
      {list.map((data, index) => {
        return <Component data={data} key={index} />;
      })}
    </Fragment>
  );
};

export { List };
