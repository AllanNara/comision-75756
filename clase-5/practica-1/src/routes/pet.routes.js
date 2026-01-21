import { Router } from "express";
import fs from "fs"
import path from "path"

const router = Router()
const pets = fs.readFileSync(path.join(import.meta.dirname, "../db/pets.json"), "utf-8")
// const pets = [
//   {
//     nombre: "Pancracio",
//     raza: "Bulldog",
//     edad: 5,
//     adoptado: true
//   },
//   {
//     nombre: "Nena",
//     raza: "Labrador",
//     edad: 3,
//     adoptado: false
//   },
//   {
//     nombre: "Teo",
//     raza: "Beagle",
//     edad: 2,
//     adoptado: true
//   },
//   {
//     nombre: "Zeus",
//     raza: "Pastor Alemán",
//     edad: 4,
//     adoptado: false
//   }
// ];

router.get("/", (req, res) => {
    const petsObject = JSON.parse(pets)
    res.json(petsObject)    
})

router.post("/", (req, res) => {
    const { petName, petAge, petType } = req.body
    const newPet = {
        nombre: petName,
        raza: petType,
        edad: petAge,
        adoptado: false
    }

    const petsObject = JSON.parse(pets)
    petsObject.push(newPet)

    fs.writeFileSync(path.join(import.meta.dirname, "../db/pets.json"), JSON.stringify(petsObject, null, 2), "utf-8")
    res.json(newPet)
})

export default router