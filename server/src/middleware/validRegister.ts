
import { NextFunction } from "express";

import User from '../data/models/users'

const validRegister = async (req: any, res: any, next: NextFunction) => {

    var countNumbers = 0;
    var countLower = 0;
    var countUpper = 0;

    var usernameChar = 0;
    var twoUsernameChar = 0;

    const { username, email, password, confirm } = req.body

    try {

        // EMPTY FIELDS

        if (!username || !email || !password || !confirm) {
            return res.status(400).json({ message: "There are incomplet credentials." })
        }

        // SECURITY PASSWORD

        if (password.length < 8) {
            return res.status(400).json({ message: "The password must be more than 7 characters." })
        }

        for(var i = 0; i < password.length; i++) {
            if(password[i] == "0" || password[i] == "1" || password[i] == "2" || password[i] == "3" || password[i] == "4" || password[i] == "5" || password[i] == "6" || password[i] == "7" || password[i] == "8" || password[i] == "9") {
                countNumbers++;
            }
            if(password[i] == "a" || password[i] == "b" || password[i] == "c" || password[i] == "d" || password[i] == "e" || password[i] == "f" || password[i] == "g" || password[i] == "h" || password[i] == "i" || password[i] == "j" || password[i] == "k" || password[i] == "l" || password[i] == "m" || password[i] == "n" || password[i] == "ñ" || password[i] == "o" || password[i] == "p" || password[i] == "q" || password[i] == "r" || password[i] == "s" || password[i] == "t" || password[i] == "u" || password[i] == "v" || password[i] == "w" || password[i] == "x" || password[i] == "y" || password[i] == "z" ) {
                countLower++;
            }
            if(password[i] == "A" || password[i] == "B" || password[i] == "C" || password[i] == "D" || password[i] == "E" || password[i] == "F" || password[i] == "G" || password[i] == "H" || password[i] == "I" || password[i] == "J" || password[i] == "K" || password[i] == "J" || password[i] == "M" || password[i] == "N" || password[i] == "Ñ" || password[i] == "O" || password[i] == "P" || password[i] == "Q" || password[i] == "R" || password[i] == "S" || password[i] == "T" || password[i] == "U" || password[i] == "V" || password[i] == "W" || password[i] == "X" || password[i] == "Y" || password[i] == "Z" ) {
                countUpper++;
            }
        }
        
        if(countNumbers == 0) {
            return res.status(400).json({ message: "The password must have at least numbers." })
        }
        if(countLower == 0) {
            return res.status(400).json({ message: "The password must have at least lower characters." })
        }
        if(countUpper == 0) {
            return res.status(400).json({ message: "The password must have at least upper characters." })
        }

        if (password !== confirm) {
            return res.status(400).json({ message: "Passwords do not match." })
        }

        // EXISTS EMAIL OR USERNAME

        const existEmail = await User.findOne({ email })
        const existUsername = await User.findOne({ username })

        if(existUsername) {
            return res.status(500).json({ message: "The username already exist. Try other." })
        }
        if(existEmail) {
            return res.status(500).json({ message: "The email already exist. Try other." })
        }

        // VALID USERNAME AND EMAIL

        for(var i = 0; i < username.length; i++) {
            if(username[i] == "<" || username[i] == ">" || username[i] == "=" || username[i] == '"' || username[i] == ";" || username[i] == "," || username[i] == "-" || username[i] == ":" || username[i] == "[" || username[i] == "]" || username[i] == "{" || username[i] == "}" || username[i] == "(" || username[i] == ")" || username[i] == "#" || username[i] == "°" || username[i] == "|" || username[i] == "¬" || username[i] == "!" || username[i] == "$" || username[i] == "%" || username[i] == "&" || username[i] == "/" || username[i] == "?" || username[i] == "¿" || username[i] == "'" || username[i] == "*" || username[i] == "´" || username[i] == "¨" || username[i] == "^" || username[i] == "`" || username[i] == "~" || username[i] == "+" || username[i] == "¡" || username[i] == "@") {
                usernameChar++;
            }
            if((username[i] == "." && username[i+1] == ".") || (username[i] == "_" && username[i+1])) {
                twoUsernameChar++;
            }
        }

        if(usernameChar > 0) {
            return res.status(400).json({ message: 'Most characters less . and _ are not allowed.' })
        }
        if(twoUsernameChar > 0) {
            return res.status(400).json({ message: 'Try to write the symbols like _ and . as max one in a row.' })
        }

        const validEmail = validateEmail(email);

        if(!validEmail) {
            return res.status(500).json({ message: "The email's format is incorrect." })
        }

        next();

    } catch (error) {
        console.log(error);
    }

}

// VALID MAIL

function validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default validRegister