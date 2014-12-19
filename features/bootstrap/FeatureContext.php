<?php

use Behat\Behat\Context\Context;
use Behat\Behat\Context\SnippetAcceptingContext;
use Behat\Gherkin\Node\PyStringNode;
use Behat\Gherkin\Node\TableNode;

class PendingException extends Exception{ }

/**
 * Defines application features from the specific context.
 */
class FeatureContext implements Context, SnippetAcceptingContext
{
    /**
     * Initializes context.
     *
     * Every scenario gets its own context instance.
     * You can also pass arbitrary arguments to the
     * context constructor through behat.yml.
     */
    public function __construct()
    {
    }



    /**
     * @When I call the function with a positive integer argument I should get an integer in return
     */
    public function iCallTheFunctionWithAPositiveIntegerArgumentIShouldGetAnIntegerInReturn()
    {
        throw new PendingException();
    }

    /**
     * @When I request the number :arg1 I should get :arg2
     */
    public function iRequestTheNumberIShouldGet($arg1, $arg2)
    {
        throw new PendingException();
    }

    /**
     * @Given an array of numbers like :arg1
     */
    public function anArrayOfNumbersLike($arg1)
    {
        throw new PendingException();
    }

    /**
     * @When I pass that array as input, I will get an integer back
     */
    public function iPassThatArrayAsInputIWillGetAnIntegerBack()
    {
        throw new PendingException();
    }

    /**
     * @Then the integer will be :arg1
     */
    public function theIntegerWillBe($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Given a function that takes in a starting integer like :arg1 and a final integer like :arg2 it will create a string
     */
    public function aFunctionThatTakesInAStartingIntegerLikeAndAFinalIntegerLikeItWillCreateAString($arg1, $arg2)
    {
        throw new PendingException();
    }

    /**
     * @When the start is :arg1 the only output is :arg2
     */
    public function theStartIsTheOnlyOutputIs($arg1, $arg2)
    {
        throw new PendingException();
    }

    /**
     * @When the start is :arg1 and the end is :arg2 the output should be:
     */
    public function theStartIsAndTheEndIsTheOutputShouldBe($arg1, $arg2, PyStringNode $string)
    {
        throw new PendingException();
    }

    /**
     * @Given a value like :arg1 get a hex like :arg2
     */
    public function aValueLikeGetAHexLike($arg1, $arg2)
    {
        throw new PendingException();
    }

    /**
     * @Given I am in a directory :arg1
     */
    public function iAmInADirectory($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Given I have a file named :arg1
     */
    public function iHaveAFileNamed($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Given the file contains only:
     */
    public function theFileContainsOnly(PyStringNode $string)
    {
        throw new PendingException();
    }

    /**
     * @When I run the function on :arg1
     */
    public function iRunTheFunctionOn($arg1)
    {
        throw new PendingException();
    }

    /**
     * @Then I should get:
     */
    public function iShouldGet(PyStringNode $string)
    {
        throw new PendingException();
    }

    /**
     * @When I call for Times Table
     */
    public function iCallForTimesTable()
    {
        throw new PendingException();
    }

}
