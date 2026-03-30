import ProductCard from "./ProductCard";

function ProductGrid() {

 const products = [
  { id: 1, image: "/image1.png", title: "PPXOC MILKYWAY DRESS IN...", isNew: true  },
  { id: 2, image: "/image2.png", title: "PPXOC MILKYWAY DRESS IN..." },
  { id: 3, image: "/image3.png", title: "PRODUCT NAME", liked: true },
  { id: 4, image: "/image4.png", title: "PRODUCT NAME" },
  { id: 5, image: "/image5.png", title: "PRODUCT NAME" },
  { id: 6, image: "/image6.png", title: "PRODUCT NAME" },
  { id: 7, image: "/image7.png", title: "PRODUCT NAME" },
  { id: 8, image: "/image8.png", title: "PRODUCT NAME" },
  { id: 9, image: "/image9.png", title: "PRODUCT NAME" },
  { id: 10, image: "/image10.png", title: "PRODUCT NAME" },
  { id: 11, image: "/image11.png", title: "PRODUCT NAME" },
  { id: 12, image: "/image12.png", title: "PRODUCT NAME" },
  { id: 13, image: "/image13.png", title: "PRODUCT NAME", outOfStock: true },
  { id: 14, image: "/image14.png", title: "PRODUCT NAME" },
  { id: 15, image: "/image15.png", title: "PRODUCT NAME" },
  { id: 16, image: "/image16.png", title: "PRODUCT NAME" },
  { id: 17, image: "/image17.png", title: "PRODUCT NAME" },
  { id: 18, image: "/image18.png", title: "PRODUCT NAME" }
];
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;