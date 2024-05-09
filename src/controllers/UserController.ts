import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { User } from "../entities/User"
import 'dotenv/config'

export default new class UserController {

    async get(req: Request, res: Response) {
        try {
            const { id } = req.params

            const user = await AppDataSource.manager.findOne(User, {
                where: {
                    id: Number(id)
                }
            })

            if (!user) {
                return res.status(404).json({message: "Usuário não encontrada."})
            }

            res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Ops! Ocorreu algum erro com o servidor!"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            let { name, birthday, state, city, district, street, biography } = req.body
            
            const user = await AppDataSource.manager.findOne(User, {
                where: {
                    id: Number(id)
                },
            })

            if (!user) {
                return res.status(404).json({message: "Usuário não encontrado."})
            }

            if (!name) {
                name = user.name
            }
            if (!birthday) {
                birthday = user.birthday
            }
            if (!state) {
                state = user.state
            }
            if (!city) {
                city = user.city
            }
            if (!district) {
                district = user.district
            }
            if (!street) {
                street = user.street
            }
            if (!biography) {
                biography = user.biography
            }
            
            let invalid = ""

            if (name.length > 60) {
                invalid = "O nome deve possuir menos que 60 caracteres. Abrevie caso necessário."
            }
            else if (state.length > 30) {
                invalid = "O estado deve possuir menos que 30 caracteres. Abrevie caso necessário."
            }
            else if (city.length > 30) {
                invalid = "A cidade deve possuir menos que 30 caracteres. Abrevie caso necessário."
            }
            else if (district.length > 30) {
                invalid = "O bairro deve possuir menos que 30 caracteres. Abrevie caso necessário."
            }
            else if (street.length > 60) {
                invalid = "A rua deve possuir menos que 60 caracteres. Abrevie caso necessário."
            }

            if (invalid) {
                return res.status(422).json({message: invalid})
            }

            const newUser = AppDataSource.manager.create(User, {id: Number(id), name, birthday, state, city, district, street, biography})
            const updatedUser = await AppDataSource.manager.save(User, newUser)

            res.status(200).json({updatedUser, message: "Usuário atualizado com sucesso!"})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Ops! Ocorreu algum erro com o servidor!"})
        }
    }

}