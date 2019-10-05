$(document).ready(function(){

    $('.icon-container').on('click', '.mr-3', function(event) {
        let skewl = $(this).attr('data');
        console.log(skewl);
    });
});
