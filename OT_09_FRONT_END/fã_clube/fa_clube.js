function validaIncricao(){

    // if(document.frmincricao.textnome.value==""){
    //     alert("Preencha o campo nome.");
    //     document.frmincricao.textnome.focus();

    //     return false;
    // }

    var nome = document.frmincricao.textnome.value;
    var nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    // /^[A-zÀ-']{2,}([ ]{1}[A-zÀ]{4,})$/; //VALIDAÇÃO NOME

    if(nomeRegex.test(nome)){
        alert("Preencha o nome corretamente");
        document.frmincricao.textnome.focus();

        return false;
    }

    if(document.frmincricao.textemail.value==""){
        alert("Preencha o campo email.");
        document.frmincricao.textemail.focus();

        return false;
    }

    var fone = document.getElementById('tel').value;
    var foneRegex = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/; // Expressão regular corrigida

    if(foneRegex.test(fone)){
        alert("Telefone valido")
    } else {
        alert("Preencha o campo Telefone corretamente.");
        
    }
    
    // var fone = document.frmincricao.textel.value;
    // var foneRegex = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/; // Expressão regular corrigida

    // if(foneRegex.test(fone)){
    //     alert("Preencha o numero corretamente.");
    //     document.frmincricao.textel.focus();

    //     return false;
    // }


    if(document.frmincricao.txtdate.value==""){
        alert("Preencha o campo data.");
        document.frmincricao.txtdate.focus();

        return false;
    }
    

     // Validação do campo de gênero
     const radios = document.getElementsByName('sexo');
     let radioSelecionado = false;
     for (let i = 0; i < radios.length; i++) {
         if (radios[i].checked) {
             radioSelecionado = true;
             break;
         }
     }

     if (!radioSelecionado) {
         alert("Preencha o campo de sexo.");
         return false;
     }

     // Validação do campo de checkbox
     if (!document.frmincricao.participar.checked) {
         alert("Preencha o campo de desejo participar do fã.");
         document.frmincricao.participar.focus();
         return false;
     }


    return true;

    
}

