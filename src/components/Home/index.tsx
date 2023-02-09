import { useShopState } from "../../context/ShopContext";
import Product from "../Product";
import styles from "./Home.module.css";
import Filters from "../Filters";

const Home = () => {
  const { products, sort, byStock, byFastDelivery, byRating, searchQuery } =
    useShopState();

  const filterProducts = () => {
    let sortedProducts = [...products];

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh"
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price)
      );
    } else if (byRating) {
      sortedProducts = sortedProducts.filter(
        (item) => Number(item.ratings) >= byRating
      );
    } else if (byStock) {
      sortedProducts = sortedProducts.filter((item) => item.inStock);
    } else if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((item) => item.fastDelivery);
    } else if (searchQuery) {
      sortedProducts = sortedProducts.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className={styles.main}>
      <Filters />
      <div className={styles.productContainer}>
        {filterProducts().map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
