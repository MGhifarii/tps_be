var express = require('express');
var router = express.Router();
const {
  getBatas,
  checkKlasifikasi,
  getJumlah,
  jmlhSampahMasuk,
  statistikaDeskriptif
} = require('../controllers/analisisController');

// import excel
router.get('/', getBatas);
// check klasifikasi
router.get('/check/:kecamatan', checkKlasifikasi);
// get jumlah
router.get('/jumlah/:kecamatan', getJumlah);

router.get('/jumlahSampah/:kecamatan', jmlhSampahMasuk);

router.get('/sd', statistikaDeskriptif);

module.exports = router;