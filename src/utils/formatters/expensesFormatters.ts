export const formatExpensesList = (expenses: any[]): string => {
    return expenses
      .map((expense) => {
        // Date formatting
        const formattedDate: string = new Date(expense.added_at).toISOString().split('T')[0];
        // Expenses list items format
        return `${formattedDate} - ${expense.category} expense: ${expense.amount}  ${expense.description}`;
      })
      .join('\n'); // String format for correct visualization (one item per line)
  };
  