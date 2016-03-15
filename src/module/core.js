export default {
    cutstr(str, len) {
        str              = this.htmldecode(str);
        var newLength    = 0,
            newStr       = "",
            chineseRegex = /[^\x00-\xff]/g,
            singleChar   = "",
            strLength    = str.replace(chineseRegex, "**").length;
        len              = len * 2;
        for (var i = 0; i < strLength; i++) {
            singleChar = str.charAt(i).toString();
            if (singleChar.match(chineseRegex) != null) {
                newLength += 2;
            } else {
                newLength++;
            }
            if (newLength > len) {
                break;
            }
            newStr += singleChar;
        }
        if (strLength > len) {
            newStr += "...";
        }
        newStr = this.htmlencode(newStr);
        return newStr;
    },
    firstImg(content){
        var srcReg = /src=['"]?([^'"]*)['"]?/ig,
            src    = content.match(srcReg),
            r      = "";
        while ((rs = srcReg.exec(src)) != null) {
            if (rs[1].indexOf("/assets/") < 0) {
                r = rs[1];
                break;
            }
        }
        return r;
    },
    htmlencode(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    },
    htmldecode(str) {
        var div       = document.createElement('div');
        div.innerHTML = str;
        return div.innerText || div.textContent;
    },
    strip_tags(input, allowed) {
        if (typeof input != "string") return "";
        allowed                = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
        var tags               = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
    }
}
