const FavoriteMusic = require('../models/favoriteMusic.model');
const mongoose = require('mongoose');

const favoriteMusicService = {};

async function findUser(idUser){
    try{
        const user = FavoriteMusic.findOne({idUser:mongoose.Types.ObjectId(idUser)});
        return user ? user : null;
    }
    catch (e){
        throw new Error ('Error while getting users')
    }
}

async function createFavoriteMusic(idUser, songs){
    try {
        const favoriteMusic = new FavoriteMusic({idUser, songs});
        const newFavoriteMusic = await favoriteMusic.save();
        return newFavoriteMusic;
    }
    catch (e){
        throw new Error ('Error while save Favorite Music')
    }
}

async function updateFavoriteMusic(user, songs){
    try {
        user.songs.push(songs.toString());
        await user.save();
        return user;
    }
    catch (e){
        throw new Error ('Error while update Favorite Music')
    }
}

favoriteMusicService.upsertFavoriteMusic = async function ({idUser, songs}) {
    try {
        const user = await findUser(idUser);
        if (user){
            return await updateFavoriteMusic(user,songs);
        }
        return await createFavoriteMusic(idUser, songs);
    }
    catch (e) {
        throw new Error ('Error while save Favorite Music')
    }
}

module.exports = favoriteMusicService ;