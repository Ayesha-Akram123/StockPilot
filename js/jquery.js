$(document).ready(function(){
    $('.dashboard-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        // arrows:false,
        mobileFirst:true,
        arrows:false,
        fade:true,
          asNavFor:'.dashboard-image,.dashboard-headers',
          responsive:[{
            breakpoint:992,
            settings:{
                dots:true,
            }
        }]
    });
    $('.dashboard-image').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        dots:true,
        arrows:false,
        mobileFirst:true,
        fade:true,
        asNavFor:'.dashboard-container,.dashboard-headers,.dashboard-mobile-image',
        responsive:[{
            breakpoint:992,
            settings:{
                dots:false,
            }
        }]
    });
    $('.dashboard-headers').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        arrows:false,
        mobileFirst:true,
        fade:true,
        asNavFor:'.dashboard-container,.dashboard-image,.dashboard-mobile-image',
    });
    $('.products-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        arrows:false,
        mobileFirst:true,
        fade:true,
        dots:true,
    });
    $('.subscriber-experience-content-mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        mobileFirst:true,
        dots:true,
        arrows:false,
        responsive:[{
            breakpoint:992,
            settings:'unslick',
        }]
    });
    $('.bars').click(function(){
		$('.custom-add').addClass('active')
	});

    $('.bars').click(function(){
		$('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
	});
    $('.xmark').click(function(){
		$('.custom-add').removeClass('active')
	});

    $('.xmark').click(function(){
		$('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
	});
    $('.features-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        dots:true,
        mobileFirst:true,
        arrows:false,
        responsive:[{
            breakpoint:567,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                centerpadding:'40px',
            }
        },
        {
            breakpoint:786,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                centerpadding:'60px',
            }
        },
        {
            breakpoint:992,
            settings:"unslick",
        }
    ]
    });
    $('.testimonials-image').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        nextArrow: '<button type="button"><i class="fa-solid fa-chevron-right"></i></button>',
        prevArrow: '<button type="button"><i class="fa-solid fa-chevron-left"></i></button>',
        asNavFor:'.testimonials-sub-content',
    });
    $('.testimonials-sub-content').slick({
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        asNavFor:'.testimonials-image',
        arrows:false,
        centerMode: true,
        focusOnSelect: true,
        fade: true,
    });
    $('.box-block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        // arrows:false,
        mobileFirst:true,
        arrows:false,
        dots:true,
          responsive:[{
            breakpoint:992,
            settings:'unslick'
        }]
    });
    
    $('.content').hide();
    $('.label-icon').click(function () {
        jQuery(".label-icon").not(this).siblings().slideUp(); 
        jQuery(this).siblings().slideToggle();
    });


   







});
