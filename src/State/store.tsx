import { proxy } from "valtio";
//import { derive } from "valtio/utils";

export interface Product {
  id: number;
  name: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

export const search = proxy({
  query: "",
});

export const allProducts = proxy({
  products: [] as Product[],
});

export const cartOpen = proxy({
  isOpen:false,
});

/*export const pokemon = derive({
  list: (get) => {
    const query = get(search).query.toLowerCase();
    return get(allPokemon)
      .pokemon.filter((p) => p.name.toLowerCase().includes(query))
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});
*/
fetch("/products.json")
  .then((res) => res.json())
  .then((products) => {
    allProducts.products = products;
  });