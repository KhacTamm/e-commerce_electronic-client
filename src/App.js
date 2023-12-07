import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Fragment } from 'react'
import { publicRoutes } from './routers/routers'
import { DefaultLayout } from './layouts'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout

                        if (route.layout) {
                            Layout = route.layout
                        } else if (route.layout === null) {
                            Layout = Fragment
                        }

                        const Page = route.component
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    )
    // return (
    //   <div className="App">

    //     <Router>

    //       <ResetScroll></ResetScroll>

    //       {/* <Route path='*'>
    //         <HomePage></HomePage>
    //       </Route> */}

    //     </Router>
    //   </div>
    // );
}

export default App

// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'

// import ProductPage from './pages/ProductPage'
// import DetailPage from './pages/DetailPage'

// import SearchPage from './pages/SearchPage'
// import ChatPage from './pages/ChatPage'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import CartPage from './pages/CartPage'
// import OrderPage from './pages/OrderPage'
// import OrderSuccessPage from './pages/OrderSuccessPage'
// import MyOrderPage from './pages/MyOrderPage'
// import PaymentPage from './pages/PaymentPage'
// import AdminPage from './pages/AdminPage'
// import ResetScroll from './components/ResetScroll/ResetScroll'

// import Layout from './layouts/Layout'

// function App() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     {/* <ResetScroll /> */}
//                     <Route index element={<HomePage />} />

//                     <Route path="search" element={<SearchPage />} />
//                     <Route path="chat" element={<ChatPage />} />
//                     <Route path="login" element={<LoginPage />} />
//                     <Route path="register" element={<SignupPage />} />

//                     <Route path="product" element={<ProductPage />} />
//                     <Route path="/detail/:id" element={<DetailPage />} />

//                     <Route path="cart" element={<CartPage />} />
//                     <Route path="order" element={<OrderPage />} />
//                     <Route path="MyOrder" element={<MyOrderPage />} />
//                     <Route path="orderSuccess" element={<OrderSuccessPage />} />
//                     <Route path="payment" element={<PaymentPage />} />

//                     <Route path="admin" element={<AdminPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
//     // return (
//     //   <div className="App">

//     //     <Router>

//     //       <ResetScroll></ResetScroll>

//     //       {/* <Route path='*'>
//     //         <HomePage></HomePage>
//     //       </Route> */}

//     //     </Router>
//     //   </div>
//     // );
// }

// export default App
