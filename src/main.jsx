import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { store } from "./store/store.js";
import { Provider } from "react-redux";

const App = React.lazy(() => import("./app/App.jsx"));
const Product = React.lazy(() => import("./pages/Product"));
const Collections = React.lazy(() => import("./pages/Collections"));
const Shop = React.lazy(() => import("./pages/Shop"));
const TodayDeals = React.lazy(() => import("./pages/TodayDeals"));
const HotDeals = React.lazy(() => import("./pages/HotDeals"));
const Brand = React.lazy(() => import("./pages/Brand"));
const Blogpage = React.lazy(() => import("./pages/Blogpage"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Receipt = React.lazy(() => import("./pages/Receipt.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route
            index
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <App />
              </React.Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Product />
              </React.Suspense>
            }
          />

          <Route
            path="/collections"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Collections />
              </React.Suspense>
            }
          />
          <Route
            path="/collections/:id"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Product />
              </React.Suspense>
            }
          />

          <Route
            path="/shop"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Shop />
              </React.Suspense>
            }
          />
          <Route
            path="/shop/:id"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Product />
              </React.Suspense>
            }
          />

          <Route
            path="/today-deals"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <TodayDeals />
              </React.Suspense>
            }
          />
          <Route
            path="/today-deals/:id"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Product />
              </React.Suspense>
            }
          />

          <Route
            path="/hot-deals"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <HotDeals />
              </React.Suspense>
            }
          />
          <Route
            path="/hot-deals/:id"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Product />
              </React.Suspense>
            }
          />

          <Route
            path="/brand"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Brand />
              </React.Suspense>
            }
          />
          <Route
            path="/blog-page"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Blogpage />
              </React.Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Cart />
              </React.Suspense>
            }
          />

          <Route
            path="/receipt"
            element={
              <React.Suspense
                fallback={
                  <div className="w-full h-[100vh] flex flex-col justify-center items-center ">
                    <div className="lazy">
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                      <div className="inner-lazy"></div>
                    </div>
                  </div>
                }
              >
                <Receipt />
              </React.Suspense>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
