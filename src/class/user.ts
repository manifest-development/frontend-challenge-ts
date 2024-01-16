import convertNumber from '../utils/convertNumber'

export class User {
  name: string = ''
  income: number = 0
  education: string = ''

  constructor (params?: Partial<User>) {
    this.name = params ? params.name ? params.name : '' : ''
    this.income = params ? params.income ? convertNumber(params.income) : 0 : 0
    this.education = params ? params.education ? params.education : '' : ''
  }
}
