import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const WellbeingCard = (props) => {
  const data = [
    { name: 'Work Demand', value: props.workDemand },
    { name: 'Work Flexibility', value: props.workFlexibility },
    { name: 'Coworker Relationship', value: props.coworkerRelationship },
    { name: 'Management Leadership', value: props.managementLeadership },
    { name: 'Compensation', value: props.compensation }
  ];

  return (
    <div className=" bg-[#FDF8E2] rounded-lg p-4 font-inter font-semibold">
      <div className="flex justify-center">Your wellbeing score breakdown</div>
      <PieChart width={400} height={320} className="font-light mx-auto px-14 flex justify-center items-center">
        <Pie data={data} cx={160} cy={130} outerRadius={90} fill="#8884d8" label className="flex justify-center items-center">
          {
            data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))
          }
        </Pie>
        <Tooltip />
        <Legend className="font-8px"/>
      </PieChart>
    </div>
  )
};

export default WellbeingCard;