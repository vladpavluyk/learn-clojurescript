// Compiled by ClojureScript 1.10.520 {}
goog.provide('learn_clojurescript.components.users');
goog.require('cljs.core');
learn_clojurescript.components.users.render_users = (function learn_clojurescript$components$users$render_users(users_to_render,active_item,app_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"users"], null),(function (){var iter__4523__auto__ = (function learn_clojurescript$components$users$render_users_$_iter__1526(s__1527){
return (new cljs.core.LazySeq(null,(function (){
var s__1527__$1 = s__1527;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__1527__$1);
if(temp__5720__auto__){
var s__1527__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__1527__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__1527__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__1529 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__1528 = (0);
while(true){
if((i__1528 < size__4522__auto__)){
var user = cljs.core._nth.call(null,c__4521__auto__,i__1528);
cljs.core.chunk_append.call(null,b__1529,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,user))?"selected-user":"user"),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__1528,user,c__4521__auto__,size__4522__auto__,b__1529,s__1527__$2,temp__5720__auto__){
return (function (e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942)], null),user);
});})(i__1528,user,c__4521__auto__,size__4522__auto__,b__1529,s__1527__$2,temp__5720__auto__))
], null),new cljs.core.Keyword(null,"firstName","firstName",-935151957).cljs$core$IFn$_invoke$arity$1(user)], null)], null));

var G__1530 = (i__1528 + (1));
i__1528 = G__1530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1529),learn_clojurescript$components$users$render_users_$_iter__1526.call(null,cljs.core.chunk_rest.call(null,s__1527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__1529),null);
}
} else {
var user = cljs.core.first.call(null,s__1527__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_item,user))?"selected-user":"user"),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user,s__1527__$2,temp__5720__auto__){
return (function (e){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942)], null),user);
});})(user,s__1527__$2,temp__5720__auto__))
], null),new cljs.core.Keyword(null,"firstName","firstName",-935151957).cljs$core$IFn$_invoke$arity$1(user)], null)], null),learn_clojurescript$components$users$render_users_$_iter__1526.call(null,cljs.core.rest.call(null,s__1527__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,users_to_render);
})()], null);
});

//# sourceMappingURL=users.js.map
