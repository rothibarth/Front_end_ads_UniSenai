function validaIncricao(){

    if(document.frmincricao.textnome.value==""){
        alert("Preencha o campo nome.");
        document.frmincricao.textnome.focus();

        return false;
    }
    
    if(document.frmincricao.textemail.value==""){
        alert("Preencha o campo email.");
        document.frmincricao.textemail.focus();

        return false;
    }

    if(document.frmincricao.textel.value==""){
        alert("Preencha o campo telefone.");
        document.frmincricao.textel.focus();
 
        return false;
    }

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

