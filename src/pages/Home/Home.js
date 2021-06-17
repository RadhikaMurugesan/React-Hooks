import React, { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import Card from "../../components/Card";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchProductsSource,
  fetchProductCategory,
} from "../../actions/actions";

/**
 * @name Home
 * @function
 * @description Home page displays the list products for selected category
 * @param {array} props.product Contains product list
 * @param {string} props.pageName Contains name of the page
 */

const Home = (props) => {
  useEffect(() => {
    if (props.products.length === 0) {
      if (props.pageName) {
        props.fetchProductCategory(props.pageName);
      } else {
        props.fetchProductsSource();
      }
    }
  });

  return (
    <Layout pageName="home">
      {props.products.length ? (
        <div className="card-container">
          {props.products.map((product) => (
            <Card product={product} />
          ))}
        </div>
      ) : (
        <div className="not-available">
          <h1>Products not available</h1>
        </div>
      )}
    </Layout>
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProductsSource,
      fetchProductCategory,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
