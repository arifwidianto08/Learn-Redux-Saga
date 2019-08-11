/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from './actions';
import { bindActionCreators } from 'redux';

function Home(props) {
  useEffect(() => {
    props.fetchOrders();
  }, []);

  if (props.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <pre>{JSON.stringify(props.orders, null, 2)}</pre>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users,
    orders: state.orders.data,
    isLoading: state.users.isLoading || state.orders.isLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchOrders }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
