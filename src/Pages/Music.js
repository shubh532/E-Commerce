import Style from "./Music.module.css"

function Music() {
  return (
    <div className={Style.MusicContainer}>
      <h1 className={Style.musicHeading}>Music</h1>
      <div className={Style.musicData} >
        <span className={Style.Date}>JULY 16</span>
        <span>DETROTT,MI</span>
        <span className={Style.span2}>DTE ENERGY MUSIC THEATER</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>JUL19</span>
        <span>TORONTO,ON</span>
        <span className={Style.span2}>BUDWEISER STAGE</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <spanc className={Style.Date}>JULY 22 </spanc>
        <span>BRISTOW, VA</span>
        <span className={Style.span2}>JIGGY LUBE LIVE</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>JULY 29</span>
        <span>PHOENIX, AZ</span>
        <span className={Style.span2}>AK-CHIN PAVILION</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>AUG 2</span>
        <span>LAS VEGAS, NV</span>
        <span className={Style.span2}>T-MOBILE ARENA</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>AUG 7</span>
        <span>CONCORD, CA</span>
        <span className={Style.span2}>CONCORD PAVILION</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
    </div>
  );
}

export default Music;
