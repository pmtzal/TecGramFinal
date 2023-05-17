import Dropzone from 'dropzone';
Dropzone.autoDiscover = false;
const dropzone = new Dropzone('#dropzone',{
    dictDefaultMessage: 'Da clic para subir fotografia',
    acceptedFiles:'.png, .jpg, .jpeg, .gif',
    addRemoveLinks:true,
    dicRemoveFile:'Borrar fotografia',
    maxFiles:1,
    uploadMultiple: false,

    init:function(){
      if(document.querySelector('[name="imagen"]').value.trim()){
        const imagenPublicada ={};
        imagenPublicada.size =1234;
        imagenPublicada.name = document.querySelector('[name="imagen"]').value.trim();

        this.option.addedfile.call(this, imagenPublicada);
        this.option.thumbnail.call(this,imagenPublicada,`/uploads/${imagenPublicada.name}`);
        imagenPublicada.previewElement.classList.add(
          "dz.success",
          "dz.complete"
        );
      }
    }
});

dropzone.on('removedfile',function(){
  document.querySelector('[name="imagen"]').value ="";
});

dropzone.on('success',function(file,response){
  document.querySelector('[name="imagen"]').value = response.imagen;
});