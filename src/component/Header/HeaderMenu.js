import React, { useEffect } from "react";
import { Menu, Button, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../../actions/auth";

const HeaderMenu = ({ cart, user, logout }) => {

  const history = useHistory();

  const stateAuth = useSelector(state => state.auth)
  // state: store
  // 
  console.log(stateAuth);

  const dispatch = useDispatch()
  const logout1 = () => {
    logout();
    return history.push("/");
  };

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  console.log(user);
  const display = () => {
    if (user) {
      return (
        <div>
          <Link to="/trang-ca-nhan">
            <span style={{ margin: "0px 6px" }}>
              <Image avatar src={user.avatar} />
              {user.name}
            </span>
          </Link>
          <a href="#/" onClick={() => logout1()}>
            Đăng Xuất
          </a>
        </div>
      );
    } else {
      return (
        <Button.Group size="tiny">
          <Link to="/dang-ky">
            <Button>Đăng Ký</Button>
          </Link>
          <Button.Or />
          <Link to="/dang-nhap">
            <Button positive>Đăng Nhập</Button>
          </Link>
        </Button.Group>
      );
    }
  };
  return (
    <Menu size="small" inverted stackable>
      <Menu.Item name="Trang Chủ">
        <Link to="/">Trang Chủ</Link>
      </Menu.Item>

      <Menu.Item name="Sản Phẩm">
        <Link to="/san-pham">Sản Phẩm</Link>
      </Menu.Item>

      <Menu.Item name="Faqs">
        <Link to="/faqs">Faqs</Link>
      </Menu.Item>

      <Menu.Item name="Liên Hệ">
        <Link to="/lien-he">Liên Hệ</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Link to="/gio-hang">
          <Menu.Item style={{ marginTop: "6px" }}>
            <Button animated="vertical">
              <Button.Content hidden>{cart.length}</Button.Content>
              <Button.Content visible>
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Link>
        <Menu.Item>{display()}</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { logout })(HeaderMenu);
