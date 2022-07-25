const incomeColors = ['#cd5c5c', '#ff4500', '#dc143c', '#800080', '#8b0000', '#b22222', '#ff0000', '#ffa07a', '#f08080'];
const expenseColors = ['#00ff00','#adff2f','#7fff00','#32cd32','#7cfc00','#e8f48c','#76ff7a','#b2ec5d','#9efd38','#adff2f','#d0ff14','#39ff14'];

export const incomeCategories = [
  { type: 'Business Profit', amount: 0, color: incomeColors[0] },
  { type: 'Investments', amount: 0, color: incomeColors[1] },
  { type: 'Extra income', amount: 0, color: incomeColors[2] },
  { type: 'Deposits', amount: 0, color: incomeColors[3] },
  { type: 'Lottery', amount: 0, color: incomeColors[4] },
  { type: 'Others', amount: 0, color: incomeColors[5] },
  { type: 'Capital Assets', amount: 0, color: incomeColors[6] },
  { type: 'Savings', amount: 0, color: incomeColors[7] },
  { type: 'Rental income', amount: 0, color: incomeColors[8] },
];

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0] },
  { type: 'Cab Services', amount: 0, color: expenseColors[1] },
  { type: 'Salary', amount: 0, color: expenseColors[2] },
  { type: 'Employee Bonus', amount: 0, color: expenseColors[3] },
  { type: 'Maintenance', amount: 0, color: expenseColors[4] },
  { type: 'Tax', amount: 0, color: expenseColors[5] },
  { type: 'Marketing', amount: 0, color: expenseColors[6] },
  { type: 'Insurance', amount: 0, color: expenseColors[7] },
  { type: 'Food Services', amount: 0, color: expenseColors[8] },
  { type: 'Resources', amount: 0, color: expenseColors[9] },
  { type: 'Other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};