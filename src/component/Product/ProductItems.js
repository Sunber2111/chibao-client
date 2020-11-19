import React from "react";
import { Card, Image, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
const ProductItems = ({ product }) => {
  return (
    <Grid.Column style={{ marginBottom: "40px" }}>
      <Link to={`/san-pham/chi-tiet/${product._id}`}>
        <Card color="violet" >
          <Image src={product.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{product.name}</Card.Header>
            <Card.Description>{product.price} VNĐ</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    </Grid.Column>
  );
};

export default ProductItems;
