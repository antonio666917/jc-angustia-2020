// object-fit polyfill run

        objectFitImages();



        /* init Jarallax */

        jarallax(document.querySelectorAll('.jarallax'));



        jarallax(document.querySelectorAll('.jarallax-keep-img'), {

            keepImg: true,

        });



        /* init Flickity Carousel + Jarallax inside it */

        // new Flickity( '.demo-carousel', {

        //     initialIndex: 1,

        //     autoPlay: 3000,

        //     pauseAutoPlayOnHover: false,

        //     pageDots: false,

        //     prevNextButtons: false,

        //     wrapAround: true

        // });

        // jarallax(document.querySelectorAll('.demo-carousel .jarallax'), {

        //     elementInViewport: document.querySelectorAll('.demo-carousel')

        // });



        /* init Jarallax with jQuery */

        // $('.jarallax').jarallax({

        //     speed: 0.5,

        //     imgWidth: 1366,

        //     imgHeight: 768

        // });