import './App.css'
import Info  from './components/movie/index';
import Card from './components/cast/index';
import Notice from './components/notice/index';
import {casts} from './data/index';
import {notices} from './data/notice';

function App() {
  return (
    <div className="container">
        {/* <div className="source">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,256L24,261.3C48,267,96,277,144,266.7C192,256,240,224,288,218.7C336,213,384,235,432,234.7C480,235,528,213,576,192C624,171,672,149,720,170.7C768,192,816,256,864,245.3C912,235,960,149,1008,112C1056,75,1104,85,1152,106.7C1200,128,1248,160,1296,149.3C1344,139,1392,85,1416,58.7L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
        </svg>
        </div> */}
        <header>
        <i>🐟</i>
        <h1>MOFISH</h1>
        <p>in theater</p>
        <p1>coming soon</p1>
        <p2>midnight</p2>
        <input type="text" name="name"/>
        <img style={{width: 50, height:50}} 
        alt="user" src="http://simpleicon.com/wp-content/uploads/user1.png"/>
        </header>
        <body>
          <part1>
            <img style={{width: 90, height:90}}
            alt='movi' src='https://www.themoviedb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg'/>
          </part1>
          <part2>
            <Info/>
            <button className="b1">GET TICKET</button>
            <button className="b2">▶️</button>
            <button className="b3">❤️</button>
          </part2>
        </body>
        <end>
          <part1>
            <c>CAST</c>
            {casts.map(cast =>(
              <Card
                img1={cast.img1}
                img2={cast.img2}
                name={cast.name}
                characters={cast.characters}
              />
            ))}
          </part1>
          <part2>
            <d>IN THE NEWS</d>
            {notices.map(notice =>(
              <Notice
                img={notice.img}
                text={notice.text}
                day={notice.day}
                corp={notice.corp}
              />
            ))}
          </part2>
        </end>
    </div>
  );
}

export default App;
