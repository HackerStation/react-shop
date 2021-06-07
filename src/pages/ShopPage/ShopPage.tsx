import { useState } from 'react';
import Collections from '../../components/Collections/Collections';
import SHOP_DATA from './shop.data';

const ShopPage = () => {
  const [collections, _] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      <h1>Collections</h1>
      {collections.map(({ id, ...props }) => (
        <Collections key={id} {...props} />
      ))}
    </div>
  );
};

export default ShopPage;
