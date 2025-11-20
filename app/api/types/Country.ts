export type Country = {
  name: {
    common: string
    official: string
    nativeName?: {
      [lang: string]: {
        official: string
        common: string
      }
    }
  }
  tld?: string[]
  cca2: string
  ccn3?: string
  cca3: string
  cioc?: string
  independent?: boolean
  status: string
  unMember: boolean
  currencies?: {
    [code: string]: {
      name: string
      symbol: string
    }
  }
  idd?: {
    root?: string
    suffixes?: string[]
  }
  capital?: string[]
  altSpellings?: string[]
  region: string
  subregion?: string
  languages?: {
    [code: string]: string
  }
  latlng: [number, number]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms?: {
    [lang: string]: {
      m: string
      f: string
    }
  }
  translations?: {
    [lang: string]: {
      official: string
      common: string
    }
  }
  flag?: string
  maps?: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  gini?: {
    [year: string]: number
  }
  fifa?: string
  car?: {
    signs?: string[]
    side: string
  }
  timezones: string[]
  continents: string[]
  flags: {
    png: string
    svg: string
    alt?: string
  }
  coatOfArms?: {
    png?: string
    svg?: string
  }
  startOfWeek?: string
  capitalInfo?: {
    latlng?: [number, number]
  }
  postalCode?: {
    format: string | null
    regex: string | null
  }
}
