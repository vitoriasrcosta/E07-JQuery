function comparaCores(cor1, cor2){
    if (cor1.cor != cor2.cor) {
        setTimeout(function(){
            cor1.obj.addClass("costas");
            cor1.obj.removeClass("frente");

            cor2.obj.addClass("costas");
            cor2.obj.removeClass("frente");
        }, 500);
    }
}

$(document).ready(function(){
    var cor1 = null;
    var cor2 = null;
    var corDaCarta = null;

$("td").css({"height": "120px", "width": "120px", "border": "1px rgb(49, 49, 180) solid"});

    $("td").click(function(){
        if($(this).attr("class").split(' ')[1] == "costas"){
            corDaCarta = $(this).attr("class").split(' ')[0];
            $(this).css({"background-color": corDaCarta}); 
            $(this).addClass("frente");                 
            $(this).removeClass("costas");              

            if (cor1 == null) {
                cor1 = {obj: $(this), cor:corDaCarta};
            }
                
            else { 
                cor2 = {obj: $(this), cor:corDaCarta};
                comparaCores(cor1, cor2);
                cor1 = null;
                cor2 = null;
            }
        }
    });

});
