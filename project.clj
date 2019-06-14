(defproject learn-clojurescript "0.1.0-SNAPSHOT"

  :description "FIXME: write description"

  :url "http://example.com/FIXME"

  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [reagent "0.8.1"]
                 [org.clojure/core.async "0.4.500"]]

  ; We need cljsbuild to compile Clojure to JS
  :cljsbuild {
              :builds [{:id           "dev"
                        :source-paths ["src"]
                        :compiler     {:output-to "resources/public/js/dev.js"
                                       :output-dir "resources/public/js/cljs-dev"
                                       :pretty-print true
                                       :source-map true}}]}

  ; Plugins
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.18"]]

  ;:main ^:skip-aot learn-clojurescript.core

  :target-path "target/%s"

  :profiles {:uberjar {:aot :all}})



