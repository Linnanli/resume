var isDev = process.env.NODE_ENV === 'development';

export const api = {
    init:isDev?'/static/mock/init.json':'./static/mock/init.json'
}