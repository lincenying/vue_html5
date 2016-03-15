import core from "../module/core";
export default () => {
    Vue.filter('images', (value) => {
        return "http://i1.zdimg.com/" + value;
    });
    Vue.filter('cutDesc',  (content, len) => {
        if (!content) return "";
        len = len || 100;
        var tmpContent = core.strip_tags(content);
        return core.cutstr(tmpContent, len);
    });
}
