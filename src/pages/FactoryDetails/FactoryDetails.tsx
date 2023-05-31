import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from './FactoryDetails.module.css';
import { DetailsDiagram } from "./components/DetailsDiagram/DetailsDiagram";
import { useTypedDispatch, useTypedSelector } from "@/store/hooks";
import { requestFactoryProductsByMonth, selectFactoryDetails } from "@/store/slices/factory";
import { Container } from "@mui/material";

export const FactoryDetails = () => {
  const {factory_id, month} = useParams<{ factory_id: string; month: string }>();

  const details = useTypedSelector(selectFactoryDetails)

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (factory_id && month) {
      dispatch(requestFactoryProductsByMonth({ factory_id, month }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <Container maxWidth="md">
        <h2>Details Page</h2>
        <DetailsDiagram data={details} />
      </Container>
    </div>
  )
}