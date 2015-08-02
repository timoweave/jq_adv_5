
$(document).ready(function() {
    function init() {
        var tab_block = $("#my-pets");
        var tab_detail = tab_block.children("div").children(["#my-cats-accordion", "#my-fishes-accordion", "#my-birds-accordion"]);

        tab_block.tabs();
        tab_detail.each(function() {
            $(this).accordion({collapsible: true, active: false});
        });
    }

    init();
});
