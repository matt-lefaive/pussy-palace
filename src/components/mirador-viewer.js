import ReactDOM from "react-dom";
import React, { Component } from "react";
import mirador from "mirador";
import "../styles/mirador-viewer.css";



class Mirador extends Component {
  componentDidMount() {
    const { config, plugins } = this.props;
    mirador.viewer(config, plugins);
  }
  render() {
    const { config } = this.props;
    return <div id={config.id} class='mirador-viewer-container'/>;
  }
}

export default Mirador;



