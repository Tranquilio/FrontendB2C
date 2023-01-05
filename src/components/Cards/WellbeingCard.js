import { useEffect } from 'react';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer, Tooltip, Legend, Animate } from 'recharts';

const COLORS = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
const NAMES = ["Work Demand", "Work Flexibility", "Coworker Relationship", "Management Leadership", "Compensation"];
const CIRCLE_SIZE = 10;

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.50;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      font-family="inter"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};


const WellbeingCard = (props) => {
  const mul = 100/(props.workDemand+props.workFlexibility+props.coworkerRelationship+props.managementLeadership+props.compensation)

  const data = [
    { name: 'Work Demand', value: Math.round( props.workDemand*mul*10)/10 },
    { name: 'Work Flexibility', value: Math.round( props.workFlexibility*mul*10)/10 },
    { name: 'Coworker Relationship', value: Math.round( props.coworkerRelationship*mul*10)/10 },
    { name: 'Management Leadership', value: Math.round( props.managementLeadership*mul*10)/10 },
    { name: 'Compensation', value: Math.round( props.compensation*mul*10)/10 }
  ];

  return (
  <>
    <div className="font-inter overflow-hidden">
      <div className="flex justify-center font-medium font-ptserif text-[22px]">Wellbeing Breakdown</div><br/>
      <div className="flex justify-center font-inter text-[18px]">
        <PieChart width={330} height={300} delay={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            isAnimationActive={false}
            // label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          {/* <Legend iconType="circle" align="center" layout="horizontal" textStyle='black' iconSize={10.5} wrapperStyle={{fontSize:10.5}}/> */}
        </PieChart>
      </div>
    <div style={{ display: 'flex flex-wrap flex-col', alignItems: 'center', justifyItems: 'center' }}>
    {COLORS.map((color, index) => (
      <div key={color} style={{ marginLeft: 10, display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              backgroundColor: color,
          }}
        />
        <div style={{ marginLeft: 8, fontSize: 12, fontFamily:'inter' }}>{NAMES[index]}</div>
      </div>
    ))}
    </div>
    <div className="mt-5 mb-5 flex justify-center font-medium font-ptserif text-[13px]">Greater score indicates greater wellbeing for the constructs.</div>
  </div></>

  )
};

export default WellbeingCard;
