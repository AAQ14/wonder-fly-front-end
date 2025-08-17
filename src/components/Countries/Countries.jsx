//Imports👇
import React from 'react'
import { useState } from 'react'
import CountriesForm from './CountriesForm/CountryForm'

//Consts👇
const Countries = () => {
  const [Countries,setCountries]=useState([])
  return (
    <>
    <h3>Create Country</h3>
    <CountriesForm setCountries={setCountries}/>
    </>
  )
}

//Exports👇
export default Countries