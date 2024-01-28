const PDFDocument = require('pdfkit-table');
const fs = require("fs-extra");
const {Tps} = require('../models');


async function buildPDF(dataCallback, endCallback) {
    var tps = await Tps.findAll({
    });

    let mapTps = tps.map((tps, index) => ({
        no: index+1,
        nama: tps.nama,
        kecamatan: tps.kecamatan,
        kelurahan: tps.kelurahan,
    }))

    let doc = new PDFDocument({ margin: 30, size: 'A4' });
    doc.pipe(fs.createWriteStream("./document.pdf"));

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc.fontSize(16).text(`Data Tps di Kota Bandung`, {
        align: 'center'
    });
    doc.moveDown();

    const tableJson = { 
        "headers": [
          { "label":"No", "property":"no", "width":20 },
          { "label":"Nama", "property":"nama", "width":100 },
          { "label":"Kecamatan", "property":"kecamatan", "width":320 },
          { "label":"kelurahan", "property":"kelurahan", "width":100 },
        ],
        "datas": mapTps,
        "options": {
          "width": 300,
        }
      };
      // the magic
      doc.table(JSON.stringify(tableJson), {
        align: 'center'
      });
      // done!
      doc.end();;
}

module.exports = { buildPDF };