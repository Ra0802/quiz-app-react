import { CHANGE_CATEGORY } from "./actionTypes";
import { CHANGE_DIFFICULTY } from "./actionTypes";
import { CHANGE_TYPE } from "./actionTypes";
import { CHANGE_AMOUNT } from "./actionTypes";
import { CHANGE_SCORE } from "./actionTypes";

export const handleCategoryChange = payload => ({
    type: CHANGE_CATEGORY,
    payload
})

export const handleDifficultyChange = payload => ({
    type: CHANGE_DIFFICULTY,
    payload
})

export const handleTypeChange = payload => ({
    type: CHANGE_TYPE,
    payload
})

export const handleAmountChange = payload => ({
    type: CHANGE_AMOUNT,
    payload
})

export const handleScoreChange = payload => ({
    type: CHANGE_SCORE,
    payload
})