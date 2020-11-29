// const root_url = "https://limitless-headland-02051.herokuapp.com/";


let juniorTest =[
  [{
          //Mutual Question
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      //geometry question
      {
          questionText: "How many lines are in this picture",
          image: 'https://www.upsieutoc.com/images/2020/11/22/anh-de-GPA-5.png',
          answerOptions: [{
                  answerText: "13 lines",
                  isCorrect: false
              },
              {
                  answerText: "16 lines",
                  isCorrect: true
              },
              {
                  answerText: "15 lines",
                  isCorrect: false
              },
              {
                  answerText: "18 lines",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "More than 13 lines"
              },
              {
                  hint2: "Less than 18 lines"
              },
              {
                  hint3: "More than 15 lines"
              }
          ],
          correctAnswer: "16 lines"
  
      },
      //convert question
      {
          questionText: "Convert into decimal: A F C E",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "10 15 12 14",
                  isCorrect: true
              },
              {
                  answerText: "12 10 13 14",
                  isCorrect: false
              },
              {
                  answerText: "13 10 12 15",
                  isCorrect: false
              },
              {
                  answerText: "11 10 13 15",
                  isCorrect: false
              }
          ],
          hints: [{
                  hint1: "Look at the hexadecimal sector"
              },
              {
                  hint2: "correct answer ends with 14"
              }
          ],
          correctAnswer: "10 15 12 14"
      },
      //convert question
      {
          questionText: "Convert into octal from binary : 0100 0111 1000 1010",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0100 0110 1000 1010",
                  isCorrect: false
              },
              {
                  answerText: "4 7 10 12",
                  isCorrect: true
              },
              {
                  answerText: "13 11 20 00",
                  isCorrect: false
              },
              {
                  answerText: "8 7 6 12 ",
                  isCorrect: false
              }
          ],
          hints: [{
                  hint1: "Look at the binary sector"
              },
              {
                  hint2: "Correct answer ends with 12"
              }
          ],
          correctAnswer: "4 7 10 12"
      },
      //brainOut question
      {
          questionText: "Find x: 1 = 5; 2 = 15; 3 = 215; 4 = 3215; 5 = x",
          answerOptions: [{
                  answerText: "43215",
                  isCorrect: true
              },
              {
                  answerText: "4215",
                  isCorrect: false
              },
              {
                  answerText: "1",
                  isCorrect: false
              }
          ],
          hints: [{
                  hint1: "Be Patient! This is a strange question"
              },
              {
                  hint2: "The first '5' is different from the last one!"
              }
          ],
          correctAnswer: "43215"
      }
  ],
  [{
          //Mutual Question
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      //geometry question
      {
          questionText: "Which figure illustrate the radius of the circle?",
          image: 'https://www.upsieutoc.com/images/2020/11/22/anh-de-GPA-6.png',
          answerOptions: [{
                  answerText: "A",
                  isCorrect: true
              },
              {
                  answerText: "B",
                  isCorrect: false
              },
              {
                  answerText: "C",
                  isCorrect: false
              },
          ],
          hints: [{
              hint1: "What is radius?"
          }],
          correctAnswer: "A"
      },
      // Convert question
      {
          questionText: "Convert from binary to decimal: 0000 0010 0101 1000 0001 0010 ",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "1 0 0 8 2 0 ",
                  isCorrect: false
              },
              {
                  answerText: "1 3 4 5 6 6 ",
                  isCorrect: false
              },
              {
                  answerText: "0 2 5 8 1 2",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at decimal sector"
              },
              {
                  hint2: "Convert to decimal from binary"
              },
          ],
          correctAnswer: "0 2 5 8 1 2 "
      },
      //Convert question
      {
          questionText: "Convert to decimal: 0000 0001 0010 0011",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 2 4 6 ",
                  isCorrect: false
              },
              {
                  answerText: "0 1 2 5 ",
                  isCorrect: false
              },
              {
                  answerText: "0 1 2 3 ",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to decimal from binary"
              },
          ],
          correctAnswer: "0 1 2 3"
      },
      //brainOut question
      {
          questionText: "Count X : AA + AA + AA = 30; AA + B + B = 20 ; A + CC + CC = 9;  B + C * A = X",
          answerOptions: [{
                  answerText: "15",
                  isCorrect: true
              },
              {
                  answerText: "14",
                  isCorrect: false
              },
              {
                  answerText: "20",
                  isCorrect: false
              },
          ],
          hints: [{
              hint1: "AA=10; A = 5"
          }, {
              hint2: "B=5"
          }],
          correctAnswer: "15"
      },
  ],
   [{
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      // Geometry
      {
          questionText: "How many triangles are there?",
          image: 'https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-1.png',
          answerOptions: [{
                  answerText: "Eleven",
                  isCorrect: true
              },
              {
                  answerText: "Eight",
                  isCorrect: false
              },
              {
                  answerText: "Fifteen",
                  isCorrect: false
              },
              {
                  answerText: "Sixteen",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "More than 8 triangles"
              },
              {
                  hint2: "Less than 16 triangles"
              },
          ],
          correctAnswer: "Eleven"
      },
      //Convert to binary
      {
          questionText: "Convert into Binary: 1 A ",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0001 1010",
                  isCorrect: true
              },
              {
                  answerText: "12 10 ",
                  isCorrect: false
              },
              {
                  answerText: "00012 1011",
                  isCorrect: false
              },
          ],
          hints: [{
              hint1: "Which base has A? "
          }, {
              hint2: "Hexadecimal"
          }],
          correctAnswer: "0001 1010"
      },
      //Convert into Decimal
      {
          questionText: "Convert into Decimal: '0000 0010 1010 1011'",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "7 1 3 4",
                  isCorrect: false
              },
              {
                  answerText: "0 2 10 11",
                  isCorrect: true
              },
              {
                  answerText: "1 3 5 7",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: " first number is less than 3"
              },
              {
                  hint2: " last number is bigger than 10"
              },
          ],
          correctAnswer: "0 2 10 11"
      },
      //BrainOut question
      {
          questionText: "Add 2 matches to get the right equation",
          image: 'https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-7.png',
          answerOptions: [{
                  answerText: "8+8=16",
                  isCorrect: true
              },
              {
                  answerText: "10-1=9",
                  isCorrect: false
              },
              {
                  answerText: "6+2=8",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Right-hand side remains unchanged "
              },
              {
                  hint2: "This equation is a summation"
              },
          ],
          correctAnswer: "8+8=16"
      },
  ],
  [{
          //Mutual Question
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      //geometry question
      {
          questionText: "How many triangles are there?",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-1.png",
          answerOptions: [{
                  answerText: 'Eight',
                  isCorrect: false
              },
              {
                  answerText: "Eleven",
                  isCorrect: true
              },
              {
                  answerText: "Ten",
                  isCorrect: false
              },
              {
                  answerText: "Nine",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "More than eight"
              },
              {
                  hint2: "Less or equal than eleven"
              }
          ],
      },
      // Convert
  
      {
          questionText: "Convert to Hexadecimal: 0000 0000 0001 0010 0000 0010",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 1 1 0 0 2",
                  isCorrect: false
              },
              {
                  answerText: "0 0 1 2 0 1",
                  isCorrect: false
              },
              {
                  answerText: "0 0 1 2 0 2",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to Hexa from Binary"
              },
          ],
          correctAnswer: "0 0 1 2 0 2"
      },
  
      //Convert
      {
          questionText: "Convert to decimal: 0100 0010 0110 0111",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 3 5 6 ",
                  isCorrect: false
              },
              {
                  answerText: "0 2 1 5 ",
                  isCorrect: false
              },
              {
                  answerText: "4 2 6 7 ",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to decimal from binary"
              },
          ],
          correctAnswer: "4 2 6 7"
      },
  
      //brainOut
       {
          questionText: "Count X : AA + AA + AA = 30; AA + B + B = 20 ; A + CC + CC = 9;  B + C * A = X",
          answerOptions: [{
                  answerText: "15",
                  isCorrect: true
              },
              {
                  answerText: "14",
                  isCorrect: false
              },
              {
                  answerText: "20",
                  isCorrect: false
              },
          ],
          hints: [{
              hint1: "AA=10; A = 5"
          }, {
              hint2: "B=5"
          }],
          correctAnswer: "15"
      },
  ],
  [{
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      //geometry question
      {
          questionText: "How many triangles are there?",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-1.png",
          answerOptions: [{
                  answerText: "Eight",
                  isCorrect: false
              },
              {
                  answerText: "Eleven",
                  isCorrect: true
              },
              {
                  answerText: "Nine",
                  isCorrect: false
              },
              {
                  answerText: "Sixteen",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "More than eight"
              },
              {
                  hint2: "Less than sixteen"
              }
          ],
          correctAnswer: "Eleven"
      },
      // Convert
  
      {
          questionText: "Convert to Hexadecimal: 0000 0011 0101 0010 0001 0010",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 4 5 2 1 2",
                  isCorrect: false
              },
              {
                  answerText: "0 2 5 2 1 1",
                  isCorrect: false
              },
              {
                  answerText: "0 3 5 2 1 2",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to Hexadecimal from Binary"
              },
          ],
          correctAnswer: "0 3 5 2 1 2"
      },
  
      //Convert
      {
          questionText: "Convert to Decimal: 0001 0011 0010 0011",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 2 4 6 ",
                  isCorrect: false
              },
              {
                  answerText: "0 1 2 5 ",
                  isCorrect: false
              },
              {
                  answerText: "1 3 2 3 ",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to Decimal from Binary"
              },
          ],
          correctAnswer: "1 3 2 3"
      },
  
      //brainOut
      {
          questionText: "Count X : 5 + 3 = 8; 9 + 1 = 810; 8+6 = 214; 5 + 4 = 19; 7 + 3  = X ",
          answerOptions: [{
                  answerText: "410",
                  isCorrect: true
              },
              {
                  answerText: "40",
                  isCorrect: false
              },
              {
                  answerText: "30",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "5 - 3 = 2;  9 - 1 = 8;  8 - 6 = 2; 5 - 4 = 1"
              },
              {
                  hint2: "5 + 3 = 8;  9 + 1 = 10"
              }
          ],
          correctAnswer: "410"
      },
  ],
  
  [{
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      //geometry question
      {
          questionText: "Which shows the radius of the circle?",
          image: 'https://www.upsieutoc.com/images/2020/11/22/anh-de-GPA-6.png',
          answerOptions: [{
                  answerText: "A",
                  isCorrect: true
              },
              {
                  answerText: "B",
                  isCorrect: false
              },
              {
                  answerText: "C",
                  isCorrect: false
              },
          ],
          hints: [{
              hint1: "What is radius?"
          }],
          correctAnswer: "A"
      },
      {
          questionText: "Convert to Hexadecimal: 0000 0011 0101 0010 0001 0010",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 4 5 2 1 2",
                  isCorrect: false
              },
              {
                  answerText: "0 2 5 2 1 1",
                  isCorrect: false
              },
              {
                  answerText: "0 3 5 2 1 2",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to Hexadecimal from Binary"
              },
          ],
          correctAnswer: "0 3 5 2 1 2"
      },
  
      //Convert
      {
          questionText: "Convert to decimal: 0101 0010 0110 0111",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 3 5 6 ",
                  isCorrect: false
              },
              {
                  answerText: "0 2 1 5 ",
                  isCorrect: false
              },
              {
                  answerText: "5 2 6 7 ",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to decimal from binary"
              },
          ],
          correctAnswer: "5 2 6 7"
      },
  
      //brainOut
      {
          questionText: "Remove any 2 matches to form an equilateral triangle",
          image: "https://www.upsieutoc.com/images/2020/11/25/anh-de-GPA-4.png",
          answerOptions: [{
                  answerText: "BC & BE",
                  isCorrect: true
              },
              {
                  answerText: "BC & DE",
                  isCorrect: false
              },
              {
                  answerText: "AC & BE",
                  isCorrect: false
              }
          ],
          hints: [{
              hint1: "Try to move BC"
          }],
          correctAnswer: "BC & BE"
  
      }
  ],
  
 [{
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      //geometry question
      {
          questionText: "How many squares are there?",
          image: 'https://www.upsieutoc.com/images/2020/11/25/anh-de-GPA-8.png',
          answerOptions: [{
                  answerText: "Five",
                  isCorrect: true
              },
              {
                  answerText: "Ten",
                  isCorrect: false
              },
              {
                  answerText: "Nine",
                  isCorrect: false
              },
          ],
          hints: [{
              hint1: "Square is less than nine"
          }],
          correctAnswer: "Eleven"
      },
      // Convert
  
      {
          questionText: "Convert to Hexadecimal: 0000 0000 0001 0010 0000 0010 ",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "1 1 2 2 0 0",
                  isCorrect: false
              },
              {
                  answerText: "0 0 1 1 0 1",
                  isCorrect: false
              },
              {
                  answerText: "0 0 1 2 0 2",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to Hexa from Binary"
              },
          ],
          correctAnswer: " 0 0 1 2 0 2"
      },
  
      //Convert
      {
          questionText: "Convert to decimal: 0100 0010 0110 0111",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 3 5 6 ",
                  isCorrect: false
              },
              {
                  answerText: "0 2 1 5 ",
                  isCorrect: false
              },
              {
                  answerText: "4 2 6 7 ",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to decimal from binary"
              },
          ],
          correctAnswer: "4 2 6 7"
      },
  
      //brainOut
      {
          questionText: "Add 2 matches to get the right equation",
          image: 'https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-7.png',
          answerOptions: [{
                  answerText: "8+8=16",
                  isCorrect: true
              },
              {
                  answerText: "10-1=9",
                  isCorrect: false
              },
              {
                  answerText: "6+2=8",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Right-hand side stays unchanged "
              },
              {
                  hint2: "Equation is a summation"
              },
          ],
          correctAnswer: " 8+8=16"
      },
  ],
  [{
          //Mutual Question
          questionText: "Look at the O'clock in Ha Noi, what time is it now?",
          image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
          answerOptions: [{
                  answerText: "5 AM",
                  isCorrect: true
              },
              {
                  answerText: "6 AM",
                  isCorrect: false
              },
              {
                  answerText: "7 AM",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "Vietnamese clock but you are in Russia"
              },
              {
                  hint2: "Moscow time: -4 "
              },
          ],
          correctAnswer: "5 AM"
      },
      {
          questionText: "How many triangles are there?",
          image: 'https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-1.png',
          answerOptions: [{
                  answerText: "Eleven",
                  isCorrect: true
              },
              {
                  answerText: "Eight",
                  isCorrect: false
              },
              {
                  answerText: "Fifteen",
                  isCorrect: false
              },
              {
                  answerText: "Sixteen",
                  isCorrect: false
              },
          ],
          hints: [{
                  hint1: "More than 8 triangles"
              },
              {
                  hint2: "Less than 16 triangles"
              },
          ],
          correctAnswer: "Eleven"
      },
      {
          questionText: "Convert the following into Decimal: 1101 1111 0110 0101",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "10 12 15 11",
                  isCorrect: false
              },
              {
                  answerText: "12 10 1 0",
                  isCorrect: false
              },
              {
                  answerText: "13 15 6 5",
                  isCorrect: true
              },
          ],
          hints: [{
              hint1: "Which base has 15? "
          }, {
              hint2: "Convert to Decimal from Binary"
          }],
          correctAnswer: "13 15 6 5"
      },
      {
          questionText: "Convert to Hexadecimal: 0000 0011 0101 0010 0001 0010",
          image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
          answerOptions: [{
                  answerText: "0 4 5 2 1 2",
                  isCorrect: false
              },
              {
                  answerText: "0 2 5 2 1 1",
                  isCorrect: false
              },
              {
                  answerText: "0 3 5 2 1 2",
                  isCorrect: true
              },
          ],
          hints: [{
                  hint1: "Look at binary sector"
              },
              {
                  hint2: "Convert to Hexadecimal from Binary"
              },
          ],
          correctAnswer: "0 3 5 2 1 2"
      },
      {
          questionText: "Remove any 2 matches to form an equilateral triangle",
          image: "https://www.upsieutoc.com/images/2020/11/25/anh-de-GPA-4.png",
          answerOptions: [{
                  answerText: "BC & BE",
                  isCorrect: true
              },
              {
                  answerText: "BC & DE",
                  isCorrect: false
              },
              {
                  answerText: "AC & BE",
                  isCorrect: false
              }
          ],
          hints: [{
              hint1: "Try to move BC"
          }],
          correctAnswer: "BC & BE"
  
      }
  ]
]



let seniorTest = [
    [{
            //Mutual Question
            questionText: "Look at the O'clock in Ha Noi, what time is it now?",
            image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
            answerOptions: [{
                    answerText: "5 AM",
                    isCorrect: true
                },
                {
                    answerText: "6 AM",
                    isCorrect: false
                },
                {
                    answerText: "7 AM",
                    isCorrect: false
                },
            ],
            hints: [{
                    hint1: "Vietnamese clock but you are in Russia"
                }
            ],
            correctAnswer: "5 AM"
        },
        //geometry question
        {
            questionText: "How many lines are in this picture",
            image: 'https://www.upsieutoc.com/images/2020/11/22/anh-de-GPA-5.png',
            answerOptions: [{
                    answerText: "13 lines",
                    isCorrect: false
                },
                {
                    answerText: "16 lines",
                    isCorrect: true
                },
                {
                    answerText: "15 lines",
                    isCorrect: false
                },
                {
                    answerText: "18 lines",
                    isCorrect: false
                },
            ],
            hints: [{
                    hint1: "More than 13 lines"
                }                
            ],
            correctAnswer: "16 lines"

        },
        //convert question
        {
            questionText: "Convert into decimal: A F C E",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "10 15 12 14",
                    isCorrect: true
                },
                {
                    answerText: "12 10 13 14",
                    isCorrect: false
                },
                {
                    answerText: "13 10 12 15",
                    isCorrect: false
                },
                {
                    answerText: "11 10 13 15",
                    isCorrect: false
                }
            ],
            hints: [{
                    hint1: "Look at the hexadecimal sector"
                }
            ],
            correctAnswer: "10 15 12 14"
        },
        //convert question
        {
            questionText: "Convert into octal from binary : 0100 0111 1000 1010",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "0100 0110 1000 1010",
                    isCorrect: false
                },
                {
                    answerText: "4 7 10 12",
                    isCorrect: true
                },
                {
                    answerText: "13 11 20 00",
                    isCorrect: false
                },
                {
                    answerText: "8 7 6 12 ",
                    isCorrect: false
                }
            ],
            hints: [{
                    hint1: "Look at the binary sector"
                }
            ],
            correctAnswer: "4 7 10 12"
        },
        //brainOut question
        {
            questionText: "Find x: 1 = 5; 2 = 15; 3 = 215; 4 = 3215; 5 = x",
            answerOptions: [{
                    answerText: "43215",
                    isCorrect: true
                },
                {
                    answerText: "4215",
                    isCorrect: false
                },
                {
                    answerText: "1",
                    isCorrect: false
                }
            ],
            hints: [{
                    hint1: "Be Patient! This is a strange question"
                }
            ],
            correctAnswer: "43215"
        }
    ],
    [{
            //Mutual Question
            questionText: "Look at the O'clock in Ha Noi, what time is it now?",
            image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
            answerOptions: [{
                    answerText: "5 AM",
                    isCorrect: true
                },
                {
                    answerText: "6 AM",
                    isCorrect: false
                },
                {
                    answerText: "7 AM",
                    isCorrect: false
                },
            ],
            hints: [{
                    hint1: "Vietnamese clock but you are in Russia"
                }
            ],
            correctAnswer: "5 AM"
        },
        //geometry question
        {
            questionText: "Which figure illustrate the radius of the circle?",
            image: 'https://www.upsieutoc.com/images/2020/11/22/anh-de-GPA-6.png',
            answerOptions: [{
                    answerText: "A",
                    isCorrect: true
                },
                {
                    answerText: "B",
                    isCorrect: false
                },
                {
                    answerText: "C",
                    isCorrect: false
                },
            ],
            hints: [{
                hint1: "What is radius?"
            }],
            correctAnswer: "A"
        },
        // Convert question
        {
            questionText: "Convert from binary to decimal: 0000 0010 0101 1000 0001 0010 ",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "1 0 0 8 2 0 ",
                    isCorrect: false
                },
                {
                    answerText: "1 3 4 5 6 6 ",
                    isCorrect: false
                },
                {
                    answerText: "0 2 5 8 1 2",
                    isCorrect: true
                },
            ],
            hints: [{
                    hint1: "Look at decimal sector"
                }
            ],
            correctAnswer: "0 2 5 8 1 2 "
        },
        //Convert question
        {
            questionText: "Convert to decimal: 0000 0001 0010 0011",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "0 2 4 6 ",
                    isCorrect: false
                },
                {
                    answerText: "0 1 2 5 ",
                    isCorrect: false
                },
                {
                    answerText: "0 1 2 3 ",
                    isCorrect: true
                },
            ],
            hints: [{
                    hint1: "Look at binary sector"
                },
                {
                    hint2: "Convert to decimal from binary"
                },
            ],
            correctAnswer: "0 1 2 3"
        },
        //brainOut question
        {
            questionText: "Count X : AA + AA + AA = 30; AA + B + B = 20 ; A + CC + CC = 9;  B + C * A = X",
            answerOptions: [{
                    answerText: "15",
                    isCorrect: true
                },
                {
                    answerText: "14",
                    isCorrect: false
                },
                {
                    answerText: "20",
                    isCorrect: false
                },
            ],
            hints: [{
                hint1: "AA=10; A = 5"
            }],
            correctAnswer: "15"
        },
    ],
    [{
            //Mutual Question
            questionText: "Look at the O'clock in Ha Noi, what time is it now?",
            image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
            answerOptions: [{
                    answerText: "5 AM",
                    isCorrect: true
                },
                {
                    answerText: "6 AM",
                    isCorrect: false
                },
                {
                    answerText: "7 AM",
                    isCorrect: false
                },
            ],
            hints: [{
                    hint1: "Vietnamese clock but you are in Russia"
                },
                {
                    hint2: "Moscow time: -4 "
                },
            ],
            correctAnswer: "5 AM"
        },
        //geometry question
        {
            questionText: "How many triangles are there?",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-1.png",
            answerOptions: [{
                    answerText: 'Eight',
                    isCorrect: false
                },
                {
                    answerText: "Eleven",
                    isCorrect: true
                },
                {
                    answerText: "Ten",
                    isCorrect: false
                },
                {
                    answerText: "Nine",
                    isCorrect: false
                },
            ],
            hints: [{
                    hint1: "More than eight"
                }
            ],
        },
        // Convert

        {
            questionText: "Convert to Hexadecimal: 0000 0000 0001 0010 0000 0010",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "0 1 1 0 0 2",
                    isCorrect: false
                },
                {
                    answerText: "0 0 1 2 0 1",
                    isCorrect: false
                },
                {
                    answerText: "0 0 1 2 0 2",
                    isCorrect: true
                },
            ],
            hints: [{
                    hint1: "Look at binary sector"
                }
            ],
            correctAnswer: "0 0 1 2 0 2"
        },

        //Convert
        {
            questionText: "Convert to decimal: 0100 0010 0110 0111",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "0 3 5 6 ",
                    isCorrect: false
                },
                {
                    answerText: "0 2 1 5 ",
                    isCorrect: false
                },
                {
                    answerText: "4 2 6 7 ",
                    isCorrect: true
                },
            ],
            hints: [{
                    hint1: "Look at binary sector"
                },
                {
                    hint2: "Convert to decimal from binary"
                },
            ],
            correctAnswer: "4 2 6 7"
        },

        //brainOut
        {
            questionText: "Count X : AA + AA + AA = 30; AA + B + B = 20 ; A + CC + CC = 9;  B + C * A = X",
            answerOptions: [{
                    answerText: "15",
                    isCorrect: true
                },
                {
                    answerText: "14",
                    isCorrect: false
                },
                {
                    answerText: "20",
                    isCorrect: false
                },
            ],
            hints: [{
                hint1: "AA=10; A = 5"
            }, {
                hint2: "B=5"
            }],
            correctAnswer: "15"
        },
    ],
    
     [{
            questionText: "Look at the O'clock in Ha Noi, what time is it now?",
            image: "https://www.upsieutoc.com/images/2020/11/27/anh-de-GPA-9.png",
            answerOptions: [{
                    answerText: "5 AM",
                    isCorrect: true
                },
                {
                    answerText: "6 AM",
                    isCorrect: false
                },
                {
                    answerText: "7 AM",
                    isCorrect: false
                },
            ],
            hints: [{
                    hint1: "Vietnamese clock but you are in Russia"
                },
                {
                    hint2: "Moscow time: -4 "
                },
            ],
            correctAnswer: "5 AM"
        },
        //geometry question
        {
            questionText: "Which shows the radius of the circle?",
            image: 'https://www.upsieutoc.com/images/2020/11/22/anh-de-GPA-6.png',
            answerOptions: [{
                    answerText: "A",
                    isCorrect: true
                },
                {
                    answerText: "B",
                    isCorrect: false
                },
                {
                    answerText: "C",
                    isCorrect: false
                },
            ],
            hints: [{
                hint1: "What is radius?"
            }],
            correctAnswer: "A"
        },
        {
            questionText: "Convert to Hexadecimal: 0000 0011 0101 0010 0001 0010",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "0 4 5 2 1 2",
                    isCorrect: false
                },
                {
                    answerText: "0 2 5 2 1 1",
                    isCorrect: false
                },
                {
                    answerText: "0 3 5 2 1 2",
                    isCorrect: true
                },
            ],
            hints: [{
                    hint1: "Look at binary sector"
                }
            ],
            correctAnswer: "0 3 5 2 1 2"
        },

        //Convert
        {
            questionText: "Convert to decimal: 0101 0010 0110 0111",
            image: "https://www.upsieutoc.com/images/2020/11/24/anh-de-GPA-3.png",
            answerOptions: [{
                    answerText: "0 3 5 6 ",
                    isCorrect: false
                },
                {
                    answerText: "0 2 1 5 ",
                    isCorrect: false
                },
                {
                    answerText: "5 2 6 7 ",
                    isCorrect: true
                },
            ],
            hints: [{
                    hint1: "Look at binary sector"
                },
                {
                    hint2: "Convert to decimal from binary"
                },
            ],
            correctAnswer: "5 2 6 7"
        },

        //brainOut
        {
            questionText: "Remove any 2 matches to form an equilateral triangle",
            image: "https://www.upsieutoc.com/images/2020/11/25/anh-de-GPA-4.png",
            answerOptions: [{
                    answerText: "BC & BE",
                    isCorrect: true
                },
                {
                    answerText: "BC & DE",
                    isCorrect: false
                },
                {
                    answerText: "AC & BE",
                    isCorrect: false
                }
            ],
            hints: [{
                hint1: "Try to move BC"
            }],
            correctAnswer: "BC & BE"

        }
    ],

    
    //end arrays
]


const urlParams = new URLSearchParams(window.location.search);
const level = urlParams.get("level");
const id = urlParams.get("id");
const questionsEl = document.querySelector("#questions");
const goHomeEl = document.querySelector('#go_home');
const btn_next = document.querySelector('.q-btn')
const btnStart = document.querySelector('.start-survey')
localStorage.setItem('idTeam',id)
var point = 0
var index = 0

let getDe = (id,data,data2) =>{
  let idN = parseInt(id.slice(10))
  console.log(idN)
  if(idN == 32 || idN == 38 || idN == 40 || idN == 121){
    console.log(data2)
    console.log(data2[(idN%4)]) 
    return data2[(idN%4)]
  }else{
    return data[(idN%8)]
  }
  
}

function getQuizz(lv, id, callback, d,d2) {
  // const url = `https://limitless-headland-02051.herokuapp.com/${lv}/${id}`;
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //    callback(data);
  //    getListGetCorrectAn(data)
  //    countDownTime(data)
  //     checkAns()
  //   })
  //   .catch((err) => console.log(err));

  let data = getDe(id,d,d2)
  callback(data)
  getListGetCorrectAn(data)
  countDownTime(data)
  checkAns()
}

function generatorQuizz(quizzs) {
  let generatorHTML = "";
  for (let i = 0; i < quizzs.length; i++) {
    if (i == 0) {
      const ans = generatorAns(quizzs[i].answerOptions);
      generatorHTML += `
            
            <div class="question q-${i + 1} q-first q-active">
                <div class="q-title">${quizzs[i].questionText}</div>
                ${
                  quizzs[i].image
                    ? `<img class="quizz-image" src="${quizzs[i].image}" />`
                    : ""
                }
                <div class="answers">
                    ${ans}
                </div>
            </div>
            `;
    } else if (i === quizzs.length - 1) {
      const ans = generatorAns(quizzs[i].answerOptions);
      generatorHTML += `

            <div class="question q-${i + 1} q-last">
                <div class="q-title">${quizzs[i].questionText}</div>
                ${
                  quizzs[i].image
                    ? `<img class="quizz-image" src="${quizzs[i].image}" />`
                    : ""
                }
                <div class="answers">
                    ${ans} 
                </div>
            </div>

            `;
    } else {
      const ans = generatorAns(quizzs[i].answerOptions);
      generatorHTML += `
            <div class="question q-${i + 1}">
                <div class="q-title">${quizzs[i].questionText}</div>
                ${
                  quizzs[i].image
                    ? `<img class="quizz-image" src="${quizzs[i].image}" />`
                    : ""
                }
                <div class="answers">
                    ${ans}
                </div>
            </div>
            `;
    }
  }

  questionsEl.insertAdjacentHTML("afterbegin", generatorHTML);
}

function generatorAns(ans) {
  let ansHTML = "";
  for (let i = 0; i < ans.length; i++) {
    ansHTML += `
        <label class="ans-wrap">
            <input class="ans" value='${ans[i].isCorrect}' type="radio" name="r-1" />
            <span class="ans-text">${ans[i].answerText}</span>
        </label>
        `;
  }
  return ansHTML;
}

// Go back to the homepage, and you can check the answer here

goHomeEl.addEventListener('click', () => {
  // Chekc ans 
  // do something
  localStorage.setItem('point', point)
  // back to the homepage
  window.location.href = "./end.html"
})
btnStart.addEventListener('click', () => {

})
var arrAnswer = []
let checkAns = () => {
  btn_next.addEventListener('click', () => {
    let ansT = (document.querySelector('input[name=' + 'r-1' + ' ]:checked').parentElement).textContent.trim()
    arrAnswer.push(ansT)
    localStorage.setItem('UserAns',JSON.stringify(arrAnswer))
    console.log("ansTTT",arrAnswer)
    let checked = document.querySelector('input[name=' + 'r-1' + ' ]:checked')
    let ans = checked.value
    let lengthHint = window.distaceTime
    let range = 90 / (lengthHint +1)
    let realTime = window.time
    if (ans == 'true' || ans == true) {
      checked.parentElement.classList.add('q-success')
      if(realTime > range*lengthHint){
        point += 300
      }else if(realTime>range*(lengthHint - 1)){
        point +=200
      }else if(realTime >range*(lengthHint - 2)){
        point +=100
      }
    }
  })
}
var anhHieu = 0
let countDownTime = (data) => {
  console.log(data)
  let dom1 = document.querySelector('#hint')
  let timer = setInterval(function () {
    let index = window.index_q
    index == undefined ? index = 0 : ''
    index == 5 ? clearInterval(timer) : ''
    let t = window.time
    let lengthOfHints = data[index].hints.length
    window.distaceTime = lengthOfHints
    let distand = Math.floor(90 / (lengthOfHints + 1))
    t == 89 ? dom1.innerHTML = '' : ''
    if(t<0){
      $("#clock").hide()
      if ($(".question.q-active .ans").is(":checked")){

      }
      else{
        nextQuestion();
      }
    }else{
      $("#clock").show()
    }
    
    for (let i = 0; i <= lengthOfHints; i++) {
      if (t == distand * (lengthOfHints - i)) {
        dom1.innerHTML += `<p><img height="50px" src="./img/loading-2x.gif"> ${data[index].hints[i]['hint' +(i+1)]}</p>`
        // dom1.innerHTML += `<h1>${data[index].hints[i]}</h1>`
        console.log(data[index].hints[i]["hint" + (i + 1)])
      }
    }


  }, 1000)
}
function nextQuestion() {
    document.querySelector('#v').classList.remove('va')
    window.count = 90
      index_question++
      window.index_q = index_question
      $("#q-loader").show();
      setTimeout(function () {
        $("#q-loader").hide();
        $(".question.q-active")
          .removeClass("q-active")
          .next()
          .addClass("q-active");
      }, 500);
    if (window.index_q == 5) {
      finishQuiz();
    }
  }
  function finishQuiz() {
    $("#q-loader").show();
    document.querySelector('#ln').innerHTML = ''
    document.querySelector('#hint').innerHTML = ''
    setTimeout(function () {
      $(".survey-questions").hide();
      $("#q-loader").hide();
      $(".survey-exit").show();
    }, 500);
  }
async function main() {
  await getQuizz(level, id, generatorQuizz,juniorTest,seniorTest);
}

let getListGetCorrectAn = (data) =>{
  let arrAn = []
  for(let i = 0; i<data.length;i++){
    for(let j =0; j<data[i].answerOptions.length; j++){
      let dataAns = data[i].answerOptions[j]
      if(dataAns.isCorrect == true || dataAns.isCorrect == 'true'){
        arrAn.push(dataAns.answerText)
      }
    }
  }
  localStorage.setItem('arrCorrectAns',JSON.stringify(arrAn))
}

main();