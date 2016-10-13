import React from 'react';

class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  render() {
    return (
      <div >
        <button onClick={this.handleOnClick}> More Button </button>
      </div>
    );
  }
}

module.exports = CoordinatesButton;
