import Loading from '@common/loading'
import Loadable from 'react-loadable'

export const Home=Loadable({
    loader:()=>import('./home'),
    loading:Loading
})
export const HomeONE=Loadable({
    loader:()=>import('./home/homeONE'),
    loading:Loading
})
export const HomeTWO=Loadable({
    loader:()=>import('./home/homeTWO'),
    loading:Loading
})
export const Eat=Loadable({
    loader:()=>import('./eat'),
    loading:Loading
})
export const Mine=Loadable({
    loader:()=>import('./mine'),
    loading:Loading
})
export const Shopper=Loadable({
    loader:()=>import('./shopper'),
    loading:Loading
})
export const Sort=Loadable({
    loader:()=>import('./sort'),
    loading:Loading
})
export const Login=Loadable({
    loader:()=>import('./login'),
    loading:Loading
})
export const City=Loadable({
    loader:()=>import('./city'),
    loading:Loading
})
export const Search=Loadable({
    loader:()=>import('./search'),
    loading:Loading
})
export const List=Loadable({
    loader:()=>import('./list'),
    loading:Loading
})