var GAME_LEVELS = [
  ["                                                    x                           ",
   "                                                    x                           ",
   "                                                    x                           ",
   "                                                    x                           ",
   "                                                    x                           ",
   "                                    o               x                           ",
   "                                          o o       x                           ",
   "                                         xxxxx      x                           ",
   "                                o                                               ",
   "                              xxxxx                                             ",
   "                                                           o o                  ",
   "                                                          xxxxx                 ",
   "                                                          xxxxx                 ",
   "                      xxxx                                xxxxx                 ",
   "               xxxxx                                      xxxxx                 ",
   "               x                                          xxxxx                 ",
   "     @     xxxxx   o o  d              d               e  xxxxx         o o     ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    xxxxxx         xxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                               x!!!!x    x!!!!!!!!!x                            ",
   "                               x!!!!x    x!!!!!!!!!x                            ",
   "                               x!!!!x    x!!!!!!!!!x                            ",
   "                               xxxxxx    xxxxxxxxxxx                            ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
["                                                                                     ",
"                                                                                      ",
"                                                                                      ",
"                                                        xxxxxxxxx                     ",
"                                                        x!!!!!!!x                     ",
"                                                        x!!!!!!!x                     ",
"                                                        x!!!!!!!x                     ",
"                                                         x!!!!!x                      ",
"                                                          xvvvx                       ",
"                 xxxxxxx                                                             ",
"                 x!!!!!x                                                              ",
"                 x!!!!!x                                                              ",
"                 x!!!!!x                                                              ",
"                  x!v!x                                                               ",
"  @                                                  o     o      o                   ",
" xxxxxxxx                                          xxxxxxxxxxxxxxxxxxx                ",
"                                                                                      ",
"          o o                                                                         ",
"        xxxxxxxx                     o  o  o                                  o  o    ",
"                                    xxxxxxxxxxxx                           xxxxxxxx   ",
"                 o  o                                                                 ",
"               xxxxxxxx           xx                                xxx               ",
"                                                                                      ",
"                              d                          o   o                        ",
"                          xxxxxxxxx                   xxxxxxxxxxxx                    ",
"                                                                                      ",
"                                                                                      ",
"                                                                                      ",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],


  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                  o                                           ",
   "                                                                 xxx                                          ",
   "                                     d         o    o                                  o       o              ",
   " xxx      o    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "         xxx                                                  x!!!!!!!x                                       ",
   "                                                               xv!!!vx                                        ",
   "                                                                                                              ",
   "         d                                                                                                    ",
   "    xxxxxxxxxxxx                                                                                              ",
   "                                                                                                              ",
   "                   o      o     o                                                                             ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                        ",
   "                                                |!!!!!!|                                                      ",
   "                                                                                     xx=             xx       ",
   "                                                                                             o o              ",
   "                                                                                            xxxxx             ",
   "                                                                                                              ",
   "                                                                                     xx=             xx       ",
   "                                            d                o    o                                           ",
   " xxxxxxxxxx      xx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                  x!!!!!x                                          |!!!!|                            x!!!!!x  ",
   "                  x!!!!!x                                                                             x!v!x   ",
   "         o        x!!!!!x                                                                                     ",
   "       xxxxx      xxxxxxx                                                                                     ",
   "                                                                                                              ",
   "                                                                                                              ",
   "      d                            o                       d                  o            o                o ",
   " xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx         xxx",
   "                                                                                                              ",
   "                                                                                                      xxxx    ",
   "                                                                                                              ",
   "   @                  o          o     o      o                            o          o            o          ",
   "xxxxxxxxxxxxxxxxxx   xxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
   
   
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   " x   x   x  x  xx x  xx x  xxxxx  xxxxx  xxx                                                                  ",
   "  x x x x   x  x xx  x xx  xxx    xx  x  xxx                                                                  ",
   "   x   x    x  x  x  x  x  xxxxx  x  xx   x                                                                   ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "   @        o      o     o      o        o       o                              d                             ",
   "   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
