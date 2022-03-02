export default function authHeader() {
    let token = localStorage.getItem('accessToken');

    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}
