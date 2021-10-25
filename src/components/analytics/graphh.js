import React from 'react';
import {
  ComposedChart,
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    pv: 58000,
  },
  {
    name: '1 July',
    pv: 48000,
  },
  {
    name: '8 July',

    pv: 79000,
  },
  {
    name: '16 July',
    pv: 35000,
  },
  {
    name: '24 July',

    pv: 62000,
  },
  {
    name: '31 July',

    pv: 43000,
  },
];

const data2 = [
  {
    pv: 43000,
  },
  {
    name: '25 July',
    pv: 63000,
  },
  {
    name: '26 July',

    pv: 38000,
  },
  {
    name: '27 July',

    pv: 58000,
  },
  {
    name: '28 July',
    pv: 40000,
  },
  {
    name: '29 July',

    pv: 78000,
  },
  {
    name: '30 July',

    pv: 19000,
  },
  {
    name: '31 July',
    pv: 48000,
  },
];

const data3 = [
  {
    pv: 140,
    pv2: 50,
  },
  {
    name: '1 July',
    pv: 105,
    pv2: 70,
  },
  {
    name: '8 July',

    pv: 210,
    pv2: 88,
  },
  {
    name: '16 July',
    pv: 120,
    pv2: 78,
  },
  {
    name: '24 July',

    pv: 165,
    pv2: 44,
  },
  {
    name: '31 July',

    pv: 135,
    pv2: 200,
  },
  {
    pv: 100,
    pv2: 300,
  },
];

export const Graphh = () => {
  return (
    <ResponsiveContainer height={350}>
      <ComposedChart className='graph-label' data={data3}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#129a74' stopOpacity={0.4} />
            <stop offset='95%' stopColor='#FFFFFF' stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis tick={{ fill: '#CACCCF' }} dataKey='name' />
        <YAxis tickCount={7} axisLine={false} tick={{ fill: '#CACCCF' }} />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#7899EB'
          strokeWidth={2}
          activeDot={{ r: 8 }}
          fillOpacity={0.6}
          fill='url(#colorPv)'
        />
        <Line
          type='monotone'
          dataKey='pv2'
          stroke='#FAC032'
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const Graphh2 = () => {
  return (
    <ResponsiveContainer height={250}>
      <LineChart className='graph-label' data={data}>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis tick={{ fill: '#CACCCF' }} dataKey='name' />
        <YAxis axisLine={false} tick={{ fill: '#CACCCF' }} />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#336CFB'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const Graphh3 = () => {
  return (
    <ResponsiveContainer height={250}>
      <LineChart className='graph-label' data={data2}>
        <CartesianGrid vertical={false} strokeDasharray='3 3' />
        <XAxis tick={{ fill: '#CACCCF' }} dataKey='name' />
        <YAxis axisLine={false} tick={{ fill: '#CACCCF' }} />
        <Tooltip />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#FAC032'
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
