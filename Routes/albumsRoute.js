const express = require('express');
const albumController = require("../Controllers/albumController");

const albumsRouter = express.Router();

albumsRouter.get("/", (req, res) => {
    res.send("Albums Route Connection Successful");
})

albumsRouter.get("/albums", albumController.getAlbumsList);

albumsRouter.get("/albums/:id", albumController.getAlbumByID);


module.exports = albumsRouter;