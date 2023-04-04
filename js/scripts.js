//Business Logic

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
}

Account.prototype.

Account.prototype.transfer = function(accountNumber, transferType, ammount) {

}

//UI Logic
