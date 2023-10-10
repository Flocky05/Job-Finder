
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 60 },
  { name: 'Group B', value: 58 },
  { name: 'Group C', value: 48 },
  { name: 'Group D', value: 59 },
  { name: 'Group D', value: 59 },
  { name: 'Group D', value: 57 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#8E44AD','#DAF7A6'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Statistics = () => {
	
		return (
			<div className='grid grid-cols-1 justify-items-center'>
				<h2 className='text-center text-2xl font-sembibol p-8'>Total jobs finder retio:</h2>
				<PieChart width={400} height={400}>
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				labelLine={false}
				label={renderCustomizedLabel}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
			>
				{data.map((entry, index) => (
				<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
			</PieChart>
			</div>
		);
	
};

export default Statistics;