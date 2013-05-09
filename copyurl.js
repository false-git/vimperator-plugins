let PLUGIN_INFO = xml`
<VimperatorPlugin>
    <name>copyurl</name>
    <description>Copy link HTML for current page.</description>
    <author mail="false@wizard-limit.net" homepage="http://www.wizard-limit.net/mt/pc">PC日記</author>
    <version>0.1</version>
    <minVersion>2.0pre</minVersion>
    <maxVersion>4.0</maxVersion>
    <updateURL>https://github.com/false-git/vimperator-plugins/raw/master/copyurl.js</updateURL>
    <detail><![CDATA[

== COMMANDS ==
copyurl [URL]:
    echo and copy URL

    ]]></detail>
</VimperatorPlugin>;`;

(function() {
    commands.add(['copyurl'], 'echo and copy link html for current url',
        function(args) util.copyToClipboard('<a href="' + buffer.URL + '">' + buffer.title + '</a>', true),
        {
            argCount: '?',
        });
})();
// vim: fdm=marker sw=4 ts=4 et:
