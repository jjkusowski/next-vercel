const AddToCart = ({ sku, price, url, description, imageUrl, title }) => {
  return (
    <button
      type="button"
      className="snipcart-add-item"
      data-item-id={sku}
      data-item-price={price}
      data-item-url={url}
      data-item-description={description}
      data-item-image={imageUrl}
      data-item-name={title}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
