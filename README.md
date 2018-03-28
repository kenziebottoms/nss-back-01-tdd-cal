# Node `cal`
If you type `cal` into your terminal, you will see an output of the current month in calendar form. Type `cal` and just a year, you'll see a whole year. Type `cal` plus a month and any year from 0 to 9999, and you'll see that month's calendar. It's pretty cool. Guess what? You can build a clone of `cal` right now.

All you need is a little help from Christian Zeller, the man behind [Zeller's congruence](https://en.wikipedia.org/wiki/Zeller's_congruence). Thanks to him, we can calculate the day of the week of the first day of any month of (almost) any year.

I used this formula:
![assets/zeller.svg](assets/zeller.svg)

where:

- `h` = the day of the week

    _(0 = Saturday, 1 = Sunday, 2 = Monday, ..., 6 = Friday)_
- `q` = the day of the month (always 1)
- `m` = the month

    _(3 = March, 4 = April, 5 = May, ..., 14 = February)_
- `K` = `year % 100`
- `J` = `year / 100`

```js
module.exports = (m, y) => {
  if (m < 3) {
    m += 12;
    y -= 1;
  }
  let h = 1;
  h += parseInt((13*(m+1))/5);
  h += y % 100;
  h += parseInt((y%100)/4);
  h += parseInt(y/400);
  h += 5 * parseInt(y/100);
  h %= 7;
  return parseInt(h);
};
```

## Requirements
The base requirement is to build a command line app using TDD, that prints any month, from 1754 to 9999.

The primary focus of this project is developing a test suite and thinking modularly, not the app logic itself.

Make sure to cover as many edge cases as you can. Play with the real `cal` by passing in all kinds of numbers and strings to the month and year arguments. See what works and what breaks it. What kind of error messaging do you get back?

### Expected:

No arguments:

```bash
$ cal
     March 2018       
Su Mo Tu We Th Fr Sa  
             1  2  3  
 4  5  6  7  8  9 10  
11 12 13 14 15 16 17  
18 19 20 21 22 23 24  
25 26 27 28 29 30 31 
```
```bash
$ ./cal.js
     March 2018
Su Mo Tu We Th Fr Sa
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30 31
```

Two arguments (month, year):

```bash
$ cal mar 2018
     March 2018       
Su Mo Tu We Th Fr Sa  
             1  2  3  
 4  5  6  7  8  9 10  
11 12 13 14 15 16 17  
18 19 20 21 22 23 24  
25 26 27 28 29 30 31 
```
```bash
$ ./cal.js mar 18
     March 2018
Su Mo Tu We Th Fr Sa
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30 31
```

## Bonus
- [ ] Print an entire year

```bash
$ cal 2018
                            2018
      January               February               March          
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
    1  2  3  4  5  6               1  2  3               1  2  3  
 7  8  9 10 11 12 13   4  5  6  7  8  9 10   4  5  6  7  8  9 10  
14 15 16 17 18 19 20  11 12 13 14 15 16 17  11 12 13 14 15 16 17  
21 22 23 24 25 26 27  18 19 20 21 22 23 24  18 19 20 21 22 23 24  
28 29 30 31           25 26 27 28           25 26 27 28 29 30 31  
                                                                  

       April                  May                   June          
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
 1  2  3  4  5  6  7         1  2  3  4  5                  1  2  
 8  9 10 11 12 13 14   6  7  8  9 10 11 12   3  4  5  6  7  8  9  
15 16 17 18 19 20 21  13 14 15 16 17 18 19  10 11 12 13 14 15 16  
22 23 24 25 26 27 28  20 21 22 23 24 25 26  17 18 19 20 21 22 23  
29 30                 27 28 29 30 31        24 25 26 27 28 29 30  
                                                                  

        July                 August              September        
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
 1  2  3  4  5  6  7            1  2  3  4                     1  
 8  9 10 11 12 13 14   5  6  7  8  9 10 11   2  3  4  5  6  7  8  
15 16 17 18 19 20 21  12 13 14 15 16 17 18   9 10 11 12 13 14 15  
22 23 24 25 26 27 28  19 20 21 22 23 24 25  16 17 18 19 20 21 22  
29 30 31              26 27 28 29 30 31     23 24 25 26 27 28 29  
                                            30                    

      October               November              December        
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
    1  2  3  4  5  6               1  2  3                     1  
 7  8  9 10 11 12 13   4  5  6  7  8  9 10   2  3  4  5  6  7  8  
14 15 16 17 18 19 20  11 12 13 14 15 16 17   9 10 11 12 13 14 15  
21 22 23 24 25 26 27  18 19 20 21 22 23 24  16 17 18 19 20 21 22  
28 29 30 31           25 26 27 28 29 30     23 24 25 26 27 28 29  
                                            30 31   
```

- [ ] Add a symlink or install the completed code a global module on your system.

```bash
$ cal 03 2018 # no './' needed
     March 2018       
Su Mo Tu We Th Fr Sa  
             1  2  3  
 4  5  6  7  8  9 10  
11 12 13 14 15 16 17  
18 19 20 21 22 23 24  
25 26 27 28 29 30 31 
```