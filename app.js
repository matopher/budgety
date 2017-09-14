	// BUDGET CONTROLLER
var budgetController = (function() {
	


})();


	// UI CONTROLLER
var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		description: '.add__description',
		value: '.add__value',
		inputBtn: '.add__btn'
	}

	return {
		getinput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
				description: document.querySelector(DOMstrings.description).value,
				value: document.querySelector(DOMstrings.value).value
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
	}

})();

	// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

	var DOM = UICtrl.getDOMstrings();

	var ctrlAddItem = function() {

		// 1. Get the field input data
		var input = UICtrl.getinput();
		console.log(input);

		// 2. Add the item to the budget controller

		// 3. Add the item to UI

		// 4. Calculate the budget

		// 5. Display the budget on the UI
		
	}

	document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function(event){

		if(event.keyCode === 13 || event.which === 13) {
			ctrlAddItem();
		}

	});


})(budgetController, UIController);








