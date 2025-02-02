import sequalize from "../config/db";
import { IUser } from "../controllers/userController";
import User from "../models/userModel";

export const createUserService = async (userData: Required<IUser>) => {
    await sequalize.sync();
    return await User.create(userData);
};

export const getUsers = () => {
    return User.findAll();
}

export const getUserById = (userId: string) => {
    return User.findByPk(userId);
}

export const deleteById = async(userId: string) => {
    return await User.destroy({where: {id: userId}});
}

export const updateById = async(userId: string, userData: IUser) => {
    if(await User.findByPk(userId) === null) return false;
    return await User.update(userData, { where: { id: userId } });
};
