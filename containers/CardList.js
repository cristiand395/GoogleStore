import Card from '@components/Card';
import { useAppContext } from '@context/AppContext';

const CardList = () => {

  const {filteredProducts} = useAppContext()
  const products = filteredProducts

  return (
    <div className="card-list">
      {products.map(product => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          type={product.type}
          price={product.price}
          image={product.image}
          specs={product.specs}
        />
      ))}
    </div>
  );
}

export default CardList;