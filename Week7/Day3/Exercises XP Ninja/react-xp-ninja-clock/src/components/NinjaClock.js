import React from 'react';

/**
 * NinjaClock: pixel-match style for di-react-clock.surge.sh
 * Class component per exercise instructions.
 */
class NinjaClock extends React.Component {
  constructor(props){
    super(props);
    this.state = this.getParts(new Date());
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState(this.getParts(new Date()));
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  getParts = (d) => {
    const year = d.getFullYear();
    const month = d.getMonth();      // 0-11
    const weekday = d.getDay();      // 0-6
    const day = d.getDate();         // 1-31
    const hour = d.getHours();       // 0-23
    const minute = d.getMinutes();   // 0-59
    const second = d.getSeconds();   // 0-59

    // week-of-month (1-based)
    const weekOfMonth = Math.floor((day - 1) / 7) + 1;

    return {year,month,weekday,day,hour,minute,second,weekOfMonth};
  };

  range(n){return Array.from({length:n},(_,i)=>i);}

  /* Render a ring: items array of strings; active index; CSS className */
  renderRing(items, activeIdx, cls){
    const count = items.length;
    const degStep = 360 / count;
    return (
      <div className={`clock-ring ${cls}`}>
        {items.map((label,i)=>{
          const angle = i * degStep;
          const style = {
            transform:`rotate(${angle}deg) translateY(calc(-1 * var(--r)))`
          };
          return (
            <span
              key={i}
              className={`clock-tick${i===activeIdx?' active':''}`}
              style={style}
            >
              {label}
            </span>
          );
        })}
      </div>
    );
  }

  pad(n){return String(n).padStart(2,'0');}

  render(){
    const {year,month,weekday,day,hour,minute,second,weekOfMonth} = this.state;

    const daysInMonth = new Date(year, month+1, 0).getDate();

    const monthItems = this.months;
    const weekdayItems = this.weekdays;
    const dayItems = Array.from({length:daysInMonth},(_,i)=>String(i+1));
    const hourItems = Array.from({length:24},(_,i)=>this.pad(i));
    const minuteItems = Array.from({length:60},(_,i)=>this.pad(i));
    const secondItems = minuteItems; // 00-59

    const digital = `${this.pad(hour)}:${this.pad(minute)}:${this.pad(second)}`;
    const summary = `${month+1} month week ${weekOfMonth} ${day} day ${hour} hr ${minute} min ${second} sec`;

    return (
      <div className="clock-root" role="img" aria-label="React radial clock showing current date and time">
        {/* overlays */}
        <div className="clock-overlay-year">{year} Year</div>
        <div className="clock-overlay-month">{this.months[month]}</div>

        {/* center summary */}
        <div className="clock-center">
          {summary}
          <span className="clock-center-sub">{digital}</span>
        </div>

        {this.renderRing([String(year)],0,'year')}
        {this.renderRing(monthItems, month,'month')}
        {this.renderRing(weekdayItems, weekday,'weekday')}
        {this.renderRing(dayItems, day-1,'day')}
        {this.renderRing(hourItems, hour,'hour')}
        {this.renderRing(minuteItems, minute,'minute')}
        {this.renderRing(secondItems, second,'second')}

        <div className="clock-linear">
          {year}-{this.pad(month+1)}-{this.pad(day)} {digital}
        </div>
      </div>
    );
  }
}

export default NinjaClock;
