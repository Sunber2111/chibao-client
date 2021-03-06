import React from "react";
import { Table, Header, Button, Segment, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CartItems from "./CartItems";
import CartResult from "./CartResult";
import { connect } from "react-redux";
import { updatecart, deletecart } from "../../actions/cart";
import { Link } from "react-router-dom";
const Cart = ({ cart, update, deleteCart }) => {
  const display = () => {
    if (cart.length > 0) {
      return (
        <Table color="orange" striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Hình Ảnh</Table.HeaderCell>
              <Table.HeaderCell>Sản Phẩm</Table.HeaderCell>
              <Table.HeaderCell>Giá</Table.HeaderCell>
              <Table.HeaderCell>Số Lượng</Table.HeaderCell>
              <Table.HeaderCell>Tổng Cộng</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {cart.map((product, index) => {
              return (
                <CartItems
                  key={index}
                  cart={product}
                  update={update}
                  deleteCart={deleteCart}
                />
              );
            })}
          </Table.Body>
          <Table.Footer fullWidth>
            <CartResult />
          </Table.Footer>
        </Table>
      );
    } else {
      return (
        <Segment placeholder color="black">
          <Header icon color="purple" as="h2">
            <Icon name="plus cart" color="red" />
            Giỏ Hàng Của Bạn Đang Rỗng 
          </Header>
          <Link to="/san-pham">
            <Button color="olive" content="Quay Lại Mua Hàng" size="large" />
          </Link>
        </Segment>
      );
    }
  };
  return <div>{display()}</div>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (product, quantity) => {
      dispatch(updatecart(product, quantity));
    },
    deleteCart: (product) => {
      dispatch(deletecart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
