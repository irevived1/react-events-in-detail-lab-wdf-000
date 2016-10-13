import React from 'react';

class DelayedButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    // e.persist();
    setTimeout(() => { this.props.onDelayedClick(e.persist()); }, this.props.delay);
  }

  render() {
    return (
      <div >
        <button onClick={this.handleOnClick}> Some Slow Button </button>
      </div>
    );
  }
}

module.exports = DelayedButton;
