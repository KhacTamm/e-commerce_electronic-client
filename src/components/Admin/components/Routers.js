import config from '../../../config'

import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import AdminProduct from './AdminProduct/AdminProduct'
import AdminCreate from './AdminProduct/AdminCreate'
import AdminUpdate from './AdminProduct/AdminUpdate'
import AdminOrder from './AdminOrder/AdminOrder'
import AdminUser from './AdminUser/AdminUser'
import AppChat from './AppChat/AppChat'
import ReviewProduct from './AdminProduct/ReviewProduct/ReviewProduct'
import DataFilterProduct from './AdminProduct/DataFilterProduct/DataFilterProduct'

// function Routers(props) {
//     return (
//         <Routes>
//             <Route path="/admin/" exact component={Dashboard} />
//             <Route path="/admin/customer" component={AdminUser} />

//             <Route path="/admin/product/create" component={AdminCreate} />
//             <Route path="/admin/product/update/info" component={DataFilterProduct} />
//             <Route path="/admin/product/update/:id" component={AdminUpdate} />
//             <Route path="/admin/product/reviewProduct/:id" component={ReviewProduct} />
//             <Route path="/admin/product" component={AdminProduct} />

//             <Route path="/admin/order" component={AdminOrder} />
//             <Route path="/admin/chat" component={AppChat} />
//         </Routes>
//     )
// }

const adminRoutes = [
    { path: config.routes.admin, component: Dashboard },
    { path: config.routes.customer, component: AdminUser },
    { path: config.routes.create, component: AdminCreate },
    { path: config.routes.updateInfo, component: DataFilterProduct },
    { path: config.routes.updateId, component: AdminUpdate },
    { path: config.routes.product, component: AdminProduct },
    { path: config.routes.order, component: AdminOrder },
    { path: config.routes.chat, component: AppChat },
]

export default adminRoutes
