import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import styles from './ProductsDiagram.module.css';
import { TProductsByMonth } from "../../../../../store/slices/products/types";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: TProductsByMonth;
}

export const ProductsDiagram = (props: IProps): JSX.Element => {
  const { data } = props;

  const navigate = useNavigate()

  const handleClickBar = (factoryId: number) => (e: any) => {
    navigate(`details/${factoryId}/${e.monthId}`);
  }

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="90%" aspect={2.5}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthLabel" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Фабрика А" dataKey="factory_1" fill="#8884d8" onClick={handleClickBar(1)} />
          <Bar name="Фабрика Б" dataKey="factory_2" fill="#82ca9d" onClick={handleClickBar(2)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}