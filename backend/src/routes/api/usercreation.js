import {userdata, game} from '../../db/models/gameModel'

async function extractUser(req, res) {
    let displayName = req.body.displayName;
    let email = req.body.email;
    let photoURL = req.body.photoURL;

    
    const newUser = new userData(data);
    await newUser.save();
}