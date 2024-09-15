import packageJson from '../../package.json'
import {IEnvironment} from './env.types'

export const environment: IEnvironment = {
    production: true,
    apiUrl: 'https://reqres.in/api/',
    version: packageJson.version
}
