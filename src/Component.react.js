import React from 'react';
import shouldComponentUpdate from 'react-pure-render/function';

export default class Component extends React.Component { // eslint-disable-line react/require-render-return
  shouldComponentUpdate(nextProps, nextState) {
    return shouldComponentUpdate.call(this, nextProps, nextState);
  }
}
