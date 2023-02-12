import { jaketBiru, jaketHijau, jaketHitam, jaketMerah } from "../../assets";

const dummyProduct = [
  {
    productId: "P001",
    title: "Blue Denim Shirt",
    subTitle: "SHORT - BLUE",
    color: "BLUE",
    size: "M",
    price: 17.99,
    note: "(Note, 1 piece)",
    img: jaketBiru,
    like: true,
    numOfItem: 1,
  },
  {
    productId: "P002",
    title: "Red Hoodie",
    subTitle: "HOODIE - RED",
    color: "RED",
    size: "M",
    price: 71.98,
    img: jaketHitam,
    like: false,
    numOfItem: 2,
  },
  {
    productId: "P003",
    title: "Black Falcono Jacket",
    subTitle: "JACKET - BLACK",
    color: "BLACK",
    size: "L",
    price: 45.56,
    img: jaketMerah,
    like: false,
    numOfItem: 1,
  },
  {
    productId: "P004",
    title: "Green Abs Hoodie",
    subTitle: "HOODIE - GREEN",
    color: "GREEN",
    size: "2XL",
    price: 21.88,
    img: jaketHijau,
    like: false,
    numOfItem: 1,
  },
];

export default dummyProduct;
