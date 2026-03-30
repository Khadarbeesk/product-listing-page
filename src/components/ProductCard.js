function ProductCard({ product }) {
  return (
    <div className="product">

      {/* IMAGE CARD ONLY */}
      <div className="card">
        <div className="card-img">
          <img src={product.image} alt={product.title} />

          {product.isNew && (
            <span className="badge">NEW PRODUCT</span>
          )}

          {product.outOfStock && (
            <span className="overlay">OUT OF STOCK</span>
          )}
        </div>
      </div>

      {/* TEXT OUTSIDE CARD */}
      <div className="card-info">

        <div className="card-row">
          <h4>{product.title}</h4>
         <img
  src={product.liked ? "/heartfull.png" : "/heart.png"}
  className="wishlist"
/>
        </div>

        <p className="price-text">
  <span className="signin">Sign in</span> or Create an account to see pricing
</p>

      </div>

    </div>
  );
}

export default ProductCard;