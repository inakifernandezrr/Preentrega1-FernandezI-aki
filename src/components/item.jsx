
import itemList from "/itemList";
const item = () => {
  return (
    <div>
        <DataTransferItemList/>
        <h3>PRODUCT</h3>
        {data.map((prod) => {
            return (
                <div key ={prod.id}>
                    <h2>Product : {product.name}</h2>
                    <p>{product.desciption}</p>
                    <p>Stock : {product.stock}</p>
                </div>
            );
        })};
    </div>
  );
};

export default item
