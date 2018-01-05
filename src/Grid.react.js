import styles from './Grid.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Grid extends Component {
  static propTypes = {
    /** Custom class name */
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {className, ...props} = this.props;
    const classes = `${styles.root} ${className}`;

    return (
      <div className={classes} {...props}>
        {props.children}
      </div>
    );
  }
}
