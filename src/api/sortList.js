import {jsonp} from '@utils/http'

//分类
export const sort_list=()=>jsonp('https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1569584661375&callback=jsonp1')

//推荐
export const list_goods=()=>jsonp('https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback')
//销量
export const list_goods_sales=()=>jsonp('https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22sales%22%3A%22desc%22%2C%22start_time%22%3A%22desc%22%2C%22show_stime%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback')
//上新
export const list_goods_new=()=>jsonp('https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22start_time%22%3A%22desc%22%2C%22show_stime%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback')
//价格
export const list_goods_pri=()=>jsonp('https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22cprice%22%3A%22asc%22%2C%22start_time%22%3A%22desc%22%2C%22show_stime%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback')

