$(document).ready(function () {
    $('.accordion h3').click(function () {
        $(this).next().slideToggle();
    });
    $('.accordion a').click(function (event) {
        event.preventDefault();
        $(this).parent().find('p').slideToggle();
        $(this).text("Collapse all");
    });
});
