// const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
//   return axios.get(url);
// };
// const printPlanets = ({ data }) => {
//   console.log(data);
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// fetchNextPlanets()
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(printPlanets)
//   .catch(err => {
//     console.log("error", err);
//   });

// async function getPlanets() {
//   const res = await axios.get("https://swapi.com/api/planetss");
//   console.log(res.data);
// }
// getPlanets().catch(err => {
//   console.log("In Catch");
//   console.log(err);
// });

// async function getPlanets() {
//   try {
//     const res = await axios.get("https://swapi.com/api/planetss");
//     console.log(res.data);
//   } catch (e) {
//     console.log("In catch", e);
//   }
// }
// getPlanets();

//Sequential Requests
// async function get3pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

//Parrallel Requests
async function get3pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const poke1 = await prom1;
  const poke2 = await prom2;
  const poke3 = await prom3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}
get3pokemon();
