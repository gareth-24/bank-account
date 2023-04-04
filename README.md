```
Describe Account()
Constructor that builds account

Test: Make account with account number, name, balance, history, and type.
Code:
const account = new Account("McBankersons", 123809298, "Checking");
account;
Expected Result:
account{
  accountNumber: 0;
  name: "McBankersons";
  balance: 123809298;
  type: "Checking";
  history: "";
}

Describe: Account.prototype.assignAccNumber()

Test: Takes the account and assigns the account number of 10 numbers.
Code:
const account = new Account("McBankersons", 123809298, "Checking");
account.assignAccNumber();
account.accountNumber;
Expected Result: <random 10 digit number>

Account.prototype.transfer

Test: Make prototype method that does a transfer to or from the account that updates to history.
Code:
account.transfer(0, "deposit", 100);
account.balance + account.history;
Expected Result: '123809398depost:100';


```

