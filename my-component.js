import React from 'react';

class MyComponent extends React.Component {
  componentShouldUpdate() {
    return true;
  }

  render() {
    return (
      <div>MyComponent</div>
    );
  }
}

export default MyComponent;
