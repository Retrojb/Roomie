// @TODO Add Room and Chore Types as optional
// Add better formatted Address
export interface House {
  id: number,
  name: string,
  address: Address,
  house_type: string
}

// street is the house number and street name
// street_2 is if apartment / condo with a unit id
interface Address {
  street: string,
  street_2?: string,
  city: string,
  state: string,
  zip_code: number
}
