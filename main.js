
$(document).ready(function() {
    function init() {
        var tab_block = $("#my-pets");
        var tab_detail = tab_block.children("div").children(["#my-cats-accordion", "#my-fishes-accordion", "#my-birds-accordion"]);

        tab_block.tabs();
        tab_detail.each(function() {
            $(this).accordion({collapsible: true, active: false, heightStyle: "auto"});
            $(this).on( "accordionbeforeactivate", function( event, ui ) {
                // NOTE: for some unknown reason, 
                // the only the 1st tab's accordion has non-zero height
                // and other tab's accordion has zero height.
                // use accordionbeforeactivate to recompute the hight 
                // TBD : how to just recompute the height just once?
                $(this).accordion("option", "heightStyle", "auto");
                $(this).accordion("refresh");

            });

        });
    }

    init();
});
