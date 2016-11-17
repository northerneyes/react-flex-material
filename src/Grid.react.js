import styles from './Grid.scss';

import React from 'react';
import classNames from 'classnames';

import Component from './Component.react';

export default class Grid extends Component {
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
    const classes = classNames(styles.root, className);

    return (
      <div className={classes} {...props}>
        {props.children}
      </div>
    );
  }
}
