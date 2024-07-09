const express = require('express');
const albumsRouter = express.Router();
// const { load_albumsList } = require('../Controllers/albumController');
const albumController = require("../Controllers/albumController");


albumsRouter.get("/", (req, res) => {
    res.send("Albums Route Connection Successful");
})

albumsRouter.get("/albums", albumController.getAlbumsList);

albumsRouter.get("/albums/:id", albumController.getAlbumByID);


// albumsRouter.get("/albums", (req, res) => {
//     load_albumsList((err, albums) => {
//          if(err){
//             res.status(500).json({ message: err.message });
//             return;
//          }
//          res.status(200).json({ error: null, data: {albums} });
//          res.send("Albums List: ", albums);
//     });
// });

module.exports = albumsRouter;