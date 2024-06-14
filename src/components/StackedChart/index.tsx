"use client"

import React from 'react';
import {
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
} from 'recharts';
import { CustomTooltip} from "@/components";
import dynamic from "next/dynamic";

const AreaChart = dynamic(() => import('recharts').then(mod => mod.AreaChart), {
    ssr: false,
    loading: () => <p>Loading..</p>
});

const data = [
    { date: '07.01.2024', data1: 300000, data2: 100000, data3: 200000 },
    { date: '14.01.2024', data1: 280000, data2: 95000, data3: 210000 },
    { date: '21.01.2024', data1: 290000, data2: 105000, data3: 200000 },
    { date: '28.01.2024', data1: 310000, data2: 98000, data3: 195000 },
    { date: '04.02.2024', data1: 250000, data2: 120000, data3: 190000 },
    { date: '11.02.2024', data1: 220000, data2: 110000, data3: 210000 },
    { date: '18.02.2024', data1: 240000, data2: 108000, data3: 200000 },
    { date: '25.02.2024', data1: 260000, data2: 100000, data3: 190000 },
    { date: '03.03.2024', data1: 280000, data2: 96000, data3: 210000 },
    { date: '10.03.2024', data1: 300000, data2: 100000, data3: 200000 },
    { date: '17.03.2024', data1: 270000, data2: 98000, data3: 220000 },
    { date: '24.03.2024', data1: 290000, data2: 95000, data3: 210000 },
    { date: '31.03.2024', data1: 310000, data2: 105000, data3: 205000 },
];

export const StackedChart = () => {

    return (
        <AreaChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
            <defs>
                <linearGradient id="data1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="data2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>

                <linearGradient id="data3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area type="monotone" dataKey="data1" stroke="#8884d8" fillOpacity={1} fill="url(#data1)" />
            <Area type="monotone" dataKey="data2" stroke="#82ca9d" fillOpacity={1} fill="url(#data2)" />
            <Area type="monotone" dataKey="data3" stroke="#ffc658" fillOpacity={1} fill="url(#data3)" />
            <ReferenceLine y={290000} stroke="green" strokeWidth={2} strokeDasharray="3 3" />
            <ReferenceLine y={90000} stroke="red" strokeWidth={2} strokeDasharray="3 3" />
        </AreaChart>
    );
};
