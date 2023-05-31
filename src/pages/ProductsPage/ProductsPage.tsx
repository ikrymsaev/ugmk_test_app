import { useTypedDispatch, useTypedSelector } from '@/store/hooks';
import styles from './ProductsPage.module.css';
import { ProductsDiagram } from './components/ProductsDiagram/ProductsDiagram';
import { ProductsFilter } from './components/ProductsFilter/ProductsFilter';
import { useEffect } from 'react';
import { requestProducts, selectProductsDiagramData } from '@/store/slices/products';
import { Container } from '@mui/material';

export const ProductsPage = () => {
  const dispatch = useTypedDispatch();
  const productsData = useTypedSelector(selectProductsDiagramData);

  useEffect(() => {
    dispatch(requestProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.wrapper}>
      <Container maxWidth="md">
        <h2>Products Page</h2>
        <ProductsFilter />
        <ProductsDiagram data={productsData ?? []} />
      </Container>
    </div>
  );
}