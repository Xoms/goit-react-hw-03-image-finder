import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SearchForm.styles.scss';

class SearchForm extends Component{
  state = {
    search: ''
  }

  handleChange = ({target}) => {
    this.setState({search: target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }
  render(){
    const {search} = this.state; 
    return (
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
      
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={search}
          />
        </form>
    );
  }
} 

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  // bla: 'test',
};

export default SearchForm;
