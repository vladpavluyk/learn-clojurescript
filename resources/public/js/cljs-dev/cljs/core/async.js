// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3114 = arguments.length;
switch (G__3114) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3115 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3115 = (function (f,blockable,meta3116){
this.f = f;
this.blockable = blockable;
this.meta3116 = meta3116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3117,meta3116__$1){
var self__ = this;
var _3117__$1 = this;
return (new cljs.core.async.t_cljs$core$async3115(self__.f,self__.blockable,meta3116__$1));
});

cljs.core.async.t_cljs$core$async3115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3117){
var self__ = this;
var _3117__$1 = this;
return self__.meta3116;
});

cljs.core.async.t_cljs$core$async3115.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3116","meta3116",-552223819,null)], null);
});

cljs.core.async.t_cljs$core$async3115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3115";

cljs.core.async.t_cljs$core$async3115.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async3115");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3115.
 */
cljs.core.async.__GT_t_cljs$core$async3115 = (function cljs$core$async$__GT_t_cljs$core$async3115(f__$1,blockable__$1,meta3116){
return (new cljs.core.async.t_cljs$core$async3115(f__$1,blockable__$1,meta3116));
});

}

return (new cljs.core.async.t_cljs$core$async3115(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__3121 = arguments.length;
switch (G__3121) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3124 = arguments.length;
switch (G__3124) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__3127 = arguments.length;
switch (G__3127) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3129 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3129);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3129,ret){
return (function (){
return fn1.call(null,val_3129);
});})(val_3129,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3131 = arguments.length;
switch (G__3131) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___3133 = n;
var x_3134 = (0);
while(true){
if((x_3134 < n__4607__auto___3133)){
(a[x_3134] = x_3134);

var G__3135 = (x_3134 + (1));
x_3134 = G__3135;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3136 = (function (flag,meta3137){
this.flag = flag;
this.meta3137 = meta3137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3138,meta3137__$1){
var self__ = this;
var _3138__$1 = this;
return (new cljs.core.async.t_cljs$core$async3136(self__.flag,meta3137__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3138){
var self__ = this;
var _3138__$1 = this;
return self__.meta3137;
});})(flag))
;

cljs.core.async.t_cljs$core$async3136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3136.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3137","meta3137",270228330,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3136";

cljs.core.async.t_cljs$core$async3136.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async3136");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3136.
 */
cljs.core.async.__GT_t_cljs$core$async3136 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3136(flag__$1,meta3137){
return (new cljs.core.async.t_cljs$core$async3136(flag__$1,meta3137));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3136(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3139 = (function (flag,cb,meta3140){
this.flag = flag;
this.cb = cb;
this.meta3140 = meta3140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3141,meta3140__$1){
var self__ = this;
var _3141__$1 = this;
return (new cljs.core.async.t_cljs$core$async3139(self__.flag,self__.cb,meta3140__$1));
});

cljs.core.async.t_cljs$core$async3139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3141){
var self__ = this;
var _3141__$1 = this;
return self__.meta3140;
});

cljs.core.async.t_cljs$core$async3139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3140","meta3140",-1741474493,null)], null);
});

cljs.core.async.t_cljs$core$async3139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3139";

cljs.core.async.t_cljs$core$async3139.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async3139");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3139.
 */
cljs.core.async.__GT_t_cljs$core$async3139 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3139(flag__$1,cb__$1,meta3140){
return (new cljs.core.async.t_cljs$core$async3139(flag__$1,cb__$1,meta3140));
});

}

return (new cljs.core.async.t_cljs$core$async3139(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3142_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3142_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3143_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3143_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3144 = (i + (1));
i = G__3144;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3150 = arguments.length;
var i__4731__auto___3151 = (0);
while(true){
if((i__4731__auto___3151 < len__4730__auto___3150)){
args__4736__auto__.push((arguments[i__4731__auto___3151]));

var G__3152 = (i__4731__auto___3151 + (1));
i__4731__auto___3151 = G__3152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3147){
var map__3148 = p__3147;
var map__3148__$1 = (((((!((map__3148 == null))))?(((((map__3148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3148):map__3148);
var opts = map__3148__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3145){
var G__3146 = cljs.core.first.call(null,seq3145);
var seq3145__$1 = cljs.core.next.call(null,seq3145);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3146,seq3145__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__3154 = arguments.length;
switch (G__3154) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3054__auto___3200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___3200){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___3200){
return (function (state_3178){
var state_val_3179 = (state_3178[(1)]);
if((state_val_3179 === (7))){
var inst_3174 = (state_3178[(2)]);
var state_3178__$1 = state_3178;
var statearr_3180_3201 = state_3178__$1;
(statearr_3180_3201[(2)] = inst_3174);

(statearr_3180_3201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (1))){
var state_3178__$1 = state_3178;
var statearr_3181_3202 = state_3178__$1;
(statearr_3181_3202[(2)] = null);

(statearr_3181_3202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (4))){
var inst_3157 = (state_3178[(7)]);
var inst_3157__$1 = (state_3178[(2)]);
var inst_3158 = (inst_3157__$1 == null);
var state_3178__$1 = (function (){var statearr_3182 = state_3178;
(statearr_3182[(7)] = inst_3157__$1);

return statearr_3182;
})();
if(cljs.core.truth_(inst_3158)){
var statearr_3183_3203 = state_3178__$1;
(statearr_3183_3203[(1)] = (5));

} else {
var statearr_3184_3204 = state_3178__$1;
(statearr_3184_3204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (13))){
var state_3178__$1 = state_3178;
var statearr_3185_3205 = state_3178__$1;
(statearr_3185_3205[(2)] = null);

(statearr_3185_3205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (6))){
var inst_3157 = (state_3178[(7)]);
var state_3178__$1 = state_3178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3178__$1,(11),to,inst_3157);
} else {
if((state_val_3179 === (3))){
var inst_3176 = (state_3178[(2)]);
var state_3178__$1 = state_3178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3178__$1,inst_3176);
} else {
if((state_val_3179 === (12))){
var state_3178__$1 = state_3178;
var statearr_3186_3206 = state_3178__$1;
(statearr_3186_3206[(2)] = null);

(statearr_3186_3206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (2))){
var state_3178__$1 = state_3178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3178__$1,(4),from);
} else {
if((state_val_3179 === (11))){
var inst_3167 = (state_3178[(2)]);
var state_3178__$1 = state_3178;
if(cljs.core.truth_(inst_3167)){
var statearr_3187_3207 = state_3178__$1;
(statearr_3187_3207[(1)] = (12));

} else {
var statearr_3188_3208 = state_3178__$1;
(statearr_3188_3208[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (9))){
var state_3178__$1 = state_3178;
var statearr_3189_3209 = state_3178__$1;
(statearr_3189_3209[(2)] = null);

(statearr_3189_3209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (5))){
var state_3178__$1 = state_3178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3190_3210 = state_3178__$1;
(statearr_3190_3210[(1)] = (8));

} else {
var statearr_3191_3211 = state_3178__$1;
(statearr_3191_3211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (14))){
var inst_3172 = (state_3178[(2)]);
var state_3178__$1 = state_3178;
var statearr_3192_3212 = state_3178__$1;
(statearr_3192_3212[(2)] = inst_3172);

(statearr_3192_3212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (10))){
var inst_3164 = (state_3178[(2)]);
var state_3178__$1 = state_3178;
var statearr_3193_3213 = state_3178__$1;
(statearr_3193_3213[(2)] = inst_3164);

(statearr_3193_3213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3179 === (8))){
var inst_3161 = cljs.core.async.close_BANG_.call(null,to);
var state_3178__$1 = state_3178;
var statearr_3194_3214 = state_3178__$1;
(statearr_3194_3214[(2)] = inst_3161);

(statearr_3194_3214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___3200))
;
return ((function (switch__2959__auto__,c__3054__auto___3200){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_3195 = [null,null,null,null,null,null,null,null];
(statearr_3195[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_3195[(1)] = (1));

return statearr_3195;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_3178){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3196){if((e3196 instanceof Object)){
var ex__2963__auto__ = e3196;
var statearr_3197_3215 = state_3178;
(statearr_3197_3215[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3216 = state_3178;
state_3178 = G__3216;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_3178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_3178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___3200))
})();
var state__3056__auto__ = (function (){var statearr_3198 = f__3055__auto__.call(null);
(statearr_3198[(6)] = c__3054__auto___3200);

return statearr_3198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___3200))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3217){
var vec__3218 = p__3217;
var v = cljs.core.nth.call(null,vec__3218,(0),null);
var p = cljs.core.nth.call(null,vec__3218,(1),null);
var job = vec__3218;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3054__auto___3389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___3389,res,vec__3218,v,p,job,jobs,results){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___3389,res,vec__3218,v,p,job,jobs,results){
return (function (state_3225){
var state_val_3226 = (state_3225[(1)]);
if((state_val_3226 === (1))){
var state_3225__$1 = state_3225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3225__$1,(2),res,v);
} else {
if((state_val_3226 === (2))){
var inst_3222 = (state_3225[(2)]);
var inst_3223 = cljs.core.async.close_BANG_.call(null,res);
var state_3225__$1 = (function (){var statearr_3227 = state_3225;
(statearr_3227[(7)] = inst_3222);

return statearr_3227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3225__$1,inst_3223);
} else {
return null;
}
}
});})(c__3054__auto___3389,res,vec__3218,v,p,job,jobs,results))
;
return ((function (switch__2959__auto__,c__3054__auto___3389,res,vec__3218,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0 = (function (){
var statearr_3228 = [null,null,null,null,null,null,null,null];
(statearr_3228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__);

(statearr_3228[(1)] = (1));

return statearr_3228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1 = (function (state_3225){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3229){if((e3229 instanceof Object)){
var ex__2963__auto__ = e3229;
var statearr_3230_3390 = state_3225;
(statearr_3230_3390[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3391 = state_3225;
state_3225 = G__3391;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = function(state_3225){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1.call(this,state_3225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___3389,res,vec__3218,v,p,job,jobs,results))
})();
var state__3056__auto__ = (function (){var statearr_3231 = f__3055__auto__.call(null);
(statearr_3231[(6)] = c__3054__auto___3389);

return statearr_3231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___3389,res,vec__3218,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3232){
var vec__3233 = p__3232;
var v = cljs.core.nth.call(null,vec__3233,(0),null);
var p = cljs.core.nth.call(null,vec__3233,(1),null);
var job = vec__3233;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___3392 = n;
var __3393 = (0);
while(true){
if((__3393 < n__4607__auto___3392)){
var G__3236_3394 = type;
var G__3236_3395__$1 = (((G__3236_3394 instanceof cljs.core.Keyword))?G__3236_3394.fqn:null);
switch (G__3236_3395__$1) {
case "compute":
var c__3054__auto___3397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3393,c__3054__auto___3397,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (__3393,c__3054__auto___3397,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async){
return (function (state_3249){
var state_val_3250 = (state_3249[(1)]);
if((state_val_3250 === (1))){
var state_3249__$1 = state_3249;
var statearr_3251_3398 = state_3249__$1;
(statearr_3251_3398[(2)] = null);

(statearr_3251_3398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3250 === (2))){
var state_3249__$1 = state_3249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3249__$1,(4),jobs);
} else {
if((state_val_3250 === (3))){
var inst_3247 = (state_3249[(2)]);
var state_3249__$1 = state_3249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3249__$1,inst_3247);
} else {
if((state_val_3250 === (4))){
var inst_3239 = (state_3249[(2)]);
var inst_3240 = process.call(null,inst_3239);
var state_3249__$1 = state_3249;
if(cljs.core.truth_(inst_3240)){
var statearr_3252_3399 = state_3249__$1;
(statearr_3252_3399[(1)] = (5));

} else {
var statearr_3253_3400 = state_3249__$1;
(statearr_3253_3400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3250 === (5))){
var state_3249__$1 = state_3249;
var statearr_3254_3401 = state_3249__$1;
(statearr_3254_3401[(2)] = null);

(statearr_3254_3401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3250 === (6))){
var state_3249__$1 = state_3249;
var statearr_3255_3402 = state_3249__$1;
(statearr_3255_3402[(2)] = null);

(statearr_3255_3402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3250 === (7))){
var inst_3245 = (state_3249[(2)]);
var state_3249__$1 = state_3249;
var statearr_3256_3403 = state_3249__$1;
(statearr_3256_3403[(2)] = inst_3245);

(statearr_3256_3403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3393,c__3054__auto___3397,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async))
;
return ((function (__3393,switch__2959__auto__,c__3054__auto___3397,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0 = (function (){
var statearr_3257 = [null,null,null,null,null,null,null];
(statearr_3257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__);

(statearr_3257[(1)] = (1));

return statearr_3257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1 = (function (state_3249){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3258){if((e3258 instanceof Object)){
var ex__2963__auto__ = e3258;
var statearr_3259_3404 = state_3249;
(statearr_3259_3404[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3405 = state_3249;
state_3249 = G__3405;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = function(state_3249){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1.call(this,state_3249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__;
})()
;})(__3393,switch__2959__auto__,c__3054__auto___3397,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async))
})();
var state__3056__auto__ = (function (){var statearr_3260 = f__3055__auto__.call(null);
(statearr_3260[(6)] = c__3054__auto___3397);

return statearr_3260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(__3393,c__3054__auto___3397,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async))
);


break;
case "async":
var c__3054__auto___3406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3393,c__3054__auto___3406,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (__3393,c__3054__auto___3406,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async){
return (function (state_3273){
var state_val_3274 = (state_3273[(1)]);
if((state_val_3274 === (1))){
var state_3273__$1 = state_3273;
var statearr_3275_3407 = state_3273__$1;
(statearr_3275_3407[(2)] = null);

(statearr_3275_3407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3274 === (2))){
var state_3273__$1 = state_3273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3273__$1,(4),jobs);
} else {
if((state_val_3274 === (3))){
var inst_3271 = (state_3273[(2)]);
var state_3273__$1 = state_3273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3273__$1,inst_3271);
} else {
if((state_val_3274 === (4))){
var inst_3263 = (state_3273[(2)]);
var inst_3264 = async.call(null,inst_3263);
var state_3273__$1 = state_3273;
if(cljs.core.truth_(inst_3264)){
var statearr_3276_3408 = state_3273__$1;
(statearr_3276_3408[(1)] = (5));

} else {
var statearr_3277_3409 = state_3273__$1;
(statearr_3277_3409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3274 === (5))){
var state_3273__$1 = state_3273;
var statearr_3278_3410 = state_3273__$1;
(statearr_3278_3410[(2)] = null);

(statearr_3278_3410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3274 === (6))){
var state_3273__$1 = state_3273;
var statearr_3279_3411 = state_3273__$1;
(statearr_3279_3411[(2)] = null);

(statearr_3279_3411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3274 === (7))){
var inst_3269 = (state_3273[(2)]);
var state_3273__$1 = state_3273;
var statearr_3280_3412 = state_3273__$1;
(statearr_3280_3412[(2)] = inst_3269);

(statearr_3280_3412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3393,c__3054__auto___3406,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async))
;
return ((function (__3393,switch__2959__auto__,c__3054__auto___3406,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0 = (function (){
var statearr_3281 = [null,null,null,null,null,null,null];
(statearr_3281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__);

(statearr_3281[(1)] = (1));

return statearr_3281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1 = (function (state_3273){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3282){if((e3282 instanceof Object)){
var ex__2963__auto__ = e3282;
var statearr_3283_3413 = state_3273;
(statearr_3283_3413[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3414 = state_3273;
state_3273 = G__3414;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = function(state_3273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1.call(this,state_3273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__;
})()
;})(__3393,switch__2959__auto__,c__3054__auto___3406,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async))
})();
var state__3056__auto__ = (function (){var statearr_3284 = f__3055__auto__.call(null);
(statearr_3284[(6)] = c__3054__auto___3406);

return statearr_3284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(__3393,c__3054__auto___3406,G__3236_3394,G__3236_3395__$1,n__4607__auto___3392,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3236_3395__$1)].join('')));

}

var G__3415 = (__3393 + (1));
__3393 = G__3415;
continue;
} else {
}
break;
}

var c__3054__auto___3416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___3416,jobs,results,process,async){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___3416,jobs,results,process,async){
return (function (state_3306){
var state_val_3307 = (state_3306[(1)]);
if((state_val_3307 === (7))){
var inst_3302 = (state_3306[(2)]);
var state_3306__$1 = state_3306;
var statearr_3308_3417 = state_3306__$1;
(statearr_3308_3417[(2)] = inst_3302);

(statearr_3308_3417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3307 === (1))){
var state_3306__$1 = state_3306;
var statearr_3309_3418 = state_3306__$1;
(statearr_3309_3418[(2)] = null);

(statearr_3309_3418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3307 === (4))){
var inst_3287 = (state_3306[(7)]);
var inst_3287__$1 = (state_3306[(2)]);
var inst_3288 = (inst_3287__$1 == null);
var state_3306__$1 = (function (){var statearr_3310 = state_3306;
(statearr_3310[(7)] = inst_3287__$1);

return statearr_3310;
})();
if(cljs.core.truth_(inst_3288)){
var statearr_3311_3419 = state_3306__$1;
(statearr_3311_3419[(1)] = (5));

} else {
var statearr_3312_3420 = state_3306__$1;
(statearr_3312_3420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3307 === (6))){
var inst_3292 = (state_3306[(8)]);
var inst_3287 = (state_3306[(7)]);
var inst_3292__$1 = cljs.core.async.chan.call(null,(1));
var inst_3293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3294 = [inst_3287,inst_3292__$1];
var inst_3295 = (new cljs.core.PersistentVector(null,2,(5),inst_3293,inst_3294,null));
var state_3306__$1 = (function (){var statearr_3313 = state_3306;
(statearr_3313[(8)] = inst_3292__$1);

return statearr_3313;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3306__$1,(8),jobs,inst_3295);
} else {
if((state_val_3307 === (3))){
var inst_3304 = (state_3306[(2)]);
var state_3306__$1 = state_3306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3306__$1,inst_3304);
} else {
if((state_val_3307 === (2))){
var state_3306__$1 = state_3306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3306__$1,(4),from);
} else {
if((state_val_3307 === (9))){
var inst_3299 = (state_3306[(2)]);
var state_3306__$1 = (function (){var statearr_3314 = state_3306;
(statearr_3314[(9)] = inst_3299);

return statearr_3314;
})();
var statearr_3315_3421 = state_3306__$1;
(statearr_3315_3421[(2)] = null);

(statearr_3315_3421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3307 === (5))){
var inst_3290 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3306__$1 = state_3306;
var statearr_3316_3422 = state_3306__$1;
(statearr_3316_3422[(2)] = inst_3290);

(statearr_3316_3422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3307 === (8))){
var inst_3292 = (state_3306[(8)]);
var inst_3297 = (state_3306[(2)]);
var state_3306__$1 = (function (){var statearr_3317 = state_3306;
(statearr_3317[(10)] = inst_3297);

return statearr_3317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3306__$1,(9),results,inst_3292);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___3416,jobs,results,process,async))
;
return ((function (switch__2959__auto__,c__3054__auto___3416,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0 = (function (){
var statearr_3318 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__);

(statearr_3318[(1)] = (1));

return statearr_3318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1 = (function (state_3306){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3319){if((e3319 instanceof Object)){
var ex__2963__auto__ = e3319;
var statearr_3320_3423 = state_3306;
(statearr_3320_3423[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3424 = state_3306;
state_3306 = G__3424;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = function(state_3306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1.call(this,state_3306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___3416,jobs,results,process,async))
})();
var state__3056__auto__ = (function (){var statearr_3321 = f__3055__auto__.call(null);
(statearr_3321[(6)] = c__3054__auto___3416);

return statearr_3321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___3416,jobs,results,process,async))
);


var c__3054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto__,jobs,results,process,async){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto__,jobs,results,process,async){
return (function (state_3359){
var state_val_3360 = (state_3359[(1)]);
if((state_val_3360 === (7))){
var inst_3355 = (state_3359[(2)]);
var state_3359__$1 = state_3359;
var statearr_3361_3425 = state_3359__$1;
(statearr_3361_3425[(2)] = inst_3355);

(statearr_3361_3425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (20))){
var state_3359__$1 = state_3359;
var statearr_3362_3426 = state_3359__$1;
(statearr_3362_3426[(2)] = null);

(statearr_3362_3426[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (1))){
var state_3359__$1 = state_3359;
var statearr_3363_3427 = state_3359__$1;
(statearr_3363_3427[(2)] = null);

(statearr_3363_3427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (4))){
var inst_3324 = (state_3359[(7)]);
var inst_3324__$1 = (state_3359[(2)]);
var inst_3325 = (inst_3324__$1 == null);
var state_3359__$1 = (function (){var statearr_3364 = state_3359;
(statearr_3364[(7)] = inst_3324__$1);

return statearr_3364;
})();
if(cljs.core.truth_(inst_3325)){
var statearr_3365_3428 = state_3359__$1;
(statearr_3365_3428[(1)] = (5));

} else {
var statearr_3366_3429 = state_3359__$1;
(statearr_3366_3429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (15))){
var inst_3337 = (state_3359[(8)]);
var state_3359__$1 = state_3359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3359__$1,(18),to,inst_3337);
} else {
if((state_val_3360 === (21))){
var inst_3350 = (state_3359[(2)]);
var state_3359__$1 = state_3359;
var statearr_3367_3430 = state_3359__$1;
(statearr_3367_3430[(2)] = inst_3350);

(statearr_3367_3430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (13))){
var inst_3352 = (state_3359[(2)]);
var state_3359__$1 = (function (){var statearr_3368 = state_3359;
(statearr_3368[(9)] = inst_3352);

return statearr_3368;
})();
var statearr_3369_3431 = state_3359__$1;
(statearr_3369_3431[(2)] = null);

(statearr_3369_3431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (6))){
var inst_3324 = (state_3359[(7)]);
var state_3359__$1 = state_3359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3359__$1,(11),inst_3324);
} else {
if((state_val_3360 === (17))){
var inst_3345 = (state_3359[(2)]);
var state_3359__$1 = state_3359;
if(cljs.core.truth_(inst_3345)){
var statearr_3370_3432 = state_3359__$1;
(statearr_3370_3432[(1)] = (19));

} else {
var statearr_3371_3433 = state_3359__$1;
(statearr_3371_3433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (3))){
var inst_3357 = (state_3359[(2)]);
var state_3359__$1 = state_3359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3359__$1,inst_3357);
} else {
if((state_val_3360 === (12))){
var inst_3334 = (state_3359[(10)]);
var state_3359__$1 = state_3359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3359__$1,(14),inst_3334);
} else {
if((state_val_3360 === (2))){
var state_3359__$1 = state_3359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3359__$1,(4),results);
} else {
if((state_val_3360 === (19))){
var state_3359__$1 = state_3359;
var statearr_3372_3434 = state_3359__$1;
(statearr_3372_3434[(2)] = null);

(statearr_3372_3434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (11))){
var inst_3334 = (state_3359[(2)]);
var state_3359__$1 = (function (){var statearr_3373 = state_3359;
(statearr_3373[(10)] = inst_3334);

return statearr_3373;
})();
var statearr_3374_3435 = state_3359__$1;
(statearr_3374_3435[(2)] = null);

(statearr_3374_3435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (9))){
var state_3359__$1 = state_3359;
var statearr_3375_3436 = state_3359__$1;
(statearr_3375_3436[(2)] = null);

(statearr_3375_3436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (5))){
var state_3359__$1 = state_3359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3376_3437 = state_3359__$1;
(statearr_3376_3437[(1)] = (8));

} else {
var statearr_3377_3438 = state_3359__$1;
(statearr_3377_3438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (14))){
var inst_3339 = (state_3359[(11)]);
var inst_3337 = (state_3359[(8)]);
var inst_3337__$1 = (state_3359[(2)]);
var inst_3338 = (inst_3337__$1 == null);
var inst_3339__$1 = cljs.core.not.call(null,inst_3338);
var state_3359__$1 = (function (){var statearr_3378 = state_3359;
(statearr_3378[(11)] = inst_3339__$1);

(statearr_3378[(8)] = inst_3337__$1);

return statearr_3378;
})();
if(inst_3339__$1){
var statearr_3379_3439 = state_3359__$1;
(statearr_3379_3439[(1)] = (15));

} else {
var statearr_3380_3440 = state_3359__$1;
(statearr_3380_3440[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (16))){
var inst_3339 = (state_3359[(11)]);
var state_3359__$1 = state_3359;
var statearr_3381_3441 = state_3359__$1;
(statearr_3381_3441[(2)] = inst_3339);

(statearr_3381_3441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (10))){
var inst_3331 = (state_3359[(2)]);
var state_3359__$1 = state_3359;
var statearr_3382_3442 = state_3359__$1;
(statearr_3382_3442[(2)] = inst_3331);

(statearr_3382_3442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (18))){
var inst_3342 = (state_3359[(2)]);
var state_3359__$1 = state_3359;
var statearr_3383_3443 = state_3359__$1;
(statearr_3383_3443[(2)] = inst_3342);

(statearr_3383_3443[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3360 === (8))){
var inst_3328 = cljs.core.async.close_BANG_.call(null,to);
var state_3359__$1 = state_3359;
var statearr_3384_3444 = state_3359__$1;
(statearr_3384_3444[(2)] = inst_3328);

(statearr_3384_3444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto__,jobs,results,process,async))
;
return ((function (switch__2959__auto__,c__3054__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0 = (function (){
var statearr_3385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__);

(statearr_3385[(1)] = (1));

return statearr_3385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1 = (function (state_3359){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3386){if((e3386 instanceof Object)){
var ex__2963__auto__ = e3386;
var statearr_3387_3445 = state_3359;
(statearr_3387_3445[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3446 = state_3359;
state_3359 = G__3446;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__ = function(state_3359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1.call(this,state_3359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto__,jobs,results,process,async))
})();
var state__3056__auto__ = (function (){var statearr_3388 = f__3055__auto__.call(null);
(statearr_3388[(6)] = c__3054__auto__);

return statearr_3388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto__,jobs,results,process,async))
);

return c__3054__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__3448 = arguments.length;
switch (G__3448) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__3451 = arguments.length;
switch (G__3451) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__3454 = arguments.length;
switch (G__3454) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3054__auto___3503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___3503,tc,fc){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___3503,tc,fc){
return (function (state_3480){
var state_val_3481 = (state_3480[(1)]);
if((state_val_3481 === (7))){
var inst_3476 = (state_3480[(2)]);
var state_3480__$1 = state_3480;
var statearr_3482_3504 = state_3480__$1;
(statearr_3482_3504[(2)] = inst_3476);

(statearr_3482_3504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (1))){
var state_3480__$1 = state_3480;
var statearr_3483_3505 = state_3480__$1;
(statearr_3483_3505[(2)] = null);

(statearr_3483_3505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (4))){
var inst_3457 = (state_3480[(7)]);
var inst_3457__$1 = (state_3480[(2)]);
var inst_3458 = (inst_3457__$1 == null);
var state_3480__$1 = (function (){var statearr_3484 = state_3480;
(statearr_3484[(7)] = inst_3457__$1);

return statearr_3484;
})();
if(cljs.core.truth_(inst_3458)){
var statearr_3485_3506 = state_3480__$1;
(statearr_3485_3506[(1)] = (5));

} else {
var statearr_3486_3507 = state_3480__$1;
(statearr_3486_3507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (13))){
var state_3480__$1 = state_3480;
var statearr_3487_3508 = state_3480__$1;
(statearr_3487_3508[(2)] = null);

(statearr_3487_3508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (6))){
var inst_3457 = (state_3480[(7)]);
var inst_3463 = p.call(null,inst_3457);
var state_3480__$1 = state_3480;
if(cljs.core.truth_(inst_3463)){
var statearr_3488_3509 = state_3480__$1;
(statearr_3488_3509[(1)] = (9));

} else {
var statearr_3489_3510 = state_3480__$1;
(statearr_3489_3510[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (3))){
var inst_3478 = (state_3480[(2)]);
var state_3480__$1 = state_3480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3480__$1,inst_3478);
} else {
if((state_val_3481 === (12))){
var state_3480__$1 = state_3480;
var statearr_3490_3511 = state_3480__$1;
(statearr_3490_3511[(2)] = null);

(statearr_3490_3511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (2))){
var state_3480__$1 = state_3480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3480__$1,(4),ch);
} else {
if((state_val_3481 === (11))){
var inst_3457 = (state_3480[(7)]);
var inst_3467 = (state_3480[(2)]);
var state_3480__$1 = state_3480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3480__$1,(8),inst_3467,inst_3457);
} else {
if((state_val_3481 === (9))){
var state_3480__$1 = state_3480;
var statearr_3491_3512 = state_3480__$1;
(statearr_3491_3512[(2)] = tc);

(statearr_3491_3512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (5))){
var inst_3460 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3461 = cljs.core.async.close_BANG_.call(null,fc);
var state_3480__$1 = (function (){var statearr_3492 = state_3480;
(statearr_3492[(8)] = inst_3460);

return statearr_3492;
})();
var statearr_3493_3513 = state_3480__$1;
(statearr_3493_3513[(2)] = inst_3461);

(statearr_3493_3513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (14))){
var inst_3474 = (state_3480[(2)]);
var state_3480__$1 = state_3480;
var statearr_3494_3514 = state_3480__$1;
(statearr_3494_3514[(2)] = inst_3474);

(statearr_3494_3514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (10))){
var state_3480__$1 = state_3480;
var statearr_3495_3515 = state_3480__$1;
(statearr_3495_3515[(2)] = fc);

(statearr_3495_3515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3481 === (8))){
var inst_3469 = (state_3480[(2)]);
var state_3480__$1 = state_3480;
if(cljs.core.truth_(inst_3469)){
var statearr_3496_3516 = state_3480__$1;
(statearr_3496_3516[(1)] = (12));

} else {
var statearr_3497_3517 = state_3480__$1;
(statearr_3497_3517[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___3503,tc,fc))
;
return ((function (switch__2959__auto__,c__3054__auto___3503,tc,fc){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_3498 = [null,null,null,null,null,null,null,null,null];
(statearr_3498[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_3498[(1)] = (1));

return statearr_3498;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_3480){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3499){if((e3499 instanceof Object)){
var ex__2963__auto__ = e3499;
var statearr_3500_3518 = state_3480;
(statearr_3500_3518[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3519 = state_3480;
state_3480 = G__3519;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_3480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_3480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___3503,tc,fc))
})();
var state__3056__auto__ = (function (){var statearr_3501 = f__3055__auto__.call(null);
(statearr_3501[(6)] = c__3054__auto___3503);

return statearr_3501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___3503,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__3054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto__){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto__){
return (function (state_3540){
var state_val_3541 = (state_3540[(1)]);
if((state_val_3541 === (7))){
var inst_3536 = (state_3540[(2)]);
var state_3540__$1 = state_3540;
var statearr_3542_3560 = state_3540__$1;
(statearr_3542_3560[(2)] = inst_3536);

(statearr_3542_3560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (1))){
var inst_3520 = init;
var state_3540__$1 = (function (){var statearr_3543 = state_3540;
(statearr_3543[(7)] = inst_3520);

return statearr_3543;
})();
var statearr_3544_3561 = state_3540__$1;
(statearr_3544_3561[(2)] = null);

(statearr_3544_3561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (4))){
var inst_3523 = (state_3540[(8)]);
var inst_3523__$1 = (state_3540[(2)]);
var inst_3524 = (inst_3523__$1 == null);
var state_3540__$1 = (function (){var statearr_3545 = state_3540;
(statearr_3545[(8)] = inst_3523__$1);

return statearr_3545;
})();
if(cljs.core.truth_(inst_3524)){
var statearr_3546_3562 = state_3540__$1;
(statearr_3546_3562[(1)] = (5));

} else {
var statearr_3547_3563 = state_3540__$1;
(statearr_3547_3563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (6))){
var inst_3523 = (state_3540[(8)]);
var inst_3527 = (state_3540[(9)]);
var inst_3520 = (state_3540[(7)]);
var inst_3527__$1 = f.call(null,inst_3520,inst_3523);
var inst_3528 = cljs.core.reduced_QMARK_.call(null,inst_3527__$1);
var state_3540__$1 = (function (){var statearr_3548 = state_3540;
(statearr_3548[(9)] = inst_3527__$1);

return statearr_3548;
})();
if(inst_3528){
var statearr_3549_3564 = state_3540__$1;
(statearr_3549_3564[(1)] = (8));

} else {
var statearr_3550_3565 = state_3540__$1;
(statearr_3550_3565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (3))){
var inst_3538 = (state_3540[(2)]);
var state_3540__$1 = state_3540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3540__$1,inst_3538);
} else {
if((state_val_3541 === (2))){
var state_3540__$1 = state_3540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3540__$1,(4),ch);
} else {
if((state_val_3541 === (9))){
var inst_3527 = (state_3540[(9)]);
var inst_3520 = inst_3527;
var state_3540__$1 = (function (){var statearr_3551 = state_3540;
(statearr_3551[(7)] = inst_3520);

return statearr_3551;
})();
var statearr_3552_3566 = state_3540__$1;
(statearr_3552_3566[(2)] = null);

(statearr_3552_3566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (5))){
var inst_3520 = (state_3540[(7)]);
var state_3540__$1 = state_3540;
var statearr_3553_3567 = state_3540__$1;
(statearr_3553_3567[(2)] = inst_3520);

(statearr_3553_3567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (10))){
var inst_3534 = (state_3540[(2)]);
var state_3540__$1 = state_3540;
var statearr_3554_3568 = state_3540__$1;
(statearr_3554_3568[(2)] = inst_3534);

(statearr_3554_3568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3541 === (8))){
var inst_3527 = (state_3540[(9)]);
var inst_3530 = cljs.core.deref.call(null,inst_3527);
var state_3540__$1 = state_3540;
var statearr_3555_3569 = state_3540__$1;
(statearr_3555_3569[(2)] = inst_3530);

(statearr_3555_3569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto__))
;
return ((function (switch__2959__auto__,c__3054__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2960__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2960__auto____0 = (function (){
var statearr_3556 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3556[(0)] = cljs$core$async$reduce_$_state_machine__2960__auto__);

(statearr_3556[(1)] = (1));

return statearr_3556;
});
var cljs$core$async$reduce_$_state_machine__2960__auto____1 = (function (state_3540){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3557){if((e3557 instanceof Object)){
var ex__2963__auto__ = e3557;
var statearr_3558_3570 = state_3540;
(statearr_3558_3570[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3571 = state_3540;
state_3540 = G__3571;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2960__auto__ = function(state_3540){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2960__auto____1.call(this,state_3540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2960__auto____0;
cljs$core$async$reduce_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2960__auto____1;
return cljs$core$async$reduce_$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto__))
})();
var state__3056__auto__ = (function (){var statearr_3559 = f__3055__auto__.call(null);
(statearr_3559[(6)] = c__3054__auto__);

return statearr_3559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto__))
);

return c__3054__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto__,f__$1){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto__,f__$1){
return (function (state_3577){
var state_val_3578 = (state_3577[(1)]);
if((state_val_3578 === (1))){
var inst_3572 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3577__$1 = state_3577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3577__$1,(2),inst_3572);
} else {
if((state_val_3578 === (2))){
var inst_3574 = (state_3577[(2)]);
var inst_3575 = f__$1.call(null,inst_3574);
var state_3577__$1 = state_3577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3577__$1,inst_3575);
} else {
return null;
}
}
});})(c__3054__auto__,f__$1))
;
return ((function (switch__2959__auto__,c__3054__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2960__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2960__auto____0 = (function (){
var statearr_3579 = [null,null,null,null,null,null,null];
(statearr_3579[(0)] = cljs$core$async$transduce_$_state_machine__2960__auto__);

(statearr_3579[(1)] = (1));

return statearr_3579;
});
var cljs$core$async$transduce_$_state_machine__2960__auto____1 = (function (state_3577){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3580){if((e3580 instanceof Object)){
var ex__2963__auto__ = e3580;
var statearr_3581_3583 = state_3577;
(statearr_3581_3583[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3584 = state_3577;
state_3577 = G__3584;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2960__auto__ = function(state_3577){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2960__auto____1.call(this,state_3577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2960__auto____0;
cljs$core$async$transduce_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2960__auto____1;
return cljs$core$async$transduce_$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto__,f__$1))
})();
var state__3056__auto__ = (function (){var statearr_3582 = f__3055__auto__.call(null);
(statearr_3582[(6)] = c__3054__auto__);

return statearr_3582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto__,f__$1))
);

return c__3054__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3586 = arguments.length;
switch (G__3586) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto__){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto__){
return (function (state_3611){
var state_val_3612 = (state_3611[(1)]);
if((state_val_3612 === (7))){
var inst_3593 = (state_3611[(2)]);
var state_3611__$1 = state_3611;
var statearr_3613_3634 = state_3611__$1;
(statearr_3613_3634[(2)] = inst_3593);

(statearr_3613_3634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (1))){
var inst_3587 = cljs.core.seq.call(null,coll);
var inst_3588 = inst_3587;
var state_3611__$1 = (function (){var statearr_3614 = state_3611;
(statearr_3614[(7)] = inst_3588);

return statearr_3614;
})();
var statearr_3615_3635 = state_3611__$1;
(statearr_3615_3635[(2)] = null);

(statearr_3615_3635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (4))){
var inst_3588 = (state_3611[(7)]);
var inst_3591 = cljs.core.first.call(null,inst_3588);
var state_3611__$1 = state_3611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3611__$1,(7),ch,inst_3591);
} else {
if((state_val_3612 === (13))){
var inst_3605 = (state_3611[(2)]);
var state_3611__$1 = state_3611;
var statearr_3616_3636 = state_3611__$1;
(statearr_3616_3636[(2)] = inst_3605);

(statearr_3616_3636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (6))){
var inst_3596 = (state_3611[(2)]);
var state_3611__$1 = state_3611;
if(cljs.core.truth_(inst_3596)){
var statearr_3617_3637 = state_3611__$1;
(statearr_3617_3637[(1)] = (8));

} else {
var statearr_3618_3638 = state_3611__$1;
(statearr_3618_3638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (3))){
var inst_3609 = (state_3611[(2)]);
var state_3611__$1 = state_3611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3611__$1,inst_3609);
} else {
if((state_val_3612 === (12))){
var state_3611__$1 = state_3611;
var statearr_3619_3639 = state_3611__$1;
(statearr_3619_3639[(2)] = null);

(statearr_3619_3639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (2))){
var inst_3588 = (state_3611[(7)]);
var state_3611__$1 = state_3611;
if(cljs.core.truth_(inst_3588)){
var statearr_3620_3640 = state_3611__$1;
(statearr_3620_3640[(1)] = (4));

} else {
var statearr_3621_3641 = state_3611__$1;
(statearr_3621_3641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (11))){
var inst_3602 = cljs.core.async.close_BANG_.call(null,ch);
var state_3611__$1 = state_3611;
var statearr_3622_3642 = state_3611__$1;
(statearr_3622_3642[(2)] = inst_3602);

(statearr_3622_3642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (9))){
var state_3611__$1 = state_3611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3623_3643 = state_3611__$1;
(statearr_3623_3643[(1)] = (11));

} else {
var statearr_3624_3644 = state_3611__$1;
(statearr_3624_3644[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (5))){
var inst_3588 = (state_3611[(7)]);
var state_3611__$1 = state_3611;
var statearr_3625_3645 = state_3611__$1;
(statearr_3625_3645[(2)] = inst_3588);

(statearr_3625_3645[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (10))){
var inst_3607 = (state_3611[(2)]);
var state_3611__$1 = state_3611;
var statearr_3626_3646 = state_3611__$1;
(statearr_3626_3646[(2)] = inst_3607);

(statearr_3626_3646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3612 === (8))){
var inst_3588 = (state_3611[(7)]);
var inst_3598 = cljs.core.next.call(null,inst_3588);
var inst_3588__$1 = inst_3598;
var state_3611__$1 = (function (){var statearr_3627 = state_3611;
(statearr_3627[(7)] = inst_3588__$1);

return statearr_3627;
})();
var statearr_3628_3647 = state_3611__$1;
(statearr_3628_3647[(2)] = null);

(statearr_3628_3647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto__))
;
return ((function (switch__2959__auto__,c__3054__auto__){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_3629 = [null,null,null,null,null,null,null,null];
(statearr_3629[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_3629[(1)] = (1));

return statearr_3629;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_3611){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3630){if((e3630 instanceof Object)){
var ex__2963__auto__ = e3630;
var statearr_3631_3648 = state_3611;
(statearr_3631_3648[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3649 = state_3611;
state_3611 = G__3649;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_3611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_3611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto__))
})();
var state__3056__auto__ = (function (){var statearr_3632 = f__3055__auto__.call(null);
(statearr_3632[(6)] = c__3054__auto__);

return statearr_3632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto__))
);

return c__3054__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3650 = (function (ch,cs,meta3651){
this.ch = ch;
this.cs = cs;
this.meta3651 = meta3651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3652,meta3651__$1){
var self__ = this;
var _3652__$1 = this;
return (new cljs.core.async.t_cljs$core$async3650(self__.ch,self__.cs,meta3651__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3652){
var self__ = this;
var _3652__$1 = this;
return self__.meta3651;
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3651","meta3651",847905307,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3650";

cljs.core.async.t_cljs$core$async3650.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async3650");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3650.
 */
cljs.core.async.__GT_t_cljs$core$async3650 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3650(ch__$1,cs__$1,meta3651){
return (new cljs.core.async.t_cljs$core$async3650(ch__$1,cs__$1,meta3651));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3650(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__3054__auto___3872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___3872,cs,m,dchan,dctr,done){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___3872,cs,m,dchan,dctr,done){
return (function (state_3787){
var state_val_3788 = (state_3787[(1)]);
if((state_val_3788 === (7))){
var inst_3783 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3789_3873 = state_3787__$1;
(statearr_3789_3873[(2)] = inst_3783);

(statearr_3789_3873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (20))){
var inst_3686 = (state_3787[(7)]);
var inst_3698 = cljs.core.first.call(null,inst_3686);
var inst_3699 = cljs.core.nth.call(null,inst_3698,(0),null);
var inst_3700 = cljs.core.nth.call(null,inst_3698,(1),null);
var state_3787__$1 = (function (){var statearr_3790 = state_3787;
(statearr_3790[(8)] = inst_3699);

return statearr_3790;
})();
if(cljs.core.truth_(inst_3700)){
var statearr_3791_3874 = state_3787__$1;
(statearr_3791_3874[(1)] = (22));

} else {
var statearr_3792_3875 = state_3787__$1;
(statearr_3792_3875[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (27))){
var inst_3728 = (state_3787[(9)]);
var inst_3655 = (state_3787[(10)]);
var inst_3730 = (state_3787[(11)]);
var inst_3735 = (state_3787[(12)]);
var inst_3735__$1 = cljs.core._nth.call(null,inst_3728,inst_3730);
var inst_3736 = cljs.core.async.put_BANG_.call(null,inst_3735__$1,inst_3655,done);
var state_3787__$1 = (function (){var statearr_3793 = state_3787;
(statearr_3793[(12)] = inst_3735__$1);

return statearr_3793;
})();
if(cljs.core.truth_(inst_3736)){
var statearr_3794_3876 = state_3787__$1;
(statearr_3794_3876[(1)] = (30));

} else {
var statearr_3795_3877 = state_3787__$1;
(statearr_3795_3877[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (1))){
var state_3787__$1 = state_3787;
var statearr_3796_3878 = state_3787__$1;
(statearr_3796_3878[(2)] = null);

(statearr_3796_3878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (24))){
var inst_3686 = (state_3787[(7)]);
var inst_3705 = (state_3787[(2)]);
var inst_3706 = cljs.core.next.call(null,inst_3686);
var inst_3664 = inst_3706;
var inst_3665 = null;
var inst_3666 = (0);
var inst_3667 = (0);
var state_3787__$1 = (function (){var statearr_3797 = state_3787;
(statearr_3797[(13)] = inst_3666);

(statearr_3797[(14)] = inst_3665);

(statearr_3797[(15)] = inst_3664);

(statearr_3797[(16)] = inst_3705);

(statearr_3797[(17)] = inst_3667);

return statearr_3797;
})();
var statearr_3798_3879 = state_3787__$1;
(statearr_3798_3879[(2)] = null);

(statearr_3798_3879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (39))){
var state_3787__$1 = state_3787;
var statearr_3802_3880 = state_3787__$1;
(statearr_3802_3880[(2)] = null);

(statearr_3802_3880[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (4))){
var inst_3655 = (state_3787[(10)]);
var inst_3655__$1 = (state_3787[(2)]);
var inst_3656 = (inst_3655__$1 == null);
var state_3787__$1 = (function (){var statearr_3803 = state_3787;
(statearr_3803[(10)] = inst_3655__$1);

return statearr_3803;
})();
if(cljs.core.truth_(inst_3656)){
var statearr_3804_3881 = state_3787__$1;
(statearr_3804_3881[(1)] = (5));

} else {
var statearr_3805_3882 = state_3787__$1;
(statearr_3805_3882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (15))){
var inst_3666 = (state_3787[(13)]);
var inst_3665 = (state_3787[(14)]);
var inst_3664 = (state_3787[(15)]);
var inst_3667 = (state_3787[(17)]);
var inst_3682 = (state_3787[(2)]);
var inst_3683 = (inst_3667 + (1));
var tmp3799 = inst_3666;
var tmp3800 = inst_3665;
var tmp3801 = inst_3664;
var inst_3664__$1 = tmp3801;
var inst_3665__$1 = tmp3800;
var inst_3666__$1 = tmp3799;
var inst_3667__$1 = inst_3683;
var state_3787__$1 = (function (){var statearr_3806 = state_3787;
(statearr_3806[(13)] = inst_3666__$1);

(statearr_3806[(14)] = inst_3665__$1);

(statearr_3806[(15)] = inst_3664__$1);

(statearr_3806[(17)] = inst_3667__$1);

(statearr_3806[(18)] = inst_3682);

return statearr_3806;
})();
var statearr_3807_3883 = state_3787__$1;
(statearr_3807_3883[(2)] = null);

(statearr_3807_3883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (21))){
var inst_3709 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3811_3884 = state_3787__$1;
(statearr_3811_3884[(2)] = inst_3709);

(statearr_3811_3884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (31))){
var inst_3735 = (state_3787[(12)]);
var inst_3739 = done.call(null,null);
var inst_3740 = cljs.core.async.untap_STAR_.call(null,m,inst_3735);
var state_3787__$1 = (function (){var statearr_3812 = state_3787;
(statearr_3812[(19)] = inst_3739);

return statearr_3812;
})();
var statearr_3813_3885 = state_3787__$1;
(statearr_3813_3885[(2)] = inst_3740);

(statearr_3813_3885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (32))){
var inst_3728 = (state_3787[(9)]);
var inst_3730 = (state_3787[(11)]);
var inst_3729 = (state_3787[(20)]);
var inst_3727 = (state_3787[(21)]);
var inst_3742 = (state_3787[(2)]);
var inst_3743 = (inst_3730 + (1));
var tmp3808 = inst_3728;
var tmp3809 = inst_3729;
var tmp3810 = inst_3727;
var inst_3727__$1 = tmp3810;
var inst_3728__$1 = tmp3808;
var inst_3729__$1 = tmp3809;
var inst_3730__$1 = inst_3743;
var state_3787__$1 = (function (){var statearr_3814 = state_3787;
(statearr_3814[(9)] = inst_3728__$1);

(statearr_3814[(22)] = inst_3742);

(statearr_3814[(11)] = inst_3730__$1);

(statearr_3814[(20)] = inst_3729__$1);

(statearr_3814[(21)] = inst_3727__$1);

return statearr_3814;
})();
var statearr_3815_3886 = state_3787__$1;
(statearr_3815_3886[(2)] = null);

(statearr_3815_3886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (40))){
var inst_3755 = (state_3787[(23)]);
var inst_3759 = done.call(null,null);
var inst_3760 = cljs.core.async.untap_STAR_.call(null,m,inst_3755);
var state_3787__$1 = (function (){var statearr_3816 = state_3787;
(statearr_3816[(24)] = inst_3759);

return statearr_3816;
})();
var statearr_3817_3887 = state_3787__$1;
(statearr_3817_3887[(2)] = inst_3760);

(statearr_3817_3887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (33))){
var inst_3746 = (state_3787[(25)]);
var inst_3748 = cljs.core.chunked_seq_QMARK_.call(null,inst_3746);
var state_3787__$1 = state_3787;
if(inst_3748){
var statearr_3818_3888 = state_3787__$1;
(statearr_3818_3888[(1)] = (36));

} else {
var statearr_3819_3889 = state_3787__$1;
(statearr_3819_3889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (13))){
var inst_3676 = (state_3787[(26)]);
var inst_3679 = cljs.core.async.close_BANG_.call(null,inst_3676);
var state_3787__$1 = state_3787;
var statearr_3820_3890 = state_3787__$1;
(statearr_3820_3890[(2)] = inst_3679);

(statearr_3820_3890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (22))){
var inst_3699 = (state_3787[(8)]);
var inst_3702 = cljs.core.async.close_BANG_.call(null,inst_3699);
var state_3787__$1 = state_3787;
var statearr_3821_3891 = state_3787__$1;
(statearr_3821_3891[(2)] = inst_3702);

(statearr_3821_3891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (36))){
var inst_3746 = (state_3787[(25)]);
var inst_3750 = cljs.core.chunk_first.call(null,inst_3746);
var inst_3751 = cljs.core.chunk_rest.call(null,inst_3746);
var inst_3752 = cljs.core.count.call(null,inst_3750);
var inst_3727 = inst_3751;
var inst_3728 = inst_3750;
var inst_3729 = inst_3752;
var inst_3730 = (0);
var state_3787__$1 = (function (){var statearr_3822 = state_3787;
(statearr_3822[(9)] = inst_3728);

(statearr_3822[(11)] = inst_3730);

(statearr_3822[(20)] = inst_3729);

(statearr_3822[(21)] = inst_3727);

return statearr_3822;
})();
var statearr_3823_3892 = state_3787__$1;
(statearr_3823_3892[(2)] = null);

(statearr_3823_3892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (41))){
var inst_3746 = (state_3787[(25)]);
var inst_3762 = (state_3787[(2)]);
var inst_3763 = cljs.core.next.call(null,inst_3746);
var inst_3727 = inst_3763;
var inst_3728 = null;
var inst_3729 = (0);
var inst_3730 = (0);
var state_3787__$1 = (function (){var statearr_3824 = state_3787;
(statearr_3824[(27)] = inst_3762);

(statearr_3824[(9)] = inst_3728);

(statearr_3824[(11)] = inst_3730);

(statearr_3824[(20)] = inst_3729);

(statearr_3824[(21)] = inst_3727);

return statearr_3824;
})();
var statearr_3825_3893 = state_3787__$1;
(statearr_3825_3893[(2)] = null);

(statearr_3825_3893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (43))){
var state_3787__$1 = state_3787;
var statearr_3826_3894 = state_3787__$1;
(statearr_3826_3894[(2)] = null);

(statearr_3826_3894[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (29))){
var inst_3771 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3827_3895 = state_3787__$1;
(statearr_3827_3895[(2)] = inst_3771);

(statearr_3827_3895[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (44))){
var inst_3780 = (state_3787[(2)]);
var state_3787__$1 = (function (){var statearr_3828 = state_3787;
(statearr_3828[(28)] = inst_3780);

return statearr_3828;
})();
var statearr_3829_3896 = state_3787__$1;
(statearr_3829_3896[(2)] = null);

(statearr_3829_3896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (6))){
var inst_3719 = (state_3787[(29)]);
var inst_3718 = cljs.core.deref.call(null,cs);
var inst_3719__$1 = cljs.core.keys.call(null,inst_3718);
var inst_3720 = cljs.core.count.call(null,inst_3719__$1);
var inst_3721 = cljs.core.reset_BANG_.call(null,dctr,inst_3720);
var inst_3726 = cljs.core.seq.call(null,inst_3719__$1);
var inst_3727 = inst_3726;
var inst_3728 = null;
var inst_3729 = (0);
var inst_3730 = (0);
var state_3787__$1 = (function (){var statearr_3830 = state_3787;
(statearr_3830[(30)] = inst_3721);

(statearr_3830[(9)] = inst_3728);

(statearr_3830[(11)] = inst_3730);

(statearr_3830[(20)] = inst_3729);

(statearr_3830[(29)] = inst_3719__$1);

(statearr_3830[(21)] = inst_3727);

return statearr_3830;
})();
var statearr_3831_3897 = state_3787__$1;
(statearr_3831_3897[(2)] = null);

(statearr_3831_3897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (28))){
var inst_3746 = (state_3787[(25)]);
var inst_3727 = (state_3787[(21)]);
var inst_3746__$1 = cljs.core.seq.call(null,inst_3727);
var state_3787__$1 = (function (){var statearr_3832 = state_3787;
(statearr_3832[(25)] = inst_3746__$1);

return statearr_3832;
})();
if(inst_3746__$1){
var statearr_3833_3898 = state_3787__$1;
(statearr_3833_3898[(1)] = (33));

} else {
var statearr_3834_3899 = state_3787__$1;
(statearr_3834_3899[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (25))){
var inst_3730 = (state_3787[(11)]);
var inst_3729 = (state_3787[(20)]);
var inst_3732 = (inst_3730 < inst_3729);
var inst_3733 = inst_3732;
var state_3787__$1 = state_3787;
if(cljs.core.truth_(inst_3733)){
var statearr_3835_3900 = state_3787__$1;
(statearr_3835_3900[(1)] = (27));

} else {
var statearr_3836_3901 = state_3787__$1;
(statearr_3836_3901[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (34))){
var state_3787__$1 = state_3787;
var statearr_3837_3902 = state_3787__$1;
(statearr_3837_3902[(2)] = null);

(statearr_3837_3902[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (17))){
var state_3787__$1 = state_3787;
var statearr_3838_3903 = state_3787__$1;
(statearr_3838_3903[(2)] = null);

(statearr_3838_3903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (3))){
var inst_3785 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3787__$1,inst_3785);
} else {
if((state_val_3788 === (12))){
var inst_3714 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3839_3904 = state_3787__$1;
(statearr_3839_3904[(2)] = inst_3714);

(statearr_3839_3904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (2))){
var state_3787__$1 = state_3787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3787__$1,(4),ch);
} else {
if((state_val_3788 === (23))){
var state_3787__$1 = state_3787;
var statearr_3840_3905 = state_3787__$1;
(statearr_3840_3905[(2)] = null);

(statearr_3840_3905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (35))){
var inst_3769 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3841_3906 = state_3787__$1;
(statearr_3841_3906[(2)] = inst_3769);

(statearr_3841_3906[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (19))){
var inst_3686 = (state_3787[(7)]);
var inst_3690 = cljs.core.chunk_first.call(null,inst_3686);
var inst_3691 = cljs.core.chunk_rest.call(null,inst_3686);
var inst_3692 = cljs.core.count.call(null,inst_3690);
var inst_3664 = inst_3691;
var inst_3665 = inst_3690;
var inst_3666 = inst_3692;
var inst_3667 = (0);
var state_3787__$1 = (function (){var statearr_3842 = state_3787;
(statearr_3842[(13)] = inst_3666);

(statearr_3842[(14)] = inst_3665);

(statearr_3842[(15)] = inst_3664);

(statearr_3842[(17)] = inst_3667);

return statearr_3842;
})();
var statearr_3843_3907 = state_3787__$1;
(statearr_3843_3907[(2)] = null);

(statearr_3843_3907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (11))){
var inst_3686 = (state_3787[(7)]);
var inst_3664 = (state_3787[(15)]);
var inst_3686__$1 = cljs.core.seq.call(null,inst_3664);
var state_3787__$1 = (function (){var statearr_3844 = state_3787;
(statearr_3844[(7)] = inst_3686__$1);

return statearr_3844;
})();
if(inst_3686__$1){
var statearr_3845_3908 = state_3787__$1;
(statearr_3845_3908[(1)] = (16));

} else {
var statearr_3846_3909 = state_3787__$1;
(statearr_3846_3909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (9))){
var inst_3716 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3847_3910 = state_3787__$1;
(statearr_3847_3910[(2)] = inst_3716);

(statearr_3847_3910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (5))){
var inst_3662 = cljs.core.deref.call(null,cs);
var inst_3663 = cljs.core.seq.call(null,inst_3662);
var inst_3664 = inst_3663;
var inst_3665 = null;
var inst_3666 = (0);
var inst_3667 = (0);
var state_3787__$1 = (function (){var statearr_3848 = state_3787;
(statearr_3848[(13)] = inst_3666);

(statearr_3848[(14)] = inst_3665);

(statearr_3848[(15)] = inst_3664);

(statearr_3848[(17)] = inst_3667);

return statearr_3848;
})();
var statearr_3849_3911 = state_3787__$1;
(statearr_3849_3911[(2)] = null);

(statearr_3849_3911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (14))){
var state_3787__$1 = state_3787;
var statearr_3850_3912 = state_3787__$1;
(statearr_3850_3912[(2)] = null);

(statearr_3850_3912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (45))){
var inst_3777 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3851_3913 = state_3787__$1;
(statearr_3851_3913[(2)] = inst_3777);

(statearr_3851_3913[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (26))){
var inst_3719 = (state_3787[(29)]);
var inst_3773 = (state_3787[(2)]);
var inst_3774 = cljs.core.seq.call(null,inst_3719);
var state_3787__$1 = (function (){var statearr_3852 = state_3787;
(statearr_3852[(31)] = inst_3773);

return statearr_3852;
})();
if(inst_3774){
var statearr_3853_3914 = state_3787__$1;
(statearr_3853_3914[(1)] = (42));

} else {
var statearr_3854_3915 = state_3787__$1;
(statearr_3854_3915[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (16))){
var inst_3686 = (state_3787[(7)]);
var inst_3688 = cljs.core.chunked_seq_QMARK_.call(null,inst_3686);
var state_3787__$1 = state_3787;
if(inst_3688){
var statearr_3855_3916 = state_3787__$1;
(statearr_3855_3916[(1)] = (19));

} else {
var statearr_3856_3917 = state_3787__$1;
(statearr_3856_3917[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (38))){
var inst_3766 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3857_3918 = state_3787__$1;
(statearr_3857_3918[(2)] = inst_3766);

(statearr_3857_3918[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (30))){
var state_3787__$1 = state_3787;
var statearr_3858_3919 = state_3787__$1;
(statearr_3858_3919[(2)] = null);

(statearr_3858_3919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (10))){
var inst_3665 = (state_3787[(14)]);
var inst_3667 = (state_3787[(17)]);
var inst_3675 = cljs.core._nth.call(null,inst_3665,inst_3667);
var inst_3676 = cljs.core.nth.call(null,inst_3675,(0),null);
var inst_3677 = cljs.core.nth.call(null,inst_3675,(1),null);
var state_3787__$1 = (function (){var statearr_3859 = state_3787;
(statearr_3859[(26)] = inst_3676);

return statearr_3859;
})();
if(cljs.core.truth_(inst_3677)){
var statearr_3860_3920 = state_3787__$1;
(statearr_3860_3920[(1)] = (13));

} else {
var statearr_3861_3921 = state_3787__$1;
(statearr_3861_3921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (18))){
var inst_3712 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3862_3922 = state_3787__$1;
(statearr_3862_3922[(2)] = inst_3712);

(statearr_3862_3922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (42))){
var state_3787__$1 = state_3787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3787__$1,(45),dchan);
} else {
if((state_val_3788 === (37))){
var inst_3655 = (state_3787[(10)]);
var inst_3746 = (state_3787[(25)]);
var inst_3755 = (state_3787[(23)]);
var inst_3755__$1 = cljs.core.first.call(null,inst_3746);
var inst_3756 = cljs.core.async.put_BANG_.call(null,inst_3755__$1,inst_3655,done);
var state_3787__$1 = (function (){var statearr_3863 = state_3787;
(statearr_3863[(23)] = inst_3755__$1);

return statearr_3863;
})();
if(cljs.core.truth_(inst_3756)){
var statearr_3864_3923 = state_3787__$1;
(statearr_3864_3923[(1)] = (39));

} else {
var statearr_3865_3924 = state_3787__$1;
(statearr_3865_3924[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (8))){
var inst_3666 = (state_3787[(13)]);
var inst_3667 = (state_3787[(17)]);
var inst_3669 = (inst_3667 < inst_3666);
var inst_3670 = inst_3669;
var state_3787__$1 = state_3787;
if(cljs.core.truth_(inst_3670)){
var statearr_3866_3925 = state_3787__$1;
(statearr_3866_3925[(1)] = (10));

} else {
var statearr_3867_3926 = state_3787__$1;
(statearr_3867_3926[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___3872,cs,m,dchan,dctr,done))
;
return ((function (switch__2959__auto__,c__3054__auto___3872,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2960__auto__ = null;
var cljs$core$async$mult_$_state_machine__2960__auto____0 = (function (){
var statearr_3868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3868[(0)] = cljs$core$async$mult_$_state_machine__2960__auto__);

(statearr_3868[(1)] = (1));

return statearr_3868;
});
var cljs$core$async$mult_$_state_machine__2960__auto____1 = (function (state_3787){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_3787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e3869){if((e3869 instanceof Object)){
var ex__2963__auto__ = e3869;
var statearr_3870_3927 = state_3787;
(statearr_3870_3927[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3928 = state_3787;
state_3787 = G__3928;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2960__auto__ = function(state_3787){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2960__auto____1.call(this,state_3787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2960__auto____0;
cljs$core$async$mult_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2960__auto____1;
return cljs$core$async$mult_$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___3872,cs,m,dchan,dctr,done))
})();
var state__3056__auto__ = (function (){var statearr_3871 = f__3055__auto__.call(null);
(statearr_3871[(6)] = c__3054__auto___3872);

return statearr_3871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___3872,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__3930 = arguments.length;
switch (G__3930) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___3942 = arguments.length;
var i__4731__auto___3943 = (0);
while(true){
if((i__4731__auto___3943 < len__4730__auto___3942)){
args__4736__auto__.push((arguments[i__4731__auto___3943]));

var G__3944 = (i__4731__auto___3943 + (1));
i__4731__auto___3943 = G__3944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3936){
var map__3937 = p__3936;
var map__3937__$1 = (((((!((map__3937 == null))))?(((((map__3937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3937):map__3937);
var opts = map__3937__$1;
var statearr_3939_3945 = state;
(statearr_3939_3945[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__3937,map__3937__$1,opts){
return (function (val){
var statearr_3940_3946 = state;
(statearr_3940_3946[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3937,map__3937__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_3941_3947 = state;
(statearr_3941_3947[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3932){
var G__3933 = cljs.core.first.call(null,seq3932);
var seq3932__$1 = cljs.core.next.call(null,seq3932);
var G__3934 = cljs.core.first.call(null,seq3932__$1);
var seq3932__$2 = cljs.core.next.call(null,seq3932__$1);
var G__3935 = cljs.core.first.call(null,seq3932__$2);
var seq3932__$3 = cljs.core.next.call(null,seq3932__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3933,G__3934,G__3935,seq3932__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3948 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta3949){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta3949 = meta3949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3950,meta3949__$1){
var self__ = this;
var _3950__$1 = this;
return (new cljs.core.async.t_cljs$core$async3948(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta3949__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3950){
var self__ = this;
var _3950__$1 = this;
return self__.meta3949;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta3949","meta3949",-1547096411,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3948";

cljs.core.async.t_cljs$core$async3948.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async3948");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3948.
 */
cljs.core.async.__GT_t_cljs$core$async3948 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async3948(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3949){
return (new cljs.core.async.t_cljs$core$async3948(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3949));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async3948(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3054__auto___4112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4052){
var state_val_4053 = (state_4052[(1)]);
if((state_val_4053 === (7))){
var inst_3967 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
var statearr_4054_4113 = state_4052__$1;
(statearr_4054_4113[(2)] = inst_3967);

(statearr_4054_4113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (20))){
var inst_3979 = (state_4052[(7)]);
var state_4052__$1 = state_4052;
var statearr_4055_4114 = state_4052__$1;
(statearr_4055_4114[(2)] = inst_3979);

(statearr_4055_4114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (27))){
var state_4052__$1 = state_4052;
var statearr_4056_4115 = state_4052__$1;
(statearr_4056_4115[(2)] = null);

(statearr_4056_4115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (1))){
var inst_3954 = (state_4052[(8)]);
var inst_3954__$1 = calc_state.call(null);
var inst_3956 = (inst_3954__$1 == null);
var inst_3957 = cljs.core.not.call(null,inst_3956);
var state_4052__$1 = (function (){var statearr_4057 = state_4052;
(statearr_4057[(8)] = inst_3954__$1);

return statearr_4057;
})();
if(inst_3957){
var statearr_4058_4116 = state_4052__$1;
(statearr_4058_4116[(1)] = (2));

} else {
var statearr_4059_4117 = state_4052__$1;
(statearr_4059_4117[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (24))){
var inst_4003 = (state_4052[(9)]);
var inst_4012 = (state_4052[(10)]);
var inst_4026 = (state_4052[(11)]);
var inst_4026__$1 = inst_4003.call(null,inst_4012);
var state_4052__$1 = (function (){var statearr_4060 = state_4052;
(statearr_4060[(11)] = inst_4026__$1);

return statearr_4060;
})();
if(cljs.core.truth_(inst_4026__$1)){
var statearr_4061_4118 = state_4052__$1;
(statearr_4061_4118[(1)] = (29));

} else {
var statearr_4062_4119 = state_4052__$1;
(statearr_4062_4119[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (4))){
var inst_3970 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_3970)){
var statearr_4063_4120 = state_4052__$1;
(statearr_4063_4120[(1)] = (8));

} else {
var statearr_4064_4121 = state_4052__$1;
(statearr_4064_4121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (15))){
var inst_3997 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_3997)){
var statearr_4065_4122 = state_4052__$1;
(statearr_4065_4122[(1)] = (19));

} else {
var statearr_4066_4123 = state_4052__$1;
(statearr_4066_4123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (21))){
var inst_4002 = (state_4052[(12)]);
var inst_4002__$1 = (state_4052[(2)]);
var inst_4003 = cljs.core.get.call(null,inst_4002__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4004 = cljs.core.get.call(null,inst_4002__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4005 = cljs.core.get.call(null,inst_4002__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4052__$1 = (function (){var statearr_4067 = state_4052;
(statearr_4067[(9)] = inst_4003);

(statearr_4067[(13)] = inst_4004);

(statearr_4067[(12)] = inst_4002__$1);

return statearr_4067;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4052__$1,(22),inst_4005);
} else {
if((state_val_4053 === (31))){
var inst_4034 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_4034)){
var statearr_4068_4124 = state_4052__$1;
(statearr_4068_4124[(1)] = (32));

} else {
var statearr_4069_4125 = state_4052__$1;
(statearr_4069_4125[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (32))){
var inst_4011 = (state_4052[(14)]);
var state_4052__$1 = state_4052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4052__$1,(35),out,inst_4011);
} else {
if((state_val_4053 === (33))){
var inst_4002 = (state_4052[(12)]);
var inst_3979 = inst_4002;
var state_4052__$1 = (function (){var statearr_4070 = state_4052;
(statearr_4070[(7)] = inst_3979);

return statearr_4070;
})();
var statearr_4071_4126 = state_4052__$1;
(statearr_4071_4126[(2)] = null);

(statearr_4071_4126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (13))){
var inst_3979 = (state_4052[(7)]);
var inst_3986 = inst_3979.cljs$lang$protocol_mask$partition0$;
var inst_3987 = (inst_3986 & (64));
var inst_3988 = inst_3979.cljs$core$ISeq$;
var inst_3989 = (cljs.core.PROTOCOL_SENTINEL === inst_3988);
var inst_3990 = ((inst_3987) || (inst_3989));
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_3990)){
var statearr_4072_4127 = state_4052__$1;
(statearr_4072_4127[(1)] = (16));

} else {
var statearr_4073_4128 = state_4052__$1;
(statearr_4073_4128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (22))){
var inst_4011 = (state_4052[(14)]);
var inst_4012 = (state_4052[(10)]);
var inst_4010 = (state_4052[(2)]);
var inst_4011__$1 = cljs.core.nth.call(null,inst_4010,(0),null);
var inst_4012__$1 = cljs.core.nth.call(null,inst_4010,(1),null);
var inst_4013 = (inst_4011__$1 == null);
var inst_4014 = cljs.core._EQ_.call(null,inst_4012__$1,change);
var inst_4015 = ((inst_4013) || (inst_4014));
var state_4052__$1 = (function (){var statearr_4074 = state_4052;
(statearr_4074[(14)] = inst_4011__$1);

(statearr_4074[(10)] = inst_4012__$1);

return statearr_4074;
})();
if(cljs.core.truth_(inst_4015)){
var statearr_4075_4129 = state_4052__$1;
(statearr_4075_4129[(1)] = (23));

} else {
var statearr_4076_4130 = state_4052__$1;
(statearr_4076_4130[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (36))){
var inst_4002 = (state_4052[(12)]);
var inst_3979 = inst_4002;
var state_4052__$1 = (function (){var statearr_4077 = state_4052;
(statearr_4077[(7)] = inst_3979);

return statearr_4077;
})();
var statearr_4078_4131 = state_4052__$1;
(statearr_4078_4131[(2)] = null);

(statearr_4078_4131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (29))){
var inst_4026 = (state_4052[(11)]);
var state_4052__$1 = state_4052;
var statearr_4079_4132 = state_4052__$1;
(statearr_4079_4132[(2)] = inst_4026);

(statearr_4079_4132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (6))){
var state_4052__$1 = state_4052;
var statearr_4080_4133 = state_4052__$1;
(statearr_4080_4133[(2)] = false);

(statearr_4080_4133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (28))){
var inst_4022 = (state_4052[(2)]);
var inst_4023 = calc_state.call(null);
var inst_3979 = inst_4023;
var state_4052__$1 = (function (){var statearr_4081 = state_4052;
(statearr_4081[(7)] = inst_3979);

(statearr_4081[(15)] = inst_4022);

return statearr_4081;
})();
var statearr_4082_4134 = state_4052__$1;
(statearr_4082_4134[(2)] = null);

(statearr_4082_4134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (25))){
var inst_4048 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
var statearr_4083_4135 = state_4052__$1;
(statearr_4083_4135[(2)] = inst_4048);

(statearr_4083_4135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (34))){
var inst_4046 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
var statearr_4084_4136 = state_4052__$1;
(statearr_4084_4136[(2)] = inst_4046);

(statearr_4084_4136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (17))){
var state_4052__$1 = state_4052;
var statearr_4085_4137 = state_4052__$1;
(statearr_4085_4137[(2)] = false);

(statearr_4085_4137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (3))){
var state_4052__$1 = state_4052;
var statearr_4086_4138 = state_4052__$1;
(statearr_4086_4138[(2)] = false);

(statearr_4086_4138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (12))){
var inst_4050 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4052__$1,inst_4050);
} else {
if((state_val_4053 === (2))){
var inst_3954 = (state_4052[(8)]);
var inst_3959 = inst_3954.cljs$lang$protocol_mask$partition0$;
var inst_3960 = (inst_3959 & (64));
var inst_3961 = inst_3954.cljs$core$ISeq$;
var inst_3962 = (cljs.core.PROTOCOL_SENTINEL === inst_3961);
var inst_3963 = ((inst_3960) || (inst_3962));
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_3963)){
var statearr_4087_4139 = state_4052__$1;
(statearr_4087_4139[(1)] = (5));

} else {
var statearr_4088_4140 = state_4052__$1;
(statearr_4088_4140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (23))){
var inst_4011 = (state_4052[(14)]);
var inst_4017 = (inst_4011 == null);
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_4017)){
var statearr_4089_4141 = state_4052__$1;
(statearr_4089_4141[(1)] = (26));

} else {
var statearr_4090_4142 = state_4052__$1;
(statearr_4090_4142[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (35))){
var inst_4037 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
if(cljs.core.truth_(inst_4037)){
var statearr_4091_4143 = state_4052__$1;
(statearr_4091_4143[(1)] = (36));

} else {
var statearr_4092_4144 = state_4052__$1;
(statearr_4092_4144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (19))){
var inst_3979 = (state_4052[(7)]);
var inst_3999 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3979);
var state_4052__$1 = state_4052;
var statearr_4093_4145 = state_4052__$1;
(statearr_4093_4145[(2)] = inst_3999);

(statearr_4093_4145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (11))){
var inst_3979 = (state_4052[(7)]);
var inst_3983 = (inst_3979 == null);
var inst_3984 = cljs.core.not.call(null,inst_3983);
var state_4052__$1 = state_4052;
if(inst_3984){
var statearr_4094_4146 = state_4052__$1;
(statearr_4094_4146[(1)] = (13));

} else {
var statearr_4095_4147 = state_4052__$1;
(statearr_4095_4147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (9))){
var inst_3954 = (state_4052[(8)]);
var state_4052__$1 = state_4052;
var statearr_4096_4148 = state_4052__$1;
(statearr_4096_4148[(2)] = inst_3954);

(statearr_4096_4148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (5))){
var state_4052__$1 = state_4052;
var statearr_4097_4149 = state_4052__$1;
(statearr_4097_4149[(2)] = true);

(statearr_4097_4149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (14))){
var state_4052__$1 = state_4052;
var statearr_4098_4150 = state_4052__$1;
(statearr_4098_4150[(2)] = false);

(statearr_4098_4150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (26))){
var inst_4012 = (state_4052[(10)]);
var inst_4019 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4012);
var state_4052__$1 = state_4052;
var statearr_4099_4151 = state_4052__$1;
(statearr_4099_4151[(2)] = inst_4019);

(statearr_4099_4151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (16))){
var state_4052__$1 = state_4052;
var statearr_4100_4152 = state_4052__$1;
(statearr_4100_4152[(2)] = true);

(statearr_4100_4152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (38))){
var inst_4042 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
var statearr_4101_4153 = state_4052__$1;
(statearr_4101_4153[(2)] = inst_4042);

(statearr_4101_4153[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (30))){
var inst_4003 = (state_4052[(9)]);
var inst_4004 = (state_4052[(13)]);
var inst_4012 = (state_4052[(10)]);
var inst_4029 = cljs.core.empty_QMARK_.call(null,inst_4003);
var inst_4030 = inst_4004.call(null,inst_4012);
var inst_4031 = cljs.core.not.call(null,inst_4030);
var inst_4032 = ((inst_4029) && (inst_4031));
var state_4052__$1 = state_4052;
var statearr_4102_4154 = state_4052__$1;
(statearr_4102_4154[(2)] = inst_4032);

(statearr_4102_4154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (10))){
var inst_3954 = (state_4052[(8)]);
var inst_3975 = (state_4052[(2)]);
var inst_3976 = cljs.core.get.call(null,inst_3975,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3977 = cljs.core.get.call(null,inst_3975,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3978 = cljs.core.get.call(null,inst_3975,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3979 = inst_3954;
var state_4052__$1 = (function (){var statearr_4103 = state_4052;
(statearr_4103[(16)] = inst_3976);

(statearr_4103[(7)] = inst_3979);

(statearr_4103[(17)] = inst_3978);

(statearr_4103[(18)] = inst_3977);

return statearr_4103;
})();
var statearr_4104_4155 = state_4052__$1;
(statearr_4104_4155[(2)] = null);

(statearr_4104_4155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (18))){
var inst_3994 = (state_4052[(2)]);
var state_4052__$1 = state_4052;
var statearr_4105_4156 = state_4052__$1;
(statearr_4105_4156[(2)] = inst_3994);

(statearr_4105_4156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (37))){
var state_4052__$1 = state_4052;
var statearr_4106_4157 = state_4052__$1;
(statearr_4106_4157[(2)] = null);

(statearr_4106_4157[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4053 === (8))){
var inst_3954 = (state_4052[(8)]);
var inst_3972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3954);
var state_4052__$1 = state_4052;
var statearr_4107_4158 = state_4052__$1;
(statearr_4107_4158[(2)] = inst_3972);

(statearr_4107_4158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2959__auto__,c__3054__auto___4112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2960__auto__ = null;
var cljs$core$async$mix_$_state_machine__2960__auto____0 = (function (){
var statearr_4108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4108[(0)] = cljs$core$async$mix_$_state_machine__2960__auto__);

(statearr_4108[(1)] = (1));

return statearr_4108;
});
var cljs$core$async$mix_$_state_machine__2960__auto____1 = (function (state_4052){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4109){if((e4109 instanceof Object)){
var ex__2963__auto__ = e4109;
var statearr_4110_4159 = state_4052;
(statearr_4110_4159[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4160 = state_4052;
state_4052 = G__4160;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2960__auto__ = function(state_4052){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2960__auto____1.call(this,state_4052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2960__auto____0;
cljs$core$async$mix_$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2960__auto____1;
return cljs$core$async$mix_$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3056__auto__ = (function (){var statearr_4111 = f__3055__auto__.call(null);
(statearr_4111[(6)] = c__3054__auto___4112);

return statearr_4111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4162 = arguments.length;
switch (G__4162) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__4166 = arguments.length;
switch (G__4166) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__4164_SHARP_){
if(cljs.core.truth_(p1__4164_SHARP_.call(null,topic))){
return p1__4164_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4164_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4167 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4168){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4168 = meta4168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4169,meta4168__$1){
var self__ = this;
var _4169__$1 = this;
return (new cljs.core.async.t_cljs$core$async4167(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4168__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4169){
var self__ = this;
var _4169__$1 = this;
return self__.meta4168;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4168","meta4168",-379096256,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4167";

cljs.core.async.t_cljs$core$async4167.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4167");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4167.
 */
cljs.core.async.__GT_t_cljs$core$async4167 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4167(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4168){
return (new cljs.core.async.t_cljs$core$async4167(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4168));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4167(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3054__auto___4287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4287,mults,ensure_mult,p){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4287,mults,ensure_mult,p){
return (function (state_4241){
var state_val_4242 = (state_4241[(1)]);
if((state_val_4242 === (7))){
var inst_4237 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
var statearr_4243_4288 = state_4241__$1;
(statearr_4243_4288[(2)] = inst_4237);

(statearr_4243_4288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (20))){
var state_4241__$1 = state_4241;
var statearr_4244_4289 = state_4241__$1;
(statearr_4244_4289[(2)] = null);

(statearr_4244_4289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (1))){
var state_4241__$1 = state_4241;
var statearr_4245_4290 = state_4241__$1;
(statearr_4245_4290[(2)] = null);

(statearr_4245_4290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (24))){
var inst_4220 = (state_4241[(7)]);
var inst_4229 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4220);
var state_4241__$1 = state_4241;
var statearr_4246_4291 = state_4241__$1;
(statearr_4246_4291[(2)] = inst_4229);

(statearr_4246_4291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (4))){
var inst_4172 = (state_4241[(8)]);
var inst_4172__$1 = (state_4241[(2)]);
var inst_4173 = (inst_4172__$1 == null);
var state_4241__$1 = (function (){var statearr_4247 = state_4241;
(statearr_4247[(8)] = inst_4172__$1);

return statearr_4247;
})();
if(cljs.core.truth_(inst_4173)){
var statearr_4248_4292 = state_4241__$1;
(statearr_4248_4292[(1)] = (5));

} else {
var statearr_4249_4293 = state_4241__$1;
(statearr_4249_4293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (15))){
var inst_4214 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
var statearr_4250_4294 = state_4241__$1;
(statearr_4250_4294[(2)] = inst_4214);

(statearr_4250_4294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (21))){
var inst_4234 = (state_4241[(2)]);
var state_4241__$1 = (function (){var statearr_4251 = state_4241;
(statearr_4251[(9)] = inst_4234);

return statearr_4251;
})();
var statearr_4252_4295 = state_4241__$1;
(statearr_4252_4295[(2)] = null);

(statearr_4252_4295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (13))){
var inst_4196 = (state_4241[(10)]);
var inst_4198 = cljs.core.chunked_seq_QMARK_.call(null,inst_4196);
var state_4241__$1 = state_4241;
if(inst_4198){
var statearr_4253_4296 = state_4241__$1;
(statearr_4253_4296[(1)] = (16));

} else {
var statearr_4254_4297 = state_4241__$1;
(statearr_4254_4297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (22))){
var inst_4226 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
if(cljs.core.truth_(inst_4226)){
var statearr_4255_4298 = state_4241__$1;
(statearr_4255_4298[(1)] = (23));

} else {
var statearr_4256_4299 = state_4241__$1;
(statearr_4256_4299[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (6))){
var inst_4222 = (state_4241[(11)]);
var inst_4172 = (state_4241[(8)]);
var inst_4220 = (state_4241[(7)]);
var inst_4220__$1 = topic_fn.call(null,inst_4172);
var inst_4221 = cljs.core.deref.call(null,mults);
var inst_4222__$1 = cljs.core.get.call(null,inst_4221,inst_4220__$1);
var state_4241__$1 = (function (){var statearr_4257 = state_4241;
(statearr_4257[(11)] = inst_4222__$1);

(statearr_4257[(7)] = inst_4220__$1);

return statearr_4257;
})();
if(cljs.core.truth_(inst_4222__$1)){
var statearr_4258_4300 = state_4241__$1;
(statearr_4258_4300[(1)] = (19));

} else {
var statearr_4259_4301 = state_4241__$1;
(statearr_4259_4301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (25))){
var inst_4231 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
var statearr_4260_4302 = state_4241__$1;
(statearr_4260_4302[(2)] = inst_4231);

(statearr_4260_4302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (17))){
var inst_4196 = (state_4241[(10)]);
var inst_4205 = cljs.core.first.call(null,inst_4196);
var inst_4206 = cljs.core.async.muxch_STAR_.call(null,inst_4205);
var inst_4207 = cljs.core.async.close_BANG_.call(null,inst_4206);
var inst_4208 = cljs.core.next.call(null,inst_4196);
var inst_4182 = inst_4208;
var inst_4183 = null;
var inst_4184 = (0);
var inst_4185 = (0);
var state_4241__$1 = (function (){var statearr_4261 = state_4241;
(statearr_4261[(12)] = inst_4184);

(statearr_4261[(13)] = inst_4207);

(statearr_4261[(14)] = inst_4183);

(statearr_4261[(15)] = inst_4185);

(statearr_4261[(16)] = inst_4182);

return statearr_4261;
})();
var statearr_4262_4303 = state_4241__$1;
(statearr_4262_4303[(2)] = null);

(statearr_4262_4303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (3))){
var inst_4239 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4241__$1,inst_4239);
} else {
if((state_val_4242 === (12))){
var inst_4216 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
var statearr_4263_4304 = state_4241__$1;
(statearr_4263_4304[(2)] = inst_4216);

(statearr_4263_4304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (2))){
var state_4241__$1 = state_4241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4241__$1,(4),ch);
} else {
if((state_val_4242 === (23))){
var state_4241__$1 = state_4241;
var statearr_4264_4305 = state_4241__$1;
(statearr_4264_4305[(2)] = null);

(statearr_4264_4305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (19))){
var inst_4222 = (state_4241[(11)]);
var inst_4172 = (state_4241[(8)]);
var inst_4224 = cljs.core.async.muxch_STAR_.call(null,inst_4222);
var state_4241__$1 = state_4241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4241__$1,(22),inst_4224,inst_4172);
} else {
if((state_val_4242 === (11))){
var inst_4182 = (state_4241[(16)]);
var inst_4196 = (state_4241[(10)]);
var inst_4196__$1 = cljs.core.seq.call(null,inst_4182);
var state_4241__$1 = (function (){var statearr_4265 = state_4241;
(statearr_4265[(10)] = inst_4196__$1);

return statearr_4265;
})();
if(inst_4196__$1){
var statearr_4266_4306 = state_4241__$1;
(statearr_4266_4306[(1)] = (13));

} else {
var statearr_4267_4307 = state_4241__$1;
(statearr_4267_4307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (9))){
var inst_4218 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
var statearr_4268_4308 = state_4241__$1;
(statearr_4268_4308[(2)] = inst_4218);

(statearr_4268_4308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (5))){
var inst_4179 = cljs.core.deref.call(null,mults);
var inst_4180 = cljs.core.vals.call(null,inst_4179);
var inst_4181 = cljs.core.seq.call(null,inst_4180);
var inst_4182 = inst_4181;
var inst_4183 = null;
var inst_4184 = (0);
var inst_4185 = (0);
var state_4241__$1 = (function (){var statearr_4269 = state_4241;
(statearr_4269[(12)] = inst_4184);

(statearr_4269[(14)] = inst_4183);

(statearr_4269[(15)] = inst_4185);

(statearr_4269[(16)] = inst_4182);

return statearr_4269;
})();
var statearr_4270_4309 = state_4241__$1;
(statearr_4270_4309[(2)] = null);

(statearr_4270_4309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (14))){
var state_4241__$1 = state_4241;
var statearr_4274_4310 = state_4241__$1;
(statearr_4274_4310[(2)] = null);

(statearr_4274_4310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (16))){
var inst_4196 = (state_4241[(10)]);
var inst_4200 = cljs.core.chunk_first.call(null,inst_4196);
var inst_4201 = cljs.core.chunk_rest.call(null,inst_4196);
var inst_4202 = cljs.core.count.call(null,inst_4200);
var inst_4182 = inst_4201;
var inst_4183 = inst_4200;
var inst_4184 = inst_4202;
var inst_4185 = (0);
var state_4241__$1 = (function (){var statearr_4275 = state_4241;
(statearr_4275[(12)] = inst_4184);

(statearr_4275[(14)] = inst_4183);

(statearr_4275[(15)] = inst_4185);

(statearr_4275[(16)] = inst_4182);

return statearr_4275;
})();
var statearr_4276_4311 = state_4241__$1;
(statearr_4276_4311[(2)] = null);

(statearr_4276_4311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (10))){
var inst_4184 = (state_4241[(12)]);
var inst_4183 = (state_4241[(14)]);
var inst_4185 = (state_4241[(15)]);
var inst_4182 = (state_4241[(16)]);
var inst_4190 = cljs.core._nth.call(null,inst_4183,inst_4185);
var inst_4191 = cljs.core.async.muxch_STAR_.call(null,inst_4190);
var inst_4192 = cljs.core.async.close_BANG_.call(null,inst_4191);
var inst_4193 = (inst_4185 + (1));
var tmp4271 = inst_4184;
var tmp4272 = inst_4183;
var tmp4273 = inst_4182;
var inst_4182__$1 = tmp4273;
var inst_4183__$1 = tmp4272;
var inst_4184__$1 = tmp4271;
var inst_4185__$1 = inst_4193;
var state_4241__$1 = (function (){var statearr_4277 = state_4241;
(statearr_4277[(12)] = inst_4184__$1);

(statearr_4277[(14)] = inst_4183__$1);

(statearr_4277[(15)] = inst_4185__$1);

(statearr_4277[(16)] = inst_4182__$1);

(statearr_4277[(17)] = inst_4192);

return statearr_4277;
})();
var statearr_4278_4312 = state_4241__$1;
(statearr_4278_4312[(2)] = null);

(statearr_4278_4312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (18))){
var inst_4211 = (state_4241[(2)]);
var state_4241__$1 = state_4241;
var statearr_4279_4313 = state_4241__$1;
(statearr_4279_4313[(2)] = inst_4211);

(statearr_4279_4313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4242 === (8))){
var inst_4184 = (state_4241[(12)]);
var inst_4185 = (state_4241[(15)]);
var inst_4187 = (inst_4185 < inst_4184);
var inst_4188 = inst_4187;
var state_4241__$1 = state_4241;
if(cljs.core.truth_(inst_4188)){
var statearr_4280_4314 = state_4241__$1;
(statearr_4280_4314[(1)] = (10));

} else {
var statearr_4281_4315 = state_4241__$1;
(statearr_4281_4315[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4287,mults,ensure_mult,p))
;
return ((function (switch__2959__auto__,c__3054__auto___4287,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4282[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4282[(1)] = (1));

return statearr_4282;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4241){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4283){if((e4283 instanceof Object)){
var ex__2963__auto__ = e4283;
var statearr_4284_4316 = state_4241;
(statearr_4284_4316[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4317 = state_4241;
state_4241 = G__4317;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4287,mults,ensure_mult,p))
})();
var state__3056__auto__ = (function (){var statearr_4285 = f__3055__auto__.call(null);
(statearr_4285[(6)] = c__3054__auto___4287);

return statearr_4285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4287,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4319 = arguments.length;
switch (G__4319) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4322 = arguments.length;
switch (G__4322) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4325 = arguments.length;
switch (G__4325) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__3054__auto___4392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4364){
var state_val_4365 = (state_4364[(1)]);
if((state_val_4365 === (7))){
var state_4364__$1 = state_4364;
var statearr_4366_4393 = state_4364__$1;
(statearr_4366_4393[(2)] = null);

(statearr_4366_4393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (1))){
var state_4364__$1 = state_4364;
var statearr_4367_4394 = state_4364__$1;
(statearr_4367_4394[(2)] = null);

(statearr_4367_4394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (4))){
var inst_4328 = (state_4364[(7)]);
var inst_4330 = (inst_4328 < cnt);
var state_4364__$1 = state_4364;
if(cljs.core.truth_(inst_4330)){
var statearr_4368_4395 = state_4364__$1;
(statearr_4368_4395[(1)] = (6));

} else {
var statearr_4369_4396 = state_4364__$1;
(statearr_4369_4396[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (15))){
var inst_4360 = (state_4364[(2)]);
var state_4364__$1 = state_4364;
var statearr_4370_4397 = state_4364__$1;
(statearr_4370_4397[(2)] = inst_4360);

(statearr_4370_4397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (13))){
var inst_4353 = cljs.core.async.close_BANG_.call(null,out);
var state_4364__$1 = state_4364;
var statearr_4371_4398 = state_4364__$1;
(statearr_4371_4398[(2)] = inst_4353);

(statearr_4371_4398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (6))){
var state_4364__$1 = state_4364;
var statearr_4372_4399 = state_4364__$1;
(statearr_4372_4399[(2)] = null);

(statearr_4372_4399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (3))){
var inst_4362 = (state_4364[(2)]);
var state_4364__$1 = state_4364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4364__$1,inst_4362);
} else {
if((state_val_4365 === (12))){
var inst_4350 = (state_4364[(8)]);
var inst_4350__$1 = (state_4364[(2)]);
var inst_4351 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4350__$1);
var state_4364__$1 = (function (){var statearr_4373 = state_4364;
(statearr_4373[(8)] = inst_4350__$1);

return statearr_4373;
})();
if(cljs.core.truth_(inst_4351)){
var statearr_4374_4400 = state_4364__$1;
(statearr_4374_4400[(1)] = (13));

} else {
var statearr_4375_4401 = state_4364__$1;
(statearr_4375_4401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (2))){
var inst_4327 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4328 = (0);
var state_4364__$1 = (function (){var statearr_4376 = state_4364;
(statearr_4376[(7)] = inst_4328);

(statearr_4376[(9)] = inst_4327);

return statearr_4376;
})();
var statearr_4377_4402 = state_4364__$1;
(statearr_4377_4402[(2)] = null);

(statearr_4377_4402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (11))){
var inst_4328 = (state_4364[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4364,(10),Object,null,(9));
var inst_4337 = chs__$1.call(null,inst_4328);
var inst_4338 = done.call(null,inst_4328);
var inst_4339 = cljs.core.async.take_BANG_.call(null,inst_4337,inst_4338);
var state_4364__$1 = state_4364;
var statearr_4378_4403 = state_4364__$1;
(statearr_4378_4403[(2)] = inst_4339);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (9))){
var inst_4328 = (state_4364[(7)]);
var inst_4341 = (state_4364[(2)]);
var inst_4342 = (inst_4328 + (1));
var inst_4328__$1 = inst_4342;
var state_4364__$1 = (function (){var statearr_4379 = state_4364;
(statearr_4379[(7)] = inst_4328__$1);

(statearr_4379[(10)] = inst_4341);

return statearr_4379;
})();
var statearr_4380_4404 = state_4364__$1;
(statearr_4380_4404[(2)] = null);

(statearr_4380_4404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (5))){
var inst_4348 = (state_4364[(2)]);
var state_4364__$1 = (function (){var statearr_4381 = state_4364;
(statearr_4381[(11)] = inst_4348);

return statearr_4381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4364__$1,(12),dchan);
} else {
if((state_val_4365 === (14))){
var inst_4350 = (state_4364[(8)]);
var inst_4355 = cljs.core.apply.call(null,f,inst_4350);
var state_4364__$1 = state_4364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4364__$1,(16),out,inst_4355);
} else {
if((state_val_4365 === (16))){
var inst_4357 = (state_4364[(2)]);
var state_4364__$1 = (function (){var statearr_4382 = state_4364;
(statearr_4382[(12)] = inst_4357);

return statearr_4382;
})();
var statearr_4383_4405 = state_4364__$1;
(statearr_4383_4405[(2)] = null);

(statearr_4383_4405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (10))){
var inst_4332 = (state_4364[(2)]);
var inst_4333 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4364__$1 = (function (){var statearr_4384 = state_4364;
(statearr_4384[(13)] = inst_4332);

return statearr_4384;
})();
var statearr_4385_4406 = state_4364__$1;
(statearr_4385_4406[(2)] = inst_4333);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4364__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4365 === (8))){
var inst_4346 = (state_4364[(2)]);
var state_4364__$1 = state_4364;
var statearr_4386_4407 = state_4364__$1;
(statearr_4386_4407[(2)] = inst_4346);

(statearr_4386_4407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4392,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2959__auto__,c__3054__auto___4392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4387[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4387[(1)] = (1));

return statearr_4387;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4364){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4388){if((e4388 instanceof Object)){
var ex__2963__auto__ = e4388;
var statearr_4389_4408 = state_4364;
(statearr_4389_4408[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4409 = state_4364;
state_4364 = G__4409;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4364){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4392,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3056__auto__ = (function (){var statearr_4390 = f__3055__auto__.call(null);
(statearr_4390[(6)] = c__3054__auto___4392);

return statearr_4390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4392,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__4412 = arguments.length;
switch (G__4412) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3054__auto___4466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4466,out){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4466,out){
return (function (state_4444){
var state_val_4445 = (state_4444[(1)]);
if((state_val_4445 === (7))){
var inst_4423 = (state_4444[(7)]);
var inst_4424 = (state_4444[(8)]);
var inst_4423__$1 = (state_4444[(2)]);
var inst_4424__$1 = cljs.core.nth.call(null,inst_4423__$1,(0),null);
var inst_4425 = cljs.core.nth.call(null,inst_4423__$1,(1),null);
var inst_4426 = (inst_4424__$1 == null);
var state_4444__$1 = (function (){var statearr_4446 = state_4444;
(statearr_4446[(9)] = inst_4425);

(statearr_4446[(7)] = inst_4423__$1);

(statearr_4446[(8)] = inst_4424__$1);

return statearr_4446;
})();
if(cljs.core.truth_(inst_4426)){
var statearr_4447_4467 = state_4444__$1;
(statearr_4447_4467[(1)] = (8));

} else {
var statearr_4448_4468 = state_4444__$1;
(statearr_4448_4468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (1))){
var inst_4413 = cljs.core.vec.call(null,chs);
var inst_4414 = inst_4413;
var state_4444__$1 = (function (){var statearr_4449 = state_4444;
(statearr_4449[(10)] = inst_4414);

return statearr_4449;
})();
var statearr_4450_4469 = state_4444__$1;
(statearr_4450_4469[(2)] = null);

(statearr_4450_4469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (4))){
var inst_4414 = (state_4444[(10)]);
var state_4444__$1 = state_4444;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4444__$1,(7),inst_4414);
} else {
if((state_val_4445 === (6))){
var inst_4440 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4451_4470 = state_4444__$1;
(statearr_4451_4470[(2)] = inst_4440);

(statearr_4451_4470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (3))){
var inst_4442 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4444__$1,inst_4442);
} else {
if((state_val_4445 === (2))){
var inst_4414 = (state_4444[(10)]);
var inst_4416 = cljs.core.count.call(null,inst_4414);
var inst_4417 = (inst_4416 > (0));
var state_4444__$1 = state_4444;
if(cljs.core.truth_(inst_4417)){
var statearr_4453_4471 = state_4444__$1;
(statearr_4453_4471[(1)] = (4));

} else {
var statearr_4454_4472 = state_4444__$1;
(statearr_4454_4472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (11))){
var inst_4414 = (state_4444[(10)]);
var inst_4433 = (state_4444[(2)]);
var tmp4452 = inst_4414;
var inst_4414__$1 = tmp4452;
var state_4444__$1 = (function (){var statearr_4455 = state_4444;
(statearr_4455[(10)] = inst_4414__$1);

(statearr_4455[(11)] = inst_4433);

return statearr_4455;
})();
var statearr_4456_4473 = state_4444__$1;
(statearr_4456_4473[(2)] = null);

(statearr_4456_4473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (9))){
var inst_4424 = (state_4444[(8)]);
var state_4444__$1 = state_4444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4444__$1,(11),out,inst_4424);
} else {
if((state_val_4445 === (5))){
var inst_4438 = cljs.core.async.close_BANG_.call(null,out);
var state_4444__$1 = state_4444;
var statearr_4457_4474 = state_4444__$1;
(statearr_4457_4474[(2)] = inst_4438);

(statearr_4457_4474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (10))){
var inst_4436 = (state_4444[(2)]);
var state_4444__$1 = state_4444;
var statearr_4458_4475 = state_4444__$1;
(statearr_4458_4475[(2)] = inst_4436);

(statearr_4458_4475[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4445 === (8))){
var inst_4425 = (state_4444[(9)]);
var inst_4423 = (state_4444[(7)]);
var inst_4414 = (state_4444[(10)]);
var inst_4424 = (state_4444[(8)]);
var inst_4428 = (function (){var cs = inst_4414;
var vec__4419 = inst_4423;
var v = inst_4424;
var c = inst_4425;
return ((function (cs,vec__4419,v,c,inst_4425,inst_4423,inst_4414,inst_4424,state_val_4445,c__3054__auto___4466,out){
return (function (p1__4410_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4410_SHARP_);
});
;})(cs,vec__4419,v,c,inst_4425,inst_4423,inst_4414,inst_4424,state_val_4445,c__3054__auto___4466,out))
})();
var inst_4429 = cljs.core.filterv.call(null,inst_4428,inst_4414);
var inst_4414__$1 = inst_4429;
var state_4444__$1 = (function (){var statearr_4459 = state_4444;
(statearr_4459[(10)] = inst_4414__$1);

return statearr_4459;
})();
var statearr_4460_4476 = state_4444__$1;
(statearr_4460_4476[(2)] = null);

(statearr_4460_4476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4466,out))
;
return ((function (switch__2959__auto__,c__3054__auto___4466,out){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4461[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4461[(1)] = (1));

return statearr_4461;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4444){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4462){if((e4462 instanceof Object)){
var ex__2963__auto__ = e4462;
var statearr_4463_4477 = state_4444;
(statearr_4463_4477[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4478 = state_4444;
state_4444 = G__4478;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4466,out))
})();
var state__3056__auto__ = (function (){var statearr_4464 = f__3055__auto__.call(null);
(statearr_4464[(6)] = c__3054__auto___4466);

return statearr_4464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4466,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__4480 = arguments.length;
switch (G__4480) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3054__auto___4525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4525,out){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4525,out){
return (function (state_4504){
var state_val_4505 = (state_4504[(1)]);
if((state_val_4505 === (7))){
var inst_4486 = (state_4504[(7)]);
var inst_4486__$1 = (state_4504[(2)]);
var inst_4487 = (inst_4486__$1 == null);
var inst_4488 = cljs.core.not.call(null,inst_4487);
var state_4504__$1 = (function (){var statearr_4506 = state_4504;
(statearr_4506[(7)] = inst_4486__$1);

return statearr_4506;
})();
if(inst_4488){
var statearr_4507_4526 = state_4504__$1;
(statearr_4507_4526[(1)] = (8));

} else {
var statearr_4508_4527 = state_4504__$1;
(statearr_4508_4527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (1))){
var inst_4481 = (0);
var state_4504__$1 = (function (){var statearr_4509 = state_4504;
(statearr_4509[(8)] = inst_4481);

return statearr_4509;
})();
var statearr_4510_4528 = state_4504__$1;
(statearr_4510_4528[(2)] = null);

(statearr_4510_4528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (4))){
var state_4504__$1 = state_4504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4504__$1,(7),ch);
} else {
if((state_val_4505 === (6))){
var inst_4499 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
var statearr_4511_4529 = state_4504__$1;
(statearr_4511_4529[(2)] = inst_4499);

(statearr_4511_4529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (3))){
var inst_4501 = (state_4504[(2)]);
var inst_4502 = cljs.core.async.close_BANG_.call(null,out);
var state_4504__$1 = (function (){var statearr_4512 = state_4504;
(statearr_4512[(9)] = inst_4501);

return statearr_4512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4504__$1,inst_4502);
} else {
if((state_val_4505 === (2))){
var inst_4481 = (state_4504[(8)]);
var inst_4483 = (inst_4481 < n);
var state_4504__$1 = state_4504;
if(cljs.core.truth_(inst_4483)){
var statearr_4513_4530 = state_4504__$1;
(statearr_4513_4530[(1)] = (4));

} else {
var statearr_4514_4531 = state_4504__$1;
(statearr_4514_4531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (11))){
var inst_4481 = (state_4504[(8)]);
var inst_4491 = (state_4504[(2)]);
var inst_4492 = (inst_4481 + (1));
var inst_4481__$1 = inst_4492;
var state_4504__$1 = (function (){var statearr_4515 = state_4504;
(statearr_4515[(8)] = inst_4481__$1);

(statearr_4515[(10)] = inst_4491);

return statearr_4515;
})();
var statearr_4516_4532 = state_4504__$1;
(statearr_4516_4532[(2)] = null);

(statearr_4516_4532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (9))){
var state_4504__$1 = state_4504;
var statearr_4517_4533 = state_4504__$1;
(statearr_4517_4533[(2)] = null);

(statearr_4517_4533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (5))){
var state_4504__$1 = state_4504;
var statearr_4518_4534 = state_4504__$1;
(statearr_4518_4534[(2)] = null);

(statearr_4518_4534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (10))){
var inst_4496 = (state_4504[(2)]);
var state_4504__$1 = state_4504;
var statearr_4519_4535 = state_4504__$1;
(statearr_4519_4535[(2)] = inst_4496);

(statearr_4519_4535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4505 === (8))){
var inst_4486 = (state_4504[(7)]);
var state_4504__$1 = state_4504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4504__$1,(11),out,inst_4486);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4525,out))
;
return ((function (switch__2959__auto__,c__3054__auto___4525,out){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4520[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4520[(1)] = (1));

return statearr_4520;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4504){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4521){if((e4521 instanceof Object)){
var ex__2963__auto__ = e4521;
var statearr_4522_4536 = state_4504;
(statearr_4522_4536[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4537 = state_4504;
state_4504 = G__4537;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4525,out))
})();
var state__3056__auto__ = (function (){var statearr_4523 = f__3055__auto__.call(null);
(statearr_4523[(6)] = c__3054__auto___4525);

return statearr_4523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4525,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4539 = (function (f,ch,meta4540){
this.f = f;
this.ch = ch;
this.meta4540 = meta4540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4541,meta4540__$1){
var self__ = this;
var _4541__$1 = this;
return (new cljs.core.async.t_cljs$core$async4539(self__.f,self__.ch,meta4540__$1));
});

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4541){
var self__ = this;
var _4541__$1 = this;
return self__.meta4540;
});

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4542 = (function (f,ch,meta4540,_,fn1,meta4543){
this.f = f;
this.ch = ch;
this.meta4540 = meta4540;
this._ = _;
this.fn1 = fn1;
this.meta4543 = meta4543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4544,meta4543__$1){
var self__ = this;
var _4544__$1 = this;
return (new cljs.core.async.t_cljs$core$async4542(self__.f,self__.ch,self__.meta4540,self__._,self__.fn1,meta4543__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4544){
var self__ = this;
var _4544__$1 = this;
return self__.meta4543;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4542.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4542.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4538_SHARP_){
return f1.call(null,(((p1__4538_SHARP_ == null))?null:self__.f.call(null,p1__4538_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4542.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4540","meta4540",-1532509475,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4539","cljs.core.async/t_cljs$core$async4539",-307988172,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4543","meta4543",-2045751123,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4542";

cljs.core.async.t_cljs$core$async4542.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4542");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4542.
 */
cljs.core.async.__GT_t_cljs$core$async4542 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4542(f__$1,ch__$1,meta4540__$1,___$2,fn1__$1,meta4543){
return (new cljs.core.async.t_cljs$core$async4542(f__$1,ch__$1,meta4540__$1,___$2,fn1__$1,meta4543));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4542(self__.f,self__.ch,self__.meta4540,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4540","meta4540",-1532509475,null)], null);
});

cljs.core.async.t_cljs$core$async4539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4539";

cljs.core.async.t_cljs$core$async4539.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4539");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4539.
 */
cljs.core.async.__GT_t_cljs$core$async4539 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4539(f__$1,ch__$1,meta4540){
return (new cljs.core.async.t_cljs$core$async4539(f__$1,ch__$1,meta4540));
});

}

return (new cljs.core.async.t_cljs$core$async4539(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4545 = (function (f,ch,meta4546){
this.f = f;
this.ch = ch;
this.meta4546 = meta4546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4547,meta4546__$1){
var self__ = this;
var _4547__$1 = this;
return (new cljs.core.async.t_cljs$core$async4545(self__.f,self__.ch,meta4546__$1));
});

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4547){
var self__ = this;
var _4547__$1 = this;
return self__.meta4546;
});

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4546","meta4546",730361758,null)], null);
});

cljs.core.async.t_cljs$core$async4545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4545";

cljs.core.async.t_cljs$core$async4545.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4545");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4545.
 */
cljs.core.async.__GT_t_cljs$core$async4545 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4545(f__$1,ch__$1,meta4546){
return (new cljs.core.async.t_cljs$core$async4545(f__$1,ch__$1,meta4546));
});

}

return (new cljs.core.async.t_cljs$core$async4545(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4548 = (function (p,ch,meta4549){
this.p = p;
this.ch = ch;
this.meta4549 = meta4549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4550,meta4549__$1){
var self__ = this;
var _4550__$1 = this;
return (new cljs.core.async.t_cljs$core$async4548(self__.p,self__.ch,meta4549__$1));
});

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4550){
var self__ = this;
var _4550__$1 = this;
return self__.meta4549;
});

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4549","meta4549",-233105207,null)], null);
});

cljs.core.async.t_cljs$core$async4548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4548";

cljs.core.async.t_cljs$core$async4548.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async4548");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4548.
 */
cljs.core.async.__GT_t_cljs$core$async4548 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4548(p__$1,ch__$1,meta4549){
return (new cljs.core.async.t_cljs$core$async4548(p__$1,ch__$1,meta4549));
});

}

return (new cljs.core.async.t_cljs$core$async4548(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__4552 = arguments.length;
switch (G__4552) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3054__auto___4592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4592,out){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4592,out){
return (function (state_4573){
var state_val_4574 = (state_4573[(1)]);
if((state_val_4574 === (7))){
var inst_4569 = (state_4573[(2)]);
var state_4573__$1 = state_4573;
var statearr_4575_4593 = state_4573__$1;
(statearr_4575_4593[(2)] = inst_4569);

(statearr_4575_4593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (1))){
var state_4573__$1 = state_4573;
var statearr_4576_4594 = state_4573__$1;
(statearr_4576_4594[(2)] = null);

(statearr_4576_4594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (4))){
var inst_4555 = (state_4573[(7)]);
var inst_4555__$1 = (state_4573[(2)]);
var inst_4556 = (inst_4555__$1 == null);
var state_4573__$1 = (function (){var statearr_4577 = state_4573;
(statearr_4577[(7)] = inst_4555__$1);

return statearr_4577;
})();
if(cljs.core.truth_(inst_4556)){
var statearr_4578_4595 = state_4573__$1;
(statearr_4578_4595[(1)] = (5));

} else {
var statearr_4579_4596 = state_4573__$1;
(statearr_4579_4596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (6))){
var inst_4555 = (state_4573[(7)]);
var inst_4560 = p.call(null,inst_4555);
var state_4573__$1 = state_4573;
if(cljs.core.truth_(inst_4560)){
var statearr_4580_4597 = state_4573__$1;
(statearr_4580_4597[(1)] = (8));

} else {
var statearr_4581_4598 = state_4573__$1;
(statearr_4581_4598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (3))){
var inst_4571 = (state_4573[(2)]);
var state_4573__$1 = state_4573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4573__$1,inst_4571);
} else {
if((state_val_4574 === (2))){
var state_4573__$1 = state_4573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4573__$1,(4),ch);
} else {
if((state_val_4574 === (11))){
var inst_4563 = (state_4573[(2)]);
var state_4573__$1 = state_4573;
var statearr_4582_4599 = state_4573__$1;
(statearr_4582_4599[(2)] = inst_4563);

(statearr_4582_4599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (9))){
var state_4573__$1 = state_4573;
var statearr_4583_4600 = state_4573__$1;
(statearr_4583_4600[(2)] = null);

(statearr_4583_4600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (5))){
var inst_4558 = cljs.core.async.close_BANG_.call(null,out);
var state_4573__$1 = state_4573;
var statearr_4584_4601 = state_4573__$1;
(statearr_4584_4601[(2)] = inst_4558);

(statearr_4584_4601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (10))){
var inst_4566 = (state_4573[(2)]);
var state_4573__$1 = (function (){var statearr_4585 = state_4573;
(statearr_4585[(8)] = inst_4566);

return statearr_4585;
})();
var statearr_4586_4602 = state_4573__$1;
(statearr_4586_4602[(2)] = null);

(statearr_4586_4602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4574 === (8))){
var inst_4555 = (state_4573[(7)]);
var state_4573__$1 = state_4573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4573__$1,(11),out,inst_4555);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4592,out))
;
return ((function (switch__2959__auto__,c__3054__auto___4592,out){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4587 = [null,null,null,null,null,null,null,null,null];
(statearr_4587[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4587[(1)] = (1));

return statearr_4587;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4573){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4588){if((e4588 instanceof Object)){
var ex__2963__auto__ = e4588;
var statearr_4589_4603 = state_4573;
(statearr_4589_4603[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4604 = state_4573;
state_4573 = G__4604;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4592,out))
})();
var state__3056__auto__ = (function (){var statearr_4590 = f__3055__auto__.call(null);
(statearr_4590[(6)] = c__3054__auto___4592);

return statearr_4590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4592,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4606 = arguments.length;
switch (G__4606) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3054__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto__){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto__){
return (function (state_4669){
var state_val_4670 = (state_4669[(1)]);
if((state_val_4670 === (7))){
var inst_4665 = (state_4669[(2)]);
var state_4669__$1 = state_4669;
var statearr_4671_4709 = state_4669__$1;
(statearr_4671_4709[(2)] = inst_4665);

(statearr_4671_4709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (20))){
var inst_4635 = (state_4669[(7)]);
var inst_4646 = (state_4669[(2)]);
var inst_4647 = cljs.core.next.call(null,inst_4635);
var inst_4621 = inst_4647;
var inst_4622 = null;
var inst_4623 = (0);
var inst_4624 = (0);
var state_4669__$1 = (function (){var statearr_4672 = state_4669;
(statearr_4672[(8)] = inst_4624);

(statearr_4672[(9)] = inst_4622);

(statearr_4672[(10)] = inst_4621);

(statearr_4672[(11)] = inst_4623);

(statearr_4672[(12)] = inst_4646);

return statearr_4672;
})();
var statearr_4673_4710 = state_4669__$1;
(statearr_4673_4710[(2)] = null);

(statearr_4673_4710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (1))){
var state_4669__$1 = state_4669;
var statearr_4674_4711 = state_4669__$1;
(statearr_4674_4711[(2)] = null);

(statearr_4674_4711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (4))){
var inst_4610 = (state_4669[(13)]);
var inst_4610__$1 = (state_4669[(2)]);
var inst_4611 = (inst_4610__$1 == null);
var state_4669__$1 = (function (){var statearr_4675 = state_4669;
(statearr_4675[(13)] = inst_4610__$1);

return statearr_4675;
})();
if(cljs.core.truth_(inst_4611)){
var statearr_4676_4712 = state_4669__$1;
(statearr_4676_4712[(1)] = (5));

} else {
var statearr_4677_4713 = state_4669__$1;
(statearr_4677_4713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (15))){
var state_4669__$1 = state_4669;
var statearr_4681_4714 = state_4669__$1;
(statearr_4681_4714[(2)] = null);

(statearr_4681_4714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (21))){
var state_4669__$1 = state_4669;
var statearr_4682_4715 = state_4669__$1;
(statearr_4682_4715[(2)] = null);

(statearr_4682_4715[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (13))){
var inst_4624 = (state_4669[(8)]);
var inst_4622 = (state_4669[(9)]);
var inst_4621 = (state_4669[(10)]);
var inst_4623 = (state_4669[(11)]);
var inst_4631 = (state_4669[(2)]);
var inst_4632 = (inst_4624 + (1));
var tmp4678 = inst_4622;
var tmp4679 = inst_4621;
var tmp4680 = inst_4623;
var inst_4621__$1 = tmp4679;
var inst_4622__$1 = tmp4678;
var inst_4623__$1 = tmp4680;
var inst_4624__$1 = inst_4632;
var state_4669__$1 = (function (){var statearr_4683 = state_4669;
(statearr_4683[(14)] = inst_4631);

(statearr_4683[(8)] = inst_4624__$1);

(statearr_4683[(9)] = inst_4622__$1);

(statearr_4683[(10)] = inst_4621__$1);

(statearr_4683[(11)] = inst_4623__$1);

return statearr_4683;
})();
var statearr_4684_4716 = state_4669__$1;
(statearr_4684_4716[(2)] = null);

(statearr_4684_4716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (22))){
var state_4669__$1 = state_4669;
var statearr_4685_4717 = state_4669__$1;
(statearr_4685_4717[(2)] = null);

(statearr_4685_4717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (6))){
var inst_4610 = (state_4669[(13)]);
var inst_4619 = f.call(null,inst_4610);
var inst_4620 = cljs.core.seq.call(null,inst_4619);
var inst_4621 = inst_4620;
var inst_4622 = null;
var inst_4623 = (0);
var inst_4624 = (0);
var state_4669__$1 = (function (){var statearr_4686 = state_4669;
(statearr_4686[(8)] = inst_4624);

(statearr_4686[(9)] = inst_4622);

(statearr_4686[(10)] = inst_4621);

(statearr_4686[(11)] = inst_4623);

return statearr_4686;
})();
var statearr_4687_4718 = state_4669__$1;
(statearr_4687_4718[(2)] = null);

(statearr_4687_4718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (17))){
var inst_4635 = (state_4669[(7)]);
var inst_4639 = cljs.core.chunk_first.call(null,inst_4635);
var inst_4640 = cljs.core.chunk_rest.call(null,inst_4635);
var inst_4641 = cljs.core.count.call(null,inst_4639);
var inst_4621 = inst_4640;
var inst_4622 = inst_4639;
var inst_4623 = inst_4641;
var inst_4624 = (0);
var state_4669__$1 = (function (){var statearr_4688 = state_4669;
(statearr_4688[(8)] = inst_4624);

(statearr_4688[(9)] = inst_4622);

(statearr_4688[(10)] = inst_4621);

(statearr_4688[(11)] = inst_4623);

return statearr_4688;
})();
var statearr_4689_4719 = state_4669__$1;
(statearr_4689_4719[(2)] = null);

(statearr_4689_4719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (3))){
var inst_4667 = (state_4669[(2)]);
var state_4669__$1 = state_4669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4669__$1,inst_4667);
} else {
if((state_val_4670 === (12))){
var inst_4655 = (state_4669[(2)]);
var state_4669__$1 = state_4669;
var statearr_4690_4720 = state_4669__$1;
(statearr_4690_4720[(2)] = inst_4655);

(statearr_4690_4720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (2))){
var state_4669__$1 = state_4669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4669__$1,(4),in$);
} else {
if((state_val_4670 === (23))){
var inst_4663 = (state_4669[(2)]);
var state_4669__$1 = state_4669;
var statearr_4691_4721 = state_4669__$1;
(statearr_4691_4721[(2)] = inst_4663);

(statearr_4691_4721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (19))){
var inst_4650 = (state_4669[(2)]);
var state_4669__$1 = state_4669;
var statearr_4692_4722 = state_4669__$1;
(statearr_4692_4722[(2)] = inst_4650);

(statearr_4692_4722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (11))){
var inst_4635 = (state_4669[(7)]);
var inst_4621 = (state_4669[(10)]);
var inst_4635__$1 = cljs.core.seq.call(null,inst_4621);
var state_4669__$1 = (function (){var statearr_4693 = state_4669;
(statearr_4693[(7)] = inst_4635__$1);

return statearr_4693;
})();
if(inst_4635__$1){
var statearr_4694_4723 = state_4669__$1;
(statearr_4694_4723[(1)] = (14));

} else {
var statearr_4695_4724 = state_4669__$1;
(statearr_4695_4724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (9))){
var inst_4657 = (state_4669[(2)]);
var inst_4658 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4669__$1 = (function (){var statearr_4696 = state_4669;
(statearr_4696[(15)] = inst_4657);

return statearr_4696;
})();
if(cljs.core.truth_(inst_4658)){
var statearr_4697_4725 = state_4669__$1;
(statearr_4697_4725[(1)] = (21));

} else {
var statearr_4698_4726 = state_4669__$1;
(statearr_4698_4726[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (5))){
var inst_4613 = cljs.core.async.close_BANG_.call(null,out);
var state_4669__$1 = state_4669;
var statearr_4699_4727 = state_4669__$1;
(statearr_4699_4727[(2)] = inst_4613);

(statearr_4699_4727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (14))){
var inst_4635 = (state_4669[(7)]);
var inst_4637 = cljs.core.chunked_seq_QMARK_.call(null,inst_4635);
var state_4669__$1 = state_4669;
if(inst_4637){
var statearr_4700_4728 = state_4669__$1;
(statearr_4700_4728[(1)] = (17));

} else {
var statearr_4701_4729 = state_4669__$1;
(statearr_4701_4729[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (16))){
var inst_4653 = (state_4669[(2)]);
var state_4669__$1 = state_4669;
var statearr_4702_4730 = state_4669__$1;
(statearr_4702_4730[(2)] = inst_4653);

(statearr_4702_4730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4670 === (10))){
var inst_4624 = (state_4669[(8)]);
var inst_4622 = (state_4669[(9)]);
var inst_4629 = cljs.core._nth.call(null,inst_4622,inst_4624);
var state_4669__$1 = state_4669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4669__$1,(13),out,inst_4629);
} else {
if((state_val_4670 === (18))){
var inst_4635 = (state_4669[(7)]);
var inst_4644 = cljs.core.first.call(null,inst_4635);
var state_4669__$1 = state_4669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4669__$1,(20),out,inst_4644);
} else {
if((state_val_4670 === (8))){
var inst_4624 = (state_4669[(8)]);
var inst_4623 = (state_4669[(11)]);
var inst_4626 = (inst_4624 < inst_4623);
var inst_4627 = inst_4626;
var state_4669__$1 = state_4669;
if(cljs.core.truth_(inst_4627)){
var statearr_4703_4731 = state_4669__$1;
(statearr_4703_4731[(1)] = (10));

} else {
var statearr_4704_4732 = state_4669__$1;
(statearr_4704_4732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto__))
;
return ((function (switch__2959__auto__,c__3054__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2960__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2960__auto____0 = (function (){
var statearr_4705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4705[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2960__auto__);

(statearr_4705[(1)] = (1));

return statearr_4705;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2960__auto____1 = (function (state_4669){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4706){if((e4706 instanceof Object)){
var ex__2963__auto__ = e4706;
var statearr_4707_4733 = state_4669;
(statearr_4707_4733[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4734 = state_4669;
state_4669 = G__4734;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2960__auto__ = function(state_4669){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2960__auto____1.call(this,state_4669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2960__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2960__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto__))
})();
var state__3056__auto__ = (function (){var statearr_4708 = f__3055__auto__.call(null);
(statearr_4708[(6)] = c__3054__auto__);

return statearr_4708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto__))
);

return c__3054__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4736 = arguments.length;
switch (G__4736) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__4739 = arguments.length;
switch (G__4739) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__4742 = arguments.length;
switch (G__4742) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3054__auto___4789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4789,out){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4789,out){
return (function (state_4766){
var state_val_4767 = (state_4766[(1)]);
if((state_val_4767 === (7))){
var inst_4761 = (state_4766[(2)]);
var state_4766__$1 = state_4766;
var statearr_4768_4790 = state_4766__$1;
(statearr_4768_4790[(2)] = inst_4761);

(statearr_4768_4790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (1))){
var inst_4743 = null;
var state_4766__$1 = (function (){var statearr_4769 = state_4766;
(statearr_4769[(7)] = inst_4743);

return statearr_4769;
})();
var statearr_4770_4791 = state_4766__$1;
(statearr_4770_4791[(2)] = null);

(statearr_4770_4791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (4))){
var inst_4746 = (state_4766[(8)]);
var inst_4746__$1 = (state_4766[(2)]);
var inst_4747 = (inst_4746__$1 == null);
var inst_4748 = cljs.core.not.call(null,inst_4747);
var state_4766__$1 = (function (){var statearr_4771 = state_4766;
(statearr_4771[(8)] = inst_4746__$1);

return statearr_4771;
})();
if(inst_4748){
var statearr_4772_4792 = state_4766__$1;
(statearr_4772_4792[(1)] = (5));

} else {
var statearr_4773_4793 = state_4766__$1;
(statearr_4773_4793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (6))){
var state_4766__$1 = state_4766;
var statearr_4774_4794 = state_4766__$1;
(statearr_4774_4794[(2)] = null);

(statearr_4774_4794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (3))){
var inst_4763 = (state_4766[(2)]);
var inst_4764 = cljs.core.async.close_BANG_.call(null,out);
var state_4766__$1 = (function (){var statearr_4775 = state_4766;
(statearr_4775[(9)] = inst_4763);

return statearr_4775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4766__$1,inst_4764);
} else {
if((state_val_4767 === (2))){
var state_4766__$1 = state_4766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4766__$1,(4),ch);
} else {
if((state_val_4767 === (11))){
var inst_4746 = (state_4766[(8)]);
var inst_4755 = (state_4766[(2)]);
var inst_4743 = inst_4746;
var state_4766__$1 = (function (){var statearr_4776 = state_4766;
(statearr_4776[(10)] = inst_4755);

(statearr_4776[(7)] = inst_4743);

return statearr_4776;
})();
var statearr_4777_4795 = state_4766__$1;
(statearr_4777_4795[(2)] = null);

(statearr_4777_4795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (9))){
var inst_4746 = (state_4766[(8)]);
var state_4766__$1 = state_4766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4766__$1,(11),out,inst_4746);
} else {
if((state_val_4767 === (5))){
var inst_4743 = (state_4766[(7)]);
var inst_4746 = (state_4766[(8)]);
var inst_4750 = cljs.core._EQ_.call(null,inst_4746,inst_4743);
var state_4766__$1 = state_4766;
if(inst_4750){
var statearr_4779_4796 = state_4766__$1;
(statearr_4779_4796[(1)] = (8));

} else {
var statearr_4780_4797 = state_4766__$1;
(statearr_4780_4797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (10))){
var inst_4758 = (state_4766[(2)]);
var state_4766__$1 = state_4766;
var statearr_4781_4798 = state_4766__$1;
(statearr_4781_4798[(2)] = inst_4758);

(statearr_4781_4798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4767 === (8))){
var inst_4743 = (state_4766[(7)]);
var tmp4778 = inst_4743;
var inst_4743__$1 = tmp4778;
var state_4766__$1 = (function (){var statearr_4782 = state_4766;
(statearr_4782[(7)] = inst_4743__$1);

return statearr_4782;
})();
var statearr_4783_4799 = state_4766__$1;
(statearr_4783_4799[(2)] = null);

(statearr_4783_4799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4789,out))
;
return ((function (switch__2959__auto__,c__3054__auto___4789,out){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4784[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4784[(1)] = (1));

return statearr_4784;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4766){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4785){if((e4785 instanceof Object)){
var ex__2963__auto__ = e4785;
var statearr_4786_4800 = state_4766;
(statearr_4786_4800[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4801 = state_4766;
state_4766 = G__4801;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4789,out))
})();
var state__3056__auto__ = (function (){var statearr_4787 = f__3055__auto__.call(null);
(statearr_4787[(6)] = c__3054__auto___4789);

return statearr_4787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4789,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4803 = arguments.length;
switch (G__4803) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3054__auto___4869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4869,out){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4869,out){
return (function (state_4841){
var state_val_4842 = (state_4841[(1)]);
if((state_val_4842 === (7))){
var inst_4837 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4843_4870 = state_4841__$1;
(statearr_4843_4870[(2)] = inst_4837);

(statearr_4843_4870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (1))){
var inst_4804 = (new Array(n));
var inst_4805 = inst_4804;
var inst_4806 = (0);
var state_4841__$1 = (function (){var statearr_4844 = state_4841;
(statearr_4844[(7)] = inst_4805);

(statearr_4844[(8)] = inst_4806);

return statearr_4844;
})();
var statearr_4845_4871 = state_4841__$1;
(statearr_4845_4871[(2)] = null);

(statearr_4845_4871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (4))){
var inst_4809 = (state_4841[(9)]);
var inst_4809__$1 = (state_4841[(2)]);
var inst_4810 = (inst_4809__$1 == null);
var inst_4811 = cljs.core.not.call(null,inst_4810);
var state_4841__$1 = (function (){var statearr_4846 = state_4841;
(statearr_4846[(9)] = inst_4809__$1);

return statearr_4846;
})();
if(inst_4811){
var statearr_4847_4872 = state_4841__$1;
(statearr_4847_4872[(1)] = (5));

} else {
var statearr_4848_4873 = state_4841__$1;
(statearr_4848_4873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (15))){
var inst_4831 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4849_4874 = state_4841__$1;
(statearr_4849_4874[(2)] = inst_4831);

(statearr_4849_4874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (13))){
var state_4841__$1 = state_4841;
var statearr_4850_4875 = state_4841__$1;
(statearr_4850_4875[(2)] = null);

(statearr_4850_4875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (6))){
var inst_4806 = (state_4841[(8)]);
var inst_4827 = (inst_4806 > (0));
var state_4841__$1 = state_4841;
if(cljs.core.truth_(inst_4827)){
var statearr_4851_4876 = state_4841__$1;
(statearr_4851_4876[(1)] = (12));

} else {
var statearr_4852_4877 = state_4841__$1;
(statearr_4852_4877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (3))){
var inst_4839 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4841__$1,inst_4839);
} else {
if((state_val_4842 === (12))){
var inst_4805 = (state_4841[(7)]);
var inst_4829 = cljs.core.vec.call(null,inst_4805);
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4841__$1,(15),out,inst_4829);
} else {
if((state_val_4842 === (2))){
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4841__$1,(4),ch);
} else {
if((state_val_4842 === (11))){
var inst_4821 = (state_4841[(2)]);
var inst_4822 = (new Array(n));
var inst_4805 = inst_4822;
var inst_4806 = (0);
var state_4841__$1 = (function (){var statearr_4853 = state_4841;
(statearr_4853[(7)] = inst_4805);

(statearr_4853[(10)] = inst_4821);

(statearr_4853[(8)] = inst_4806);

return statearr_4853;
})();
var statearr_4854_4878 = state_4841__$1;
(statearr_4854_4878[(2)] = null);

(statearr_4854_4878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (9))){
var inst_4805 = (state_4841[(7)]);
var inst_4819 = cljs.core.vec.call(null,inst_4805);
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4841__$1,(11),out,inst_4819);
} else {
if((state_val_4842 === (5))){
var inst_4805 = (state_4841[(7)]);
var inst_4814 = (state_4841[(11)]);
var inst_4806 = (state_4841[(8)]);
var inst_4809 = (state_4841[(9)]);
var inst_4813 = (inst_4805[inst_4806] = inst_4809);
var inst_4814__$1 = (inst_4806 + (1));
var inst_4815 = (inst_4814__$1 < n);
var state_4841__$1 = (function (){var statearr_4855 = state_4841;
(statearr_4855[(11)] = inst_4814__$1);

(statearr_4855[(12)] = inst_4813);

return statearr_4855;
})();
if(cljs.core.truth_(inst_4815)){
var statearr_4856_4879 = state_4841__$1;
(statearr_4856_4879[(1)] = (8));

} else {
var statearr_4857_4880 = state_4841__$1;
(statearr_4857_4880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (14))){
var inst_4834 = (state_4841[(2)]);
var inst_4835 = cljs.core.async.close_BANG_.call(null,out);
var state_4841__$1 = (function (){var statearr_4859 = state_4841;
(statearr_4859[(13)] = inst_4834);

return statearr_4859;
})();
var statearr_4860_4881 = state_4841__$1;
(statearr_4860_4881[(2)] = inst_4835);

(statearr_4860_4881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (10))){
var inst_4825 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4861_4882 = state_4841__$1;
(statearr_4861_4882[(2)] = inst_4825);

(statearr_4861_4882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (8))){
var inst_4805 = (state_4841[(7)]);
var inst_4814 = (state_4841[(11)]);
var tmp4858 = inst_4805;
var inst_4805__$1 = tmp4858;
var inst_4806 = inst_4814;
var state_4841__$1 = (function (){var statearr_4862 = state_4841;
(statearr_4862[(7)] = inst_4805__$1);

(statearr_4862[(8)] = inst_4806);

return statearr_4862;
})();
var statearr_4863_4883 = state_4841__$1;
(statearr_4863_4883[(2)] = null);

(statearr_4863_4883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4869,out))
;
return ((function (switch__2959__auto__,c__3054__auto___4869,out){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4864[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4864[(1)] = (1));

return statearr_4864;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4841){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4865){if((e4865 instanceof Object)){
var ex__2963__auto__ = e4865;
var statearr_4866_4884 = state_4841;
(statearr_4866_4884[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4885 = state_4841;
state_4841 = G__4885;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4869,out))
})();
var state__3056__auto__ = (function (){var statearr_4867 = f__3055__auto__.call(null);
(statearr_4867[(6)] = c__3054__auto___4869);

return statearr_4867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4869,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4887 = arguments.length;
switch (G__4887) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3054__auto___4957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3054__auto___4957,out){
return (function (){
var f__3055__auto__ = (function (){var switch__2959__auto__ = ((function (c__3054__auto___4957,out){
return (function (state_4929){
var state_val_4930 = (state_4929[(1)]);
if((state_val_4930 === (7))){
var inst_4925 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4931_4958 = state_4929__$1;
(statearr_4931_4958[(2)] = inst_4925);

(statearr_4931_4958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (1))){
var inst_4888 = [];
var inst_4889 = inst_4888;
var inst_4890 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_4929__$1 = (function (){var statearr_4932 = state_4929;
(statearr_4932[(7)] = inst_4889);

(statearr_4932[(8)] = inst_4890);

return statearr_4932;
})();
var statearr_4933_4959 = state_4929__$1;
(statearr_4933_4959[(2)] = null);

(statearr_4933_4959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (4))){
var inst_4893 = (state_4929[(9)]);
var inst_4893__$1 = (state_4929[(2)]);
var inst_4894 = (inst_4893__$1 == null);
var inst_4895 = cljs.core.not.call(null,inst_4894);
var state_4929__$1 = (function (){var statearr_4934 = state_4929;
(statearr_4934[(9)] = inst_4893__$1);

return statearr_4934;
})();
if(inst_4895){
var statearr_4935_4960 = state_4929__$1;
(statearr_4935_4960[(1)] = (5));

} else {
var statearr_4936_4961 = state_4929__$1;
(statearr_4936_4961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (15))){
var inst_4919 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4937_4962 = state_4929__$1;
(statearr_4937_4962[(2)] = inst_4919);

(statearr_4937_4962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (13))){
var state_4929__$1 = state_4929;
var statearr_4938_4963 = state_4929__$1;
(statearr_4938_4963[(2)] = null);

(statearr_4938_4963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (6))){
var inst_4889 = (state_4929[(7)]);
var inst_4914 = inst_4889.length;
var inst_4915 = (inst_4914 > (0));
var state_4929__$1 = state_4929;
if(cljs.core.truth_(inst_4915)){
var statearr_4939_4964 = state_4929__$1;
(statearr_4939_4964[(1)] = (12));

} else {
var statearr_4940_4965 = state_4929__$1;
(statearr_4940_4965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (3))){
var inst_4927 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4929__$1,inst_4927);
} else {
if((state_val_4930 === (12))){
var inst_4889 = (state_4929[(7)]);
var inst_4917 = cljs.core.vec.call(null,inst_4889);
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4929__$1,(15),out,inst_4917);
} else {
if((state_val_4930 === (2))){
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4929__$1,(4),ch);
} else {
if((state_val_4930 === (11))){
var inst_4897 = (state_4929[(10)]);
var inst_4893 = (state_4929[(9)]);
var inst_4907 = (state_4929[(2)]);
var inst_4908 = [];
var inst_4909 = inst_4908.push(inst_4893);
var inst_4889 = inst_4908;
var inst_4890 = inst_4897;
var state_4929__$1 = (function (){var statearr_4941 = state_4929;
(statearr_4941[(11)] = inst_4909);

(statearr_4941[(7)] = inst_4889);

(statearr_4941[(12)] = inst_4907);

(statearr_4941[(8)] = inst_4890);

return statearr_4941;
})();
var statearr_4942_4966 = state_4929__$1;
(statearr_4942_4966[(2)] = null);

(statearr_4942_4966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (9))){
var inst_4889 = (state_4929[(7)]);
var inst_4905 = cljs.core.vec.call(null,inst_4889);
var state_4929__$1 = state_4929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4929__$1,(11),out,inst_4905);
} else {
if((state_val_4930 === (5))){
var inst_4897 = (state_4929[(10)]);
var inst_4893 = (state_4929[(9)]);
var inst_4890 = (state_4929[(8)]);
var inst_4897__$1 = f.call(null,inst_4893);
var inst_4898 = cljs.core._EQ_.call(null,inst_4897__$1,inst_4890);
var inst_4899 = cljs.core.keyword_identical_QMARK_.call(null,inst_4890,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4900 = ((inst_4898) || (inst_4899));
var state_4929__$1 = (function (){var statearr_4943 = state_4929;
(statearr_4943[(10)] = inst_4897__$1);

return statearr_4943;
})();
if(cljs.core.truth_(inst_4900)){
var statearr_4944_4967 = state_4929__$1;
(statearr_4944_4967[(1)] = (8));

} else {
var statearr_4945_4968 = state_4929__$1;
(statearr_4945_4968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (14))){
var inst_4922 = (state_4929[(2)]);
var inst_4923 = cljs.core.async.close_BANG_.call(null,out);
var state_4929__$1 = (function (){var statearr_4947 = state_4929;
(statearr_4947[(13)] = inst_4922);

return statearr_4947;
})();
var statearr_4948_4969 = state_4929__$1;
(statearr_4948_4969[(2)] = inst_4923);

(statearr_4948_4969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (10))){
var inst_4912 = (state_4929[(2)]);
var state_4929__$1 = state_4929;
var statearr_4949_4970 = state_4929__$1;
(statearr_4949_4970[(2)] = inst_4912);

(statearr_4949_4970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4930 === (8))){
var inst_4897 = (state_4929[(10)]);
var inst_4893 = (state_4929[(9)]);
var inst_4889 = (state_4929[(7)]);
var inst_4902 = inst_4889.push(inst_4893);
var tmp4946 = inst_4889;
var inst_4889__$1 = tmp4946;
var inst_4890 = inst_4897;
var state_4929__$1 = (function (){var statearr_4950 = state_4929;
(statearr_4950[(14)] = inst_4902);

(statearr_4950[(7)] = inst_4889__$1);

(statearr_4950[(8)] = inst_4890);

return statearr_4950;
})();
var statearr_4951_4971 = state_4929__$1;
(statearr_4951_4971[(2)] = null);

(statearr_4951_4971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3054__auto___4957,out))
;
return ((function (switch__2959__auto__,c__3054__auto___4957,out){
return (function() {
var cljs$core$async$state_machine__2960__auto__ = null;
var cljs$core$async$state_machine__2960__auto____0 = (function (){
var statearr_4952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4952[(0)] = cljs$core$async$state_machine__2960__auto__);

(statearr_4952[(1)] = (1));

return statearr_4952;
});
var cljs$core$async$state_machine__2960__auto____1 = (function (state_4929){
while(true){
var ret_value__2961__auto__ = (function (){try{while(true){
var result__2962__auto__ = switch__2959__auto__.call(null,state_4929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2962__auto__;
}
break;
}
}catch (e4953){if((e4953 instanceof Object)){
var ex__2963__auto__ = e4953;
var statearr_4954_4972 = state_4929;
(statearr_4954_4972[(5)] = ex__2963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4973 = state_4929;
state_4929 = G__4973;
continue;
} else {
return ret_value__2961__auto__;
}
break;
}
});
cljs$core$async$state_machine__2960__auto__ = function(state_4929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2960__auto____1.call(this,state_4929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2960__auto____0;
cljs$core$async$state_machine__2960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2960__auto____1;
return cljs$core$async$state_machine__2960__auto__;
})()
;})(switch__2959__auto__,c__3054__auto___4957,out))
})();
var state__3056__auto__ = (function (){var statearr_4955 = f__3055__auto__.call(null);
(statearr_4955[(6)] = c__3054__auto___4957);

return statearr_4955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3056__auto__);
});})(c__3054__auto___4957,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
