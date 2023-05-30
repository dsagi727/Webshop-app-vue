import { readonly, ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const guitars = ref([])

export function useGuitarsStore() {
  async function fetchGuitars() {
    try {
      const response = await fetch('http://localhost:3000/guitars')
      if (!response.ok) {
        throw new Error('Failed to fetch guitars')
      }
      guitars.value = await response.json()
    } catch (error) {
      toast.error(error.message)
    }
  }

  return {
    guitars: readonly(guitars),
    fetchGuitars,
  }
}
