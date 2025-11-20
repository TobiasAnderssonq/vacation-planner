type CountryList = {
  name: { common: string }
  flags: { png: string; svg: string }
  cca3: string
  population: number
  languages?: {
    [code: string]: string
  }
  gini?: {
    [year: string]: number
  }
}
