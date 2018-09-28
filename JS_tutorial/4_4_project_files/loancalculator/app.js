//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calcResults, 1000);
    
    
    
    e.preventDefault();
});

//calc results
function calcResults(e){

    //UI vars
    const amountUI = document.getElementById('amount');
    const intrestUI = document.getElementById('interest');
    const yearsUI = document.getElementById('years');
    const monthyPay = document.getElementById('monthly-payment');
    const totalPay = document.getElementById('total-payment');
    const totalInt = document.getElementById('total-interest');

    const principal = parseFloat(amountUI.value);
    const calInt = parseFloat(intrestUI.value) /100 / 12;
    const calcPay = parseFloat(yearsUI.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calInt, calcPay);
    const monthly = (principal*x*calInt)/(x-1);

    if(isFinite(monthly)) {
        monthyPay.value = monthly.toFixed(2);
        totalPay.value = (monthly *calcPay).toFixed(2);
        totalInt.value = ((monthly*calcPay) - principal).toFixed(2);

        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers')
    }
}

function showError(error){
    document.getElementById('loading').style.display = 'none';
    //create div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //insert error above heading
    card.insertBefore(errorDiv, heading);

    //add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //clear error after 3 seconds
    setTimeout(clearError, 3000);

}

function clearError(){
    document.querySelector('.alert').remove();
}