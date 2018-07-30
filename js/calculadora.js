$(document).ready(function(){
    
    $("input[type='button']").click(function(){

        var formula = $("#formula").val();
        var comprobarNumero = formula.substring(formula.length - 1);
        var operador = $(this).val();

        if(operador != "=" && operador != "CE" && operador != "Reset" && operador != "."){

            if(isNaN(operador) && isNaN(comprobarNumero)) {
                // Chupáme un huevo
            } else {
                $("#formula").val(formula + operador);
            }           

        } else if(operador == "="){


            try {
                var resultado = eval(formula);
                $("#resultado").val(resultado);
            }
            catch(err) {
                $("#resultado").val("Error");
            }            

        } else if(operador == "."){
       
            var comprobarSim = function(){
                simEnc = comprobarNumero;
                var i = formula.length;

                while(i >= 0){
                    
                    if (formula.charAt(i) == ".") {
                        return "stop";
                    } else if(formula.charAt(i) == "*" || formula.charAt(i) == "/" || formula.charAt(i) == "+" || formula.charAt(i) == "-"){
                        return "ok";
                    } else if (i == 0 && !isNaN(formula.charAt(i))) {
                        return "ok";
                    } else {
                        i--;
                    }
                }
                return "fallaco";  
            };
        
            haySimbolo = comprobarSim();

            if(!isNaN(comprobarNumero)) {

                if(haySimbolo == "ok"){
                    $("#formula").val(formula + ".");
                }
                
            }

        } else if(operador == "CE"){

            if($(this).length > 0){

                var longitudFormula = formula.length - 1;
                var formulaBorrada = formula.substring(0, longitudFormula);
                $("#formula").val(formulaBorrada);

            }

        } else if(operador == "Reset"){

            $("form")[0].reset();
        }

    });

});


