"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
var Summary_1 = require("./Summary");
// import { HtmlReport } from './reportTargets/HtmlReport';
// Create an object that satifies the 'DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something that
// satisfies the 'DataReader interface
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv'); // replaced with static method
matchReader.load();
// can now access matchReader.matches
// const summary = new Summary(new WinsAnalysis('Chelsea'), new HtmlReport());
var summary = Summary_1.Summary.winsWithHtmlReport('Chelsea'); // static method
summary.buildAndPrintReport(matchReader.matches);
