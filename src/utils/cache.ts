class LocalCache {
  setCache(key: string, value: any, isLocalStorage?: boolean) {
    if (isLocalStorage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, isLocalStorage?: boolean) {
    if (isLocalStorage) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    } else {
      const value = window.sessionStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  // 注意! 这是清空所有缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
