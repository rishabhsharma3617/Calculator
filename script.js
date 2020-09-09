

var inputValue = 0
var a =0;
var b =0;
var flag = true
var operatorElement = null
var operator = ''
var operationsArray = []
var itemsArray = []
var currVal = 0
var result =0
var equalPressed = false
var justStart = false



function disableKeyboard(event){
        event.preventDefault()
}
window.onload = () => {
function customReset()
{
    
    setTimeout(() => document.getElementById('in-number').value = '',1000)
    flag='false'
    itemsArray = []
    operationsArray = []
    currVal = 0
    operatorElement = null
    document.getElementById('equalSign').setAttribute('style','background-color: rgb(24, 68, 163);')
}
    
function doCalc()
{
   
    result = itemsArray[0]

   for(var i=0;i<operationsArray.length;i++)
   {
       
       if(operationsArray[i] === '+')
           result =  result + itemsArray[i+1] 
       if(operationsArray[i] === '*')
            result = result*itemsArray[i+1]
       if(operationsArray[i] === '/')
            result = result/itemsArray[i+1]
       if(operationsArray[i] === '-')
           result = result - itemsArray[i+1]
    

   }
   document.getElementById('in-number').value = result
   if(result === Infinity)
   {
      customReset()
   }
   
   document.getElementById('in-number').value = result
   
   
}

    document.getElementById('in-number').value = '0'
    var tdTags = document.getElementsByTagName('td')
    for(var i =0;i<tdTags.length ; i++)
    {
        var tm= tdTags[i].innerText
        var tmp = tm.slice()
        if(tmp === 'AC')
        {
            tdTags[i].addEventListener('click', (event) => {
                document.getElementById('in-number').value = ''
                flag='false'
                itemsArray = []
                operationsArray = []
                currVal = 0
                operatorElement = null
                document.getElementById('equalSign').setAttribute('style','background-color: rgb(24, 68, 163);')
              })
           
        }
        else if(tmp === '*' || tmp==='/' || tmp==='+' || tmp==='-')
        {
            tdTags[i].addEventListener('click', (event) => {
                
                document.getElementById('equalSign').setAttribute('style','background-color: rgb(24, 68, 163);')
                operator = event.target.innerText
                if(operatorElement)
                operatorElement.setAttribute('style','')

                if(flag === true)
                {
                    document.getElementById('in-number').value = 0
                    operationsArray.push(operator)
                    if(!equalPressed)
                    {
                        itemsArray.push(currVal)
                    }
                
                    currVal = 0
                    document.getElementById('in-number').value = ''
                    operatorElement = event.target
                    flag=false
                    event.target.setAttribute('style' , 'background-color: rgb(56, 109, 140)')
                }
                else
                {
                    alert('Please type in the correct value')
                }
 
              })
        }
        else if(tmp === '=')
        {

            tdTags[i].addEventListener('click', (event) => {
                console.log(document.getElementById('in-number').value)
                
                console.log(currVal)
                if(result === Infinity)
                {    console.log('jhgh')
                    itemsArray = []
                    operationsArray = []
                    flag='false'
                    itemsArray = []
                    operationsArray = []
                    currVal = 0
                    operatorElement = null
                    setTimeout(() => document.getElementById('in-number').value = '', 1500)
                }
                else
                {
                    if(itemsArray.length === 0 )
                alert('Please Type in the values first')

                if(flag===true)
                {
                    
                    itemsArray.push(currVal)
                    justStart = true
                    operatorElement.setAttribute('style','')
                    event.target.setAttribute('style','background-color  : rgba(22, 145, 53)')
                     doCalc()
                     flag = true
                     equalPressed = true
                }
                else
                {
                    alert('Please give us the correct value')
                }
                }

                

              })
            
        }
        else
        {
            tdTags[i].addEventListener('click', (event) => {
                
                var clickedButton = event.target.innerText
                tmp = document.getElementById('in-number').value + clickedButton
                document.getElementById('in-number').value = tmp
                
                currVal = parseFloat(tmp)
                
                equalPressed = false
                
                flag = true
                
              })
        }
        
    }
    
}