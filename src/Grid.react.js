import styles from './Grid.scss';

import React from 'react';

export default class Grid extends React.Component {
  static propTypes = {
    /** Custom class name */
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
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
