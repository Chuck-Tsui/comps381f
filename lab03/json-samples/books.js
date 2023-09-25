const books = [ 
	{name: "Pascal Made Simple", 
	 price: 700, 
	 stock: 3,
	 reviews: [
	    {date:'2015-01-01T14:00:00Z',score:8},
	    {date:'2015-02-01T08:00:00Z',score:7.5}
	 ]},
	{name: "Intro to the MEAN stack", 
	 price: 300, 
	 stock: 30,
	 reviews: [
	    {date:'2015-01-01T14:00:00Z',score:8}
	 ]},
	{name: "Node.js Programming", 
	 price: 1000, 
	 stock: 3,
	 reviews: [
	    {date:'2015-01-01T14:00:00Z',score:8},
	    {date:'2015-02-01T08:00:00Z',score:7.5},
	    {date:'2015-02-01T09:00:00Z',score:9.5}
	 ]},
	{name: "What is NOSQL?", 
	 price: 900, 
	 stock: 3000,
	 reviews: [
	 ]}
];   

for (var book of books){// 4 times , 4 iterations
var totalScore = 0;
for (var review of book.reviews){
totalScore = totalScore + review.score;
}
if (totalScore == 0) {
averageScore = 0;// avoid 0/0
}
else{
averageScore = totalScore/book.reviews.length;
}
console.log(`Average score of ${book.name}: ${averageScore.toFixed(2)}`);
}
// Write a Node.js script that reports 
// the average score of each book in books
