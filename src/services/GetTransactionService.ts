import TransactionsRepository from '../repositories/TransactionsRepository';

class GetTransactionService {
  private transactionRepository: TransactionsRepository
  constructor (transactionRepository: TransactionsRepository) {
    this.transactionRepository = transactionRepository;
  }

  public execute(){
    const transactions = {
      transactions: this.transactionRepository.all(),
      balance: this.transactionRepository.getBalance()
    }

    return transactions;
  }
}

export default GetTransactionService;
