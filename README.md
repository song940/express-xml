# XML Parser

[xml-parser]() API for express .

[![NPM](https://nodei.co/npm/express-xml.png?downloads=true&stars=true)](https://nodei.co/npm/express-xml/)


## Installation

	npm install express-xml

## Usage

	var express = require('express');
	var xmlParser = require('express-xml');

	var app = express();

	app.use(xmlParser);

	app.use(function(req, res, next){
  		console.log('%s %s', req.method, req.url);
  		res.send(req.body);
	});

	app.listen(3000);

## Licence

The MIT License (MIT)
Copyright © 2014 Lsong

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	  
