(ns learn-clojurescript.components.header)


; Header component
(defn header
  [message]
  [:div
   [:h1 {:id "header"} message]])
