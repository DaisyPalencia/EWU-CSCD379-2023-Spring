import { describe, it, expect } from 'vitest'
import { Letter, LetterStatus } from '@/scripts/letter'

describe('Letter', () => {
  it('Gets Correct Color', () => {
    const letter = new Letter('a')
    letter.status = LetterStatus.Correct
<<<<<<< HEAD
    expect(letter.color).toBe('green')
=======
    expect(letter.color).toBe('correct')
>>>>>>> 03905a7ee3d5a26c6179f585a67005e7a7bc9785
  })

  it('Gets Misplaced Color', () => {
    const letter = new Letter('a')
    letter.status = LetterStatus.Misplaced
<<<<<<< HEAD
    expect(letter.color).toBe('orange')
=======
    expect(letter.color).toBe('misplaced')
>>>>>>> 03905a7ee3d5a26c6179f585a67005e7a7bc9785
  })
})

//comments for
