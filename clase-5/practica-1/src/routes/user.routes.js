import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
    res.send("OK")
})

router.get("/user", (req, res) => {
    res.send("OK USER")
})

export default router