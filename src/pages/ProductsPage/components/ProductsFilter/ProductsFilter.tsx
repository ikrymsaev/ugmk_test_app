import { useTypedDispatch, useTypedSelector } from "@/store/hooks";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { TFilterValue, productsFilterOptions, selectFilter, setProductsFilter } from "@/store/slices/products";
import styles from './ProductsFilter.module.css';

export const ProductsFilter = () => {
  const dispatch = useTypedDispatch();
  const productsFilter = useTypedSelector(selectFilter)

  const handleChange = (event: SelectChangeEvent<TFilterValue[]>) => {
    const { target: { value } } = event;
    if (typeof value === 'string') {
      return;
    }
    dispatch(setProductsFilter(value));
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, minWidth: 240 }} size="small">
        <InputLabel id="products_type_filter">Учёт продукции</InputLabel>
        <Select
          multiple
          value={productsFilter}
          label="Учёт продукции"
          onChange={handleChange}
          renderValue={(selected) => selected.map((item) => productsFilterOptions[item].label).join(', ')}
        >
          {Object.values(productsFilterOptions).map(({ label, key }) => <MenuItem key={key} value={key}><em>{label}</em></MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}