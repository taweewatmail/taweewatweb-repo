const Aboutme = require('../models/Aboutme-model')

createAboutme = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a about me details',
        })
    }

    const aboutme = new Aboutme(body)

    if (!aboutme) {
        return res.status(400).json({ success: false, error: err })
    }

    aboutme
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: aboutme._id,
                message: 'About me created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'About me not created!',
            })
        })
}

updateAboutme = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Aboutme.findOne({ _id: req.params.id }, (err, aboutme) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Aboutme not found!',
            })
        }
        aboutme.name = body.name
        aboutme.phone = body.phone
        aboutme.mail = body.mail
        aboutme
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: aboutme._id,
                    message: 'About me updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'About me not updated!',
                })
            })
    })
}

deleteAboutme = async (req, res) => {
    await Aboutme.findOneAndDelete({ _id: req.params.id }, (err, aboutme) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!abooutme) {
            return res
                .status(404)
                .json({ success: false, error: 'About me not found' })
        }

        return res.status(200).json({ success: true, data: aboutme })
    }).catch(err => console.log(err))
}

getAboutmeById = async (req, res) => {
    await Aboutme.findOne({ _id: req.params.id }, (err, aboutme) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!aboutme) {
            return res
                .status(404)
                .json({ success: false, error: 'Aboutme not found' })
        }
        return res.status(200).json({ success: true, data: aboutme })
    }).catch(err => console.log(err))
}

getAboutmes = async (req, res) => {
    await Aboutme.find({}, (err, aboutmes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!aboutmes.length) {
            return res
                .status(404)
                .json({ success: false, error: 'Aboutme not found' })
        }
        return res.status(200).json({ success: true, data: aboutmes })
    }).catch(err => console.log(err))
}
module.exports = {
    createAboutme,
    updateAboutme,
    deleteAboutme,
    getAboutmes,
    getAboutmeById,
}