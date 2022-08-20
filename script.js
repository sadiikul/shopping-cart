function get(inputfield,boolean,products,mobiletrue){
    const field=document.getElementById(inputfield)
    const fieldvalue=field.value
    const fieldvalueint=parseInt(fieldvalue)

    const product=document.getElementById(products)
    const productvalue=product.innerText
    const productvalueint=parseInt(productvalue)

    if(boolean){
        const fieldvaluetotal=fieldvalueint+1
        field.value=fieldvaluetotal
        if(mobiletrue){
            product.innerText=fieldvaluetotal*1219
        }else{
            product.innerText=fieldvaluetotal*59
        }

    }else{
        const fieldvaluetotal=fieldvalueint-1
        field.value=fieldvaluetotal
        product.innerText=fieldvaluetotal*productvalueint
        if(mobiletrue){
            product.innerText=fieldvaluetotal*1219
        }else{
            product.innerText=fieldvaluetotal*59
        }
    }

    

}




document.getElementById('caseplus').addEventListener('click',function(){
    get('casefield',true,'case',false)
    
})
document.getElementById('casemin').addEventListener('click',function(){
    get('casefield',false,'case',false)
})
document.getElementById('phoneplus').addEventListener('click',function(){
    get('phonefield',true,'mobile',true)
    
})
document.getElementById('phonemin').addEventListener('click',function(){
    get('phonefield',false,'mobile',true)
})