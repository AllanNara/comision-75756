import { Router } from "express";
import fs from "fs" 
import path from "path"

const router = Router()

const pets = fs.readFileSync(path.join(import.meta.dirname, "../db/pets.json"), "utf-8")

router.get("/", (req, res) => {
    const name = req.query.name
    res.render("index", { name: name || "usuario" })
})

router.get("/mascotas", (req, res) => {
    const petsObject = JSON.parse(pets);
    res.render("mascotas", { pets: petsObject })
})

export default router