const Tps = require('../models/tpsModel');

// const { Op } = require("sequelize");

const mongoose = require("mongoose");
// statistika_deskriptif = async () => {

//     try{
//         var jlh_tps = 0;
//         var jlh_per_kecamatan = 0

//         jlh_tps = await Tps.count();
//         jlh_per_kecamatan = await Tps.count({
//             group: ['kecamatan']
//         });
//         // if (!category){
//         //     jlh_tps = await Tps.count();
//         //     jlh_per_kecamatan = await Tps.count({
//         //         group: ['kecamatan']
//         //     });
//         // }

//         // else{
//         //     jlh_tps = await Tps.count({
//         //     });
//         //     jlh_per_kecamatan = await Tps.count({
//         //         group: ['kecamatan'],
//         //         where : {
//         //             kategori_id: category
//         //         }
//         //     });
//         // }

//         const jlh_kecamatan = await Tps.count({
//             distinct : true,
//             col : 'kecamatan'
//         });

//         const rata_rata = jlh_tps/jlh_kecamatan;

//         var sigma = 0;

//             jlh_per_kecamatan.forEach(element => {
//                 const temp = element['count'] - rata_rata;
//                 const kuadrat = temp * temp;
//                 sigma = sigma + kuadrat;
//             });

//             const standard_deviasi = Math.sqrt(sigma/29);

//             const batas_atas = rata_rata + (0.6 * standard_deviasi)
//             const batas_bawah = rata_rata - (0.6 * standard_deviasi)

//             return {batas_bawah : batas_bawah, batas_atas : batas_atas};
//     } catch (error) {
//         return {success: 'false', message: error};
//     }
// }

// exports.getBatas = async (req, res) => {
//     try{
//         var jlh_tps = 0;
//         var jlh_per_kecamatan = 0
        
//         jlh_tps = await Tps.count();
//         jlh_per_kecamatan = await Tps.count({
//             group: ['kecamatan']
//         });

//         const jlh_kecamatan = await Tps.count({
//             distinct : true,
//             col : 'kecamatan'
//         });

//         const rata_rata = jlh_tps/jlh_kecamatan;

//         var sigma = 0;

//         jlh_per_kecamatan.forEach(element => {
//             const temp = element['count'] - rata_rata;
//             const kuadrat = temp * temp;
//             sigma = sigma + kuadrat;
//         });

//         const standard_deviasi = Math.sqrt(sigma/29);

//         const batas_atas = rata_rata + (0.6 * standard_deviasi)
//         const batas_bawah = rata_rata - (0.6 * standard_deviasi)

//         res.json({batas_bawah : Math.ceil(batas_bawah), batas_atas : Math.floor(batas_atas)});
//     } catch (error) {
//         res.status(400).json({success: 'false', message: error});
//     }
// }

// exports.checkKlasifikasi = async (req, res) => {
//     try{
//         var jlh_tps = await Tps.count({
//             where : {
//                 kecamatan : {
//                     [Op.like]: req.params.kecamatan
//                 }
//             }
//         });

//         if(!jlh_tps){
//             jlh_tps = 0;
//         }

//         var klasifikasi = '';

//         if (jlh_tps > 5){
//             klasifikasi = 'Sedikit';
//         }
//         else if (jlh_tps < batas.batas_bawah){
//             klasifikasi = 'Sedikit';
//         }
//         else{
//             klasifikasi = 'Sedang';
//         }

//         res.json({response : klasifikasi});
//     } catch (error) {
//         return {success: 'false', message: error};
//     }
// }

// exports.getJumlah = async (req, res) => {
//     try{
//         const jumlah = await Tps.count({
//             where : {
//                 kecamatan : {
//                     [Op.like]: req.params.kecamatan
//                 }
//             }
//         });

//         res.json({response : jumlah});
//     } catch (error) {
//         return {success: 'false', message: error};
//     }
// }


// statistika_deskriptif = async () => {
//     try{
//         var jlh_sampah_masuk = 0;
//         var jlh_per_kecamatan = 0
//         jlh_sampah_masuk = await Tps.count({
//             attributes:['sampah_masuk']
//         });
//         jlh_per_kecamatan = await Tps.sampah_masuk.count({
//             attributes:['sampah_masuk'],
//             group: ['kecamatan']
//         });

//         const jlh_kecamatan = await Tps.count({
//             distinct : true,
//             col : 'kecamatan'
//         });

//         const rata_rata = jlh_sampah_masuk/jlh_kecamatan;

//         var sigma = 0;

//             jlh_per_kecamatan.forEach(element => {
//                 const temp = element['count'] - rata_rata;
//                 const kuadrat = temp * temp;
//                 sigma = sigma + kuadrat;
//             });

//             const standard_deviasi = Math.sqrt(sigma/29);

//             const batas_atas = rata_rata + (0.6 * standard_deviasi)
//             const batas_bawah = rata_rata - (0.6 * standard_deviasi)

//             return {batas_bawah : batas_bawah, batas_atas : batas_atas};
//     } catch (error) {
//         return {success: 'false', message: error};
//     }
// }
// const statistika_deskriptif = async () => {
//     try {
//         // Get the total sampah_masuk
//         const totalSampahMasukAggregation = await Tps.aggregate([
//             {
//                 $group: {
//                     _id: null,
//                     totalSampahMasuk: { $sum: '$sampah_masuk' }
//                 }
//             }
//         ]);
//         const totalSampahMasuk = totalSampahMasukAggregation[0].totalSampahMasuk;

//         // Get sampah_masuk per kecamatan
//         const sampahPerKecamatanAggregation = await Tps.aggregate([
//             {
//                 $group: {
//                     _id: '$kecamatan',
//                     sampahMasuk: { $sum: '$sampah_masuk' }
//                 }
//             }
//         ]);

//         // Count distinct kecamatans
//         const jlhKecamatan = await Tps.distinct('kecamatan').count();

//         const rataRata = totalSampahMasuk / jlhKecamatan;

//         let sigma = 0;
//         sampahPerKecamatanAggregation.forEach(element => {
//             const temp = element.sampahMasuk - rataRata;
//             sigma += temp * temp;
//         });

//         const standardDeviasi = Math.sqrt(sigma / (jlhKecamatan - 1)); // Using jlhKecamatan - 1 for sample standard deviation

//         const batasAtas = rataRata + (0.6 * standardDeviasi);
//         const batasBawah = rataRata - (0.6 * standardDeviasi);

//         return { batas_bawah: batasBawah, batas_atas: batasAtas };
//     } catch (error) {
//         return { success: 'false', message: error.message };
//     }
// };

const statistika_deskriptif = async (kecamatanRegex) => {
    try {
        // Get the total sampah_masuk
        const totalSampahMasukAggregation = await Tps.aggregate([
            {
                $group: {
                    _id: null,
                    totalSampahMasuk: { $sum: '$sampah_masuk' }
                }
            }
        ]);
        const totalSampahMasuk = totalSampahMasukAggregation[0].totalSampahMasuk;

        // Get sampah_masuk per kecamatan using regex match
        const sampahPerKecamatanAggregation = await Tps.aggregate([
            {
                $match: {
                    kecamatan: { $regex: kecamatanRegex, $options: 'i' } // Case-insensitive regex search
                }
            },
            {
                $group: {
                    _id: '$kecamatan',
                    sampahMasuk: { $sum: '$sampah_masuk' }
                }
            }
        ]);

        // Count distinct kecamatans that match the regex
        const jlhKecamatan = await Tps.distinct('kecamatan', {
            kecamatan: { $regex: kecamatanRegex, $options: 'i' }
        }).count();

        const rataRata = totalSampahMasuk / jlhKecamatan;

        let sigma = 0;
        sampahPerKecamatanAggregation.forEach(element => {
            const temp = element.sampahMasuk - rataRata;
            sigma += temp * temp;
        });

        const standardDeviasi = Math.sqrt(sigma / (jlhKecamatan - 1)); // Using jlhKecamatan - 1 for sample standard deviation

        const batasAtas = rataRata + (0.6 * standardDeviasi);
        const batasBawah = rataRata - (0.6 * standardDeviasi);

        return { batas_bawah: batasBawah, batas_atas: batasAtas };
    } catch (error) {
        return { success: 'false', message: error.message };
    }
};


// exports.getBatas = async (req, res) => {
//     try{
//         var jlh_sampah_masuk = 0;
//         var jlh_per_kecamatan = 0
        
//         jlh_sampah_masuk = await Tps.count({
//             attributes:['sampah_masuk']
//         });
//         jlh_per_kecamatan = await Tps.count({
//             attributes:['sampah_masuk'],
//             group: ['kecamatan']
//         });

//         const jlh_kecamatan = await Tps.count({
//             distinct : true,
//             col : 'kecamatan'
//         });

//         const rata_rata = jlh_sampah_masuk/jlh_kecamatan;

//         var sigma = 0;

//         jlh_per_kecamatan.forEach(element => {
//             const temp = element['count'] - rata_rata;
//             const kuadrat = temp * temp;
//             sigma = sigma + kuadrat;
//         });

//         const standard_deviasi = Math.sqrt(sigma/29);

//         const batas_atas = rata_rata + (0.6 * standard_deviasi)
//         const batas_bawah = rata_rata - (0.6 * standard_deviasi)

//         res.json({batas_bawah : Math.ceil(batas_bawah), batas_atas : Math.floor(batas_atas)});
//     } catch (error) {
//         res.status(400).json({success: 'false', message: error});
//     }
// }
// exports.getBatas = async (req, res) => {
//     try {
//         // Aggregate to calculate the total sampah_masuk
//         const totalSampahMasukAggregation = await Tps.aggregate([
//             {
//                 $group: {
//                     _id: null,
//                     totalSampahMasuk: { $sum: '$sampah_masuk' }
//                 }
//             }
//         ]);

//         const totalSampahMasuk = totalSampahMasukAggregation.length > 0 ? totalSampahMasukAggregation[0].totalSampahMasuk : 0;

//         // Aggregate to calculate sampah_masuk per kecamatan and count of kecamatans
//         const sampahPerKecamatanAggregation = await Tps.aggregate([
//             {
//                 $group: {
//                     _id: '$kecamatan',
//                     sampahMasuk: { $sum: '$sampah_masuk' }
//                 }
//             },
//             {
//                 $group: {
//                     _id: null,
//                     count: { $sum: 1 },
//                     sampahMasuk: { $push: '$sampahMasuk' }
//                 }
//             }
//         ]);

//         const jlhKecamatan = sampahPerKecamatanAggregation.length > 0 ? sampahPerKecamatanAggregation[0].count : 0;
//         const sampahMasukArray = sampahPerKecamatanAggregation.length > 0 ? sampahPerKecamatanAggregation[0].sampahMasuk : [];

//         const rataRata = jlhKecamatan > 0 ? totalSampahMasuk / jlhKecamatan : 0;

//         let sigma = 0;
//         sampahMasukArray.forEach(sampahMasuk => {
//             const temp = sampahMasuk - rataRata;
//             sigma += temp * temp;
//         });

//         const standardDeviasi = Math.sqrt(sigma / (jlhKecamatan - 1)); // Note: using jlhKecamatan - 1 for sample standard deviation

//         const batasAtas = rataRata + (0.6 * standardDeviasi);
//         const batasBawah = rataRata - (0.6 * standardDeviasi);

//         res.json({ batas_bawah: Math.ceil(batasBawah), batas_atas: Math.floor(batasAtas) });
//     } catch (error) {
//         res.status(400).json({ success: 'false', message: error.message });
//     }
// };

exports.getBatas = async (req, res) => {
    try {
        // Aggregate to calculate the total sampah_masuk
        const totalSampahMasukAggregation = await Tps.aggregate([
            {
                $group: {
                    _id: null,
                    totalSampahMasuk: { $sum: '$sampah_masuk' }
                }
            }
        ]);

        const totalSampahMasuk = totalSampahMasukAggregation.length > 0 ? totalSampahMasukAggregation[0].totalSampahMasuk : 0;

        // Aggregate to calculate sampah_masuk per kecamatan with regex match and count of kecamatans
        const sampahPerKecamatanAggregation = await Tps.aggregate([
            {
                $match: {
                    kecamatan: { $regex: new RegExp(req.params.kecamatan, "i") } // Regex pattern based on kecamatan parameter
                }
            },
            {
                $group: {
                    _id: '$kecamatan',
                    sampahMasuk: { $sum: '$sampah_masuk' }
                }
            },
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 },
                    sampahMasuk: { $push: '$sampahMasuk' }
                }
            }
        ]);

        const jlhKecamatan = sampahPerKecamatanAggregation.length > 0 ? sampahPerKecamatanAggregation[0].count : 0;
        const sampahMasukArray = sampahPerKecamatanAggregation.length > 0 ? sampahPerKecamatanAggregation[0].sampahMasuk : [];

        const rataRata = jlhKecamatan > 0 ? totalSampahMasuk / jlhKecamatan : 0;

        let sigma = 0;
        sampahMasukArray.forEach(sampahMasuk => {
            const temp = sampahMasuk - rataRata;
            sigma += temp * temp;
        });

        const standardDeviasi = Math.sqrt(sigma / (jlhKecamatan - 1)); // Note: using jlhKecamatan - 1 for sample standard deviation

        const batasAtas = rataRata + (0.6 * standardDeviasi);
        const batasBawah = rataRata - (0.6 * standardDeviasi);

        res.json({ batas_bawah: Math.ceil(batasBawah), batas_atas: Math.floor(batasAtas) });
    } catch (error) {
        res.status(400).json({ success: 'false', message: error.message });
    }
};


// exports.checkKlasifikasi = async (req, res) => {
//     try{
//         const batas = await statistika_deskriptif();
//         var jlh_sampah_masuk = await Tps.count({
//             attributes:['sampah_masuk'],
//             where : {
//                 kecamatan : {
//                     [Op.like]: req.params.kecamatan
//                 }
//             }
//         });

//         if(!jlh_sampah_masuk){
//             jlh_sampah_masuk = 0;
//         }

//         var klasifikasi = '';

//         if (jlh_sampah_masuk > batas.batas_atas){
//             klasifikasi = 'Banyak';
//         }
//         else if (jlh_sampah_masuk < batas.batas_bawah){
//             klasifikasi = 'Sedikit';
//         }
//         else{
//             klasifikasi = 'Sedang';
//         }

//         res.json({response : klasifikasi});
//     } catch (error) {
//         return {success: 'false', message: error};
//     }
// }
exports.checkKlasifikasi = async (req, res) => {
    try {
        const batas = await statistika_deskriptif(); // Assuming this function is defined elsewhere and returns an object with `batas_atas` and `batas_bawah`
        
        // Use the countDocuments method to count the number of documents with an exact match
        const jlh_sampah_masuk = await Tps.countDocuments({ 
            kecamatan: { $regex: new RegExp(req.params.kecamatan, "i") }
            // kecamatan: req.params.kecamatan 
        });

        let klasifikasi = {};

        if (jlh_sampah_masuk > batas.batas_atas) {
            klasifikasi = 'Banyak';
        } else if (jlh_sampah_masuk < batas.batas_bawah) {
            klasifikasi = 'Sedikit';
        } else {
            klasifikasi = 'Sedang';
        }

        res.json({ response: klasifikasi, jlh_sampah_masuk });
    } catch (error) {
        res.status(400).json({ success: 'false', message: error.message });
    }
};

// exports.getJumlah = async (req, res) => {
//     try{
//         const jumlah = await Tps.count({
//             where : {
//                 kecamatan : {
//                     [Op.like]: req.params.kecamatan
//                 }
//             }
//         });

//         res.json({response : jumlah});
//     } catch (error) {
//         return {success: 'false', message: error};
//     }
// }


exports.getJumlah = async (req, res) => {
    try {
        const jumlah = await Tps.countDocuments({ 
            // kecamatan: req.params.kecamatan
            kecamatan: { $regex: new RegExp(req.params.kecamatan, "i") }
        });

        res.json({ response: jumlah });
    } catch (error) {
        res.status(500).json({ success: 'false', message: error.message });
    }
};

exports.jmlhSampahMasuk = async (req, res) => {
    try {
        const jumlahSampah = await Tps.aggregate([
            {
                $match: {
                    kecamatan: { $regex: new RegExp(req.params.kecamatan, "i") } // Regex pattern based on kecamatan parameter
                }
            },
            {
                $group: {
                    _id: '$kecamatan',
                    sampahMasuk: { $sum: '$sampah_masuk' }
                }
            }
        ]);
        res.json({ response: jumlahSampah})
        console.log(jumlahSampah);
    } catch (error) {
        res.status(500).json({ success: 'false', message: error.message });
    }
};

exports.statistikaDeskriptif = async (req, res) => {
    try {
        // Hitung jumlah sampah masuk per kecamatan
        const jumlahSampah = await Tps.aggregate([
            {
                $match: {
                    kecamatan: { $regex: new RegExp(req.params.kecamatan, "i") }
                }
            },
            {
                $group: {
                    _id: '$kecamatan',
                    sampahMasuk: { $sum: '$sampah_masuk' }
                }
            }
        ]);

        // Hitung jumlah sampah masuk secara total
        const totalSampahMasuk = await Tps.aggregate([
            {
                $group: {
                    _id: null,
                    totalSampahMasuk: { $sum: '$sampah_masuk' }
                }
            }
        ]);
        console.log(totalSampahMasuk)
        // Ambil nilai total sampah masuk dari hasil agregasi
        const totalSampahMasukValue = totalSampahMasuk.length > 0 ? totalSampahMasuk[0].totalSampahMasuk : 0;
        console.log(totalSampahMasuk[0].totalSampahMasuk)
        // Hitung jumlah kecamatan
        const jumlahKecamatan = await Tps.distinct('kecamatan').count();

        // Hitung rata-rata sampah masuk per kecamatan
        const mean = totalSampahMasukValue / 30;

        // Hitung standar deviasi
        let sigma = 0;
        jumlahSampah.forEach(element => {
            const temp = element.sampahMasuk - mean;
            const kuadrat = temp * temp;
            sigma = sigma + kuadrat;
        });
        console.log(mean)
        const standar_deviasi = Math.sqrt(sigma / 29);

        // Hitung batas atas dan batas bawah
        const batasAtas = mean + (0.5 * standar_deviasi);
        const batasBawah = mean - (0.5 * standar_deviasi);

        // Mengembalikan hasil
        res.json({ batasBawah: batasBawah, batasAtas: batasAtas });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};