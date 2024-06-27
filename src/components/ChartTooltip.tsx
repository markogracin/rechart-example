import React, {FunctionComponent} from 'react';

interface PayloadItem {
    name: string;
    value: number;
    color: string;
}

interface Props {
    active?: boolean;
    payload?: PayloadItem[];
    label?: string;
}

export const CustomTooltip: FunctionComponent<Props> = ({active, payload, label}) => {

    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const products = Object.keys(data).filter(key => key !== 'date');

        // Compute the totals
        const totalSum = products.reduce((acc, key) => acc + data[key].total, 0);
        const requiredSum = products.reduce((acc, key) => acc + data[key].required, 0);
        const balanceSum = products.reduce((acc, key) => acc + data[key].balance, 0);

        return (
            <div className="bg-white p-6 rounded-lg shadow-lg w-[900px]">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <p className="text-gray-600 font-medium">{label}</p>
                    </div>
                </div>

                <table className="w-full text-left">
                    <thead>
                    <tr className="text-gray-600">
                        <th className="py-2 font-medium">Product/ID</th>
                        <th className="py-2 font-medium">Total</th>
                        <th className="py-2 font-medium">Required</th>
                        <th className="py-2 font-medium">Free/Balance</th>
                        <th className="py-2 font-medium">% M</th>
                        <th className="py-2 font-medium">Relative Shares (compared to Required)</th>
                    </tr>
                    </thead>
                    <tbody>

                    {Object.keys(data).filter(key => key !== 'date').map((key, index) => {
                        const product = data[key]

                        return <tr key={index}>
                            <td className="py-2 flex items-center">
                                <span style={{backgroundColor: payload[index]?.color}}
                                      className="inline-block w-3 h-3 rounded-full mr-2"></span>
                                {product?.name}
                            </td>
                            <td className="py-2">{product.total}</td>
                            <td className="py-2">{product.required}</td>
                            <td className="py-2">{product.balance}</td>
                            <td className="py-2">1%</td>
                            <td className="py-2">
                                <div className="w-full h-4 bg-gray-200">
                                    <div className="h-4 bg-green-500" style={{width: "1%"}}></div>
                                </div>
                            </td>
                        </tr>
                    })}

                    </tbody>
                    <tfoot>
                    <tr>
                        <td className="py-2 font-medium">Gesamt</td>
                        <td className="py-2 font-medium">{totalSum}</td>
                        <td className="py-2 font-medium">{requiredSum}</td>
                        <td className="py-2 font-medium">{balanceSum}</td>
                        <td className="py-2 font-medium">100%</td>
                        <td className="py-2">
                            <div className="w-full h-4 bg-gray-200">
                                <div className="h-4 bg-blue-500" style={{width: "100%"}}></div>
                            </div>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }

    return null;
};

