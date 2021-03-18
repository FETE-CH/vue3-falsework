const Home = () => import('./views/Home.vue');
const Market = () => import('./views/Market.vue');
const User = () => import('./views/User.vue');
const Design = () => import('./views/Design.vue');
const Furniture = () => import('./views/Furniture.vue');
const More = () => import('./views/More.vue');
const ProductDetail = () => import('./views/ProductDetail.vue');

export default [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Market',
        path: '/market',
        component: Market,
    },
    {
        name: 'User',
        path: '/user',
        component: User,
    },
    {
        name: 'Design',
        path: '/design',
        component: Design,
    },
    {
        name: 'Furniture',
        path: '/furniture',
        component: Furniture,
    },
    {
        name: 'More',
        path: '/more',
        component: More,
    }, 
    {
        name: 'ProductDetail',
        path: '/product/:id',
        component: ProductDetail,
    },
];
