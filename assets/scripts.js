$(document).ready(function() {
    //Selection de l'élement portant la classe CSS : gallery et application de la fonction mauGallery avec des paramètres :
    //@columns: Object, @lightBox: Boolean, @lightboxID: String, @shotTags: Boolean, @tagsPosition: String
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
