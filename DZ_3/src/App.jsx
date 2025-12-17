import './App.css';
import { Row, Col } from 'antd';
import ProductCard from './components/ProductCard'; 
import products from './data/idcard'; 


const StorePage = () => {
  const uniqueProducts = [...new Map(products.map(item => [item.id, item])).values()];

  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Интернет-магазин</h1>
      <Row gutter={[16, 16]}>
        {uniqueProducts.map((product) => (
          <Col key={product.id} span={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <StorePage />
    </div>
  );
};

export default App;
