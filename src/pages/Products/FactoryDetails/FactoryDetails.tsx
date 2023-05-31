import { useParams } from "react-router-dom";
import { useTypedDispatch } from "../../../store/hooks/useTypedDispatch";
import { useEffect } from "react";
import { requestFactoryProductsByMonth } from "../../../store/slices/factory/factoryThunks";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import { selectFactoryDetails } from "../../../store/slices/factory/factorySelectors";
import styles from './FactoryDetails.module.css';
import { DetailsDiagram } from "./components/DetailsDiagram/DetailsDiagram";

export const FactoryDetails = () => {
  const {factory_id, month} = useParams<{ factory_id: string; month: string }>();

  const details = useTypedSelector(selectFactoryDetails)

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (factory_id && month) {
      dispatch(requestFactoryProductsByMonth({ factory_id, month }))
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Details Page</h2>
      <DetailsDiagram data={details} />
    </div>
  )
}