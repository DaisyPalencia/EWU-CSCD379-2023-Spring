// Class that represents a letter in the wordle word and status
// of the letter in the wordle word
// comments for
export enum LetterStatus {
  NotGuessed = 0,
  Correct,
  Misplaced,
  Wrong
}

export class Letter {
<<<<<<< HEAD
  letter: string
  status: LetterStatus = LetterStatus.NotGuessed

  constructor(letter: string) {
    this.letter = letter
=======
  char: string
  status: LetterStatus = LetterStatus.NotGuessed

  constructor(char: string = '', status?: LetterStatus) {
    this.char = char
    this.status = status ?? LetterStatus.NotGuessed
>>>>>>> 03905a7ee3d5a26c6179f585a67005e7a7bc9785
  }

  get color() {
    switch (this.status) {
      case LetterStatus.Correct:
<<<<<<< HEAD
        return 'green'
      case LetterStatus.Misplaced:
        return 'orange'
      case LetterStatus.Wrong:
        return 'red'
=======
        return 'correct'
      case LetterStatus.Misplaced:
        return 'misplaced'
      case LetterStatus.Wrong:
        return 'wrong'
>>>>>>> 03905a7ee3d5a26c6179f585a67005e7a7bc9785
      default:
        return 'grey'
    }
  }
}
