class Timer {
    constructor(name) {
        this.name = name + ' ' || '';
        this.time = name ? [] : [new Date().getTime()] ;
        this.i = name ? 0 : 1;
        this.started = name ? false : true;
        this.paused = false;
    }
    start () {
        this.time = [new Date().getTime()];
        this.started = true;
        return `${this.name}Timer started`
    }
    restart () {
        this.time = [new Date().getTime()];
        this.started = true;
        this.i = 0;
        return `${this.name}Timer restarted`
    }
    fix (n) {
        this.i = n || 0;
    }
    lastNum () {
        return this.i - 1;
    }
    getTime(timestamp) {
        const ms = Math.floor(timestamp)
        const s = Math.floor(ms / 1000)
        const m = Math.floor(s / 60)
        return `${m>0?`${m}m`:''}${s % 60}s${ms % 1000}ms`
    }
    newTime() {
        const t = new Date().getTime()
        const timestamp = t - this.time[this.time.length - 1]
        this.time[this.time.length] = t
        this.i++;
        return this.getTime(timestamp)
    }
    lastTime() {
        return this.getTime(this.time[this.time.length - 1] - this.time[this.time.length - 2])
    }
    totalTime() {
        return this.getTime(this.time[this.time.length - 1] - this.time[0])
    }
    avgTime() {
        let avg = 0;
        for (let i = 1; i < this.time.length; i++) {
            avg += this.time[i] - this.time[i - 1]
        }
        avg /= this.time.length - 1
        return this.getTime(avg)
    }
    num() {
        return this.i;
    }
}

module.exports = Timer;