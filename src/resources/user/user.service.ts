import { getRepository } from "typeorm";
import md5 from 'crypto-js/md5'
import { sign } from 'jsonwebtoken'

import { User } from "../../entity/User";
import AppError from "../../shared/error/AppError";
import authConfig from "../../config/auth";

import { UserSignIn } from "./dtos/user.signin.dtos";
import { UserSignUp } from "./dtos/user.signup.dtos";

export default class UserService{

    async signin(user: UserSignIn){
        const userRepository = getRepository(User)

        const { email, password } = user
        const passwordHash = md5(password).toString()

        const existUser = await userRepository.findOne({where: {email, password: passwordHash}})
        if(!existUser){
            throw new AppError('Usuario não encontrado', 401)
        }

        const {secret, expiresIn} = authConfig.jwt

        const token = sign({
            firstName: existUser.firstName,
            lastName: existUser.lastName,
            accountNumber: existUser.accountNumber,
            accountDigit: existUser.accountDigit,
            wallet: existUser.wallet
        }, secret, {
            subject: existUser.id,
            expiresIn,
        })
        // @ts-expect-error ignora
        delete existUser.password

        return {acessToken: token}
    }

    async signup(user: UserSignUp){
        
    }
}