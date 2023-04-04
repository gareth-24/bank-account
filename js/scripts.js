//Business Logic for Members

function Member(firstName, lastName, phoneNumber) {
  this.accounts = {};
  this.currentId = 0;
  this.firstName = firstName;
  this.lasName = lastName;
  this.phoneNumber = phoneNumber;
}

Member.prototype.addAccount = function(account)  {
  account.id = this.assignId();
  this.accounts[account.id] = account;
};

Member.prototype.assignId = function()  {
  this.currentId += 1;
  return this.currentId;
};

Member.prototype.findAccount = function(id) {
  if (this.accounts[id] !== undefined ) {
    return this.accounts[id];
  } else  {
    return false;
  }
};

//Business Logic for Accounts

function Account(accountNumber, name, balance, type)  {
  this.AccountNumber = accountNumber;
  this.Name = name;
  this.Balance = balance;
  this.Type = type;
  this.History = "";
}

Account.prototype.assignAccNumber = function()  {
  let number = "";
  for(let i = 0; i < 10; i++){
    number += Math.floor(Math.random() * 10).toString();
  }
  this.AccountNumber = parseInt(number);
};

Account.prototype.

Account.prototype.transfer = function(accountNumber, transferType, ammount) {

};

//UI Logic
