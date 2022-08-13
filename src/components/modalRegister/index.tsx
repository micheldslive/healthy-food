import { Form, IconSpin } from "./styled"
import { toast } from "react-toastify"
import Modal from "react-modal"
import closeImg from "assets/close.svg"
import { useForm } from "react-hook-form"
import InputMask from "react-input-mask"
import { useHealthyFood } from "@/context"
import { IRegister } from "@/core/types"
import { HealthyFoodAPI } from "@/core/api/Api"
import { useState } from "react"

Modal.setAppElement("#root")

export function ModalRegister() {
  const [loading, setLoading] = useState<boolean>(false)
  const { option, setOption } = useHealthyFood()
  const { register, handleSubmit, setValue, reset } = useForm()

  const onSubmit = async (data: IRegister) => {
    try {
      setLoading(true)
      await localStorage.setItem(`healthyFood_${data.cpf}`,JSON.stringify(data))
      document.cookie = `healthyFood_${data.cpf}=${JSON.stringify(data)}`
      setOption({ ...option, data: data })

      const timer = setTimeout(() => {
        toast.success(`User ${data.name} registered successfully`)
        setOption({ ...option, modal: false })
        setLoading(false)
        reset()
      }, 2000)
      return () => clearTimeout(timer)
    } catch (error) {
      console.error(error)
    }
  }

  const getAddress = async (cep: string) => {
    const { AddressingCep } = HealthyFoodAPI()
    try {
      const response = await AddressingCep(cep)
      if (response?.erro) {
        toast.error("Invalid CEP, enter a valid CEP")
        return
      }

      const { logradouro, complemento, bairro, localidade } = response
      setValue("logradouro", logradouro)
      setValue("complemento", complemento)
      setValue("bairro", bairro)
      setValue("localidade", localidade)
      setValue("uf", response.uf)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal
      isOpen={option.modal}
      onRequestClose={() => setOption({ ...option, modal: false })}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => setOption({ ...option, modal: false })}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
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
        <div className="otherDatas">
          <div>
            <label>Birthday</label>
            <input
              type="date"
              required={true}
              {...register("birthday")}
            />
          </div>
          <div>
            <label>CPF</label>
            <InputMask
              mask={"999.999.999-99"}
              placeholder="000.000.000-00"
              {...register("cpf", { required: true })}
            />
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
            />
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
        <input
          type="text"
          placeholder="Type your address"
          required={true}
          {...register("logradouro")}
        />
        <div className="otherDatas">
          <input
            type="text"
            placeholder="Complement"
            {...register("complemento")}
          />
          <input
            type="text"
            placeholder="Type your district"
            required={true}
            {...register("bairro")}
          />
          <input
            type="text"
            placeholder="Type your city"
            required={true}
            {...register("localidade")}
          />
          <input
            type="text"
            placeholder="UF"
            pattern="[A-Za-z]{2}"
            required={true}
            {...register("uf")}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading? <IconSpin /> : ""}
          Register
        </button>
      </Form>
    </Modal>
  )
}
