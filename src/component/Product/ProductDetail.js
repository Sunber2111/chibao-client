import React, { useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ProductRelation from "./ProductRelation";
import { connect } from "react-redux";
import Detail from "./Detail";
import { fetch_data_all } from "../../actions/product";

const ProductDetail = ({ fetch_data_all, match, products }) => {
  const { id } = match.params;
  let dem = 0;
  useEffect(() => {
    fetch_data_all();
  }, [fetch_data_all]);
  return (
    <div>
      <Grid columns={2} stackable>
        {products.map((product, index) => {
          if (product._id === id) {
            return <Detail key={index} product={product} />;
          }
        })}
      </Grid>
      <Header
        textAlign="center"
        color="olive"
        as="h1"
        content="Các Sản Phẩm Liên Quan"
      />
      <Grid columns={4} stackable>
        {products.map((product, index) => {
          if (dem < 4) {
            dem++;
            if (product._id !== id) {
              return <ProductRelation key={index} product={product} />;
            }
          }
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps, { fetch_data_all })(ProductDetail);
