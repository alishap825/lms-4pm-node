const express = require("express")

const {
    getAllMember,
    addMember,
    editMemberById,
    deleteMemberById,
    findMemberById
} = require("../controllers/member")

const router = express.Router();

router.post("/", addMember);

router.get("/", getAllMember);

router.patch("/", editMemberById);

router.delete("/", deleteMemberById);

router.get("/", findMemberById);

module.exports = router;