!function(){var l=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).project=l({1:function(l,n,a,e,r){var s,t=l.lambda,i=l.escapeExpression,c=null!=n?n:l.nullContext||{};return'    <div class="col s12 l6 projectHolder">\r\n        <div class="card">\r\n            <div class="hoverable">\r\n                <div class="card-content">\r\n                    <span class="card-title truncate">'+i(t(null!=(s=null!=n?n.gsx$projecttitle:n)?s.$t:s,n))+'</span>\r\n                    <p class="truncate">\r\n                        '+i(t(null!=(s=null!=n?n.gsx$desc:n)?s.$t:s,n))+'\r\n                    </p>\r\n                    <p class="light truncate">\r\n                        <em><strong>Keywords: </strong>'+(null!=(s=t(null!=(s=null!=n?n.gsx$tags:n)?s.$t:s,n))?s:"")+'</em>\r\n                    </p>\r\n                </div>\r\n                <div class="card-action">\r\n                    <a class="modal-trigger waves-effect waves-light btn deep-orange" href="#'+i(t(null!=(s=null!=n?n.gsx$id:n)?s.$t:s,n))+'"><i\r\n                            class="material-icons left">info</i>Details</a>\r\n'+(null!=(s=a.if.call(c,null!=(s=null!=n?n.gsx$link:n)?s.$t:s,{name:"if",hash:{},fn:l.program(2,r,0),inverse:l.noop,data:r}))?s:"")+'                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \x3c!-- Modal Structure --\x3e\r\n    <div id="'+i(t(null!=(s=null!=n?n.gsx$id:n)?s.$t:s,n))+'" class="modal">\r\n        \x3c!--<div id="'+i(t(null!=(s=null!=n?n.gsx$id:n)?s.$t:s,n))+'" class="modal modal-fixed-footer">--\x3e\r\n        <div class="modal-content">\r\n            <h5>'+i(t(null!=(s=null!=n?n.gsx$projecttitle:n)?s.$t:s,n))+"</h5>\r\n            <h6>"+i(t(null!=(s=null!=n?n.gsx$subtitle:n)?s.$t:s,n))+"</h6>\r\n            <hr/>\r\n"+(null!=(s=a.each.call(c,null!=n?n.tags:n,{name:"each",hash:{},fn:l.program(4,r,0),inverse:l.noop,data:r}))?s:"")+"            <hr/>\r\n"+(null!=(s=a.if.call(c,null!=(s=null!=n?n.gsx$link:n)?s.$t:s,{name:"if",hash:{},fn:l.program(6,r,0),inverse:l.noop,data:r}))?s:"")+'            <p class="justify">'+(null!=(s=t(null!=(s=null!=n?n.gsx$desc:n)?s.$t:s,n))?s:"")+'</p>\r\n        </div>\r\n\r\n        <div class="modal-footer">\r\n            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Close</a>\r\n        </div>\r\n    </div>\r\n'},2:function(l,n,a,e,r){var s;return'                        <a target="_blank" href="'+l.escapeExpression(l.lambda(null!=(s=null!=n?n.gsx$link:n)?s.$t:s,n))+'" class="waves-effect waves-light btn deep-orange"><i\r\n                                class="material-icons left">tab</i>Repository</a>\r\n'},4:function(l,n,a,e,r){return'                <div class="chip">\r\n                    '+l.escapeExpression(l.lambda(n,n))+"\r\n                </div>\r\n"},6:function(l,n,a,e,r){var s;return'                <a target="_blank" href="'+l.escapeExpression(l.lambda(null!=(s=null!=n?n.gsx$link:n)?s.$t:s,n))+'" class="waves-effect waves-light"><i\r\n                        class="material-icons left">tab</i>Repository</a>\r\n'},compiler:[7,">= 4.0.0"],main:function(l,n,a,e,r){var s;return null!=(s=a.each.call(null!=n?n:l.nullContext||{},n,{name:"each",hash:{},fn:l.program(1,r,0),inverse:l.noop,data:r}))?s:""},useData:!0})}();