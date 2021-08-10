import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satifies the 'DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something that
// satisfies the 'DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv'); // replaced with static method
matchReader.load();
// can now access matchReader.matches

// const summary = new Summary(new WinsAnalysis('Chelsea'), new HtmlReport());
const summary = Summary.winsWithHtmlReport('Chelsea'); // static method

summary.buildAndPrintReport(matchReader.matches);
