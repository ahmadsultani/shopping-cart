import {
  Navbar,
  Container,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShopDispatch, useShopState } from "../../context/ShopContext";

import styles from "./Header.module.css";

const Header = () => {
  const { cart } = useShopState();
  const dispatch = useShopDispatch();
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Link to="/" style={{ textDecoration: "none"}}>
          <Navbar.Brand>
            Shopping Cart
          </Navbar.Brand>
        </Link>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            type="text"
            placeholder="Search"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align={"end"}>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={
              {
                width: 300,
                maxHeight: 250,
                overflowY: "scroll",
                alignItems: "center",
                padding: 20,
              }

            }>
                {cart.length > 0 ? (
                  <>
                    {cart.map((product) => (
                      <div className={styles.cartItem} key={product.id}>
                        <img
                          src={product.image}
                          className={styles.cartItemImage}
                          alt={product.name}
                        />
                        <div className={styles.cartItemDetail}>
                          <span>{product.name}</span>
                          <span>{product.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                            })
                          }
                        />
                      </div>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "auto" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
