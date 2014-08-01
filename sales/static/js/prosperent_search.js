/**
 * Created by shanjee on 7/22/14.
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
//        var pageLimit = 10;
        $.ajax({
            url: 'http://api.prosperent.com/api/search?api_key=' + myAPIKey + '&query=' + searchQuery,
            type: 'GET',
            dataType: 'jsonp',
            success: function (item_response) {
                console.log(item_response);
                for (var i = 0; i < item_response.data.length; i++) {
                    (function (i) {
                        console.log(i);
                        var data = item_response.data[i];
                        itemInfo.name = data.keyword;
                        console.log(item_response.data.length);
                        console.log(data.keyword);
                        itemInfo.category = data.category;
                        itemInfo.price = data.price;
                        itemInfo.sale_price = data.sale_price;
                        itemInfo.currency = data.currency;
                        itemInfo.store_name = data.merchant;
                        itemInfo.store_givenUrl = data.affiliate_url;
                        console.log(itemInfo.store_givenUrl);


                        var original = itemInfo.store_givenUrl;
                        var split1 = original.split('?');
//                        var split1 = original.split('?')[0] + '?';
                        var split2 = split1[1].split('&m');

                        var modified_url = split1[0] + '?' + 'm' + split2[1];

                        var split3 = modified_url.split('&');

                        var modified_url2 = split3[0];
//                        var split1 = original.find('?') + 1;
//                        var modified_url = original.split(original[split1]);
                        console.log(modified_url2);


                        var itemInformation = $('.itemInformation');
                        itemInformation.append("<div class='eachItemInfo'>" +
                            "<p id=" + itemInfo.name + ">" + itemInfo.name + " | "
                            + itemInfo.category + " | "
                            + "<a href = " + "'" + modified_url2 + "' target='_blank'>" + itemInfo.store_name + "</a></p></div>");
//
//"<button class='favoriteButton' id='" + movieInfo.title + "button'> Favorite This </button></div>");

                        searchResults.push(itemInfo);
                    })(i);
                }
            },
            error: function (error_response) {
                console.log(error_response);
            }
        });
    });
});