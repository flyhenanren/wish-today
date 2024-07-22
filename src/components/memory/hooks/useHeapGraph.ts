export default function () {
  const xAxis = [
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
  ];
  const heapData = [
    {
      name: "all",
      type: "line",
      data: [0, 2, 4, 5, 4, 2, 8, 2],
    },
    {
      name: "Survivor",
      type: "line",
      data: [0, 1, 3, 0, 0, 0, 0, 2],
    },
    {
      name: "Eden",
      type: "line",
      data: [0, 1, 1, 0, 0, 0, 0, 2],
    },
    {
      name: "Old",
      type: "line",
      data: [0, 1, 1, 4, 5, 2, 1, 2],
    },
  ];
  const heapOption = {
    title: {
      text: "Heap Memrory",
    },
    dataZoom: {
      type: "slider",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxis,
    },
    yAxis: {
      type: "value",
    },
    series: heapData,
  };
  return {
    heapOption
  };
}
