//Cau hinh
const routes = {
    //----------------------------admin------------------------//

    customer: '/admin/customer',
    create: '/admin/product/create',
    // createType: '/admin/product/createType',
    updateInfo: '/admin/product/update/info',
    updateId: '/admin/product/update/:id',
    reviewProduct: '/admin/product/reviewProduct/:id',
    product: '/admin/product',
    createType: '/admin/typeList/create',
    category: '/admin/typeList',
    createBrand: '/admin/brand/create',
    brand: '/admin/brand',

    order: '/admin/order',
    // orderAll: '/admin/order/all',
    orderPedding: '/admin/order/pendding',
    orderShipping: '/admin/order/shipping',
    orderPaid: '/admin/order/paid',
    orderCancel: '/admin/order/cancel',

    chat: '/admin/chat',
    admin: '/admin/',

    //----------------------------customer------------------------//
    search: '/search',
    searchType: '/search/type',
    searchBrand: '/search/brand',
    chatCustomer: '/chat',
    login: '/login',
    register: '/register',
    account: '/account/:id',
    productCustomer: '/product',
    // reviewProduct: '/product/reviewProduct/:id',
    productDetailCustomer: '/detail/:id',
    cart: '/cart',
    orderCustomer: '/order',
    MyOrder: '/myOrder',
    MyOrderPendding: '/myOrder/pendding',
    MyOrderShipping: '/myOrder/shipping',
    MyOrderPaid: '/myOrder/paid',
    orderSuccess: '/orderSuccess',
    payment: '/payment',
    home: '/',
}

export default routes
