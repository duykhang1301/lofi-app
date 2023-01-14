//Validate library custom
function Validator(options){

    function validate(inputElement,rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        //lay ra cac rule cua selector
        var rules = selectorRules[rule.selector];

        //lap qua tung rule va check
        //Neu co loi thi dung viec kiem tra
        for(var i = 0; i < rules.length;i++){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.classList.add("invalid");
        }else{
            errorElement.innerText = "";
            inputElement.classList.remove("invalid");
        }
        return !errorMessage;
    }
    var selectorRules = {};
    var formElement = document.querySelector(options.form);
    if(formElement){
        formElement.onsubmit = function(e){
            e.preventDefault();
            var isFormValid = true;
            options.rules.forEach( (rule) =>{
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            
            if(isFormValid){
                if(typeof(options.onSubmit) === 'function'){

                    var enableInputs = formElement.querySelectorAll("[name]:not([disable])");

                    var formValues = Array.from(enableInputs).reduce((values,input)=>{
                        return (values[input.name] = input.value) && values;
                    }, {});

                    options.onSubmit(formValues);
                }
            }
        }
        //Thuc hien lap qua tung rule va validate
       

        options.rules.forEach( (rule) =>{
            var inputElement = formElement.querySelector(rule.selector);

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            }
            else{
                selectorRules[rule.selector] = [rule.test];
            }
          
            if(inputElement){
                //Xu ly truong hop blur khoi input
                inputElement.onblur = function(){
                    validate(inputElement,rule);
                }

                //xu ly khi nguoi dung nhap vao input
                inputElement.oninput = function(){
                    inputElement.parentElement.querySelector(options.errorSelector).innerText = '';
                    inputElement.classList.remove("invalid");
                }

            }
        });
    }
}

Validator.isRequired = function(selector,mesesage){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : mesesage || 'Please enter this field';
        }
    }
    
}

Validator.isEmail = function (selector,mesesage){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : mesesage || 'This field must be email';
        }
    }
}

Validator.isMinLength = function (selector,min,mesesage){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : mesesage || `Password must be longer than ${min} characters`;
        }
    }
}

export default Validator;