import styles from './ProductsPage.module.css';
import { ProductsDiagram } from './components/ProductsDiagram/ProductsDiagram';
import { ProductsFilter } from './components/ProductsFilter/ProductsFilter';
import { useEffect } from 'react';
import { requestProducts } from '../../../store/slices/products/productsThunks';
import { useTypedDispatch } from '../../../store/hooks/useTypedDispatch';
import { selectProductsDiagramData } from '../../../store/slices/products/productsSelectors';
import { useTypedSelector } from '../../../store/hooks/useTypedSelector';

export const ProductsPage = () => {
  const dispatch = useTypedDispatch();
  const productsData = useTypedSelector(selectProductsDiagramData);

  useEffect(() => {
    dispatch(requestProducts())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <h2>Products Page</h2>
      <ProductsFilter />
      <ProductsDiagram data={productsData ?? []} />
    </div>
  );
}