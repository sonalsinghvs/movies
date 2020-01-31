//My five favorite movies
const myMovies = ['Star Wars', 'Despicable me', 'When Harry Met Sally', 'The Lord Of The Rings', 'Rocky'];
console.log(myMovies);

//Ask the user to input their movie
const guestMovie = prompt ('What is your favorite movie?');
console.log(guestMovie);

//Add the new movie to my array
myMovies.push(guestMovie);
console.log(myMovies.toString());
