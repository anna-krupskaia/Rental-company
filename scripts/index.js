'use strict';

$(document).ready(function(){

    //  define error messages and their respective elements

    const anyError = $(".error");
    const border = $(".border");


    // common functions for forms
function openPopup(popupId){
    $('body').css("overflow", "hidden");
    $(".pop-up" + popupId).css("display", "flex");
    }

    function closePopupListener(popupId) {

        const popup = $(popupId);

        popup.click(function (event) {
        if (!popup.find(".pop-up-container").has(event.target).length){
            $('body').css("overflow", "auto");
            $('.pop-up').css("display", "none");
            popup.find('.pop-up-header').show();
            popup.find('.details').show();
            popup.find('.message').hide();
            popup.off();
        }
    })
    }

    function resetError(){
        anyError.hide();
        border.css("border-color", "#464646");
    }

    //  call pop-up 'Заказать звонок' pop-up

    $("#order-call").click(function () {
        openPopup("#pop-up-order-call");
        resetError();
        closePopupListener("#pop-up-order-call");
        name.val('');
        phone.val('');
    })

    // gather info for jQerry

    const name = $("#name");
    const phone = $("#phone");

    // validation for 'Заказать звонок' pop-up

    $("#order-call-button").click(function(e){
        resetError();
        e.preventDefault();
        let hasError = false;

        if(!(name).val()){
            hasError = true;
            name.next().show();
            name.css("border-color", "red");
        }

        if(!phone.val()){
            hasError = true;
            phone.next().show();
            phone.css("border-color", "red");
        }

        if(!hasError){
            $('.loader').show();
            const data = {
                name: name.val(),
                phone: phone.val()
            };

            $.ajax({
                url: 'https://testologia.ru/checkout',
                method: 'POST',
                data: data
            }).done(function (res){

                $('.loader').hide();

                if (res.success === 1) {
                    showMessage('#pop-up-order-call')
                } else if(res.success === 0){
                    alert("Возникла ошибка при оформлении заявки, позвоните нам!");
                }
            });
        }
    });

    function showMessage(popupId){

        const popup = $(popupId);

        popup.find('.pop-up-header').hide();
        popup.find('.details').hide();
        popup.find('.message').show();
    }

    //pop-up 'Заполнить форму'

    // gather info for jQerry
    const selectCar = $("#select-car");
    const from = $("#from");
    const until = $("#until");
    const orderDestination = $("#destination");
    const orderName = $("#fill-up-name");
    const orderPhone = $("#fill-up-phone");
    const orderEmail = $("#email");

    function clearFillForm (){
        selectCar.val('');
        until.val('');
        from.val('');
        orderDestination.val('');
        orderName.val('');
        orderPhone.val('');
        orderEmail.val('');
    }

    // call pop-up

    $("#fill-form").click(function () {
        openPopup("#order-form");
        resetError();
        closePopupListener("#order-form");
        clearFillForm();
    })

    // validation for 'Заполнить форму' pop-up

    $("#order-form-btn").click(function(e){
        resetError();
        e.preventDefault();
        let hasError = false;

        if(!selectCar.val()){
            hasError = true;
            selectCar.next().show();
            selectCar.css("border-color", "red");
        }

        if(!until.val() || !from.val()){
            hasError = true;
            until.next().show();
            until.css("border-color", "red");
            from.next().show();
            from.css("border-color", "red");
        }

        if(!orderDestination.val()){
            hasError = true;
            orderDestination.next().show();
            orderDestination.css("border-color", "red");
        }
        if(!orderName.val()){
            hasError = true;
            orderName.next().show();
            orderName.css("border-color", "red");
        }

        if(!orderPhone.val()){
            hasError = true;
            orderPhone.next().show();
            orderPhone.css("border-color", "red");
        }

        if(!orderEmail.val()){
            hasError = true;
            orderEmail.next().show();
            orderEmail.css("border-color", "red");
        }

        if(!hasError){

                $('.loader').show();
                const data = {
                    selectCar: selectCar.val(),
                    until: until.val(),
                    from: from.val(),
                    orderDestination: orderDestination.val(),
                    name: orderName.val(),
                    orderPhone: orderPhone.val(),
                    orderEmail: orderEmail.val()
                };

                $.ajax({
                    url: 'https://testologia.ru/checkout',
                    method: 'POST',
                    data: data
                }).done(function (res){

                    $('.loader').hide();

                    if (res.success === 1) {
                        showMessage('#order-form')
                    } else if(res.success === 0){
                        alert("Возникла ошибка при оформлении заявки, позвоните нам!");
                    }
                });
        }
    });



    // 'Арендовать авто' pop-up

    // gather info for jQerry

    const carSelect = $("#car-select");
    const carFrom = $("#carFrom");
    const carUntil = $("#carUntil");
    const carDestination = $("#car-destination");
    const carName = $("#car-fill-up-name");
    const carPhone = $("#car-fill-up-phone");
    const carEmail = $("#car-email");

    // clear form

    function clearCarForm (){
        carSelect.val('');
        carUntil.val('');
        carFrom.val('');
        carDestination.val('');
        carName.val('');
        carPhone.val('');
        carEmail.val('');
    }

    // call pop-up

    $("#order-car-js").click(function () {
        openPopup("#car");
        resetError();
        closePopupListener("#car");
        clearCarForm();
    })


    // validation for 'Заполнить форму' pop-up

    $("#car-form-btn").click(function(e){
        resetError();
        e.preventDefault();
        let hasError = false;

        if(!carSelect.val()){
            hasError = true;
            carSelect.next().show();
            carSelect.css("border-color", "red");
        }


        if(!carFrom.val()){
            hasError = true;
            carFrom.next().show();
            carFrom.css("border-color", "red");
        }

        if(!carUntil.val()){
            hasError = true;
            carUntil.next().show();
            carUntil.css("border-color", "red");
        }

        if(!carDestination.val()){
            hasError = true;
            carDestination.next().show();
            carDestination.css("border-color", "red");
        }
        if(!carName.val()){
            hasError = true;
            carName.next().show();
            carName.css("border-color", "red");
        }

        if(!carPhone.val()){
            hasError = true;
            carPhone.next().show();
            carPhone.css("border-color", "red");
        }

        if(!carEmail.val()){
            hasError = true;
            carEmail.next().show();
            carEmail.css("border-color", "red");
        }

        if(!hasError){

            $('.loader').show();
            const data = {
                carSelect: carSelect.val(),
                carUntil: carUntil.val(),
                carFrom: carFrom.val(),
                carDestination: carDestination.val(),
                name: carName.val(),
                carPhone: carPhone.val(),
                carEmail: carEmail.val()
            };

            $.ajax({
                url: 'https://testologia.ru/checkout',
                method: 'POST',
                data: data
            }).done(function (res){

                $('.loader').hide();

                if (res.success === 1) {
                    showMessage('#car')
                } else if(res.success === 0){
                    alert("Возникла ошибка при оформлении заявки, позвоните нам!");
                }
            });
        }
    })

    // nav bar for adaptive

    const menuNav = $(".menu-nav");
    const openNav = $("#nav-open");
    const closeNav = $("#nav-close");

    openNav.click(()=>{
        openNav.hide();
        $('body').css("overflow", "hidden");
        menuNav.show();
    })

    closeNav.click(()=>{
        $('body').css("overflow", "auto");
        menuNav.hide();
        openNav.show();
    })

    $(".nav-list ul > *").click(()=>{
        $('body').css("overflow", "auto");
        menuNav.hide();
        openNav.show();
    })

    // slider carousel

    $('.option-pic').slick({
        prevArrow: $('.options-prev-arrow'),
        nextArrow: $('.options-next-arrow')
    });

    $('.review-slider').slick({
    prevArrow: $('.review-prev-arrow'),
    nextArrow: $('.review-next-arrow'),
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    appendDots: $('.review-people'),
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ],
    });

    // wow library
    new WOW({
        animateClass: 'animate__animated'
    }).init();

});