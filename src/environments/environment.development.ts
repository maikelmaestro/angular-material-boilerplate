import {IEnvironment} from './env.types'

import packageJson from '../../package.json';

export const environment: IEnvironment = {
    production: false,
    apiUrl: 'http://localhost:4200',
    version: packageJson.version
}
