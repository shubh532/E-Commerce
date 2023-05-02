import Style from "./Music.module.css"

function Music() {
  return (
    <div className={Style.MusicContainer}>
      <h1 className={Style.musicHeading}>Music</h1>
      <div className={Style.musicData} >
        <span className={Style.Date}>JULY 16</span>
        <span>DETROTT,MI</span>
        <span >DTE ENERGY MUSIC THEATER</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>JUL19</span>
        <span>TORONTO,ON</span>
        <span >BUDWEISER STAGE</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>JULY 22 </span>
        <span>BRISTOW, VA</span>
        <span >JIGGY LUBE LIVE</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>JULY 29</span>
        <span>PHOENIX, AZ</span>
        <span >AK-CHIN PAVILION</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>AUG 2</span>
        <span>LAS VEGAS, NV</span>
        <span >T-MOBILE ARENA</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
      <div className={Style.musicData}>
        <span className={Style.Date}>AUG 7</span>
        <span>CONCORD, CA</span>
        <span >CONCORD PAVILION</span>
        <button className={Style.ticketBtn}>BUY TICKETS</button>
      </div>
    </div>
  );
}

export default Music;
