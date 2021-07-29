import Home from './components/Home.vue';
import NewestArrival from './components/NewestArrival.vue';
import AddProduct from './components/AddProduct';
import DailyBid from './components/DailyBid';

export const routes = [
    {path:"/",component: Home},
    {path:"/home",component: Home},
    {path:"/dailyBid",component: DailyBid},
    {path:"/newestArrival",component: NewestArrival},
    {path:"/addProduct",component: AddProduct},
];