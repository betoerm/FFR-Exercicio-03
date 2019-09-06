import React from 'react'
import axios from "axios"
import discussions from '../api/discussions'

export default async(req, res   ) => {
    res.status(200).json(discussions);
}

