import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, clearData, searchData } from '../../Redux/ActionGenerators';
import Layout from '../../container/Layout';

class CenteredGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchData());
  }
  handleChange = (e) => {
    this.props.dispatch(clearData());
    this.setState({ userInput: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(clearData());
    this.props.dispatch(searchData(this.state.userInput));
  };
  render() {
    return (
      
      <Layout
        data={this.props.movies}
        onChange={this.handleChange}
        value={this.state.userInput}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
const mapStateToProps = ({ movies, loading, error }) => ({
  movies: movies,
  loading: loading,
  error: error,
});
export default connect(mapStateToProps)(CenteredGrid);
