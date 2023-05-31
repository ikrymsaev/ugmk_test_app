import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts"
import styles from './DetailsDiagram.module.css';

interface IProps {
  data: any[];
}
const COLORS = ['#0088FE', '#FF8042', '#FFBB28'];

export const DetailsDiagram = (props: IProps): JSX.Element => {
  const { data } = props;

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="90%" aspect={2.5}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            label
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}