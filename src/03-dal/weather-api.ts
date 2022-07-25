import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/',
  headers: {
    'X-RapidAPI-Key': '9a03bdf091msh9d518ade9ae660fp18c011jsn33df2c7dcd93',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
});

export const geoApi = {
  options(inputValue: string, options: any) {
    return instance.get<ResponseType>(`cities?minPopulation=300000&namePrefix=${inputValue}`, options)
  }
}

//types
export type ResponseType = {
  data: ObjectType[]
  metaData: MetadataType
}

export type ObjectType = {
  city: string
  country: string
  countryCode: string
  id: number
  latitude: number
  longitude: number
  name: string
  population: number
  region: string
  regionCode: string
  type: string
  wikiDataId: string
}

export type MetadataType = {
  currentOffset: number
  totalCount: number
}
