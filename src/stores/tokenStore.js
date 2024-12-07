import { defineStore } from 'pinia'

export const useTokenStore = defineStore('tokenStore', {
  state: () => ({
    firstToken: null,
    firstMillionAcc: null,
    error: null,
  }),
  getters: {
    getToken(state) {
      if (!state.token) {
        console.warn('Token is not available')
        return null
      }
      return state.token
    },
  },
  actions: {
    async getFirstToken() {
      try {
        const response = await fetch('https://109.172.90.87/first-token')

        if (!response.ok) {
          throw new Error('Failed to fetch token')
        }

        const data = await response.json()

        if (data) {
          this.firstToken = data
        } else {
          throw new Error('Token not found in response')
        }
      } catch (err) {
        this.error = err.message || 'Unknown error'
        console.error('Error fetching token:', this.error)
        throw err
      }
    },
    async getFirstmMillionAcc() {
      try {
        const response = await fetch('http://109.172.90.87/first-million-account')

        if (!response.ok) {
          throw new Error('Failed to fetch token')
        }

        const data = await response.json()

        if (data) {
          this.token = data.account
        } else {
          throw new Error('Token not found in response')
        }
      } catch (err) {
        this.error = err.message || 'Unknown error'
        console.error('Error fetching token:', this.error)
        throw err
      }
    },
  },
})
