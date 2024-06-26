import {countNumberOfOccurences} from "../src/core/count-number-occurences"
import { expect, test } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
})

test('Return Occurences of Digits inside an array', () => {
    const arrayOfDigits = [0, 1, 1, 1, 2, 2, 3, 3]
    const expectedResult = [1, 3, 2, 2, 0, 0, 0, 0, 0, 0]
    expect(countNumberOfOccurences(arrayOfDigits)).toStrictEqual(expectedResult)
})

test('Return Occurences of Numbers inside an array containing numbers above 9', () => {
    const arrayOfDigits = [0, 1, 1, 1, 2, 2, 3, 3, 10]
    const expectedResult = [1, 3, 2, 2, 0, 0, 0, 0, 0, 0]
    expect(countNumberOfOccurences(arrayOfDigits)).toStrictEqual(expectedResult)
})

test('Return Occurences of Numbers inside an array containing numbers below 0', () => {
    const arrayOfDigits = [0, 1, 1, 1, 2, 2, 3, 3, -1]
    const expectedResult = [1, 3, 2, 2, 0, 0, 0, 0, 0, 0]
    expect(countNumberOfOccurences(arrayOfDigits)).toStrictEqual(expectedResult)
})