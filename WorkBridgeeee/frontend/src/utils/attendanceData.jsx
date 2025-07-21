// src/data/attendanceData.jsx

const attendanceData = [
  {
    name: "Naman",
    monthly: [
      { month: "Jan", present: 20, absent: 2, leaves: 1 },
      { month: "Feb", present: 18, absent: 1, leaves: 2 },
      { month: "Mar", present: 21, absent: 0, leaves: 0 },
      { month: "Apr", present: 19, absent: 2, leaves: 1 },
      { month: "May", present: 20, absent: 1, leaves: 1 },
      { month: "Jun", present: 22, absent: 0, leaves: 0 },
      { month: "Jul", present: 20, absent: 1, leaves: 1 },
      { month: "Aug", present: 21, absent: 0, leaves: 1 },
      { month: "Sep", present: 19, absent: 1, leaves: 2 },
      { month: "Oct", present: 20, absent: 2, leaves: 0 },
      { month: "Nov", present: 18, absent: 2, leaves: 2 },
      { month: "Dec", present: 20, absent: 1, leaves: 1 }
    ]
  },
  {
    name: "Vihaan",
    monthly: [
      { month: "Jan", present: 19, absent: 3, leaves: 1 },
      { month: "Feb", present: 20, absent: 2, leaves: 0 },
      { month: "Mar", present: 21, absent: 1, leaves: 0 },
      { month: "Apr", present: 18, absent: 3, leaves: 1 },
      { month: "May", present: 19, absent: 2, leaves: 1 },
      { month: "Jun", present: 22, absent: 0, leaves: 0 },
      { month: "Jul", present: 21, absent: 1, leaves: 0 },
      { month: "Aug", present: 20, absent: 1, leaves: 1 },
      { month: "Sep", present: 20, absent: 1, leaves: 1 },
      { month: "Oct", present: 19, absent: 2, leaves: 1 },
      { month: "Nov", present: 18, absent: 1, leaves: 3 },
      { month: "Dec", present: 20, absent: 2, leaves: 0 }
    ]
  },
  // Repeat similar structure for other employees:
  {
    name: "Ishaan",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 20 - (i % 2),
      absent: i % 3,
      leaves: (i + 1) % 2
    }))
  },
  {
    name: "Arjun",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 19 + (i % 3),
      absent: i % 2,
      leaves: 1
    }))
  },
  {
    name: "Rhea",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 18 + (i % 4),
      absent: 2,
      leaves: i % 2
    }))
  },
  {
    name: "Vikram",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 20,
      absent: 1,
      leaves: 1
    }))
  },
  {
    name: "Neha",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 19 + (i % 2),
      absent: i % 3,
      leaves: (i + 2) % 2
    }))
  },
  {
    name: "Radhika",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 20,
      absent: i % 2,
      leaves: i % 2
    }))
  },
  {
    name: "Shreya",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 21,
      absent: 0,
      leaves: 1
    }))
  },
  {
    name: "Manoj",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 20 - (i % 3),
      absent: i % 2,
      leaves: 1
    }))
  },
  {
    name: "Priya",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 20,
      absent: 1,
      leaves: 1
    }))
  },
  {
    name: "Sandeep",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 19 + (i % 2),
      absent: 1,
      leaves: 1
    }))
  },
  {
    name: "Kiran",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 18 + (i % 4),
      absent: 2,
      leaves: 0
    }))
  },
  
  {
    name: "Sonal",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 21,
      absent: 0,
      leaves: 1
    }))
  },
  {
    name: "Deepak",
    monthly: Array.from({ length: 12 }, (_, i) => ({
      month: new Date(0, i).toLocaleString("default", { month: "short" }),
      present: 0,
      absent: 0,
      leaves: 0
    }))
  },
];

export default attendanceData;
