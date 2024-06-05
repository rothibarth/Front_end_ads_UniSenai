function validaFaleConosco(){

    // if(document.frmfaleconosco.txtnome.value==""){ 
    //     alert("Preencha o campo nome."); //validação nome
    //     document.frmfaleconosco.txtnome.focus();
    //     return false;

    // }

    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$"); //VALIDAÇÃO NOME

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    // if(document.frmfaleconosco.txtfone.value==""){
    //     alert("Preencha o campo telefone."); //validação fone
    //     document.frmfaleconosco.txtfone.focus();
    //     return false;

    // }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$"); //VALIDAÇÃO TELEFONE

    if(!expRegFone.test(fone)){
        alert("Preencha o campo telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();

        return false;
    }

    if(document.frmfaleconosco.txtemail.value==""){

        alert("Preencha o campo de email."); //validação do email
        document.frmfaleconosco.txtemail.focus();
        return false;

    }

    if(document.frmfaleconosco.selmotivo.value==""){
        alert("Preencha algum campo da seção motivo."); //validação do motivo
        document.frmfaleconosco.selmotivo.focus();

        return false;

    }

    if(document.frmfaleconosco.txacomentario.value==""){
        alert("Preencha o comentario."); //validação do comentario
        document.frmfaleconosco.txacomentario.focus();

        return false;

    }
    

    return true;

}

function verificaMotivo(motivo){
    var elemento = document.getElementById("opcaoProduto");
    if(motivo=="PR"){
        var select = document.createElement("select");
        //Setamos nesse novo select o atributo 'name' com o valor 'selproduto'
        select.setAttribute("name","selproduto");
        //Conteúdo atual da variável select:
        //<select name="selproduto"></select>

        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor vazio
        option.setAttribute("value","");
        //Criamos um nó de texto "Escolha" e gravamos na variável 'texto'
        var texto = document.createTextNode("Escolha");
        //Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="">Escolha</option>

        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(texto);
        //Conteúdo atual da variável select:
        //<select name="selproduto"><option value="">Escolha</option></select>
    
        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor "FR"
        option.setAttribute("value","FR");
        //Criamos um nó de texto "Freezer" e gravamos na variável 'texto'
        var texto = document.createTextNode("Freezer");
        //Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="FR">Freezer</option>

        //Colocamos o optioon criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variável select:
        /*
        <select name="selproduto">
        <option value="">Escolha</option><option value="FR">Freezer</option>
        </select>
        */

        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor "GE"
        option.setAttribute("value","GE");
        //Criamos um nó de texto "Geladeira" e gravamos na variável 'texto'
        var texto = document.createTextNode("Geladeira");
        //Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="GE">Geladeira</option>

        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variável select:
        /*
        <select name="selproduto">
        <option value="">Escolha</option> value="FR">Freezer</option><option value="GE">Geladeira</option>
        */

        //Colocamos o select criado como "filho" da tag div capturada no inicio da função
        elemento.appendChild(select);
    //Se o valor da variável motivo não for "PR"...
    }else{
        //Se a div possuir algum "primeiro filho"
        if(elemento.firstChild)
        //Removemos ele
        elemento.removeChild(elemento.firstChild);
    }

   
}//fim da função verifica(motivo)

//Assim que o documento HTMl for carregado por completo...
$(document).ready(function() {
    //Carrega o cabeçalho, menu e rodapé aos respectivos locais
    $("header").load("/OT_10_FRONT_END_JQUERY/pages/sites/general/cabecalho.html");
    $("nav").load("/OT_10_FRONT_END_JQUERY/pages/sites/general/menu.html");
    $("footer").load("/OT_10_FRONT_END_JQUERY/pages/sites/general/rodape.html");

});

