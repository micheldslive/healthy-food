import { Form, IconSpin } from "./styled"
import { toast } from "react-toastify"
import { SubmitHandler, useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { useHealthyFood } from "@/context"
import { IRegister } from "@/core/types"
import { HealthyFoodAPI } from "@/core/api"
import Cookies from "universal-cookie"
import { LocalStorage } from "@/core/localStorage"

export const FormRegister = () => {
  const { option, setOption } = useHealthyFood()
  const { register, handleSubmit, setValue, reset } = useForm<IRegister>()

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      const key = `healthyFood_${data.cpf}`
      const cookies = new Cookies()
      const local = new LocalStorage()

      setOption({ ...option, loading: true })

      await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        local.set(key, JSON.stringify(data))
        cookies.set(key, JSON.stringify(data))
        
        setOption({ ...option, data, modal: false, loading: false })
        reset()
      })
      
      const getLocal = local.get(key)
      toast.success(`Welcome ${getLocal?.name}, you have successfully registered`)
    } catch (error) {
      console.error(error)
    }
  }

  const getAddress = async (cep: string) => {
    const { AddressingCep } = HealthyFoodAPI()
    try {
      setValue("cep", cep)
      const response = await AddressingCep(cep)
      if (!response) return

      const { logradouro, complemento, bairro, localidade, uf } = response
      setValue("logradouro", logradouro)
      setValue("complemento", complemento)
      setValue("bairro", bairro)
      setValue("localidade", localidade)
      setValue("uf", uf)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <div className="primaryData">
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Type your name"
            pattern="[a-zA-Z ]+$"
            required={true}
            {...register("name")}
          />
        </div>
      </div>
      <div className="formColumns">
        <div>
          <label>CPF</label>
          <InputMask
            mask={"999.999.999-99"}
            placeholder="000.000.000-00"
            {...register("cpf", { required: true })}
          />
        </div>
        <div>
          <label>Birthday</label>
          <input type="date" required={true} {...register("birthday")} />
        </div>
        <div>
          <label>CEP</label>
          <InputMask
            mask="99999-999"
            placeholder="00000-000"
            required={true}
            {...register("cep", {
              onBlur: (event) => getAddress(event.target.value),
            })}
          >
            {<input type="text" />}
          </InputMask>
        </div>
        <div>
          <label>Number</label>
          <input
            type="number"
            placeholder="00"
            pattern="[0-9]+$"
            required={true}
            {...register("number")}
          />
        </div>
      </div>
      <div className="addressColumn">
        <label>Address</label>
        <input
          type="text"
          placeholder="Type your address"
          required={true}
          {...register("logradouro")}
        />
      </div>
      <div className="formColumns">
        <div>
          <label>Complement</label>
          <input
            type="text"
            placeholder="Type your Complement"
            {...register("complemento")}
          />
        </div>
        <div>
          <label>District</label>
          <input
            type="text"
            placeholder="Type your district"
            required={true}
            {...register("bairro")}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            placeholder="Type your city"
            required={true}
            {...register("localidade")}
          />
        </div>
        <div>
          <label>UF</label>
          <input
            type="text"
            placeholder="UF"
            pattern="[A-Za-z]{2}"
            required={true}
            {...register("uf")}
          />
        </div>
      </div>

      <button type="submit" disabled={option.loading}>
        {option.loading && <IconSpin />}
        Register
      </button>
    </Form>
  )
}
