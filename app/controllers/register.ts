'use strict';

import { NextFunction, Response, Request } from "express";

import { User } from '../models/Users';
const bcrypt = require('bcrypt');

/**
 * Signup For Users
 */

export const signUp = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const form = req.body;
        // const result = validate(form);

        // if (result.error) {
        //     res.status(400).json({ message: result.error.details[0].message });
        // }

        const checkEmail = await User.findOne({ email: form.email });

        if (checkEmail) {
            res.json({ message: "Email Already in use please try with other" });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const register = await User.create({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: await bcrypt.hash(form.password, salt),
            phone: form.phone
        });
        register.save();
        res.json({ message: "Register Successfully" });

    }
    catch (err) {
        res.json({ message: "something went wrong " + err });
    }
}
