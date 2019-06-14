// Compiled by ClojureScript 1.10.520 {}
goog.provide('learn_clojurescript.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('learn_clojurescript.components.header');
goog.require('learn_clojurescript.components.users');
learn_clojurescript.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),"Header",new cljs.core.Keyword(null,"users","users",-713552705),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"1",new cljs.core.Keyword(null,"firstName","firstName",-935151957),"User 1"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"2",new cljs.core.Keyword(null,"firstName","firstName",-935151957),"User 2"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"3",new cljs.core.Keyword(null,"firstName","firstName",-935151957),"User 3"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"4",new cljs.core.Keyword(null,"firstName","firstName",-935151957),"User 4"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"5",new cljs.core.Keyword(null,"firstName","firstName",-935151957),"User 5"], null)], null),new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942),cljs.core.PersistentArrayMap.EMPTY], null));
learn_clojurescript.core.app = (function learn_clojurescript$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [learn_clojurescript.components.header.header,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learn_clojurescript.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((((5) > (3)))?"slogan":null)], null),"Slogan"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [learn_clojurescript.components.users.render_users,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learn_clojurescript.core.app_state)),new cljs.core.Keyword(null,"selected-item","selected-item",-1628811942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,learn_clojurescript.core.app_state)),learn_clojurescript.core.app_state], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learn_clojurescript.core.app], null),document.querySelector("#root"));

//# sourceMappingURL=core.js.map
