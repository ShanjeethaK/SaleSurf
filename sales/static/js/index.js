/**
 * Created by shanjee on 7/31/14.
 */

$(document).ready(function() {


//  REGISTER
    $(document).on('click', '#getStarted', function() {
        window.location.pathname = '/search/'
    });

    $(document).on('click', '#register', function() {
        window.location.pathname = '/register/'
    });

});