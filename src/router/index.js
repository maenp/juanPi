import {Goods,List,Search,Home,Eat,Mine,Shopper,Sort,Login,HomeONE,HomeTWO,City} from '@pages'

export const tabBarRoute=[
    {
        path:"/home",
        name:"首页",
        activeIcon:"s2.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png",
        icon:"goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png",
        component:Home,
        exact:1,
        // children:[
        //     {
        //         path:"/home/one",
        //         name:"首页ONE",
        //         icon:"",
        //         component:HomeONE,
        //         exact:1,
                meta:{
                    tabBar:1
                },
        //     },
        //     {
        //         path:"/home/two",
        //         name:"首页TWO",
        //         icon:"",
        //         component:HomeTWO,
        //         exact:1,
        //         meta:{
        //             tabBar:1
        //         },
        //     },
        // ]
    },
    {
        path:"/sort/:id/:titie",
        name:"分类",
        icon:"s2.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png",
        activeIcon:"goods7.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png",
        component:Sort,
        exact:1,
        meta:{
            tabBar:1
        },
    },
    {
        path:"/shopper",
        name:"购物车",
        icon:"goods2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png",
        activeIcon:"img07.yiguoimg.com/e/web/170110/00583/164146/nav_list_active.png",
        component:Shopper,
        exact:1,
        meta:{

        },
    },
    {
        path:"/mine",
        name:"我的卷皮",
        icon:"goods5.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png",
        activeIcon:"goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png",
        component:Mine,
        exact:1,
        meta:{
            tabBar:1
        },
    },
]
export const NotabBarRoute=[

    {
        path:"/login",
        name:"登录",
        icon:"",
        component:Login,
        exact:1,
    },
    {
        path:"/city",
        name:"选择城市",
        icon:"",
        component:City,
        exact:1,
    },
    {
        path:"/search",
        name:"搜索",
        icon:"",
        component:Search,
        exact:1,
    },
    {
        path:"/list",
        name:"商品列表",
        icon:"",
        component:List,
        exact:1,
    },
    {
        path:"/goods/:id",
        name:"商品详情页面",
        icon:"",
        component:Goods,
        exact:1,
    },
]
export const Routes=tabBarRoute.concat(NotabBarRoute)