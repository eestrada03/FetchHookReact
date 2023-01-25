import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { img: props.url };
  }

  render() {
    return (
      <div>
        <img src={this.state.img}></img>
      </div>
    );
  }
}

export default Header;
