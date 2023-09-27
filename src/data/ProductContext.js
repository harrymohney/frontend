import { createContext } from "react";

const initialProductContext = { name: "", images: [], price: 0, _id: "" };
const ProductContext = createContext(initialProductContext);

export { ProductContext };