// JavaScript Code
//------------------search&close toggler----------------------------------------
$(document).ready(function(){
    //search toggle button
    $(function(){
        $(".toggle-overlay").click(function(){
            $(".search-overlay").toggleClass("open");
        })      
    })
    //---------------------menu toggle button---------------------------------------

    $(".menu-toggle").click(function(){
        $(".menu-toggle").toggleClass("active");
    })

    //---------------------owl carousel---------------------------------------------
    $('.projects').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

})


    
    
    
    
    
    