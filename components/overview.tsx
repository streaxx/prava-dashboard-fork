"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 1420 },
  { name: "Feb", total: 1620 },
  { name: "Mar", total: 1790 },
  { name: "Apr", total: 1890 },
  { name: "May", total: 2390 },
  { name: "Jun", total: 3490 },
  { name: "Jul", total: 2490 },
  { name: "Aug", total: 1990 },
  { name: "Sep", total: 2300 },
  { name: "Oct", total: 2600 },
  { name: "Nov", total: 3100 },
  { name: "Dec", total: 3690 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

