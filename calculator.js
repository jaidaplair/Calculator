(function(){

    const calculator = 
    {
        //reference the container and display defined in calculator.html
        container:document.getElementById('calculator-container'),
        display: document.getElementById('display'),
        addNumber(number)
        {//adds a number
            this.display.value+= number;
        },
        addOperator(operator)
        {//chech which operator was pressed
            if(operator==="C")
            {
                //clear contents of display
                this.display.value = " ";
                console.log('cleared input');
                return;
            }
            if(operator==="=")
            {//will define this function

                this.calculate()
                console.log('it calculated');
                return;

            }
            this.display.value+= operator
        },

        calculate()
        {
            const result= eval(this.display.value);
            this.display.value = result;
            //add code for if a number is prime
        }
        
    }
//need to do something when someone clicks on numbers
//need an event listener
    calculator.container.addEventListener('click',function(event)
    {
        const target = event.target
    
        if(target.dataset.operator){
            calculator.addOperator(target.dataset.operator);
            return;
        }
        if(target.dataset.value){
            calculator.addNumber(target.dataset.value);
            return;
        }

});

})();