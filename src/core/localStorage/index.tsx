import { ILocalStorage, IRegister } from "@/core/types"

export class LocalStorage implements ILocalStorage {
  get(key: string): IRegister | null {
    const getItem = localStorage.getItem(key),
          response: IRegister | null = getItem ? JSON.parse(getItem) : null

    return response
  }

  set(key: string, data: string): void {
    localStorage.setItem(key, data)
  }
}
