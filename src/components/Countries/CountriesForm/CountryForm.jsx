//Imports👇
import React from 'react'
import { useState } from 'react'

//Flight Form Data👇
const CountriesForm = ({setCountries}) => {
const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    country:'',
    timeZone:''
  })


}

//Exports👇
export default CountriesForm