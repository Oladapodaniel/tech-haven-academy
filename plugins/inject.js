const injectProp = {
    name: 'Inject',
    encode (value) {
        return window.btoa(JSON.stringify(value))
    },
    decode (value) {
        return JSON.parse(window.atob(value))
    }
}

export default ({ app }, inject) => {
    inject('injectProp', injectProp)
  }