"use strict";

(function () {

    function GithubPlugin(hook, vm) {
        hook.beforeEach(function (html) {
            var lineBreak = '\n';
            var url = 'https://github.com/baloise/ui-library/blob/master/packages/library/src/' + vm.route.file;
            var editHtml = '[:memo: Edit this page on Github](' + url + ')\n'

            var url = 'https://github.com/baloise/ui-library/blob/master/packages/library/src/' + vm.route.file.replace('readme.md', 'index.html');
            var editExamples = '[:notebook: Improve or fix the examples on Github](' + url + ')\n'

            return html + lineBreak + lineBreak + '## Help us to improve our documentation' + lineBreak + editHtml + lineBreak + editExamples
        })
    }

    window.$docsify.plugins = [].concat(GithubPlugin, window.$docsify.plugins);
})();
