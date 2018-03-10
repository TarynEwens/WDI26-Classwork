const render = function() {
  $('#checking-balance').text( '$' + accounts.checkingBalance );
  $('#savings-balance').text( '$' + accounts.savingsBalance );

  $('.zero').removeClass('zero');

  if (accounts.checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }
  if (accounts.savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};


$(document).ready(function () {
  render();
  $('#checking-deposit').on('click', function () {
    const amount = $('#checking-amount').val(); // get the amount
    accounts.checkingDeposit( amount ); // deposit the amount
    render(); //update the screen
  });
  $('#checking-withdraw').on('click', function () {
    const amount = $('#checking-amount').val(); // get the amount
    accounts.checkingWithdraw( amount ); // withdraw the amount
    render(); //update the screen
  });

  $('#savings-deposit').on('click', function () {
    const amount = $('#savings-amount').val(); // get the amount
    accounts.savingsDeposit( amount ); // deposit the amount
    render(); //update the screen
  });
  $('#savings-withdraw').on('click', function () {
    const amount = $('#savings-amount').val(); // get the amount
    accounts.savingsWithdraw( amount ); // withdraw the amount
    render(); //update the screen
  });
});
