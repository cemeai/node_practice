var express = require('express')
var mongoose = require('mongoose')
var body_parser = require('body-parser')
var multer = require("multer")
var path = require("path")
var favicon = require("serve-favicon")
var winston = require("winston")

const consoleTransport = new winston.transports.Console()
const myWinstonOptions = {
    transports: [consoleTransport]
}
const logger = new winston.createLogger(myWinstonOptions)

var picSchema = new mongoose.Schema({
	picpath: String
})

var picModel = mongoose.model('pictures', picSchema)

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})
var upload = multer({storage:storage})

var app = express()

mongoose.connect('mongodb://localhost:27017/picsdemo', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(()=>logger.info('DB connected.')).catch(err=>logger.error(err))

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

var pathh = path.resolve(__dirname, 'public')
app.use(express.static(pathh))
app.use(body_parser.urlencoded({extended:false}))
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.get('/', (req, res) => {
	picModel.find((err, data) => {
		if (err) {
			console.log(err)
		} else if (data.length > 0) {
			res.render('home', {data:data})
		} else {
			res.render('home', {data:{}})
		}
	})
})

app.post('/', upload.single('pic'), (req, res) => {
	var new_path = 'uploads/'+req.file.originalname
	var new_upload = new picModel({
		picpath:new_path
	})
	new_upload.save((err,data)=> {
		if (err) {
			console.log(err)
		}
		res.redirect('/')
	})
})

app.get('/download/:id', (req, res)=> {
	picModel.find({_id: req.params.id}, (err, data)=> {
		if (err) {
			console.log(err)
		} else {
			var pic_path = __dirname+'/public/'+data[0].picpath
			res.download(pic_path)
		}
	})
})

var port = process.env.PORT || 3000
app.listen(port, () => logger.info('server running at port '+ port))