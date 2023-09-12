module.exports = mongoose => {
    const schema = mongoose.Schema(
      {
        nama: {
          type: String,
          required: [true, "Please add a nama"],
        },
        narahubung: {
          type: String,
          required: [true, "Please add an Contact"],
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
        wilayah: {
          type: String,
          required: [true, "Please add a wilayah"],
        },
      },
      {
        timestamps: true,
      });
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tps = mongoose.model("tps", schema);
    return Tps;
  };
  
  
  
  
  
  
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
  
  
  