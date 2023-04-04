```
Describe: Member():

Test: "Make a new member object with properties of first name, last name, phone number, and accounts."
Code:
  let member = new Member("Guy", "McBankerson", 8001992000);
  member;
Expected Output:
  member {accounts: {}, currentId: 1, firstName: 'Guy', lasName: 'McBankerson', phoneNumber: 8001992000}

Describe: Member.prototype.addAccount()

Test: "Add an account to the member object using the account ID."
Code:
  member.addAccount(account1);
  member.addAccount(account2);
  member;
Expected Output:
  member {accounts: {account1, account2}, currentId: 1, firstName: 'Guy', lasName: 'McBankerson', phoneNumber: 8001992000}

Describe Member.prototype.assignId()

Test: "Assign a unique, sequential ID number for member."
Code:
  member1.assignId();
  member2.assignId();

Expected Output:
  member1.currentId = 1;
  member2.currentId = 2;

Describe Member.prototype.findAccount()

Test: "Return a specific account by its ID."
Code:
  member.findAccount(1);
  Expected Output:
  account = {...}

Describe Account()
Constructor that builds account

Test: "Make account with account number, name, balance, history, and type."
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

Test: "Takes the account and assigns the account number of 10 digits."
Code:
  const account = new Account("McBankersons", 123809298, "Checking");
  account.assignAccNumber();
  account.accountNumber;
Expected Result: <random 10 digit number>

Describe: Account.prototype.findAccount()

Account.prototype.transfer

Test: "Make prototype method that does a transfer to or from the account that updates to history."
Code:
  account.transfer(0, "deposit", 100);
  account.balance + account.history;
Expected Result: '123809398depost:100';


```

