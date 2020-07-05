import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string,
  value: number,
  type: 'income' | 'outcome',
}

class TransactionsRepository {
  private transactions: Transaction[];
  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions
  }

  public getBalance(): Balance {
    const incomeValues = this.transactions.map(transaction => (
      transaction.type === 'income' ? transaction.value : 0
    ));

    const incomeValue = incomeValues.reduce((previus, currentValue) => (
      previus + currentValue
    ), 0);

    const outcomeValues = this.transactions.map(transaction => (
      transaction.type === 'outcome' ? transaction.value : 0
    ));

    const outcomeValue = outcomeValues.reduce((previus, currentValue) => (
      previus + currentValue
    ), 0);

    const balance = {
      income: incomeValue,
      outcome: outcomeValue,
      total: (incomeValue - outcomeValue),
    }
    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({title, value, type});
    this.transactions.push(transaction)
    return transaction;
  }
}

export default TransactionsRepository;
