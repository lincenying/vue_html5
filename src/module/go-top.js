export function install(Vue, options) {
    Vue.directive('gotop', {
        bind() {
            $(this.el).on("click", () => $(window).scrollTop(0));
        }
    });
};
