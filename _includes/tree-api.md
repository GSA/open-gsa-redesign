<link href="//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/skin-win8/ui.fancytree.min.css" rel="stylesheet">
{% raw %}
<script>
/* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var fancyTree = document.createElement('script'); fancyTree.type = 'text/javascript'; //fancyTree.async = true;
    fancyTree.src = '//cdn.jsdelivr.net/npm/jquery.fancytree@2.27/dist/jquery.fancytree-all-deps.min.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(fancyTree);

    
  })();
 </script>
<noscript>Please enable JavaScript to show the links in Tree format .</noscript>
{% endraw %}

<div id="fpds_doc_tree">
    <ul id="treeData">
        <li id="id3" class="folder">FPDS
            <ul>
                <li id="id3.1" class="expanded folder">schema
                    <ul>
                        <li id="id3.1.2" class="expanded folder">ApplicationServices
                            <ul>
                                <li id="id3.1.3" class="expanded folder">Batch
                                    <ul>
                                        <li id="id3.1.3" class="expanded folder">1.0
                                            <ul>
                                                <li id="id3.1.3.1.1">
                                                   <div>
                                                    <a href="https://www.fpds.gov/FPDS-Schema/schema/ApplicationServices/batch/1.0/BatchInterface.xsd"
                                                        target="_blank">BatchInterface.xsd</a> 
                                                    </div>
                                                </li>
                                                <li id="id3.1.3.1.2">
                                                  <a href="https://www.fpds.gov/FPDS-Schema/schemaDocs/ApplicationServices/batch/1.0/BatchInterface.html" target="_blank">HTML Doc</a>
                                                </li>
                                            </ul>
                                    </ul>
                            </ul>
                        <li id="id3.1.2">Sub-item 3.1.2</li>
                        <li id="id3.1.3">Sub-item 3.1.3</li>
                    </ul>
                <li id="id3.2">Sub-item 3.2
                    <ul>
                        <li id="id3.2.1">Sub-item 3.2.1
                        <li id="id3.2.2">Sub-item 3.2.2
                    </ul>
            </ul>
        <li id="id4" class="expanded">Document with some children (expanded on init)
            <ul>
                <li id="id4.1" class="active focused">Sub-item 4.1 (active and focus on init)
                    <ul>
                        <li id="id4.1.1">Sub-item 4.1.1
                        <li id="id4.1.2">Sub-item 4.1.2
                    </ul>
                <li id="id4.2">Sub-item 4.2
                    <ul>
                        <li id="id4.2.1">Sub-item 4.2.1
                        <li id="id4.2.2">Sub-item 4.2.2
                    </ul>
            </ul>
    </ul>
</div>

{% raw %}
<script>
  (function() {
    window.onload = function() {
        
        jQuery("#fpds_doc_tree").fancytree({

            activate: function(event, data){
                var node = data.node,
                    orgEvent = data.originalEvent;
                console.log("activate", orgEvent)
                if(node.data.href){
                   //window.open(node.data.href,  node.data.target);
                }
            },
            
            click: function(event, data){
                var node = data.node,
                orgEvent = data.originalEvent;
                console.log("click", orgEvent, event.keyCode)
                if(node.data.href){
                    window.open(node.data.href,  node.data.target);
                  
                }
            }
        });
        jQuery(".fancytree-container").addClass("fancytree-connectors");
    };

}).call(this);
  
</script>
{% endraw %}

