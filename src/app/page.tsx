import {StackedChart} from "@/components";

const data = [
    {
        date: '07.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 75000, balance: 190000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 50000, balance: 70000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 50000, balance: 70000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 50000, balance: 70000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 50000, balance: 70000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 50000, balance: 70000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 50000, balance: 70000, color: "#A3C4F9"}
        ]
    },
    {
        date: '08.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 73000, balance: 187000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 52000, balance: 69000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 48000, balance: 69000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 52000, balance: 68000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 48000, balance: 68000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 53000, balance: 68000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 49000, balance: 69000, color: "#A3C4F9"}
        ]
    },
    {
        date: '09.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 73000, balance: 187000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 52000, balance: 69000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 48000, balance: 69000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 52000, balance: 68000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 48000, balance: 68000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 53000, balance: 68000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 49000, balance: 69000, color: "#A3C4F9"}
        ]
    },
    {
        date: '10.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 73000, balance: 187000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 52000, balance: 69000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 48000, balance: 69000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 52000, balance: 68000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 48000, balance: 68000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 53000, balance: 68000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 49000, balance: 69000, color: "#A3C4F9"}
        ]
    },
    {
        date: '11.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 73000, balance: 187000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 52000, balance: 69000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 48000, balance: 69000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 52000, balance: 68000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 48000, balance: 68000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 53000, balance: 68000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 49000, balance: 69000, color: "#A3C4F9"}
        ]
    },
    {
        date: '12.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 73000, balance: 187000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 52000, balance: 69000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 48000, balance: 69000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 52000, balance: 68000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 48000, balance: 68000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 53000, balance: 68000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 49000, balance: 69000, color: "#A3C4F9"}
        ]
    },
    {
        date: '13.01.2024',
        products: [
            {name: "Axapharm", total: getRandomValue(), required: 73000, balance: 187000, color: "#7BAAF8"},
            {name: "Devatis", total: getRandomValue(), required: 52000, balance: 69000, color: "#E73425"},
            {name: "GSK", total: getRandomValue(), required: 48000, balance: 69000, color: "#FDD050"},
            {name: "Helvepharm", total: getRandomValue(), required: 52000, balance: 68000, color: "#71C287"},
            {name: "Mepha", total: getRandomValue(), required: 48000, balance: 68000, color: "#FF994D"},
            {name: "Sandoz", total: getRandomValue(), required: 53000, balance: 68000, color: "#7ED1D7"},
            {name: "Spring HealthCare", total: getRandomValue(), required: 49000, balance: 69000, color: "#A3C4F9"}
        ]
    },
];

function getRandomValue() {
    return Math.floor(Math.random() * (150000 - 50000 + 1)) + 50000;
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <StackedChart data={data} min={150000} max={750000} />
    </main>
  );
}
