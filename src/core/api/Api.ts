import axios from 'axios'
import { ErrorHandler } from '@/core/handler/errorHanlder'
import { IRegister } from '@/core/types'

export const HealthyFoodAPI = () => {
  const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
  });

  const AddressingCep = async (cep: string): Promise<IRegister> => {
    const { errorHandler } = new ErrorHandler()
    const [error, response] = await errorHandler(
      api.get(`${cep}/json`)
    )
    if (error) throw new Error(error.message)
    if (response.erro) return response.erro
    return response.data
  }

  return {
    AddressingCep
  }
}
