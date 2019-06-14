(ns learn-clojurescript.components.users)
  ;(:require-macros [cljs.core.async.macros :refer [go]])
  ;(:require [cljs.core.async :as a
  ;           :refer [chan put! <!]]))

;(def MYCHANNEL (chan))
;
;(go
;  (while true
;    (let [message (<! MYCHANNEL)]
;      (js/console.log message))))

(defn render-users
  [users-to-render active-item app-state]
  [:div {:class "users"}
   (for [user users-to-render]
     [:div {:class (if (= active-item user) "selected-user" "user")
            :key   (:id user)}
      [:p {:on-click (fn [e]
                       (swap! app-state assoc-in [:selected-item] user))}
                       ;(put! MYCHANNEL "Message from channel"))}
       (:firstName user)]])])

