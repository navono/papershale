import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Icon } from 'antd';

// function mapStateToProps(state: any) {
//   return {

//   };
// }

export default class Toolbar extends Component {
  public render() {
    return (
      <div>
        <Icon type="scissor" theme="outlined" />
      </div>
    );
  }
}

// export default connect(
//   mapStateToProps,
// )(Toolbar);