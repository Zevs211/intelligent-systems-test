import axios from "axios"

const url = 'https://swapi.dev/api/films/1/'

export const starShipsList = async () => {
  const { data } = await axios.get(url)
  const starshipUrls = data.starships
  const promises = starshipUrls.map(url => axios.get(url))
  // listResult.forEach(element => {
  //   promises.push(axios.get(element))
  // });
  const result = await Promise.allSettled(promises)
  const starshipName = result.map((res, index) => {
    return {
      id: `${index}`,
      name: res.value.data.name,
      url: res.value.data.url,
      model: res.value.data.model,
    }
  })
  localStorage.setItem('starshipName', JSON.stringify(starshipName))
  return starshipName
}

export const deepClone = (target) => JSON.parse(JSON.stringify(target))
