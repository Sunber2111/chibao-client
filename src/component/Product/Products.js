import React, { useEffect, useState } from "react";
import { Grid, Container, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ProductItems from "./ProductItems";
import { connect } from "react-redux";
import { fetch_data } from "../../actions/product";
import { getCatalog } from "../../actions/catalog";

const Products = ({ fetch_data, products, totals, getCatalog, catalogs }) => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 2,
  });
  const handelChangePage = (newPage) => {
    setFilters({ ...filters, page: newPage });
  };
  useEffect(() => {
    fetch_data(filters.page, filters.limit);
    getCatalog();
  }, [filters, fetch_data, getCatalog]);
  const randomColor = () => {
    let color = ["olive", "red", "yellow","orange","green","teal","blue","violet","purple","pink","brown","grey","black"];
    return color[Math.floor(Math.random() * 14)];
  };
  return (
    <Container>
      <Grid columns={3} stackable>
        <Grid.Row>
          {catalogs.map((cata, index) => {
            return (
              <Grid.Column key={index}>
                <Button fluid basic color={randomColor()} content={cata.name} />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
      <Grid columns={4} stackable>
        <Grid.Row>
          {products.map((product, index) => {
            return <ProductItems key={index} product={product} />;
          })}
        </Grid.Row>
      </Grid>
      <Button.Group style={{ margin: "20px 50%" }}>
        <Button
          disabled={filters.page <= 1}
          onClick={() => handelChangePage(filters.page - 1)}
        >
          Trước
        </Button>
        <Button
          disabled={Math.ceil(totals / 1) <= filters.page + 1}
          onClick={() => handelChangePage(filters.page + 1)}
        >
          Sau
        </Button>
      </Button.Group>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    totals: state.product.totalPage,
    catalogs: state.catalog.catalog,
  };
};
export default connect(mapStateToProps, { fetch_data, getCatalog })(Products);
