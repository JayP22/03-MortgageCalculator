// an array of your choice
var choice = [
	['Monthly', 12],
    ['Bimonthly', 6]
];

// returning the text from your choice
for (var i = 0; i < choice.length; i++) {
	$("<option>").val(choice[i][1]).html(choice[i][0]).appendTo("#myPeriod");
}

$(function() {
    $("#myButton").on("click", function() {     //this happens on click

    	var balance = $("#myBalance").val();  //grabs your balance

    	var interest = $("#myInterest").val();  //grabs your interest rate

    	var term = $("#myTerm").val();         //grabs your loan term

    	var period = $("#myPeriod").val();       //grabs your choice of time pay
         
        //calculations
    	var numOfPayments = term * period;

    	var monthlyIntRate = (interest / 100) / period;

    	var compIntRate = Math.pow((1 + monthlyIntRate), numOfPayments);

    	var intQuotient = (monthlyIntRate * compIntRate) / (compIntRate - 1);

    	var monthlyPay = balance * intQuotient;

    	//returns the answer without decimals
    	$("#answer").html("Your monthly payment on your home mortgage is $" + parseInt(monthlyPay));
    })
});