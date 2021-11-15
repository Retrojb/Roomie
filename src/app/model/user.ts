// @TODO Format DOB to a date
// add a ref to the house this user belongs to
// add a ref to the rooms and chores of the user

export interface User {
  id: number,
  username: string,
  first_name: string,
  last_name: string,
  full_name?: string,
  birth_date: string
}
