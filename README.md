![preview-2.png](public%2Fpreview-2.png)
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## How to use the chart
How to use the StackedChart component:
```javascript
import {StackedChart} from "@/components";

<StackedChart data={data} min={150000} max={750000} />
```

Example data:
```javascript
const data = [
    {
        date: '07.01.2024',
        products: [
            {name: "product1", total: 123, required: 123, balance: 123, color: "#7BAAF8"},
            {name: "product2", total: 123, required: 123, balance: 123, color: "#E73425"},
            ...
        ]
    }
]
````