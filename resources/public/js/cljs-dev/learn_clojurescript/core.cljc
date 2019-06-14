(ns learn-clojurescript.core
  (:require [reagent.core :as r]
            [learn-clojurescript.components.header :refer [header]]
            [learn-clojurescript.components.users :refer [render-users]]))


(def app-state
  (r/atom {:message "Header"
           :users   [{:id "1"
                      :firstName "User 1"}
                     {:id "2"
                      :firstName "User 2"}
                     {:id "3"
                      :firstName "User 3"}
                     {:id "4"
                      :firstName "User 4"}
                     {:id "5"
                      :firstName "User 5"}]
           :selected-item {}}))

; App Component
(defn app []
  [:div {}
   [header (:message @app-state)]
   [:h3
    {:class (when (> 5 3) "slogan")}
    "Slogan"]
   [render-users (:users @app-state) (:selected-item @app-state) app-state]])


;(js/setTimeout
;  (fn []
;    (swap! app-state assoc-in [:message] "Updated message"))
;  3000)

;(defn greet
;  []
;  [(js/alert "This is an alert message!")
;   (js/console.log "Windows Phone")])
;(greet)

(r/render [app] (js/document.querySelector "#root"))


