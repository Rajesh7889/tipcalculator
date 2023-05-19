
function get(){
    let amount=document.getElementById('amount').value;
    let range=document.getElementById('range').value;
    let tipprcnt=document.getElementById('tipprcnt');
    tipprcnt.innerHTML=`${range}%`;
    let tipamnt=document.getElementById('tipamnt');
    let totalamnt=document.getElementById('totalamnt');
    tipamnt.value=amount/100*range;
    if(tipamnt.value != 0){
    totalamnt.value=parseFloat(amount)+parseFloat(tipamnt.value);
    }else {
        totalamnt.value='0';
    }

}
