import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Modal.styles.scss';

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  }
  
  
  render(){
    const {children, onClose} = this.props;

    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          {children}
        </div>
      </div>
    )
  }
}
