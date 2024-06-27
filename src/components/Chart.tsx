"use client"

import React, {FunctionComponent} from 'react';
import {
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip, ReferenceLine,
} from 'recharts';
import {CustomTooltip} from "@/components";
import dynamic from "next/dynamic";

const AreaChart = dynamic(() => import('recharts').then(mod => mod.AreaChart), {
    ssr: false,
    loading: () => <p>Loading..</p>
});

interface Product {
    name: string;
    total: number;
    required: number;
    balance: number;
    color: string;
}


interface Props {
    data: { date: string, products: Product[] }[];
    min: number;
    max: number;
}

export const StackedChart: FunctionComponent<Props> = ({data, min, max}) => {

    const flattenData = () => {
        return data.map(entry => {
            const flattenedProducts = entry.products.reduce((acc, product) => {
                acc[product.name] = {...product};
                return acc;
            }, {});
            return {date: entry.date, ...flattenedProducts};
        });
    };

    const flattenedData = flattenData(data);
    return (
        <div className="flex flex-col items-center gap-4">
            <AreaChart
                width={800}
                height={400}
                data={flattenedData}
                margin={{
                    top: 10,
                    right: 20,
                    left: 20,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="date"/>
                <YAxis/>

                {/* reference lines */}
                <ReferenceLine y={max} stroke="green" strokeWidth={2} strokeDasharray="3 3"/>
                <ReferenceLine y={min} stroke="red" strokeWidth={2} strokeDasharray="3 3"/>

                {/* tooltip */}
                <Tooltip allowEscapeViewBox={{x: true, y: true}} content={<CustomTooltip/>}/>

                {/* areas */}
                {data[0]?.products.map((entry, index) => {
                    return <Area key={index} type="linear" dataKey={entry.name + ".total"} stackId="1"
                                 stroke={entry.color} fill={entry.color}/>
                })}
            </AreaChart>

            {/* legend, is this needed? */}
            {/*<div className="flex gap-4 items-center">*/}
            {/*    {data[0]?.products.map((entry, index) => {*/}
            {/*        return <div key={index} className="flex gap-2 items-center">*/}
            {/*            <div style={{backgroundColor: entry.color}} className="w-4 h-4"/>*/}
            {/*            <div>{entry.name}</div>*/}
            {/*        </div>*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
};
