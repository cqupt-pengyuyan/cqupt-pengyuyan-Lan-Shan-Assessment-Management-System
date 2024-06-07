import service from '../sevice.js'
import qs from'qs'
//项目中我们大多时候会把对应的接口封装为api调用

//登录接口

export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

// export function students(data){
//     return service({
//         method : 'get',
//         url : '/students',
//         params
//     })
// }

export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`
    })
}

export function info(data) {
    data = qs.stringify(data)
    return service({
        method: 'post',
        url: '/info',
        data
    })
}
export function getInfo() {
    
    return service({
        method: 'get',
        url: '/info',
        
    })
}