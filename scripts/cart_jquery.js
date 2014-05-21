// calcula preco quando input recebe entrada
$(document).ready(
	function(){
		$('.inputbar').bind('input', function(){
				var quants = document.getElementsByTagName("INPUT");
				//conta o numero de inputs que sao entradas para quantidades
				var prods = 0;
				for(var i=0; i < quants.length; i++){
					if(quants[i].className == "inputbar"){
						prods++;
					}
				}
				
				var itens = 0;
				var preco = 0;
				
				var quant = "quant";
				for(var i=1; i <= prods; i++){
					var item = document.getElementById(quant+i);
					var q_item = eval(item.value);
					itens = itens + q_item;
					var item_preco = document.getElementById("s"+i);
					var string_preco = item_preco.innerHTML;
					
					string_preco = string_preco.replace("R$ ","");
					string_preco = string_preco.replace(",",".");
					
					item_preco = eval(string_preco);
					preco = preco + q_item*item_preco;
				}
				
				var itens_label = document.getElementById("itens");
				var preco_label = document.getElementById("valor");
				itens_label.innerHTML = "Itens: "+itens;
				//tira o "." e coloca ","
				preco = preco + " "; //to string
				preco = preco.replace(".",",");
				
				preco_label.innerHTML = "R$: "+preco;
			});
	}
);
