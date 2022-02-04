// $('.switch').click(()=>{
//     //jQuery selector ^= starts with ... *= contains
//     $([".light [class*='-light']", ".dark [class*='-dark']"]).each((i,ele)=>{
//         $(ele).toggleClass('bg-light bg-dark')
//         $(ele).toggleClass('text-light text-dark')
//         $(ele).toggleClass('navbar-light navbar-dark')
//     })
//     // toggle body class selector
//     console.log("hello");
//     $('body').toggleClass('light dark')
// })

$('.switch').click(()=>{
    //jQuery selector ^= starts with ... *= contains
    // find instances of light and replace with dark and vice versa
    var backgroundLight = $('[class*="bg-light"]');
    var textLight = $('[class*="text-light"]');
    var navbarLight = $('[class*="navbar-light"]');

    var backgroundDark = $('[class*="bg-dark"]');
    var textDark = $('[class*="text-dark"]');
    var navbarDark= $('[class*="navbar-dark"]');


    backgroundLight.removeClass(function (index, css) {
        return (css.match (/(^|\s)bg-l\S+/g) || []).join(' ');
    });
    backgroundLight.addClass('bg-dark');

    textLight.removeClass(function (index, css) {
        return (css.match (/(^|\s)text-l\S+/g) || []).join(' ');
    });
    textLight.addClass('text-dark');

    navbarLight.removeClass(function (index, css) {
        return (css.match (/(^|\s)navbar-l\S+/g) || []).join(' ');
    });
    navbarLight.addClass('navbar-dark');


    backgroundDark.removeClass(function (index, css) {
        return (css.match (/(^|\s)bg-d\S+/g) || []).join(' ');
    });
    backgroundDark.addClass('bg-light');

    textDark.removeClass(function (index, css) {
        return (css.match (/(^|\s)text-d\S+/g) || []).join(' ');
    });
    textDark.addClass('text-light');

    navbarDark.removeClass(function (index, css) {
        return (css.match (/(^|\s)navbar-d\S+/g) || []).join(' ');
    });
    navbarDark.addClass('navbar-light');
    
    // toggle both classes for it to work
    $('.icon').toggleClass("bi-moon-fill bi-brightness-high");
    $('.switch').toggleClass("color-light color-dark");
    $('.selector').toggleClass("menu-button-light menu-button-dark");

})

