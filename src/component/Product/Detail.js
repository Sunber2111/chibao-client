import React from "react";
import { Grid, Button, Image, Header, Segment, Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { addcart } from "../../actions/cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Detail = ({ product, addCart }) => {
  const themGioHang = (product) => {
    if (product.inventory <= 0) {
      toast.success("Mặt hàng này sắp hết vui lòng order");
    } else {
      addCart(product);
      toast.success("👍Đặt hàng thành công!!!");
    }
  };
  return (
    <Grid.Row>
      <Grid.Column>
        <Image size="huge" src={product.image} />
      </Grid.Column>
      <Grid.Column>
        <div style={{ paddingLeft: "80px" }}>
          <Header as="h1" content={product.name} />
          <Label tag color="red" size="medium">
            {product.price} VND
          </Label>
          <Label tag color="orange">
            Số lượng hàng: {product.inventory}
          </Label>
          <h4>{product.desc}</h4>
          <Segment color="green" secondary >
            <Button
              onClick={() => {
                themGioHang(product);
              }}
              color="teal"
              fluid
            >
              Mua Hàng
            </Button>
          </Segment>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (product) => {
      dispatch(addcart(product, 1));
    },
  };
};
export default connect(null, mapDispatchToProps)(Detail);
