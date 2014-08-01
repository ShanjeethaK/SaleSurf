/**
 * Created by shanjee on 7/31/14.
 */

$(document).ready(function() {

    var searchResults = [];
    $(document).on('click', "#getItem", function () {

        console.log('Clicking works. Cool!');

        $('.itemInformation').html(" ");
        var searchQuery = $('#searchBox').val();

        console.log(searchQuery);

        var itemInfo = {};
        var myAPIKey = 'd5ea4a577abafc4e23e65140ed52add0';
        var limit = 100;
        $.ajax({
            url: 'http://api.prosperent.com/api/search?api_key=' + myAPIKey + '&query=' + searchQuery + '&limit=' + limit,
            type: 'GET',
            dataType: 'jsonp',
            success: function (item_response) {
                console.log(item_response);
                for (var i = 0; i < item_response.data.length; i++) {
                    (function (i) {
                        console.log(i);
                        var data = item_response.data[i];
                        itemInfo.store_name = data.merchant;
//                        console.log(itemInfo.store_name);

                        itemInfo.name = data.keyword;

                        console.log(item_response.data.length);

                        console.log(data.keyword);

                        itemInfo.category = data.category;
                        itemInfo.price = data.price;
                        itemInfo.sale_price = data.sale_price;
                        itemInfo.currency = data.currency;
                        itemInfo.store_givenUrl = data.affiliate_url;
                        itemInfo.item_img = data.image_url;

                        console.log(itemInfo.store_givenUrl);

                        var original = itemInfo.store_givenUrl;
                        var split1 = original.split('?');
                        var split2 = split1[1].split('&m');
                        var modified_url = split1[0] + '?' + 'm' + split2[1];
                        var split3 = modified_url.split('&');
                        var modified_url2 = split3[0];

                        console.log(modified_url2);


                        if (itemInfo.sale_price != '""') {

                            if (searchResults.indexOf(itemInfo.store_name) == -1) {

                                console.log('SEARCHRESULTS STUFF');
                                console.log(searchResults);

                                searchResults.push(itemInfo.store_name);
                                var itemInformation = $('.itemInformation');
                                itemInformation.append("<ul class='eachItemInfo'><li><a href='"+ modified_url2 +"'target='_blank'>"
//                                    + itemInfo.category + " | "
                                    + "<img class='resultPic' src=" + itemInfo.item_img + "><span class='text-content'><span>" + itemInfo.store_name + "</span></span></a></li></ul>");
//                                    + "<a href = " + "'" + modified_url2 + "' target='_blank'>" + itemInfo.store_name + "</a></p>
                            }

                        }
                        //
                        //"<button class='favoriteButton' id='" + movieInfo.title + "button'> Favorite This </button></div>");




                    })(i);
                }
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    });
});