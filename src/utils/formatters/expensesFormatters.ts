export const formatExpensesList = (expenses: any[]): string => {
    return expenses
      .map((expense) => {
        const formattedDate: string = new Date(expense.added_at).toISOString().split('T')[0];
        return `${formattedDate} - ${expense.category} expense: ${expense.amount}  ${expense.description}`;
      })
      .join('\n');
  };
  