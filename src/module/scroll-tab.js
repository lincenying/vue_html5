export default (name) => {
    var barTop = document.querySelector(".tab") ? document.querySelector(".tab").offsetTop : 0;
    $(document).off("scroll").on("scroll", () => {
        var scrollTop = $(window).scrollTop(),
            height = $('.tab').height(),
            winHeight = $(window).height();
        if (name == "feature" || name == "topic") {
            if (scrollTop >= barTop) {
                $('.tab').css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    "z-index": 999
                });
                if ($('.tab').siblings("#tmp").length == 0)
                    $('.tab').after('<div id="tmp" style="height:' + height + 'px"></div>');
            } else {
                $('.tab').css({
                    position: "relative",
                    top: "auto",
                    left: "auto",
                    width: "100%"
                }).siblings("#tmp").remove();
            }
        }
        if (scrollTop > winHeight) {
            $(".top").removeClass("hidden");
        } else {
            $(".top").addClass("hidden");
        }
    });
}
