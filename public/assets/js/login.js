$(document).ready(function () {

    login();
    signUp();
    function login(){
    $("#loginClick").on("click", function () {
        $('.modal').modal(
            $("#loginModal").append(

                '<div id="modal1" class="modal">' +
                '<div class="modal-content">' +
                '<h4 class="black-text center">'+'Login'+'</h4>' +
                '<div class="col s6">' +
                '<form class="">' +
                '<div class="row">' +
                '<div class="input-field col s12">' +
                '<input id="Email" type="email" class="validate">' +
                '<label for="Email">Email</label>' +
                '</div>' +
                '<div class="input-field col s12">' +
                '<input id="Password" type="text" class="validate">' +
                '<label for="Password">Password</label>' +
                '</div>' +
                '<div class="input-field col s12">' +
                '<button type="submit" class="waves-effect waves-light btn">Login</button>' +
                '</div>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<a href="#signUpModal" class="modal-action modal-close waves-effect waves-green btn-flat">Sign up</a>' +
                '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>' +
                '</div>' +
                '</div> '
            )
        );
    })
}

    function signUp(){
    $("#signUpClick").on("click", function () {
        $('.modal').modal(
            $("#signUpModal").append(

                '<div id="modal2" class="modal">' +
                '<div class="modal-content">' +
                '<h4 class="black-text">'+'Sign Up'+'</h4>' +
                '<div class="col s6">' +
                '<form class="">' +
                '<div class="row">' +
                '<div class="input-field col s12">' +
                '<input id="username" type="text" class="validate">' +
                '<label for="Password">Username</label>' +
                '</div>' +
                '<div class="input-field col s12">' +
                '<input id="Email" type="email" class="validate">' +
                '<label for="Email">Email</label>' +
                '</div>' +
                '<div class="input-field col s12">' +
                '<input id="Password" type="text" class="validate">' +
                '<label for="Password">Password</label>' +
                '</div>' +
                '<div class="input-field col s12">' +
                '<input id="Password" type="text" class="validate">' +
                '<label for="Password">Retype Password</label>' +
                '</div>' +
                '<div class="input-field col s12">' +
                '<button type="submit" class="waves-effect waves-light btn">Sign Up</button>' +
                '</div>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>' +
                '<a href="loginModal" class="modal-action modal-close waves-effect waves-green btn-flat">Login</a>' +
                '</div>' +
                '</div> '
            )
        );
    })
    }


});

