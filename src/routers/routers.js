import config from '../config'
import { HeaderOnly } from '../layouts'
import { AdminLayout } from '../layouts'
//----------------------------customer------------------------//

import HomePage from '../pages/HomePage'

import ProductPage from '../pages/ProductPage'
import DetailPage from '../pages/DetailPage'

import AccountCard from '../components/Account/AccountCard'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

import SearchPage from '../pages/SearchPage'
import ProductFilter from '../components/Search/ProductFilter'
import BrandFilter from '../components/Search/BrandFilter'
import ChatPage from '../pages/ChatPage'
import CartPage from '../pages/CartPage'
import OrderPage from '../pages/OrderPage'
import OrderSuccessPage from '../pages/OrderSuccessPage'

// import MyOrderPage from '../pages/MyOrderPage'
import AllOrder from '../components/MyOrder/components/AllOrder/AllOrder'
import PenddingOrder from '../components/MyOrder/components/PenddingOrder/PenddingOrder'
import ShippingOrder from '../components/MyOrder/components/ShippingOrder/ShippingOrder'
import PaidOrder from '../components/MyOrder/components/PaidOrder/PaidOrder'

import PaymentPage from '../pages/PaymentPage'
// import AdminPage from '../pages/AdminPage'
// import ResetScroll from '../components/ResetScroll/ResetScroll'
//----------------------------customer------------------------//

//----------------------------admin------------------------//
// import Dashboard from '../pages/Dashboard'
import Dashboard from '../components/Admin/pages/Dashboard'
import AdminProduct from '../components/Admin/components/AdminProduct/AdminProduct'
import AdminCreate from '../components/Admin/components/AdminProduct/AdminCreate'
import AdminUpdate from '../components/Admin/components/AdminProduct/AdminUpdate'

// import AdminOrder from '../components/Admin/components/AdminOrder/AdminOrder'
import AdminOrderAll from '../components/Admin/components/AdminOrder/AdminOrderAll/AdminOrderAll'
import AdminPenddingOrder from '../components/Admin/components/AdminOrder/AdminPenddingOrder/AdminPenddingOrder'
import AdminShippingOrder from '../components/Admin/components/AdminOrder/AdminShippingOrder/AdminShippingOrder'
import AdminPaidOrder from '../components/Admin/components/AdminOrder/AdminPaidOrder/AdminPaidOrder'
import AdminCancelOrder from '../components/Admin/components/AdminOrder/AdminCancelOrder/AdminCancelOrder'

import AdminUser from '../components/Admin/components/AdminUser/AdminUser'

import AppChat from '../components/Admin/components/AppChat/AppChat'
import ReviewProduct from '../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct'
import DataFilterProduct from '../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct'

import AllTypeProduct from '../components/Admin/components/AdminProduct/AdminTypeProduct/AllTypeProduct'
import CreateNewType from '../components/Admin/components/AdminProduct/AdminTypeProduct/CreateNewType'

import AllBrandProduct from '../components/Admin/components/AdminProduct/AdminBrandProduct/AllBrandProduct'
import CreateNewBrand from '../components/Admin/components/AdminProduct/AdminBrandProduct/CreateBrandType'
//-----------------------------------------------admin--------------------------------------------------//
//-----------------------------------------------oder--------------------------------------------------//
// import AdminOrderMenu from './AdminOrderMenu/AdminOrderMenu'
// import AdminOrderAll from './AdminOrderAll/AdminOrderAll'
// import AdminOrder from '../components/Admin/components/AdminOrder/AdminOrder'

//-----------------------------------------------oder--------------------------------------------------//

//Không cần đăng nhập vẫn vào được
const publicRoutes = [
    //-----------------------------------oder-----------------------------------------//
    { path: config.routes.order, component: AdminOrderAll, layout: AdminLayout },
    { path: config.routes.orderPedding, component: AdminPenddingOrder, layout: AdminLayout },
    { path: config.routes.orderShipping, component: AdminShippingOrder, layout: AdminLayout },
    { path: config.routes.orderPaid, component: AdminPaidOrder, layout: AdminLayout },
    { path: config.routes.orderCancel, component: AdminCancelOrder, layout: AdminLayout },
    //-----------------------------------admin-----------------------------------------//
    // { path: config.routes.admin, component: AdminPage },
    { path: config.routes.admin, component: Dashboard, layout: AdminLayout },

    { path: config.routes.customer, component: AdminUser, layout: AdminLayout },
    { path: config.routes.chat, component: AppChat, layout: AdminLayout },

    { path: config.routes.reviewProduct, component: ReviewProduct },
    { path: config.routes.create, component: AdminCreate, layout: AdminLayout },
    { path: config.routes.product, component: AdminProduct, layout: AdminLayout },
    { path: config.routes.updateId, component: AdminUpdate, layout: AdminLayout },

    { path: config.routes.updateInfo, component: DataFilterProduct, layout: AdminLayout },

    { path: config.routes.category, component: AllTypeProduct, layout: AdminLayout },
    { path: config.routes.createType, component: CreateNewType, layout: AdminLayout },
    { path: config.routes.brand, component: AllBrandProduct, layout: AdminLayout },
    { path: config.routes.createBrand, component: CreateNewBrand, layout: AdminLayout },

    // { path: config.routes.brand, component: AllTypeProduct, layout: AdminLayout },
    //-----------------------------------admin---------------------------------------------//
    //-----------------------------------customers-----------------------------------------//
    { path: config.routes.home, component: HomePage },
    { path: config.routes.search, component: SearchPage },
    { path: config.routes.searchType, component: ProductFilter },
    { path: config.routes.searchBrand, component: BrandFilter },
    { path: config.routes.chatCustomer, component: ChatPage },

    { path: config.routes.cart, component: CartPage },
    { path: config.routes.orderCustomer, component: OrderPage },
    { path: config.routes.productCustomer, component: ProductPage },

    // { path: config.routes.MyOrder, component: MyOrderPage },
    { path: config.routes.MyOrder, component: AllOrder },
    { path: config.routes.MyOrderPendding, component: PenddingOrder },
    { path: config.routes.MyOrderShipping, component: ShippingOrder },
    { path: config.routes.MyOrderPaid, component: PaidOrder },

    { path: config.routes.payment, component: PaymentPage },

    { path: config.routes.productDetailCustomer, component: DetailPage },
    { path: config.routes.orderSuccess, component: OrderSuccessPage },

    { path: config.routes.account, component: AccountCard },

    { path: config.routes.login, component: LoginPage, layout: HeaderOnly },
    { path: config.routes.register, component: SignupPage, layout: HeaderOnly },
    //-----------------------------------customers-----------------------------------------//
]

const privateRoutes = {}

export { publicRoutes, privateRoutes }
