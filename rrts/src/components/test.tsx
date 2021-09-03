import React from 'react';

type Props = {
  name: string;
};

const SomeComponent = ({ name }: Props): JSX.Element => {
  return <div>Hi {name}</div>;
};

export default SomeComponent;
