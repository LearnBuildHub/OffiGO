import Link from 'next/link';
export default function BottomNav({active='home'}:{active?:string}){return <div className="bottom-nav">{[['home','⌂','Home','/'],['rides','▣','My Rides','/my-rides'],['messages','▤','Messages','#'],['profile','♙','Profile','/login']].map(x=><Link className={active===x[0]?'active':''} key={x[0]} href={x[3]}><b>{x[1]}</b><small>{x[2]}</small></Link>)}</div>}
