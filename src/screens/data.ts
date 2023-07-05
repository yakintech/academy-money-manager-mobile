import { City } from "./City"

export let cities : City[] = []

let city1 : City = {
    id:1,
    name:'Bakü',
    lat:40.409264,
    lon:49.867092
}
let city2 : City = {
    id:2,
    name:'İstanbul',
    lat:41.015137,
    lon:28.979530
}
let city3 : City = {
    id:3,
    name:'London',
    lat:51.507359,
    lon:-0.136439
}

cities.push(city1)
cities.push(city2)
cities.push(city3)