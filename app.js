// function updateCaseNumber (caseState){
//     const caseInput = document.getElementById('case-number');
//     let caseNumber = caseInput.value;
//     if(caseState){
//          caseInput.value = parseInt(caseNumber) + 1; 
//     }
//     //Why we do not use parse(caNumber) here?
//     else if (caseNumber>0){
//         caseInput.value = parseInt(caseNumber)-1;  
//     }
//     caseNumber = caseInput.value;

//     //update Total cost
//     const caseTotal = document.getElementById('case-total');
//     caseTotal.innerHTML = caseNumber*59;
// }

function updatePoductNumber(caseState, product,price){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(caseState){
        productInput.value = parseInt(productNumber)+1;
    }
    else if (productNumber>0){
        productInput.value= parseInt(productNumber)-1;
    }
    productNumber = productInput.value;
    const mobileTotal = document.getElementById(product+'-total');
    mobileTotal.innerHTML = productNumber*price;
//calculate total
    calculateTotal();
    
}



document.getElementById('case-plus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updatePoductNumber(true, 'case', 59);
})

document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber)-1;
    updatePoductNumber(false, 'case', 59);
})

///Mobile part 


document.getElementById('mobile-plus').addEventListener('click', function(){
    updatePoductNumber(true, 'mobile', 1219);
})
document.getElementById('mobile-minus').addEventListener('click', function(){
    updatePoductNumber(false, 'mobile',1219);
})

function getProductNumber(product){
    const productInput = document.getElementById(product+'-number');
    
    const productNumber = parseInt(productInput.value);
    console.log(productNumber);
    return productNumber;
}

function calculateTotal(){
    const mobileTotal= getProductNumber('mobile')*1219;
    const caseTotal=getProductNumber('case')*59;
    const subtotal = mobileTotal+ caseTotal;
    const tax = subtotal*.1;
    const total = subtotal+tax;

    const getSubtotal = document.getElementById('sub-total');
    getSubtotal.innerHTML= subtotal;
    const getTax = document.getElementById('tax');
    getTax.innerHTML= tax;
    const getTotal = document.getElementById('total');
    getTotal.innerHTML= total;
    


}
