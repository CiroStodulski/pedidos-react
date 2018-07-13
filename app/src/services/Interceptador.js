import axios from 'axios';

axios.interceptors.request.use(function (config) {
    if (localStorage.getItem("token")) {
        config.headers['x-access-token'] = localStorage.getItem("token");
    }
    return config;
}, function (error) {
    // Do something with request error
    
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    let token = response.config.headers['x-access-token'];
    if (token != null) {
        localStorage.setItem("token", token);
    }
    return response;
}, function (error) {
    // Do something with response error
    if (error != null) {
        localStorage.clear();
        window.location.replace("/login");
    }
    return Promise.reject(error);
});

export default axios;