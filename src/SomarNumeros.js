import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as FavoriteActions from "./store/actions/favorites";

class SomarNumeros extends Component {
  state = {
    number: 0
  };

  render() {
    return (
      <Fragment>
        <h3>{this.props.number}</h3>
        <input
          type="number"
          value={this.state.number}
          onChange={e => this.setState({ number: e.target.value })}
        />
        <button onClick={() => this.props.somar(this.state.number++)}>
          Somar
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  number: state.favorites.number
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SomarNumeros);
