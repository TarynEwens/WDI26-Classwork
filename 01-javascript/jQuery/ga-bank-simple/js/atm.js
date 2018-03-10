const checkForZero = function() {
  $('.zero').removeClass('zero');// Remove red

  const checkingBalance = +$('#checking-balance').text().slice(1); // Find the checking balance TODO: make checking balance a function and savings balance a function
  if (checkingBalance <= 0) {// If 0
    $('#checking-balance').addClass('zero');   // add red
  }

  const savingsBalance = +$('#savings-balance').text().slice(1); // Find the savings balance
  if (savingsBalance <= 0) {// If 0
    $('#savings-balance').addClass('zero');   // add red
  }
};


$(document).ready(function() {

checkForZero();

$('#checking-deposit').on('click', function () {
  const amount = +$('#checking-amount').val(); //Find the deposit amount
  const balance = +$('#checking-balance').text().slice(1);//  Find the current balance and strip off the $ sign
  // Add to the current balances
  $('#checking-balance').text( '$' + (balance + amount) );// Update the screen with new value
  checkForZero();
});

$('#checking-withdraw').on('click', function () {
  const amount = +$('#checking-amount').val(); //Find the deposit amount
  const balance = +$('#checking-balance').text().slice(1);//  Find the current balance and strip off the $ sign
  const otherbalance = +$('#savings-balance').text().slice(1);
  const newBalance = balance - amount;
  // prevent withdrawing more money than you have
  if (newBalance >= 0) {
  $('#checking-balance').text( '$' + (newBalance) );// Update the screen with new value
  }  else if (amount <= balance + otherBalance) {
    const difference = amount - balance;
    $('#checking-balance').text('$0');
    $('#savings-balance').text( '$' + (otherBalance - difference) )
  }
checkForZero();
});

$('#savings-deposit').on('click', function () {
  const amount = +$('#savings-amount').val(); //Find the deposit amount
  const balance = +$('#savings-balance').text().slice(1);//  Find the current balance and strip off the $ sign
  // Add to the current balances
  $('#savings-balance').text( '$' + (balance + amount) );// Update the screen with new value
  checkForZero();
});

$('#savings-withdraw').on('click', function () {
  const amount = +$('#savings-amount').val(); //Find the deposit amount
  const balance = +$('#savings-balance').text().slice(1);//  Find the current balance and strip off the $ sign
  const otherBalance = +$('#checking-balance').text().slice(1);
  const newBalance = balance - amount;

  if (newBalance >= 0) {
    $('#savings-balance').text( '$' + newBalance);
  } else if (amount <= balance + otherBalance) {
    const difference = amount - balance;
    $('#savings-balance').text('$0');
    $('#checking-balance').text( '$' + (otherBalance - difference))
  }
  // prevent withdrawing more money than you have
  if (amount <= balance) {
  $('#savings-balance').text( '$' + (balance - amount) );// Update the screen with new value
}
checkForZero();
});

//create an object with savings: with  deposit: function withdraw: function & checking: with deposit: function withdraw: function
//update the display when a change is made
//if balance === 0 apply class .zero. if balance > 0 remove all classes then add class .balance.
//if balance of both accounts <= 0 preventDefault();
//if transation > savings balance + checking balance preventDefault();
//if transaction <= savings balance + checking balance take from account chosen until it hits zero, then take remaining from other account.













});
