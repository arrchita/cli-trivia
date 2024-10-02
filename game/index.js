#!/usr/bin/env node

import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import color from 'picocolors';

class Question{
    constructor(question, answersArray, correctAnswerIndex){
        this.question=question;
        this.answersArray=answersArray;
        this.correctAnswerIndex=correctAnswerIndex;
    }
}

async function main() {
    p.intro(`${color.bgMagenta(color.black('Welcome to the trivia!!'))}`);
    p.outro(`${color.bgMagenta(color.black('Thanks for taking the quiz!'))}`);
}
