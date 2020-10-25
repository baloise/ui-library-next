"use strict";

(function () {
    function PropsPlugin(hook, vm) {
        hook.beforeEach(function (content) {
            var lineBreak = "\n";
            var graphIsOpen = false
            var stencilIsOpen = false
            var lines = content.split(lineBreak).map(function (line) {
                if (line.startsWith("### Graph")) {
                    graphIsOpen = true
                    return null
                }
                if (graphIsOpen && line.startsWith("```") && !line.startsWith("```mermaid")) {
                    graphIsOpen = false
                    return null
                }
                if (graphIsOpen) {
                    return null
                }
                if (line.startsWith('----------------------------------------------')) {
                    return null
                }
                if (line.startsWith('*Built with [StencilJS](https://stenciljs.com/)*')) {
                    return null
                }
                if (line.startsWith("<!-- Auto Generated Below -->")) {
                    stencilIsOpen = true
                }
                if (stencilIsOpen && line.startsWith("#")) {
                    return "#" + line
                }
                return line;
            });

            return lines.join(lineBreak);
        });
    }

    window.$docsify.plugins = [].concat(PropsPlugin, window.$docsify.plugins);
})();