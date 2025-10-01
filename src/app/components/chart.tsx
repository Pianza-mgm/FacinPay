"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import cn from "@lib/clsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function BarChart({labels, datasets, className} : {labels: string[], datasets: ChartData<"bar">["datasets"], className?: string}){

  const firstColor = className?.includes("dark") ?"hsl(175, 80%, 8%)" : "hsl(165, 26%, 82%)";
  const optionsColors = [firstColor, "hsl(145, 20%, 20%)"];
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {display: false}
    },
    layout:{
      padding: 5
    },
    scales: {
    x: {
      ticks: { color: optionsColors[0]}, // cor das labels eixo X
      grid: { color: optionsColors[1]}, // cor das linhas da grade
    },
    y: {
      ticks: { color: optionsColors[0] },
      grid: { color: optionsColors[1] },
    },
  },
    
  };
  const processedDataSets = datasets.map((dataset) => ({
    borderColor: "hsl(165, 26%, 82%)",
    backgroundColor: "hsla(145, 79%, 34%, 0.7)" ,
    ...dataset
  }))
  const data: ChartData<"bar"> = {
    //X axis
    labels,
    //Y axis
    datasets: processedDataSets
  };

  return(
    <Bar options={options} data={data} className={cn("chart", className)}/>
  )
}

export function LineChart({labels, datasets, className} : {labels: string[], datasets: ChartData<"line">["datasets"], className?: string}){

  const optionsColors = ["hsl(165, 26%, 82%)", "hsl(145, 20%, 20%)"] 
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      legend: {display: false}
    },
    layout:{
      padding: 5
    },
    scales: {
    x: {
      ticks: { color: optionsColors[0]}, // cor das labels eixo X
      grid: { color: optionsColors[1]}, // cor das linhas da grade
    },
    y: {
      ticks: { color: optionsColors[0] },
      grid: { color: optionsColors[1] },
    },
  },
    
  };
  const processedDataSets = datasets.map((dataset) => ({
    borderColor: `hsla(145, 79%, 34%, 0.7)`,
    backgroundColor: "hsl(165, 26%, 82%)" ,
    ...dataset
  }))
  const data: ChartData<"line"> = {
    //X axis
    labels,
    //Y axis
    datasets: processedDataSets
  };

  return(
    <Line options={options} data={data} className={cn("chart", className)}/>
  )
}

export function DoughnutChart({labels, datasets, className} : {labels: string[], datasets: ChartData<"doughnut">["datasets"], className?: string}){

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {display: false}
    },
    layout:{
      padding: 10
    }
  };
  const processedDataSets = datasets.map((dataset) => ({
    borderColor: `hsl(165, 26%, 82%)`,
    backgroundColor: dataset.data.map((_, index) => `hsla(145, 79%, ${Math.max(34 - index * 5)}%, 0.7)`) ,
    ...dataset
  }))
  const data: ChartData<"doughnut"> = {
    labels, //X
    datasets: processedDataSets //Y
  };

  return(
    <Doughnut options={options} data={data} className={cn("chart", className)}/>
  )
}