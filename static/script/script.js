var expenses = []
function addExpense() {
    var nameInput = document.getElementById('expense-name')
    var amountInput = document.getElementById('expense-amount')
    var typeSelect = document.getElementById('expense-type')
    var customTypeInput = document.getElementById('expense-custom-type')
  
    var name = nameInput.value
    var amount = amountInput.value
    var type = typeSelect.value

    if (customTypeInput.value !== '') {
      type = customTypeInput.value
    }
 
  var expense = {
    name: name,
    amount: amount,
    type: type
  }
  expenses.push(expense)
  
  var expensesText = '';
  for (var i = 0; i < expenses.length; i++) {
    var currentExpense = expenses[i];
    expensesText +=
    (i+1) + ')' + currentExpense.name + ' - ' + currentExpense.amount + ';  категория : ' + currentExpense.type + '\n'
  }


  var expenseList = document.getElementById('expense-list')
  expenseList.textContent = expensesText

  
    nameInput.value = ''
    amountInput.value = ''
    customTypeInput.value = ''
  }

function sum() {
    var expensesSum = 0;
  
    for (var i = 0; i < expenses.length; i++) {
      var currentExpense = expenses[i];
      var expenseAmount = parseInt(currentExpense.amount)
      expensesSum += expenseAmount
    }
  
    var expenseSum = document.getElementById('expense-sum-output')
    expenseSum.textContent= 'расходы:' + expensesSum
  }
