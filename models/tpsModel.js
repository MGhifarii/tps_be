const mongoose = require('mongoose');


const Tps = mongoose.Schema(
  {
  nama: {
      type: String,
      required: [true, "Please add a nama"],
  },
  kecamatan: {
      type: String,
      required: [true, "Please add a kecamatan"],
  },
  deskripsi: {
      type: String,
      required: [true, "Please add a description"],
  },
  latitude: {
      type: String,
      required: [true, "Please add a latitude"],
  },
  longitude: {
      type: String,
      required: [true, "Please add a longitude"],
  },
  kelurahan: {
      type: String,
      required: [true, "Please add a kelurahan"],
  },
  sampah_masuk: {
    type: Number,
    required: [true, "Please add a sampah daily"],
    },
  },
  {
  timestamps: true,
  });

module.exports = mongoose.model("Tps", Tps);

// module.exports = mongoose => {
//     const schema = mongoose.Schema(
//       {
//         nama: {
//           type: String,
//           required: [true, "Please add a nama"],
//         },
//         narahubung: {
//           type: String,
//           required: [true, "Please add an Contact"],
//         },
//         deskripsi: {
//           type: String,
//           required: [true, "Please add a description"],
//         },
//         latitude: {
//           type: String,
//           required: [true, "Please add a latitude"],
//         },
//         longitude: {
//           type: String,
//           required: [true, "Please add a longitude"],
//         },
//         kelurahan: {
//           type: String,
//           required: [true, "Please add a kelurahan"],
//         },
//       },
//       {
//         timestamps: true,
//       });
  
//     schema.method("toJSON", function() {
//       const { __v, _id, ...object } = this.toObject();
//       object.id = _id;
//       return object;
//     });
  
//     const Tps = mongoose.model("Tps", schema);
//     return Tps;
//   };
  
  
  
  
  
  
  // const mongoose = require("mongoose");
  // const Schema = mongoose.Schema;
  
  // // Create Schema
  // const ProductSchema = new Schema(
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     // images: {
  //     //   type: String,
  //     //   required: [true, "Please add an images"],
  //     // },
  //     description: {
  //       type: String,
  //       required: true,
  //     },
  //     price: {
  //         type: Number,
  //         required: true,
  //     },
  //     // url: {
  //     //     type: String,
  //     //     required: [true, "Please add a url"],
  //     //   },
  //   },
  //   {
  //     timestamps: true,
  //   }
  // );
  // module.exports = Product = mongoose.model("Product", ProductSchema);
  
  
  