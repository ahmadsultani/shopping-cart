import { Card, Button } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useShopDispatch } from "../../context/ShopContext";
import { IProduct } from "../../data/ShopData";
import styles from "./Product.module.css";

const Product = (props: IProduct) => {
  const { name, price, image, fastDelivery, inStock, ratings } = props;
  const dispatch = useShopDispatch();
  return (
    <Card className={styles.product}>
      <Card.Img variant="top" src={image} />
      <Card.Body className={styles.productDesc}>
        <div className="title">
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{price}</Card.Subtitle>
        </div>
        <Card.Text className={styles.productContent}>
          {fastDelivery ? "Fast Delivery" : "4 days delivery"}
          <span>{inStock ? "In Stock" : "Out of Stock"}</span>
          <span className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {ratings > i ? (
                  <AiFillStar fontSize="12px" />
                ) : (
                  <AiOutlineStar fontSize="12px" />
                )}
              </span>
            ))}
          </span>
        </Card.Text>
      </Card.Body>
      <Button variant="primary" className={styles.button} onClick={() => {
        console.log("Clicked");
        dispatch({ type: "ADD_TO_CART", payload: props });
      }}>Add to cart</Button>
    </Card>
  );
};

export default Product;
