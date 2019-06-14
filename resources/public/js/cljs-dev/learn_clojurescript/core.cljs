(ns learn-clojurescript.core
  (:require [reagent.core :as reagent]))

(defn app []
      [:h1 {:class "title"} "Hello from huccup!"])

(defn greet
  []
  (js/console.log "Hello Artemy!"))

(greet)

(reagent/render [app] (js/document.querySelector "#root"))
