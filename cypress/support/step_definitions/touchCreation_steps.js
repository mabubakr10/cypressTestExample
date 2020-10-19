import { Given, When, Then, And,Before } from 'cypress-cucumber-preprocessor/steps'
import TouchCreation from './steps/TouchCreation'

Given(/^I click on the create touch button$/, function () {
    TouchCreation.clickTouchCreate()
});