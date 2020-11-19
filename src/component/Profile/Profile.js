import React, { useEffect } from "react";
import {
  Grid,
  Header,
  Segment,
  Button,
  Icon,
  Item,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { getCheckout } from "../../actions/checkout";
const Profile = ({ user, getCheckout, checkouts }) => {
  useEffect(() => {
    getCheckout();
  }, [getCheckout]);
  const display = () => {
    if (user) {
      return (
        <Item divided>
          <Item.Image src={user.avatar} className="ui image circular avatar" />
          <Item.Content>
            <Item.Header>Tên: {user.name}</Item.Header>
            <Item.Description>
              Địa Chỉ: {user.address},{user.dis}, {user.city}
            </Item.Description>
            <Item.Description>Số Điện Thoại: {user.phone}</Item.Description>
            <Item.Extra>
              <Button negative icon floated="right" labelPosition="right">
                Sửa Thông Tin
                <Icon name="users" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    }
  };
  return (
    <Grid columns={2} stackable>
      <Grid.Row>
        <Grid.Column>
          <Segment secondary color="pink">
            <Header
              content="Thông Tin Của Bạn"
              textAlign="center"
              as="h3"
              color="green"
            />
            {display()}
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment secondary color="pink">
            <Header
              content="Các Hóa Đơn Bạn Đã Và Đang Mua"
              as="h3"
              color="pink"
              textAlign="center"
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    checkouts: state.checkout.checkouts,
  };
};

export default connect(mapStateToProps, { getCheckout })(Profile);
