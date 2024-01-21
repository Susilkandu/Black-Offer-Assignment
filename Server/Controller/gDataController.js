const gData = require('../Model/dataModal');

// saveMultipleDocument Controller
const saveMultipleDocuments = (async (req, res) => {
    try {
        const documents = req.body;
        await gData.insertMany(documents).then(() => {
            res.json({ message: "Uploaded Succussefully" })
        }).catch((error) => {
            console.log({ error: error })
        })
    } catch (error) {
        res.send(error);
    }
})
const getGData = (async (req, res) => {
    try {
        const { end_year, topic, sector, region, pestle, source, country } = req.body;
        const filter = {
            end_year: end_year,
            topic: topic,
            sector: sector,
            region: region,
            pestle: pestle,
            source: source,
            country: country
        }
        const query = {};
        for (const key in filter) {
            if (filter[key] !== undefined && filter[key] !== null && filter[key] !== '') {
                query[key] = { $regex: new RegExp(filter[key], 'i') };
            }
        }
        const data = await gData.find(query);
        if (data) {
            res.json(data);
        }
        else {
            res.json({ error: "Not Found" });
        }
    } catch (error) {
        res.send(error);
    }
})

module.exports = {
    saveMultipleDocuments, getGData
}