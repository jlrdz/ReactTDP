import { useEffect, useState } from 'react';

export default function App({url = 'https://ghibliapi.vercel.app/films'}) {
  const [count, setCount] = useState(0);

  // console.log('Hello from outside useEffect');
  // useEffect(() => {
  //   console.log('Hello from inside useEffect');
  // }, []); //onMount

 
  
  
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    
    // fetch('https://ghibliapi.vercel.app/films')
    //   .then((res) => res.json())
    //   .then((res) => {
        
    //     // console.log(res);
    //     const sgMovies = Object.values(res);
    //     setMoviesList(sgMovies)
    //     sgMovies.map((movie) => {
    //       console.log(movie.title);
    //     });
    //   });

    async function fecthMovies(){
      let response = await fetch(url)
      response = await response.json()
      setMoviesList(Object.values(response))
      // Object.values(response).map((movie) => {
      //         console.log(movie.title);
      //       });
    }

    fecthMovies()
  }, [url]); //onUpdate

  
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    
    const timer = setInterval(()=>{
      setTime(new Date())
    }, 1000)

    //unmount
    return () =>{
      clearInterval(timer)
    }
  }, []); 

  useEffect(() => {
    function getScroll() {
      const currentScroll = document.documentElement.scrollTop;
      console.log(currentScroll)
    }
   
    document.addEventListener('scroll', getScroll)

    return () =>{
      document.removeEventListener('scroll', getScroll)
    }
  }, []); 

  return (
    <div>
      <h1>Triggering on every re-render</h1>
      <button onClick={() => setCount(count + 1)}>Plus 1</button>
      <p>{count}</p>
      <h1>Studio Ghibli Movies</h1>
      <ul>
        {moviesList.map((movie) => (
          <li key={movie.title}>
            {movie.title} : {movie.release_date}
          </li>
        ))}
      </ul>
      <h1>Time</h1>
      <time dateTime={time.toISOString()}>{time.toTimeString()}</time>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, eligendi quam dolores magnam nemo velit iure voluptatibus minima saepe illum recusandae, unde inventore rem dolorem mollitia ea! Placeat, omnis a!</p>
      <p>Iste nulla quisquam iusto, modi tempore, consectetur porro quos vero nobis dolor delectus! Tenetur, ipsa ipsum vel maxime dolores dolorem. Magni delectus consequatur ex blanditiis! Iusto eum praesentium voluptas repellendus?</p>
      <p>Nihil optio suscipit quod saepe aliquam rerum ut impedit quia veritatis repellat, doloribus tempore sint vero id veniam porro aspernatur ipsum sunt minima explicabo eligendi quaerat! Velit reprehenderit ipsa laborum.</p>
      <p>Quia recusandae aperiam doloribus natus at unde possimus facere. Esse modi ipsa, asperiores consectetur quia ratione sapiente? Fugit id labore, magni rerum aperiam corrupti quos dignissimos. Officiis ratione quos obcaecati.</p>
      <p>Possimus sint a soluta dolor necessitatibus natus cupiditate, error excepturi ipsum suscipit! Accusantium fugiat tenetur dolorum recusandae similique sapiente sint iste adipisci quae quisquam ipsum, saepe excepturi cumque, laudantium neque?</p>
      <p>Tenetur ipsam labore sit amet doloribus veniam maxime architecto recusandae. Corrupti vel consequatur voluptatum amet in. Non voluptatem cumque ipsam error, laboriosam harum animi in vero placeat tempore facilis iure?</p>
      <p>Voluptatibus quis minus a deserunt rem quisquam odio. Quod sed amet magnam magni fuga, ut deleniti sequi soluta dolor illo itaque dolorem quos nisi. A vel magnam delectus iste atque.</p>
      <p>Quis modi quod consequuntur tempore aperiam, temporibus obcaecati vero at incidunt aliquam recusandae accusamus enim, illum aut ea quidem suscipit dicta fugiat, sequi molestias voluptas provident. Consectetur facere non praesentium!</p>
      <p>Voluptatem in eligendi sed quam, illo similique adipisci ea et ipsum placeat facere laboriosam. Eius nobis illo labore quia rem earum aspernatur, nulla error obcaecati repellat suscipit facilis explicabo voluptates!</p>
      <p>Ea beatae autem voluptas aspernatur laboriosam cum? Sint perferendis quidem, eos dolorum ad commodi. Quos error corrupti quaerat quae est hic rerum voluptas, temporibus asperiores iure dolorem minus, vero odio?</p>
    </div>
  );
}
