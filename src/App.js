import './App.css'
import Info  from './components/movie/index';
import Card from './components/cast/index';
import Notice from './components/notice/index';
import {casts} from './data/index';
import {notices} from './data/notice';

function App() {
  return (
    <div className="container">    
        <header>
        <img  style={{height: 80, width: 80, marginTop: 20}}
        alt="logo" src='https://www.creativefabrica.com/wp-content/uploads/2020/09/09/Fish-Logo-Graphics-5365128-1.jpg'/>
        <h1>MOFISH</h1>
        <p>in theater</p>
        <p1>coming soon</p1>
        <p2>midnight</p2>
        <input style={{height: 15, width: 140, marginTop:45, marginLeft:40, borderRadius: 10}}
        type="text" name="name"/>
        <img style={{width: 50, height:50, marginTop:32, marginLeft:40,backgroundColor: 'white'}} 
        alt="user" src="http://simpleicon.com/wp-content/uploads/user1.png"/>
        </header>
        <body>
          <part1>
            <img style={{width: 350, height:350, marginLeft: 16,marginTop: 35}}
            alt='movi' src='https://www.themoviedb.org/t/p/w500/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg'/>
          </part1>
          <part2>
            <Info/>
            <button className="b1">GET TICKET</button>
            <button className="b2">▶️</button>
            <button className="b3">❤️</button>
          </part2>
        </body>
        <end style={{marginTop: 30}}>
          <part1 style={{marginLeft: 13}}>
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
          <part2 style={{marginLeft: 30}}>
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
