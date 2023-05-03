// Copyright (c) 2023 Bonnie Zhu All rights reserved
//
// Created by: Bonnie Zhu
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  let usertype = document.getElementById("typeOfmovie").value
  let userfood = document.getElementById("food").value

  let moviePrice = 0
  let foodPrice = 0

  if (usertype == "Action") {
    moviePrice = 30.0
  } else if (usertype == "Drama") {
    moviePrice = 35.0
  } else if (usertype == "Adventure") {
    moviePrice = 40.0
  } else if (usertype == "Comedy") {
    moviePrice = 43.0
  } else {
    document.getElementById("typeOfmovie").innerHTML = "Error"
  }

  if (userfood == "Popcorn") {
    foodPrice = 10.0
  } else if (userfood == "Candy") {
    foodPrice = 3.0
  } else if (userfood == "Chip") {
    foodPrice = 5.0
  } else {
    document.getElementById("food").innerHTML = "Error"
  }

  let totalPrice = moviePrice + foodPrice

  document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice + "! Have a great time!"
}