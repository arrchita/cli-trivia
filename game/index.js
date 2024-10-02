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

    const question1 = new Question(
		"1) In what year was PowerShell, a command-line shell and scripting language developed by Microsoft, first released?",
		[
		"1993",
		"1999",
		"2006",
		"2014"],
		2,
		"s",
		"a",
	)


    p.intro(`${color.bgMagenta(color.black('Welcome to the trivia!!'))}`);
    p.outro(`${color.bgMagenta(color.black('Thanks for taking the quiz!'))}`);
}
