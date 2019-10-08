$(document).ready(function () {
    console.log("ready here");
    window.onload = function () {
        Particles.init({
            selector: '.background',
            color: ['#DA0463', '#404B69', '#DBEDF3'],
            connectParticles: true,
            maxParticles: 200,
            speed: 1
        });
    };

    $('.icon-container').on('click', '.mr-3', function (event) {
        let skewl = $(this).attr('data');
        console.log(skewl);
    });
});