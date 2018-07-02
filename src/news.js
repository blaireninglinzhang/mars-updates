const url = 'https://newsapi.org/v2/everything?' +
          'q=Mars AND Musk AND SpaceX AND timeline&' +
          'sortBy=publishedAt&' + 
          'apiKey=19b20b10d0d8472f90ac96b7a9a9c412';

 export async function getNews(){
 	let result = await fetch(url).then(response => response.json());
 	return result.articles;
 	console.log(result.articles);
 };
