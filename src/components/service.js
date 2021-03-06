import Cookie from "js-cookie"

class Service {
    BASE_URL = "https://swapi.dev/api"

    getProducts = (page = 1) => {
        return fetch(`${this.BASE_URL}/people/?page=`+page).then((res) => res.json())
    }

    request = async (url = "/", data = {}, method = "GET") => {
        const token = Cookie.get("token")
        const headers = {
            "Content-type": "application/json",
        }
        if (token) {
            headers["Authorization"] = "Token " + token
        }
        const settings = {
            headers,
            method,
        }
        if (["POST", "PUT", "PATCH"].includes(method)) {
            settings.body = JSON.stringify(data)
        }

        const res = await fetch(`${this.BASE_URL}${url}`, settings)

        if (!res.ok) {
            const err = (new Error(res.statusText ? res.statusText : res.status))
            err.res = res
            throw err
        }
        const contentType = res.headers.get("Content-type")
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return await res.json()
        }
        return res
    }

    getUser = async () => {
        return await this.request('/auth/users/me')
    }

    createUser = async (data) => {
        return await this.request('/auth/users/', data, "POST")
    }

    createLogin = async (data) => {
        return await this.request("/auth/token/login/", data, "POST")
    }
    deleteLogin = async (data) => {
        return await this.request("/auth/token/logout/", {}, "POST")
    }
}

export default Service