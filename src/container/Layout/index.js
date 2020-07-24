import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 60,
  },
}));

function CenteredGrid({ data, value, onChange, onSubmit, loading }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Header value={value} onChange={onChange} onSubmit={onSubmit} />
      {loading && (
        <Fragment>
          <Loader type='ThreeDots' color='#333' height={200} width={400} />
        </Fragment>
      )}
      <div className={classes.root}>
        <Grid container spacing={2} alignItems='center'>
          {data.map((data) => (
            <Card img={data.backdrop_path} title={data.title} />
          ))}
        </Grid>
      </div>
    </Fragment>
  );
}
const mapStateToProps = ({ loading }) => ({
  loading: loading,
});
export default connect(mapStateToProps)(CenteredGrid);
