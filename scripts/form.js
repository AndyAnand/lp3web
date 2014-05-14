    
    function showTime(){
        var data = new Date();
        document.getElementById('tempo').innerHTML = 'Hora atual: '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds();
        setTimeout("showTime()",1000);
        
    }
    
    function desativaB(){
        var button = document.getElementById('b1');
        button.type = "hidden";
        
    }
    
    function check(){
        var text = document.getElementById('f1');
        if(text.value == ''){
            alert('Campo Vazio!');
        }
    }
    
    function calc(){
        var text = document.getElementById('f2').value;
        var d3 = document.getElementById('f3');
        d3.value = eval(text);
    }
