/**
 * Created by heleensnoeck on 05-05-15.
 */
$(document).ready(function() {
    Base.init();
});

var Base = (function() {

    var self = {},
        $logo = $(".logo"), //de letter H
        $header = $(".header"), //dit is de achtergrondafbeelding
        $window =  $(window),
        initialScale = 7, //de scale die ik later op het logo toepas, standaard wil ik hem op 7
        initialTop; //de top die ik later op het logo toepas, wordt berekend aan de hand van de hoogte van de header straks

    self.init = function() {

        setHeaderHeightAndInitialTop();

        setLogoScroll();
    }

    function setHeaderHeightAndInitialTop(){
        var windowHeight = $('.header').outerHeight(); // div pakken en container hight noemen.
        //$header.css("height", windowHeight+"px"); //hoogte van de header wordt even groot als de hoogte van je browser
        initialTop = windowHeight/2 - 150; // de initialTop zetten we dan op iets minder dan de helft van deze hoogte
    }

    function setLogoScroll(){
        //FIRST LOAD (doe ik zodat ik de waarde van initialScale en initalTop niet ook in de CSS hoef te zetten, stel een developer in de toekomst past dit aan: dan hoeft hij/zij niet te weten dat je dit op 2 plekken aan moet passen)
        setLogoScale( initialScale );
        setLogoTop( initialTop );

        //SCROLLING
        $window.scroll(function() {

            var scrollPosition = $window.scrollTop();
            var scrollPercentage = scrollPosition * 100 / $header.outerHeight(); //bereken hoeveel procent van de header je bent gescrollt, hier komt bv 10 uit als je op 10% van de hoogte van de header bent gescrollt.
            scrollPercentage = scrollPercentage / 100; // delen door 100 zodat het een getal wordt waarmee je zo kunt rekenen, bv 0.1
            scrollPercentage = 1 - scrollPercentage; // als je deze berekening doet kom je in het geval van 10% dus uit op 0.9, in het geval van 20% op 0.8 (zodat je van groot naar klein gaat)

            var newTop = initialTop * scrollPercentage; // doordat scrollPercentage gebruikt maakt van scrollPosition gaat "heen en weer" automatisch goed
            newTop = Math.floor(newTop);
            if( newTop < 10 ) { //ik wil niet dat hij kleiner wordt dan 10
                newTop = 10;
            }
            setLogoTop( newTop );

            var newScale = initialScale * scrollPercentage;
            newScale = newScale.toFixed(1);
            if( newScale < 1 ) { //ik wil niet dat hij kleiner wordt dan 1
                newScale = 1;
            }
            setLogoScale( newScale );

        });
    }

    function setLogoScale( scaleNumber ) { //newScale
        $logo.css("transform", "scale("+scaleNumber+")");
    }

    function setLogoTop( topNumber ) {
        $logo.css("top", topNumber+"px");

    }

    return self;

})();