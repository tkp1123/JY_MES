class DateUtil {
    //日期转时间戳
    dateValue(val) {
        if (!val) return ''
        let date = new Date(val).valueOf()
        return date
    }
    yearData(date) {
        let year = date.getFullYear()
        return year
    }
    monthData(date) {
        let month = date.getMonth() + 1
        if (month >= 1 && month <= 9) {
            month = `0${month}`
        }
        return month
    }
    dayData(date) {
        let day = date.getDate()
        if (day >= 1 && day <= 9) {
            day = `0${day}`
        }
        return day
    }
    hourData(date) {
        let hour = date.getHours()
        if (hour >= 1 && hour <= 9) {
            hour = `0${hour}`
        }
        return hour
    }
    minutesData(date) {
        let minutes = date.getMinutes()
        if (minutes >= 1 && minutes <= 9) {
            minutes = `0${minutes}`
        }
        return minutes
    }
    secondsData(date) {
        let seconds = date.getSeconds()
        if (seconds >= 1 && seconds <= 9) {
            seconds = `0${seconds}`
        }
        return seconds
    }
    //获取当月第一天的时间戳
    getCurrenMonthFirst(date) {
        let timeStamp = date
        timeStamp.setDate(1)
        return timeStamp
    }
    //获取当月最后一天的时间戳
    getCurrenMonthLast(date) {
        let timeStamp = date
        let currentMonth = timeStamp.getMonth();
        let nextMonth = ++currentMonth;
        let nextMonthFirstDay = new Date(timeStamp.getFullYear(), nextMonth, 1);
        let oneDay = 1000 * 60 * 60 * 24;
        return new Date(nextMonthFirstDay - oneDay);
    }
    //完整时间格式
    fullFormatter(date) {
        let year = this.yearData(date)
        let month = this.monthData(date)
        let day = this.dayData(date)
        let hour = this.hourData(date)
        let minutes = this.minutesData(date)
        let seconds = this.secondsData(date)
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds

    }
}
export const dateUtil = new DateUtil()