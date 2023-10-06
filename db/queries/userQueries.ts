import { userModel as model } from '../models/UserModel'

export const getUserById = async (id: string) => {
    try {
        const user = await model.findOne({ id })
        return user
    } catch (er: any) {
        return {}
    }
}
