// import { Link } from 'react-router-dom';
import LinkButtons from '../../ui/LinkButtons';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <LinkButtons to="/menu">&larr; Back to menu</LinkButtons>

      <p className='text-xl font-semibold text-yellow-500 items-center mt-8'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
