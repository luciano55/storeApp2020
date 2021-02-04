const NAME = "harnina",
DOMAIN = `https://${NAME}.com`,
API_HARNINAPS = "http://localhost:8085/storerest/?page=0&size=4",
API_HARNINAP1S4 = `http://localhost:8085/storerest/?page=1&size=4`,
API_HARNINA =  `http://localhost:8085/storerest/?`,
PRODUCT = `${API_HARNINA}/?_embed`,
SEARCH = `${API_HARNINA}/search?_embed&search=`;

export default {
  NAME, 
  DOMAIN,
  API_HARNINA,
  PRODUCT,
  SEARCH
}