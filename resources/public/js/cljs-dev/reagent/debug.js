// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__1405__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1406__i = 0, G__1406__a = new Array(arguments.length -  0);
while (G__1406__i < G__1406__a.length) {G__1406__a[G__1406__i] = arguments[G__1406__i + 0]; ++G__1406__i;}
  args = new cljs.core.IndexedSeq(G__1406__a,0,null);
} 
return G__1405__delegate.call(this,args);};
G__1405.cljs$lang$maxFixedArity = 0;
G__1405.cljs$lang$applyTo = (function (arglist__1407){
var args = cljs.core.seq(arglist__1407);
return G__1405__delegate(args);
});
G__1405.cljs$core$IFn$_invoke$arity$variadic = G__1405__delegate;
return G__1405;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1408__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1408 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1409__i = 0, G__1409__a = new Array(arguments.length -  0);
while (G__1409__i < G__1409__a.length) {G__1409__a[G__1409__i] = arguments[G__1409__i + 0]; ++G__1409__i;}
  args = new cljs.core.IndexedSeq(G__1409__a,0,null);
} 
return G__1408__delegate.call(this,args);};
G__1408.cljs$lang$maxFixedArity = 0;
G__1408.cljs$lang$applyTo = (function (arglist__1410){
var args = cljs.core.seq(arglist__1410);
return G__1408__delegate(args);
});
G__1408.cljs$core$IFn$_invoke$arity$variadic = G__1408__delegate;
return G__1408;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
