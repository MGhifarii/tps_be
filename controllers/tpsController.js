const Tps = require('../models/tpsModel');
const Validator = require('fastest-validator');

const v = new Validator();
const { Op } = require("sequelize");

exports.index = async (req, res) => {
    // try{
        var tps = await Tps.find(
            // include: ['category']
        );

        if(req.query.search) {
            tps = await Tps.find(
            )
        }

        res.json({message : 'Success Get All Tps', data : tps});
    // } catch (error) {
    //     res.status(400).json({success: 'false', message: error});
    // }
}

exports.getByCategory = async (req, res) => {
    try{
        var tps = await Tps.findAll({
            where : {
                kategori_id : req.params.category
            },
            // include: ['category']
        });

        if(req.query.search) {
            tps = await Tps.findAll({
                where : {
                    kategori_id : req.params.category,
                    nama : {
                        [Op.like]: '%' + req.query.search + '%'
                    }
                },
                // include: ['category']
            })
        }

        res.json({message : 'Success Get All Tps', data : tps});
    } catch (error) {
        res.status(400).json({success: 'false', message: error});
    }
}

exports.show = async (req, res) => {
    try{
        console.log(req.params.id)
        const tps = await Tps.findById(req.params.id);

        if(!tps) {
            return res.json({message : 'Data not Found'});
        }
        console.log(tps);
        res.json({message : 'Success Get Tps', data : tps});
    } catch (error) {
        res.status(400).json({success: 'false', message: error});
    }
}

exports.store = async (req, res) => {
    const schema = {
        // kategori_id : 'string|empty:false',
        nama : 'string|empty:false',
        kecamatan : 'string|empty:false',
        deskripsi : 'string|empty:false',
        kelurahan : 'string|empty:false',
        latitude : 'string|empty:false',
        longitude : 'string|empty:false',
        sampah_masuk : 'string|empty:false',
    }
        
    const validate = v.validate(req.body, schema);
        
    if (validate.length){
        return res.status(400).json(validate);
    }

    try{
        const tps = await Tps.create(req.body);

        res.json({message : 'Success Create Tps', response : tps});
    } catch (error) {
        res.status(400).json({success: 'false', message: error});
    }
}

exports.update = async (req, res) => {
    const schema = {
        nama : 'string|empty:false',
        kecamatan : 'string|empty:false',
        deskripsi : 'string|empty:false',
        kelurahan : 'string|empty:false',
        latitude : 'string|empty:false',
        longitude : 'string|empty:false',
        sampah_masuk : 'string|empty:false',
    }
        
    const validate = v.validate(req.body, schema);
        
    if (validate.length){
        return res.status(400).json(validate);
    }

    try{
        var tps = await Tps.findById(req.params.id);

        if(!tps) {
            return res.json({message : 'Data not Found'});
        }

        tps = await tps.updateOne(req.body);

        res.json({message : 'Success Update Tps', response : tps});
    } catch (error) {
        res.status(400).json({success: 'false', message: error});
    }
}

exports.destroy = async (req, res) => {
    try{
        var tps = await Tps.findById(req.params.id);

        if(!tps) {
            return res.json({message : 'Data not Found'});
        }

        await tps.deleteOne();

        res.json({message : 'Success Delete Tps', response : tps});
    } catch (error) {
        res.status(400).json({success: 'false', message: error});
    }
}







// const db = require("../models");
// const Tps = db.tps;


// exports.create = (req, res) => {
//   //validate request
//   if (!req.body.nama) {
//     res.status(400).send({ message: " content can not be empty!"});
//     return;
//   }

//   console.log(req.body)

//   //create a product
//   const tps = new Tps({
//     nama: req.body.nama,
//     narahubung: req.body.narahubung,
//     gambar: req.body.gambar,
//     deskripsi: req.body.deskripsi,
//     latitude: req.body.latitude,
//     longitude: req.body.longitude,
//     kelurahan: req.body.kelurahan,
//     published: req.body.published ? req.body.published : false
//   });

//   //save tps to database

//   tps.save(tps)
//     .then (data => {
//       res.send(data);
//     }).catch (err => {
//       res.status(500).send({
//         message:
//           err.message || "some error occured while creating the tps"
//       });
//     });
// };

// //Retrieve all tps from database
// exports.findAll = (req, res) => {
//   const nama = req.query.nama;
//   var condition = nama ? {nama: { $regex: new RegExp(nama), $options: "i"}} : {};

//   Tps.find(condition)
//   .then(data => {
//     res.send(data);
//   }).catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "some error occured retrieving tps"
//     });
//   });
// };

// //Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Tps.findById(id)
//   .then(data => {
//     if(!data)
//       res.status(404).send({message: "Not Found tps with id" + id});
//       else res.send(data);
//   }).catch(err => {
//     res.status(500).send({
//       message:
//         err.message || "Error retrieving tps with id" + id
//       });
//   });
// };

// exports.update = (req, res) => {
//   if (!req.body){
//     return res.status(400).send({
//       message: "Data to update can not be empty"
//     });
//   }

//   const id = req.params.id;
//   Tps.findByIdAndUpdate({_id:id }, {$set: req.body})
//   .then(data => {
//     if(!data){
//       res.status(404).send({
//         message: `Cannot update data with id=${id}`
//       })
//     }else res.send({message: "tps was updated successfully"});
//   }).catch(err => {
//     console.log(err)
//     res.status(500).send({
//       message: "error updating tps with id=" + id
//     });
//   });
// };

// //Delete product
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Tps.findByIdAndRemove(id, { useFindandModify: false})
//   .then(data => {
//     if(!data){
//       res.status(404).send({
//         message: `Cannot delete data with id=${id}`
//       });
//     } else {
//       res.send({
//       message: "tps was delete successfully"
//       });
//     }
//   }).catch(err => {
//     res.status(500).send({
//       message: "Could not delete product with id=" + id
//     });
//   });
// };

// //Delete all products from database
// exports.deleteAll = (req, res) => {
//   Tps.deleteMany({})
//   .then(data => {
//       res.send({
//         message: `${data.deleteCount} Tps were deleted successfully`
//       });
//     }).catch(err => {
//     res.status(500).send({
//       message: err.message || "Some error occured while removing all tps"
//     });
//   });
// };

// //Find all published product
// exports.findAllPublished = (req, res) => {
//   Tps.find({published:true})
//   .then(data => {
//       res.send(data);
//     }).catch(err => {
//     res.status(500).send({
//       message: err.message || "Some error occured while removing all product"
//     });
//   });
// };