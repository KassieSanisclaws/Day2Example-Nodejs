const express = require('express');
const fs = require('fs');



module.exports.getAlbumsList = (req, res) => {
     res.send("Albums List Successful");

}


module.exports.getAlbumByID = (req, res) => {
    res.send("Albums list by ID");
}

const load_albumsList = (callback) => {
    fs.readdir('albums', (err, files) => {
        if(err) {
            callback(err);
            return;
        }

        //Filter only directories:
        const albums = [];
        let pending = files.length;

        if(!pending){
            return callback(null, albums); //no files and returns empty array list
        }

        files.forEach(file => {
            fs.start(`albums/${file}`, (err, stats) => {
                if(err){
                    callback(err);
                    return;
                }

                if(stats.isDirectory()){
                    albums.push(file);
                }

                if(!--pending){
                    callback(null, albums);
                }
            });
        });
    });
};

// module.exports = {
//     load_albumsList

// }
