const express = require('express')
const Member = require("../models/member")

exports.getAllMember = async (req, res) => {
    try {
        const allmember = await Member.find();
        res.status(200).json({
            message: "List of all library members",
            data: allmember,
        })
    } catch(err) {
        res.json({
            error: error
        })
    }
}

exports.addMember = async (req, res) => {
    const member = new Member({
        fullName: req.body.fullName,
        membership: req.body.membership
    })
    try {
        const memberadded = await member.save();
        res.status(201).json({
            message: "New member added succesfully",
            data: memberadded,
        })
    } catch(err) {
        res.json({
            error: err,
        })
    }
}

exports.editMemberById = async (req, res) => {
    const id = req.params.id;
    try{
        const member = await Member.findById(id);
        member.author = req.body.author,
        member.membership = req.body.membership;
        const savedMember = member.save();
        res.status(200).json({
            message: "Member edited successfully"
        })
    } catch(err) {
        res.json({
            error: err
        })

    }
}

exports.deleteMemberById = async(req, res) => {
    const id = req.params.id;
    try{
        const deleteMember = await Member.findByIdAndDelete(id);
        res.json({
            message: "Member succesfully deleted"
        })
    } catch(err) {
        res.json({
            error: err
        })
    }
}

exports.findMemberById = async (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    try{
        const selectedmember = await Member.findById(id);
        res.status(200).json({
            data: selectedmember,
        })
    } catch(err) {
        res.status(400).json({
            message: "Error occured. Member not found",
            error: err
        })
    }
}