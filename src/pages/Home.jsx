import React from 'react';
import {Link} from 'react-router-dom';
import Photo from '../components/Photo.jsx';
const image=(name)=>`/images/${name}`;
export default function Home(){return <div className="wrap"><div className="slot hero has" style={{backgroundImage:`url(${image('pic1.jpg')})`,backgroundPosition:'center 42%'}}><div className="ov"/><div className="txt"><h1>GRILLO – Authentic Taste, Grilled to Perfection! 🔥</h1><p>Enjoy the finest breakfast and lunch dishes, freshly prepared with love and packed with flavor, for an unforgettable dining experience.</p><p className="tag">GRILLO… Every Bite Tells a Story!<br/>Authentic Taste. Fresh Ingredients. Unforgettable Moments.</p><div className="actions"><Link className="btn" to="/menu">Explore Menu</Link><Link className="btn secondary" to="/contact">Contact Us</Link></div></div></div><div className="gallery">{['pic2.jpg','pic3.jpg','pic5.jpg'].map(n=><Photo key={n} name={n}/>)}</div></div>}
