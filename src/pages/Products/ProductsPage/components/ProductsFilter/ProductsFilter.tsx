import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import styles from './ProductsFilter.module.css';
import { selectFilter } from "../../../../../store/slices/products/productsSelectors";
import { TFilterValue } from "../../../../../store/slices/products/types";
import { setProductsFilter } from "../../../../../store/slices/products/productsSlice";
import { productsFilterOptions } from "../../../../../store/slices/products/constants";
import { useTypedSelector } from "../../../../../store/hooks/useTypedSelector";
import { useTypedDispatch } from "../../../../../store/hooks/useTypedDispatch";

export const ProductsFilter = () => {
  const dispatch = useTypedDispatch();
  const productsFilter = useTypedSelector(selectFilter)
  console.log(productsFilter);

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