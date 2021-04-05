/////////////////////////////////////////////////////////////////////////    initiateArc()




const resetVizArcOne = (direction) => {

    if (direction === "up") {

    d3.selectAll("#introSound").remove();

    //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressTwo").style("opacity", 0)
    d3.selectAll(".secondBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#progressTwoTwo").style("opacity", 0)
    d3.selectAll(".secondBarResTwo").style("opacity", 0)
    d3.selectAll("#arcTwo").style("opacity", 0)
    d3.selectAll(".arcTwoRes").style("opacity", 0)
    d3.selectAll("#arcThree").style("opacity", 0)
    d3.selectAll(".arcThreeRes").style("opacity", 0)
    d3.selectAll("#arcFour").style("opacity", 0)
    d3.selectAll(".arcFourRes").style("opacity", 0)
    d3.selectAll("#arcFive").style("opacity", 0)
    d3.selectAll(".arcFiveRes").style("opacity", 0)
    d3.selectAll("#arcSix").style("opacity", 0)
    d3.selectAll(".arcSixRes").style("opacity", 0)
    d3.selectAll("#arcSeven").style("opacity", 0)
    d3.selectAll(".arcSevenRes").style("opacity", 0)
    d3.selectAll("#arcTwoTwo").style("opacity", 0)
    d3.selectAll(".arcTwoResTwo").style("opacity", 0)
    d3.selectAll("#arcThreeTwo").style("opacity", 0)
    d3.selectAll(".arcThreeResTwo").style("opacity", 0)
    d3.selectAll("#arcFourTwo").style("opacity", 0)
    d3.selectAll(".arcFourResTwo").style("opacity", 0)
    d3.selectAll("#arcFiveTwo").style("opacity", 0)
    d3.selectAll(".arcFiveResTwo").style("opacity", 0)
    d3.selectAll("#arcSixTwo").style("opacity", 0)
    d3.selectAll(".arcSixResTwo").style("opacity", 0)
    d3.selectAll("#arcSevenTwo").style("opacity", 0)
    d3.selectAll(".arcSevenResTwo").style("opacity", 0)





    d3.selectAll('#progressOne').remove();
    d3.selectAll('.firstBarRes').remove();

    d3.selectAll('.arcOneRes').remove();

    initiateArcOneTwo();

}

}



const resetVizArcOneBottom = (direction) => {

    if (direction === "up") {

    //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressTwo").style("opacity", 0)
    d3.selectAll(".secondBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#progressTwoTwo").style("opacity", 0)
    d3.selectAll(".secondBarResTwo").style("opacity", 0)
    d3.selectAll("#arcTwo").style("opacity", 0)
    d3.selectAll(".arcTwoRes").style("opacity", 0)
    d3.selectAll("#arcThree").style("opacity", 0)
    d3.selectAll(".arcThreeRes").style("opacity", 0)
    d3.selectAll("#arcFour").style("opacity", 0)
    d3.selectAll(".arcFourRes").style("opacity", 0)
    d3.selectAll("#arcFive").style("opacity", 0)
    d3.selectAll(".arcFiveRes").style("opacity", 0)
    d3.selectAll("#arcSix").style("opacity", 0)
    d3.selectAll(".arcSixRes").style("opacity", 0)
    d3.selectAll("#arcSeven").style("opacity", 0)
    d3.selectAll(".arcSevenRes").style("opacity", 0)
    d3.selectAll("#arcTwoTwo").style("opacity", 0)
    d3.selectAll(".arcTwoResTwo").style("opacity", 0)
    d3.selectAll("#arcThreeTwo").style("opacity", 0)
    d3.selectAll(".arcThreeResTwo").style("opacity", 0)
    d3.selectAll("#arcFourTwo").style("opacity", 0)
    d3.selectAll(".arcFourResTwo").style("opacity", 0)
    d3.selectAll("#arcFiveTwo").style("opacity", 0)
    d3.selectAll(".arcFiveResTwo").style("opacity", 0)
    d3.selectAll("#arcSixTwo").style("opacity", 0)
    d3.selectAll(".arcSixResTwo").style("opacity", 0)
    d3.selectAll("#arcSevenTwo").style("opacity", 0)
    d3.selectAll(".arcSevenResTwo").style("opacity", 0)






    d3.selectAll("#progressOneThree").style("opacity", 0)
    d3.selectAll(".firstBarResThree").style("opacity", 0)
    d3.selectAll("#progressTwoThree").style("opacity", 0)
    d3.selectAll(".secondBarResThree").style("opacity", 0)

    d3.selectAll("#arcTwoThree").style("opacity", 0)
    d3.selectAll(".arcTwoResThree").style("opacity", 0)

    d3.selectAll("#arcThreeThree").style("opacity", 0)
    d3.selectAll(".arcThreeResThree").style("opacity", 0)

    d3.selectAll("#arcFourThree").style("opacity", 0)
    d3.selectAll(".arcFourResThree").style("opacity", 0)

    d3.selectAll("#arcFiveThree").style("opacity", 0)
    d3.selectAll(".arcFiveResThree").style("opacity", 0)

    d3.selectAll("#arcSixThree").style("opacity", 0)
    d3.selectAll(".arcSixResThree").style("opacity", 0)

    d3.selectAll("#arcSevenThree").style("opacity", 0)
    d3.selectAll(".arcSevenResThree").style("opacity", 0)

    d3.selectAll("#progressOneThree").style("opacity", 1)
    d3.selectAll(".firstBarResThree").style("opacity", 1)

    d3.selectAll("#arcOneThree").style("opacity", 1)
    d3.selectAll(".arcOneResThree").style("opacity", 1)


    initiateArcOneThree();

}

}







const resetVizArcTwo = (direction) => {

    if (direction === "up") {



    //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressTwo").style("opacity", 0)
    d3.selectAll(".secondBarRes").style("opacity", 0)
    d3.selectAll("#progressThree").style("opacity", 0)
    d3.selectAll(".thirdBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#progressTwoTwo").style("opacity", 0)
    d3.selectAll(".secondBarResTwo").style("opacity", 0)
    d3.selectAll("#progressThreeTwo").style("opacity", 0)
    d3.selectAll(".thirdBarResTwo").style("opacity", 0)
    d3.selectAll("#arcRidgway").style("opacity", 0)
    d3.selectAll(".arcRidgwayRes").style("opacity", 0)
    d3.selectAll("#arcRidgwayTwo").style("opacity", 0)
    d3.selectAll(".arcRidgwayResTwo").style("opacity", 0)




    d3.selectAll('#progressOne').remove();
    // d3.selectAll('#progressOneTwo').remove();
    d3.selectAll('#progressTwo').remove();
    // d3.selectAll('#progressTwoTwo').remove();
    d3.selectAll('.firstBarRes').remove();
    // d3.selectAll('.firstBarResTwo').remove();
    d3.selectAll('.secondBarRes').remove();
    // d3.selectAll('.secondBarResTwo').remove();

    d3.selectAll('.arcTwoRes').remove();
    d3.selectAll('.arcThreeRes').remove();
    d3.selectAll('.arcFourRes').remove();
    d3.selectAll('.arcFiveRes').remove();
    d3.selectAll('.arcSixRes').remove();
    d3.selectAll('.arcSevenRes').remove();

    initiateArcTwoTwo();

}

}




const resetVizArcTwoBottom = (direction) => {

    if (direction === "up") {


    //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressTwo").style("opacity", 0)
    d3.selectAll(".secondBarRes").style("opacity", 0)
    d3.selectAll("#progressThree").style("opacity", 0)
    d3.selectAll(".thirdBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#progressTwoTwo").style("opacity", 0)
    d3.selectAll(".secondBarResTwo").style("opacity", 0)
    d3.selectAll("#progressThreeTwo").style("opacity", 0)
    d3.selectAll(".thirdBarResTwo").style("opacity", 0)
    d3.selectAll("#arcRidgway").style("opacity", 0)
    d3.selectAll(".arcRidgwayRes").style("opacity", 0)
    d3.selectAll("#arcRidgwayTwo").style("opacity", 0)
    d3.selectAll(".arcRidgwayResTwo").style("opacity", 0)





    d3.selectAll("#progressOneThree").style("opacity", 0)
    d3.selectAll(".firstBarResThree").style("opacity", 0)
    d3.selectAll("#progressTwoThree").style("opacity", 0)
    d3.selectAll(".secondBarResThree").style("opacity", 0)
    d3.selectAll("#progressThreeThree").style("opacity", 0)
    d3.selectAll(".thirdBarResThree").style("opacity", 0)

    d3.selectAll("#arcRidgwayThree").style("opacity", 0)
    d3.selectAll(".arcRidgwayResThree").style("opacity", 0)

    d3.selectAll("#progressOneThree").style("opacity", 1)
    d3.selectAll(".firstBarResThree").style("opacity", 1)
    d3.selectAll("#progressTwoThree").style("opacity", 1)
    d3.selectAll(".secondBarResThree").style("opacity", 1)

    d3.selectAll("#arcTwoThree").style("opacity", 1)
    d3.selectAll(".arcTwoResThree").style("opacity", 1)

    d3.selectAll("#arcThreeThree").style("opacity", 1)
    d3.selectAll(".arcThreeResThree").style("opacity", 1)

    d3.selectAll("#arcFourThree").style("opacity", 1)
    d3.selectAll(".arcFourResThree").style("opacity", 1)

    d3.selectAll("#arcFiveThree").style("opacity", 1)
    d3.selectAll(".arcFiveResThree").style("opacity", 1)

    d3.selectAll("#arcSixThree").style("opacity", 1)
    d3.selectAll(".arcSixResThree").style("opacity", 1)

    d3.selectAll("#arcSevenThree").style("opacity", 1)
    d3.selectAll(".arcSevenResThree").style("opacity", 1)


    initiateArcTwoThree();

}

}










const resetVizArcThree = (direction) => {

    if (direction === "up") {



  //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressTwo").style("opacity", 0)
    d3.selectAll(".secondBarRes").style("opacity", 0)
    d3.selectAll("#progressThree").style("opacity", 0)
    d3.selectAll(".thirdBarRes").style("opacity", 0)
    d3.selectAll("#progressFour").style("opacity", 0)
    d3.selectAll(".fourthBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#progressTwoTwo").style("opacity", 0)
    d3.selectAll(".secondBarResTwo").style("opacity", 0)
    d3.selectAll("#progressThreeTwo").style("opacity", 0)
    d3.selectAll(".thirdBarResTwo").style("opacity", 0)
    d3.selectAll("#progressFourTwo").style("opacity", 0)
    d3.selectAll(".fourthBarResTwo").style("opacity", 0)
    d3.selectAll("#arcGacy").style("opacity", 0)
    d3.selectAll(".arcGacyRes").style("opacity", 0)
    d3.selectAll("#arcGein").style("opacity", 0)
    d3.selectAll(".arcGeinRes").style("opacity", 0)
    d3.selectAll("#arcDahmer").style("opacity", 0)
    d3.selectAll(".arcDahmerRes").style("opacity", 0)
    d3.selectAll("#arcOneRandom").style("opacity", 0)
    d3.selectAll(".arcOneRandomRes").style("opacity", 0)
    d3.selectAll("#arcTwoRandom").style("opacity", 0)
    d3.selectAll(".arcTwoRandomRes").style("opacity", 0)
    d3.selectAll("#arcThreeRandom").style("opacity", 0)
    d3.selectAll(".arcThreeRandomRes").style("opacity", 0)
    d3.selectAll("#arcFourRandom").style("opacity", 0)
    d3.selectAll(".arcFourRandomRes").style("opacity", 0)
    d3.selectAll("#arcFiveRandom").style("opacity", 0)
    d3.selectAll(".arcFiveRandomRes").style("opacity", 0)
    d3.selectAll("#arcSixRandom").style("opacity", 0)
    d3.selectAll(".arcSixRandomRes").style("opacity", 0)
    d3.selectAll("#arcSevenRandom").style("opacity", 0)
    d3.selectAll(".arcSevenRandomRes").style("opacity", 0)
    d3.selectAll("#arcEightRandom").style("opacity", 0)
    d3.selectAll(".arcEightRandomRes").style("opacity", 0)
    d3.selectAll("#arcNineRandom").style("opacity", 0)
    d3.selectAll(".arcNineRandomRes").style("opacity", 0)
    d3.selectAll("#arcTenRandom").style("opacity", 0)
    d3.selectAll(".arcTenRandomRes").style("opacity", 0)
    d3.selectAll("#arcElevenRandom").style("opacity", 0)
    d3.selectAll(".arcElevenRandomRes").style("opacity", 0)
    d3.selectAll("#arcTwelveRandom").style("opacity", 0)
    d3.selectAll(".arcTwelveRandomRes").style("opacity", 0)
    d3.selectAll("#arcGacyTwo").style("opacity", 0)
    d3.selectAll(".arcGacyResTwo").style("opacity", 0)
    d3.selectAll("#arcGeinTwo").style("opacity", 0)
    d3.selectAll(".arcGeinResTwo").style("opacity", 0)
    d3.selectAll("#arcDahmerTwo").style("opacity", 0)
    d3.selectAll(".arcDahmerResTwo").style("opacity", 0)
    d3.selectAll("#arcOneRandomTwo").style("opacity", 0)
    d3.selectAll(".arcOneRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcTwoRandomTwo").style("opacity", 0)
    d3.selectAll(".arcTwoRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcThreeRandomTwo").style("opacity", 0)
    d3.selectAll(".arcThreeRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcFourRandomTwo").style("opacity", 0)
    d3.selectAll(".arcFourRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcFiveRandomTwo").style("opacity", 0)
    d3.selectAll(".arcFiveRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcSixRandomTwo").style("opacity", 0)
    d3.selectAll(".arcSixRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcSevenRandomTwo").style("opacity", 0)
    d3.selectAll(".arcSevenRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcEightRandomTwo").style("opacity", 0)
    d3.selectAll(".arcEightRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcNineRandomTwo").style("opacity", 0)
    d3.selectAll(".arcNineRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcTenRandomTwo").style("opacity", 0)
    d3.selectAll(".arcTenRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcElevenRandomTwo").style("opacity", 0)
    d3.selectAll(".arcElevenRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcTwelveRandomTwo").style("opacity", 0)
    d3.selectAll(".arcTwelveRandomResTwo").style("opacity", 0)





    d3.selectAll('#progressOne').remove();
    // d3.selectAll('#progressOneTwo').remove();
    d3.selectAll('#progressTwo').remove();
    // d3.selectAll('#progressTwoTwo').remove();
    d3.selectAll('#progressThree').remove();
    // d3.selectAll('#progressThreeTwo').remove();
    d3.selectAll('.firstBarRes').remove();
    // d3.selectAll('.firstBarResTwo').remove();
    d3.selectAll('.secondBarRes').remove();
    // d3.selectAll('.secondBarResTwo').remove();
    d3.selectAll('.thirdBarRes').remove();
    // d3.selectAll('.thirdBarResTwo').remove();

    d3.selectAll('.arcRidgwayRes').remove();


    initiateArcThreeTwo();

}

}



const resetVizArcThreeBottom = (direction) => {

    if (direction === "up") {



  //NEW
    d3.selectAll("#progressOne").style("opacity", 0)
    d3.selectAll(".firstBarRes").style("opacity", 0)
    d3.selectAll("#progressTwo").style("opacity", 0)
    d3.selectAll(".secondBarRes").style("opacity", 0)
    d3.selectAll("#progressThree").style("opacity", 0)
    d3.selectAll(".thirdBarRes").style("opacity", 0)
    d3.selectAll("#progressFour").style("opacity", 0)
    d3.selectAll(".fourthBarRes").style("opacity", 0)
    d3.selectAll("#progressOneTwo").style("opacity", 0)
    d3.selectAll(".firstBarResTwo").style("opacity", 0)
    d3.selectAll("#progressTwoTwo").style("opacity", 0)
    d3.selectAll(".secondBarResTwo").style("opacity", 0)
    d3.selectAll("#progressThreeTwo").style("opacity", 0)
    d3.selectAll(".thirdBarResTwo").style("opacity", 0)
    d3.selectAll("#progressFourTwo").style("opacity", 0)
    d3.selectAll(".fourthBarResTwo").style("opacity", 0)
    d3.selectAll("#arcGacy").style("opacity", 0)
    d3.selectAll(".arcGacyRes").style("opacity", 0)
    d3.selectAll("#arcGein").style("opacity", 0)
    d3.selectAll(".arcGeinRes").style("opacity", 0)
    d3.selectAll("#arcDahmer").style("opacity", 0)
    d3.selectAll(".arcDahmerRes").style("opacity", 0)
    d3.selectAll("#arcOneRandom").style("opacity", 0)
    d3.selectAll(".arcOneRandomRes").style("opacity", 0)
    d3.selectAll("#arcTwoRandom").style("opacity", 0)
    d3.selectAll(".arcTwoRandomRes").style("opacity", 0)
    d3.selectAll("#arcThreeRandom").style("opacity", 0)
    d3.selectAll(".arcThreeRandomRes").style("opacity", 0)
    d3.selectAll("#arcFourRandom").style("opacity", 0)
    d3.selectAll(".arcFourRandomRes").style("opacity", 0)
    d3.selectAll("#arcFiveRandom").style("opacity", 0)
    d3.selectAll(".arcFiveRandomRes").style("opacity", 0)
    d3.selectAll("#arcSixRandom").style("opacity", 0)
    d3.selectAll(".arcSixRandomRes").style("opacity", 0)
    d3.selectAll("#arcSevenRandom").style("opacity", 0)
    d3.selectAll(".arcSevenRandomRes").style("opacity", 0)
    d3.selectAll("#arcEightRandom").style("opacity", 0)
    d3.selectAll(".arcEightRandomRes").style("opacity", 0)
    d3.selectAll("#arcNineRandom").style("opacity", 0)
    d3.selectAll(".arcNineRandomRes").style("opacity", 0)
    d3.selectAll("#arcTenRandom").style("opacity", 0)
    d3.selectAll(".arcTenRandomRes").style("opacity", 0)
    d3.selectAll("#arcElevenRandom").style("opacity", 0)
    d3.selectAll(".arcElevenRandomRes").style("opacity", 0)
    d3.selectAll("#arcTwelveRandom").style("opacity", 0)
    d3.selectAll(".arcTwelveRandomRes").style("opacity", 0)
    d3.selectAll("#arcGacyTwo").style("opacity", 0)
    d3.selectAll(".arcGacyResTwo").style("opacity", 0)
    d3.selectAll("#arcGeinTwo").style("opacity", 0)
    d3.selectAll(".arcGeinResTwo").style("opacity", 0)
    d3.selectAll("#arcDahmerTwo").style("opacity", 0)
    d3.selectAll(".arcDahmerResTwo").style("opacity", 0)
    d3.selectAll("#arcOneRandomTwo").style("opacity", 0)
    d3.selectAll(".arcOneRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcTwoRandomTwo").style("opacity", 0)
    d3.selectAll(".arcTwoRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcThreeRandomTwo").style("opacity", 0)
    d3.selectAll(".arcThreeRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcFourRandomTwo").style("opacity", 0)
    d3.selectAll(".arcFourRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcFiveRandomTwo").style("opacity", 0)
    d3.selectAll(".arcFiveRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcSixRandomTwo").style("opacity", 0)
    d3.selectAll(".arcSixRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcSevenRandomTwo").style("opacity", 0)
    d3.selectAll(".arcSevenRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcEightRandomTwo").style("opacity", 0)
    d3.selectAll(".arcEightRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcNineRandomTwo").style("opacity", 0)
    d3.selectAll(".arcNineRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcTenRandomTwo").style("opacity", 0)
    d3.selectAll(".arcTenRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcElevenRandomTwo").style("opacity", 0)
    d3.selectAll(".arcElevenRandomResTwo").style("opacity", 0)
    d3.selectAll("#arcTwelveRandomTwo").style("opacity", 0)
    d3.selectAll(".arcTwelveRandomResTwo").style("opacity", 0)




    d3.selectAll("#progressOneThree").style("opacity", 0)
    d3.selectAll(".firstBarResThree").style("opacity", 0)
    d3.selectAll("#progressTwoThree").style("opacity", 0)
    d3.selectAll(".secondBarResThree").style("opacity", 0)
    d3.selectAll("#progressThreeThree").style("opacity", 0)
    d3.selectAll(".thirdBarResThree").style("opacity", 0)
    d3.selectAll("#progressFourThree").style("opacity", 0)
    d3.selectAll(".fourthBarResThree").style("opacity", 0)

    d3.selectAll("#arcGacyThree").style("opacity", 0)
    d3.selectAll(".arcGacyResThree").style("opacity", 0)
    d3.selectAll("#arcGeinThree").style("opacity", 0)
    d3.selectAll(".arcGeinResThree").style("opacity", 0)
    d3.selectAll("#arcDahmerThree").style("opacity", 0)
    d3.selectAll(".arcDahmerResThree").style("opacity", 0)
    d3.selectAll("#arcOneRandomThree").style("opacity", 0)
    d3.selectAll(".arcOneRandomResThree").style("opacity", 0)
    d3.selectAll("#arcTwoRandomThree").style("opacity", 0)
    d3.selectAll(".arcTwoRandomResThree").style("opacity", 0)
    d3.selectAll("#arcThreeRandomThree").style("opacity", 0)
    d3.selectAll(".arcThreeRandomResThree").style("opacity", 0)
    d3.selectAll("#arcFourRandomThree").style("opacity", 0)
    d3.selectAll(".arcFourRandomResThree").style("opacity", 0)
    d3.selectAll("#arcFiveRandomThree").style("opacity", 0)
    d3.selectAll(".arcFiveRandomResThree").style("opacity", 0)
    d3.selectAll("#arcSixRandomThree").style("opacity", 0)
    d3.selectAll(".arcSixRandomResThree").style("opacity", 0)
    d3.selectAll("#arcSevenRandomThree").style("opacity", 0)
    d3.selectAll(".arcSevenRandomResThree").style("opacity", 0)
    d3.selectAll("#arcEightRandomThree").style("opacity", 0)
    d3.selectAll(".arcEightRandomResThree").style("opacity", 0)
    d3.selectAll("#arcNineRandomThree").style("opacity", 0)
    d3.selectAll(".arcNineRandomResThree").style("opacity", 0)
    d3.selectAll("#arcTenRandomThree").style("opacity", 0)
    d3.selectAll(".arcTenRandomResThree").style("opacity", 0)
    d3.selectAll("#arcElevenRandomThree").style("opacity", 0)
    d3.selectAll(".arcElevenRandomResThree").style("opacity", 0)
    d3.selectAll("#arcTwelveRandomThree").style("opacity", 0)
    d3.selectAll(".arcTwelveRandomResThree").style("opacity", 0)

    d3.selectAll("#progressOneThree").style("opacity", 1)
    d3.selectAll(".firstBarResThree").style("opacity", 1)
    d3.selectAll("#progressTwoThree").style("opacity", 1)
    d3.selectAll(".secondBarResThree").style("opacity", 1)
    d3.selectAll("#progressThreeThree").style("opacity", 1)
    d3.selectAll(".thirdBarResThree").style("opacity", 1)

    d3.selectAll("#arcRidgwayThree").style("opacity", 1)
    d3.selectAll(".arcRidgwayResThree").style("opacity", 1)


    initiateArcThreeThree();

}

}





const resetVizArcFour = (direction) => {

    if (direction === "up") {


  //NEW
  d3.selectAll("#forceInitiation").style("opacity", 0)
  d3.selectAll(".forceInitiationRes").style("opacity", 0)
  d3.selectAll("#forceInitiationTwo").style("opacity", 0)
  d3.selectAll(".forceInitiationResTwo").style("opacity", 0)
  d3.selectAll("#counterClock").style("opacity", 0)
  d3.selectAll("#counterClockTwo").style("opacity", 0)
  d3.selectAll("#value").style("opacity", 0)
  d3.selectAll("#valueTwo").style("opacity", 0)
  d3.selectAll("#valueA").style("opacity", 0)
  d3.selectAll("#valueTwoA").style("opacity", 0)






    d3.selectAll('#progressOne').remove();
    // d3.selectAll('#progressOneTwo').remove();
    d3.selectAll('#progressTwo').remove();
    // d3.selectAll('#progressTwoTwo').remove();
    d3.selectAll('#progressThree').remove();
    // d3.selectAll('#progressThreeTwo').remove();
    d3.selectAll('#progressFour').remove();
    // d3.selectAll('#progressFourTwo').remove();
    d3.selectAll('.firstBarRes').remove();
    // d3.selectAll('.firstBarResTwo').remove();
    d3.selectAll('.secondBarRes').remove();
    // d3.selectAll('.secondBarResTwo').remove();
    d3.selectAll('.thirdBarRes').remove();
    // d3.selectAll('.thirdBarResTwo').remove();
    d3.selectAll('.fourthBarRes').remove();
    // d3.selectAll('.fourthBarResTwo').remove();


    d3.selectAll('.arcGacyRes').remove();
    d3.selectAll('.arcGeinRes').remove();
    d3.selectAll('.arcDahmerRes').remove();
    d3.selectAll('.arcOneRandomRes').remove();
    d3.selectAll('.arcTwoRandomRes').remove();
    d3.selectAll('.arcThreeRandomRes').remove();
    d3.selectAll('.arcFourRandomRes').remove();
    d3.selectAll('.arcFiveRandomRes').remove();
    d3.selectAll('.arcSixRandomRes').remove();
    d3.selectAll('.arcSevenRandomRes').remove();
    d3.selectAll('.arcEightRandomRes').remove();
    d3.selectAll('.arcNineRandomRes').remove();
    d3.selectAll('.arcTenRandomRes').remove();
    d3.selectAll('.arcElevenRandomRes').remove();
    d3.selectAll('.arcTwelveRandomRes').remove();
    initiateArcFourTwo();

}

}



const resetVizArcFourBottom = (direction) => {

    if (direction === "up") {

    d3.selectAll("#introSoundThree").remove();
    playAudioTwo();


    // d3.selectAll('#progressOne').remove();
    // d3.selectAll('#progressTwo').remove();
    // d3.selectAll('#progressThree').remove();
    // d3.selectAll('#progressFour').remove();
    // d3.selectAll('.firstBarRes').remove();
    // d3.selectAll('.secondBarRes').remove();
    // d3.selectAll('.thirdBarRes').remove();
    // d3.selectAll('.fourthBarRes').remove();
    // d3.selectAll('.arcGacyRes').remove();
    // d3.selectAll('.arcGeinRes').remove();
    // d3.selectAll('.arcDahmerRes').remove();
    // d3.selectAll('.arcOneRandomRes').remove();
    // d3.selectAll('.arcTwoRandomRes').remove();
    // d3.selectAll('.arcThreeRandomRes').remove();
    // d3.selectAll('.arcFourRandomRes').remove();
    // d3.selectAll('.arcFiveRandomRes').remove();
    // d3.selectAll('.arcSixRandomRes').remove();
    // d3.selectAll('.arcSevenRandomRes').remove();
    // d3.selectAll('.arcEightRandomRes').remove();
    // d3.selectAll('.arcNineRandomRes').remove();
    // d3.selectAll('.arcTenRandomRes').remove();
    // d3.selectAll('.arcElevenRandomRes').remove();
    // d3.selectAll('.arcTwelveRandomRes').remove();


  //NEW
  d3.selectAll("#forceInitiation").style("opacity", 0)
  d3.selectAll(".forceInitiationRes").style("opacity", 0)
  d3.selectAll("#forceInitiationTwo").style("opacity", 0)
  d3.selectAll(".forceInitiationResTwo").style("opacity", 0)
  d3.selectAll("#counterClock").style("opacity", 0)
  d3.selectAll("#counterClockTwo").style("opacity", 0)
  d3.selectAll("#value").style("opacity", 0)
  d3.selectAll("#valueTwo").style("opacity", 0)
  d3.selectAll("#valueA").style("opacity", 0)
  d3.selectAll("#valueTwoA").style("opacity", 0)







    d3.selectAll("#counterClockThree").style("opacity", 0)
    d3.selectAll("#valueB").style("opacity", 0)
    d3.selectAll("#valueTwoB").style("opacity", 0)

    d3.selectAll("#forceInitiationThree").style("opacity", 0)
    d3.selectAll(".forceInitiationResThree").style("opacity", 0)


    d3.selectAll("#progressOneThree").style("opacity", 1)
    d3.selectAll(".firstBarResThree").style("opacity", 1)
    d3.selectAll("#progressTwoThree").style("opacity", 1)
    d3.selectAll(".secondBarResThree").style("opacity", 1)
    d3.selectAll("#progressThreeThree").style("opacity", 1)
    d3.selectAll(".thirdBarResThree").style("opacity", 1)
    d3.selectAll("#progressFourThree").style("opacity", 1)
    d3.selectAll(".fourthBarResThree").style("opacity", 1)



    d3.selectAll("#arcGacyThree").style("opacity", 1)
    d3.selectAll(".arcGacyResThree").style("opacity", 1)
    d3.selectAll("#arcGeinThree").style("opacity", 1)
    d3.selectAll(".arcGeinResThree").style("opacity", 1)
    d3.selectAll("#arcDahmerThree").style("opacity", 1)
    d3.selectAll(".arcDahmerResThree").style("opacity", 1)
    d3.selectAll("#arcOneRandomThree").style("opacity", 1)
    d3.selectAll(".arcOneRandomResThree").style("opacity", 1)
    d3.selectAll("#arcTwoRandomThree").style("opacity", 1)
    d3.selectAll(".arcTwoRandomResThree").style("opacity", 1)
    d3.selectAll("#arcThreeRandomThree").style("opacity", 1)
    d3.selectAll(".arcThreeRandomResThree").style("opacity", 1)
    d3.selectAll("#arcFourRandomThree").style("opacity", 1)
    d3.selectAll(".arcFourRandomResThree").style("opacity", 1)
    d3.selectAll("#arcFiveRandomThree").style("opacity", 1)
    d3.selectAll(".arcFiveRandomResThree").style("opacity", 1)
    d3.selectAll("#arcSixRandomThree").style("opacity", 1)
    d3.selectAll(".arcSixRandomResThree").style("opacity", 1)
    d3.selectAll("#arcSevenRandomThree").style("opacity", 1)
    d3.selectAll(".arcSevenRandomResThree").style("opacity", 1)
    d3.selectAll("#arcEightRandomThree").style("opacity", 1)
    d3.selectAll(".arcEightRandomResThree").style("opacity", 1)
    d3.selectAll("#arcNineRandomThree").style("opacity", 1)
    d3.selectAll(".arcNineRandomResThree").style("opacity", 1)
    d3.selectAll("#arcTenRandomThree").style("opacity", 1)
    d3.selectAll(".arcTenRandomResThree").style("opacity", 1)
    d3.selectAll("#arcElevenRandomThree").style("opacity", 1)
    d3.selectAll(".arcElevenRandomResThree").style("opacity", 1)
    d3.selectAll("#arcTwelveRandomThree").style("opacity", 1)
    d3.selectAll(".arcTwelveRandomResThree").style("opacity", 1)


    initiateArcFourThree();

}

}



function zoomIn_new(innerRadius) {
  const scaleFactor = 2;
  d3.select('#arcFirst')
    .transition().delay(8000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_two(innerRadius) {
  const scaleFactor = 2;
  d3.select('#arcFirstTwo')
    .transition().delay(8000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_three(innerRadius) {
  const scaleFactor = 2;
  d3.select('#arcFirstThree')
    .transition().delay(8000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}





function renderOne(innerRadius) {

 $("#progressOne").addClass('firstBarRes');

  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillOne = d3.select("#progressOne")
          .append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillOne.append("rect")
              .transition().duration(8000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)





  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 1000, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 1000, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcOne")
    .append("svg")
    .attr("class", 'arcOneRes')
    //.attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");



  // var svgContainer = d3.select("#arcContainer").append("svg")
  //   .attr("width", 2000)
  //   .attr('viewBox', viewbox);


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(995).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFirst")
          // .style("stroke", "rgb(53,154,204))")
          .style("stroke", "rgb(0,255,255)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFirst")
        .transition()
        .delay(2000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })
        .transition()
        .delay(4000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })
        .transition()
        .delay(6000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)




    svg.append("text")
          .attr("id", "labelBurlington")
          .attr("y", 1150)
          .attr("x", 0)
          .attr("dy", ".35em")
          // .style("font-size", "24px")
          .style("font-size", "36px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Burlington, VT");

    svg.append("text")
          .attr("id", "labelWashington")
          .attr("y", 1150)
          .attr("x", 1800)
          .attr("dy", ".35em")
          // .style("font-size", "24px")
          .style("font-size", "36px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Washington")
          .transition().delay(10000).duration(2000)
          .attr("y", 1150)
          .attr("x", 2500)

    svg.append("text")
          .attr("id", "labelJourney")
          .attr("y", 50)
          .attr("x", 1650)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Longest Distance to Kill")
          .transition().delay(10000).duration(2000)
          .attr("y", 50)
          .attr("x", 2500)

    svg.append("text")
          .attr("id", "labelTwoJourney")
          .attr("y", 100)
          .attr("x", 1660)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Washington State +/- 2,900 mi")
          .transition().delay(10000).duration(2000)
          .attr("y", 100)
          .attr("x", 2500)

    svg.append("line")
          .attr("id", "lineJourney")
          .attr("x1", 1995)
          .attr("y1", 150)
          .attr("x2", 1995)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white")
          .transition().delay(10000).duration(2000)
          .attr("x1", 2500)
          .attr("y1", 150)
          .attr("x2", 2500)
          .attr("y2", 750)

    svg.append("line")
          .attr("id", "lineBurlington")
          .attr("x1", 5)
          .attr("y1", 1025)
          .attr("x2", 5)
          .attr("y2", 1125)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

    // svg.append("line")
    //       .attr("id", "lineWashington")
    //       .attr("x1", 1995)
    //       .attr("y1", 1025)
    //       .attr("x2", 1995)
    //       .attr("y2", 1125)
    //       .transition().delay(2000).duration(2000)
    //       .attr("stroke-width", 2)
    //       .attr("stroke", "white");


    svg.append("circle")
          .attr("id", "circleBurlington")
          .attr("cx", 5)
          .attr("cy", 1000)
          .attr("r", 10)
          .style("fill", "white")
          //.transition().delay(8000).duration(2000)
          .style("stroke", "black")
          //.style("fill", "none");


    // svgContainer.append("circle")
    svg.append("circle")
          .attr("id", "circle-outer-washington")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none")
          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)


    // svgContainer.append("circle")
    svg.append("circle")
          .attr("id", "circle-inner-washington")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")
          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton")
          .transition().delay(2000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-two")
          .transition().delay(4000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(4100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(4200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-three")
          .transition().delay(6000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-four")
          .transition().delay(8000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(8100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(8200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderOneTwo(innerRadius) {

 $("#progressOneTwo").addClass('firstBarResTwo');

  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillOne = d3.select("#progressOneTwo")
          .append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillOne.append("rect")
              .transition().duration(8000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)





  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 1000, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 1000, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcOneTwo")
    .append("svg")
    .attr("class", 'arcOneResTwo')
    //.attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");



  // var svgContainer = d3.select("#arcContainer").append("svg")
  //   .attr("width", 2000)
  //   .attr('viewBox', viewbox);


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(995).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFirstTwo")
          // .style("stroke", "rgb(53,154,204))")
          .style("stroke", "rgb(0,255,255)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFirst")
        .transition()
        .delay(2000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })
        .transition()
        .delay(4000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })
        .transition()
        .delay(6000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)




    svg.append("text")
          .attr("id", "labelBurlington")
          .attr("y", 1150)
          .attr("x", 0)
          .attr("dy", ".35em")
          // .style("font-size", "24px")
          .style("font-size", "36px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Burlington, VT");

    svg.append("text")
          .attr("id", "labelWashington")
          .attr("y", 1150)
          .attr("x", 1800)
          .attr("dy", ".35em")
          // .style("font-size", "24px")
          .style("font-size", "36px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Washington")
          .transition().delay(10000).duration(2000)
          .attr("y", 1150)
          .attr("x", 2500)

    svg.append("text")
          .attr("id", "labelJourney")
          .attr("y", 50)
          .attr("x", 1650)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Longest Distance to Kill")
          .transition().delay(10000).duration(2000)
          .attr("y", 50)
          .attr("x", 2500)

    svg.append("text")
          .attr("id", "labelTwoJourney")
          .attr("y", 100)
          .attr("x", 1660)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Washington State +/- 2,900 mi")
          .transition().delay(10000).duration(2000)
          .attr("y", 100)
          .attr("x", 2500)

    svg.append("line")
          .attr("id", "lineJourney")
          .attr("x1", 1995)
          .attr("y1", 150)
          .attr("x2", 1995)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white")
          .transition().delay(10000).duration(2000)
          .attr("x1", 2500)
          .attr("y1", 150)
          .attr("x2", 2500)
          .attr("y2", 750)

    svg.append("line")
          .attr("id", "lineBurlington")
          .attr("x1", 5)
          .attr("y1", 1025)
          .attr("x2", 5)
          .attr("y2", 1125)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

    // svg.append("line")
    //       .attr("id", "lineWashington")
    //       .attr("x1", 1995)
    //       .attr("y1", 1025)
    //       .attr("x2", 1995)
    //       .attr("y2", 1125)
    //       .transition().delay(2000).duration(2000)
    //       .attr("stroke-width", 2)
    //       .attr("stroke", "white");


    svg.append("circle")
          .attr("id", "circleBurlington")
          .attr("cx", 5)
          .attr("cy", 1000)
          .attr("r", 10)
          .style("fill", "white")
          //.transition().delay(8000).duration(2000)
          .style("stroke", "black")
          //.style("fill", "none");


    // svgContainer.append("circle")
    svg.append("circle")
          .attr("id", "circle-outer-washington")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none")
          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)


    // svgContainer.append("circle")
    svg.append("circle")
          .attr("id", "circle-inner-washington")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")
          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton")
          .transition().delay(2000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-two")
          .transition().delay(4000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(4100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(4200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-three")
          .transition().delay(6000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-four")
          .transition().delay(8000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(8100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(8200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}


function renderOneThree(innerRadius) {

 $("#progressOneThree").addClass('firstBarResThree');

  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillOne = d3.select("#progressOneThree")
          .append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillOne.append("rect")
              .transition().duration(8000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)





  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 1000, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 1000, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcOneThree")
    .append("svg")
    .attr("class", 'arcOneResThree')
    //.attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");



  // var svgContainer = d3.select("#arcContainer").append("svg")
  //   .attr("width", 2000)
  //   .attr('viewBox', viewbox);


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(995).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFirstThree")
          // .style("stroke", "rgb(53,154,204))")
          .style("stroke", "rgb(0,255,255)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFirst")
        .transition()
        .delay(2000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })
        .transition()
        .delay(4000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })
        .transition()
        .delay(6000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)




    svg.append("text")
          .attr("id", "labelBurlington")
          .attr("y", 1150)
          .attr("x", 0)
          .attr("dy", ".35em")
          // .style("font-size", "24px")
          .style("font-size", "36px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Burlington, VT");

    svg.append("text")
          .attr("id", "labelWashington")
          .attr("y", 1150)
          .attr("x", 1800)
          .attr("dy", ".35em")
          // .style("font-size", "24px")
          .style("font-size", "36px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Washington")
          .transition().delay(10000).duration(2000)
          .attr("y", 1150)
          .attr("x", 2500)

    svg.append("text")
          .attr("id", "labelJourney")
          .attr("y", 50)
          .attr("x", 1650)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Longest Distance to Kill")
          .transition().delay(10000).duration(2000)
          .attr("y", 50)
          .attr("x", 2500)

    svg.append("text")
          .attr("id", "labelTwoJourney")
          .attr("y", 100)
          .attr("x", 1660)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Washington State +/- 2,900 mi")
          .transition().delay(10000).duration(2000)
          .attr("y", 100)
          .attr("x", 2500)

    svg.append("line")
          .attr("id", "lineJourney")
          .attr("x1", 1995)
          .attr("y1", 150)
          .attr("x2", 1995)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white")
          .transition().delay(10000).duration(2000)
          .attr("x1", 2500)
          .attr("y1", 150)
          .attr("x2", 2500)
          .attr("y2", 750)

    svg.append("line")
          .attr("id", "lineBurlington")
          .attr("x1", 5)
          .attr("y1", 1025)
          .attr("x2", 5)
          .attr("y2", 1125)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

    // svg.append("line")
    //       .attr("id", "lineWashington")
    //       .attr("x1", 1995)
    //       .attr("y1", 1025)
    //       .attr("x2", 1995)
    //       .attr("y2", 1125)
    //       .transition().delay(2000).duration(2000)
    //       .attr("stroke-width", 2)
    //       .attr("stroke", "white");


    svg.append("circle")
          .attr("id", "circleBurlington")
          .attr("cx", 5)
          .attr("cy", 1000)
          .attr("r", 10)
          .style("fill", "white")
          //.transition().delay(8000).duration(2000)
          .style("stroke", "black")
          //.style("fill", "none");


    // svgContainer.append("circle")
    svg.append("circle")
          .attr("id", "circle-outer-washington")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none")
          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)


    // svgContainer.append("circle")
    svg.append("circle")
          .attr("id", "circle-inner-washington")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")
          .transition().delay(10000).duration(2000)
          .attr("cy", 1000)
          .attr("cx", 2500)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton")
          .transition().delay(2000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-two")
          .transition().delay(4000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(4100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(4200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-three")
          .transition().delay(6000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


    svg.append("circle")
          .attr("id", "circle-pulse-washinton-four")
          .transition().delay(8000).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(8100).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(8200).duration(100)
          .attr("cx", 1990)
          .attr("cy", 1000)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}




// function zoomIn_new_two(innerRadius) {
function zoomIn_new_two_one(innerRadius) {
  const scaleFactor = 8;
  d3.select('#arcFirst')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)

  d3.selectAll("#labelJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelTwoJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelWashington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelBurlington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelFlorida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelColorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelIdaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelOregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelCalifornia").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineWashington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineBurlington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineFlorida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineColorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#linelabelUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineIdaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineOregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineCalifornia").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-washington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-washington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-california").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-california").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-oregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-oregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-idaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-idaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-utah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-utah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-colorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-colorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-florida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-florida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFirst").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSecond").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballThird").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFourth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFifth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSixth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSeventh").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-two").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-three").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-four").transition().delay(24000).duration(2000).remove()
}


function zoomIn_new_two_two(innerRadius) {
  const scaleFactor = 8;
  d3.select('#arcFirstTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)

  d3.selectAll("#labelJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelTwoJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelWashington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelBurlington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelFlorida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelColorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelIdaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelOregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelCalifornia").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineWashington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineBurlington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineFlorida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineColorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#linelabelUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineIdaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineOregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineCalifornia").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-washington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-washington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-california").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-california").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-oregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-oregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-idaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-idaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-utah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-utah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-colorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-colorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-florida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-florida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFirst").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSecond").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballThird").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFourth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFifth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSixth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSeventh").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-two").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-three").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-four").transition().delay(24000).duration(2000).remove()
}


function zoomIn_new_two_three(innerRadius) {
  const scaleFactor = 8;
  d3.select('#arcFirstThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)

  d3.selectAll("#labelJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelTwoJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelWashington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelBurlington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelFlorida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelColorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelIdaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelOregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#labelCalifornia").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineJourney").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineWashington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineBurlington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineFlorida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineColorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#linelabelUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineIdaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineUtah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineOregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#lineCalifornia").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-washington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-washington").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-california").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-california").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-oregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-oregon").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-idaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-idaho").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-utah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-utah").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-colorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-colorado").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-outer-florida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-inner-florida").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFirst").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSecond").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballThird").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFourth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballFifth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSixth").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#ballSeventh").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-two").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-three").transition().delay(24000).duration(2000).remove()
  d3.selectAll("#circle-pulse-washinton-four").transition().delay(24000).duration(2000).remove()
}




// function zoomIn_new_three(innerRadius) {
function zoomIn_new_three_one(innerRadius) {
  const scaleFactor = 5;
  d3.select('#arcSecond')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_three_two(innerRadius) {
  const scaleFactor = 5;
  d3.select('#arcSecondTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_three_three(innerRadius) {
  const scaleFactor = 5;
  d3.select('#arcSecondThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_four(innerRadius) {
  const scaleFactor = 4;
  d3.select('#arcThird')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_four_two(innerRadius) {
  const scaleFactor = 4;
  d3.select('#arcThirdTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_four_three(innerRadius) {
  const scaleFactor = 4;
  d3.select('#arcThirdThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_five(innerRadius) {
  const scaleFactor = 3;
  d3.select('#arcFourth')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_five_two(innerRadius) {
  const scaleFactor = 3;
  d3.select('#arcFourthTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_five_three(innerRadius) {
  const scaleFactor = 3;
  d3.select('#arcFourthThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_six(innerRadius) {
  const scaleFactor = 2;
  d3.select('#arcFifth')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_six_two(innerRadius) {
  const scaleFactor = 2;
  d3.select('#arcFifthTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_six_three(innerRadius) {
  const scaleFactor = 2;
  d3.select('#arcFifthThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_seven(innerRadius) {
  const scaleFactor = 6;
  d3.select('#arcSixth')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}

function zoomIn_new_seven_two(innerRadius) {
  const scaleFactor = 6;
  d3.select('#arcSixthTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_seven_three(innerRadius) {
  const scaleFactor = 6;
  d3.select('#arcSixthThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_eight(innerRadius) {
  const scaleFactor = 7;
  d3.select('#arcSeventh')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_eight_two(innerRadius) {
  const scaleFactor = 7;
  d3.select('#arcSeventhTwo')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_new_eight_three(innerRadius) {
  const scaleFactor = 7;
  d3.select('#arcSeventhThree')
    .transition().delay(26000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}





function renderTwo(innerRadius) {


   var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 700, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 700, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcTwo")
    .append("svg")
    .attr("class", 'arcTwoRes')
    // .attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");



  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(695).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`)
          .attr("id", "arcSecond")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(237,26,26)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSecond")
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("text")
          .attr("id", "labelIdaho")
          .attr("y", 840)
          .attr("x", 1335)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Idaho");

  svg.append("line")
          .attr("id", "lineIdaho")
          .attr("x1", 1395)
          .attr("y1", 725)
          .attr("x2", 1395)
          .attr("y2", 825)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-idaho")
          .style("fill", "none")
          .transition().delay(2000).duration(2000)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-idaho")
          .style("fill", "none")
          .transition().delay(4000).duration(0)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-idaho")
          .transition().delay(2000).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderTwoTwo(innerRadius) {


   var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 700, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 700, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcTwoTwo")
    .append("svg")
    .attr("class", 'arcTwoResTwo')
    // .attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");



  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(695).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`)
          .attr("id", "arcSecondTwo")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(237,26,26)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSecond")
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("text")
          .attr("id", "labelIdaho")
          .attr("y", 840)
          .attr("x", 1335)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Idaho");

  svg.append("line")
          .attr("id", "lineIdaho")
          .attr("x1", 1395)
          .attr("y1", 725)
          .attr("x2", 1395)
          .attr("y2", 825)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-idaho")
          .style("fill", "none")
          .transition().delay(2000).duration(2000)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-idaho")
          .style("fill", "none")
          .transition().delay(4000).duration(0)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-idaho")
          .transition().delay(2000).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}


function renderTwoThree(innerRadius) {


   var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 700, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 700, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcTwoThree")
    .append("svg")
    .attr("class", 'arcTwoResThree')
    // .attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");



  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(695).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`)
          .attr("id", "arcSecondThree")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(237,26,26)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSecond")
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("text")
          .attr("id", "labelIdaho")
          .attr("y", 840)
          .attr("x", 1335)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Idaho");

  svg.append("line")
          .attr("id", "lineIdaho")
          .attr("x1", 1395)
          .attr("y1", 725)
          .attr("x2", 1395)
          .attr("y2", 825)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-idaho")
          .style("fill", "none")
          .transition().delay(2000).duration(2000)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-idaho")
          .style("fill", "none")
          .transition().delay(4000).duration(0)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-idaho")
          .transition().delay(2000).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1395)
          .attr("cy", 700)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}




function renderThree(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 600, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 600, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcThree")
    .append("svg")
    .attr("class", 'arcThreeRes')
    //.attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(595).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcThird")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(4000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballThird")
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("text")
          .attr("id", "labelUtah")
          .attr("y", 740)
          .attr("x", 1140)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(6000).duration(2000)
          .text("Utah");

  svg.append("line")
          .attr("id", "lineUtah")
          .attr("x1", 1195)
          .attr("y1", 625)
          .attr("x2", 1195)
          .attr("y2", 725)
          .transition().delay(6000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-utah")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-utah")
          .style("fill", "none")
          .transition().delay(8000).duration(0)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-utah")
          .transition().delay(6000).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6100).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6200).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}


function renderThreeTwo(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 600, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 600, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcThreeTwo")
    .append("svg")
    .attr("class", 'arcThreeResTwo')
    //.attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(595).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcThirdTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(4000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballThird")
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("text")
          .attr("id", "labelUtah")
          .attr("y", 740)
          .attr("x", 1140)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(6000).duration(2000)
          .text("Utah");

  svg.append("line")
          .attr("id", "lineUtah")
          .attr("x1", 1195)
          .attr("y1", 625)
          .attr("x2", 1195)
          .attr("y2", 725)
          .transition().delay(6000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-utah")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-utah")
          .style("fill", "none")
          .transition().delay(8000).duration(0)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-utah")
          .transition().delay(6000).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6100).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6200).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderThreeThree(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 600, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 600, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcThreeThree")
    .append("svg")
    .attr("class", 'arcThreeResThree')
    //.attr("width", width)
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(595).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcThirdThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(4000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballThird")
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("text")
          .attr("id", "labelUtah")
          .attr("y", 740)
          .attr("x", 1140)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(6000).duration(2000)
          .text("Utah");

  svg.append("line")
          .attr("id", "lineUtah")
          .attr("x1", 1195)
          .attr("y1", 625)
          .attr("x2", 1195)
          .attr("y2", 725)
          .transition().delay(6000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-utah")
          .style("fill", "none")
          .transition().delay(8000).duration(2000)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-utah")
          .style("fill", "none")
          .transition().delay(8000).duration(0)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-utah")
          .transition().delay(6000).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6100).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(6200).duration(100)
          .attr("cx", 1195)
          .attr("cy", 600)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderFour(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 500, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 500, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcFour")
    .append("svg")
    .attr("class", 'arcFourRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(495).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFourth")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(8000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFourth")
        .attr('fill', 'none')
        .transition()
        .delay(10000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelColorado")
          .attr("y", 640)
          .attr("x", 900)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(10000).duration(2000)
          .text("Colorado");

  svg.append("line")
          .attr("id", "lineColorado")
          .attr("x1", 995)
          .attr("y1", 525)
          .attr("x2", 995)
          .attr("y2", 625)
          .transition().delay(10000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-colorado")
          .style("fill", "none")
          .transition().delay(12000).duration(2000)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-colorado")
          .style("fill", "none")
          .transition().delay(12000).duration(0)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-colorado")
          .transition().delay(10000).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(10100).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(10200).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderFourTwo(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 500, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 500, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcFourTwo")
    .append("svg")
    .attr("class", 'arcFourResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(495).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFourthTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(8000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFourth")
        .attr('fill', 'none')
        .transition()
        .delay(10000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelColorado")
          .attr("y", 640)
          .attr("x", 900)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(10000).duration(2000)
          .text("Colorado");

  svg.append("line")
          .attr("id", "lineColorado")
          .attr("x1", 995)
          .attr("y1", 525)
          .attr("x2", 995)
          .attr("y2", 625)
          .transition().delay(10000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-colorado")
          .style("fill", "none")
          .transition().delay(12000).duration(2000)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-colorado")
          .style("fill", "none")
          .transition().delay(12000).duration(0)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-colorado")
          .transition().delay(10000).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(10100).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(10200).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}

function renderFourThree(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 500, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 500, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcFourThree")
    .append("svg")
    .attr("class", 'arcFourResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(495).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFourthThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(8000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFourth")
        .attr('fill', 'none')
        .transition()
        .delay(10000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelColorado")
          .attr("y", 640)
          .attr("x", 900)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(10000).duration(2000)
          .text("Colorado");

  svg.append("line")
          .attr("id", "lineColorado")
          .attr("x1", 995)
          .attr("y1", 525)
          .attr("x2", 995)
          .attr("y2", 625)
          .transition().delay(10000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-colorado")
          .style("fill", "none")
          .transition().delay(12000).duration(2000)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-colorado")
          .style("fill", "none")
          .transition().delay(12000).duration(0)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-colorado")
          .transition().delay(10000).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(10100).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(10200).duration(100)
          .attr("cx", 995)
          .attr("cy", 500)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}


function renderFive(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 400, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 400, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcFive")
    .append("svg")
    .attr("class", 'arcFiveRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(395).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFifth")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(12000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFifth")
        .attr('fill', 'none')
        .transition()
        .delay(14000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelFlorida")
          // .attr("y", 550)
          // .attr("x", 720)
          .attr("y", 550)
          .attr("x", 690)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          // .style("font-size", "30px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(14000).duration(2000)
          .text("Florida");

  svg.append("line")
          .attr("id", "lineFlorida")
          .attr("x1", 790)
          .attr("y1", 425)
          .attr("x2", 790)
          .attr("y2", 520)
          .transition().delay(14000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-florida")
          .style("fill", "none")
          .transition().delay(16000).duration(2000)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-florida")
          .style("fill", "none")
          .transition().delay(16000).duration(0)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-florida")
          .transition().delay(14000).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(14100).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(14200).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderFiveTwo(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 400, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 400, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcFiveTwo")
    .append("svg")
    .attr("class", 'arcFiveResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(395).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFifthTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(12000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFifth")
        .attr('fill', 'none')
        .transition()
        .delay(14000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelFlorida")
          // .attr("y", 550)
          // .attr("x", 720)
          .attr("y", 550)
          .attr("x", 690)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          // .style("font-size", "30px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(14000).duration(2000)
          .text("Florida");

  svg.append("line")
          .attr("id", "lineFlorida")
          .attr("x1", 790)
          .attr("y1", 425)
          .attr("x2", 790)
          .attr("y2", 520)
          .transition().delay(14000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-florida")
          .style("fill", "none")
          .transition().delay(16000).duration(2000)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-florida")
          .style("fill", "none")
          .transition().delay(16000).duration(0)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-florida")
          .transition().delay(14000).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(14100).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(14200).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderFiveThree(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 400, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 400, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcFiveThree")
    .append("svg")
    .attr("class", 'arcFiveResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(395).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcFifthThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(12000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballFifth")
        .attr('fill', 'none')
        .transition()
        .delay(14000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelFlorida")
          // .attr("y", 550)
          // .attr("x", 720)
          .attr("y", 550)
          .attr("x", 690)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          // .style("font-size", "30px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(14000).duration(2000)
          .text("Florida");

  svg.append("line")
          .attr("id", "lineFlorida")
          .attr("x1", 790)
          .attr("y1", 425)
          .attr("x2", 790)
          .attr("y2", 520)
          .transition().delay(14000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-florida")
          .style("fill", "none")
          .transition().delay(16000).duration(2000)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-florida")
          .style("fill", "none")
          .transition().delay(16000).duration(0)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-florida")
          .transition().delay(14000).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(14100).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(14200).duration(100)
          .attr("cx", 795)
          .attr("cy", 400)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}




function renderSix(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 800, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 800, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcSix")
    .append("svg")
    .attr("class", 'arcSixRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(795).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcSixth")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(16000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSixth")
        .attr('fill', 'none')
        .transition()
        .delay(18000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelOregon")
          .attr("y", 935)
          .attr("x", 1520)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(18000).duration(2000)
          .text("Oregon");

  svg.append("line")
          .attr("id", "lineOregon")
          .attr("x1", 1595)
          .attr("y1", 825)
          .attr("x2", 1595)
          .attr("y2", 915)
          .transition().delay(18000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-oregon")
          .style("fill", "none")
          .transition().delay(20000).duration(2000)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-oregon")
          .style("fill", "none")
          .transition().delay(20000).duration(0)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-oregon")
          .transition().delay(18000).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(18100).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(18200).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderSixTwo(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 800, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 800, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcSixTwo")
    .append("svg")
    .attr("class", 'arcSixResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(795).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcSixthTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(16000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSixth")
        .attr('fill', 'none')
        .transition()
        .delay(18000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelOregon")
          .attr("y", 935)
          .attr("x", 1520)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(18000).duration(2000)
          .text("Oregon");

  svg.append("line")
          .attr("id", "lineOregon")
          .attr("x1", 1595)
          .attr("y1", 825)
          .attr("x2", 1595)
          .attr("y2", 915)
          .transition().delay(18000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-oregon")
          .style("fill", "none")
          .transition().delay(20000).duration(2000)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-oregon")
          .style("fill", "none")
          .transition().delay(20000).duration(0)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-oregon")
          .transition().delay(18000).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(18100).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(18200).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}


function renderSixThree(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 800, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 800, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcSixThree")
    .append("svg")
    .attr("class", 'arcSixResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(795).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcSixthThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(16000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSixth")
        .attr('fill', 'none')
        .transition()
        .delay(18000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelOregon")
          .attr("y", 935)
          .attr("x", 1520)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(18000).duration(2000)
          .text("Oregon");

  svg.append("line")
          .attr("id", "lineOregon")
          .attr("x1", 1595)
          .attr("y1", 825)
          .attr("x2", 1595)
          .attr("y2", 915)
          .transition().delay(18000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-oregon")
          .style("fill", "none")
          .transition().delay(20000).duration(2000)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-oregon")
          .style("fill", "none")
          .transition().delay(20000).duration(0)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-oregon")
          .transition().delay(18000).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(18100).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(18200).duration(100)
          .attr("cx", 1595)
          .attr("cy", 800)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderSeven(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 900, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 900, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcSeven")
    .append("svg")
    .attr("class", 'arcSevenRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(895).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcSeventh")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(20000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSeventh")
        .attr('fill', 'none')
        .transition()
        .delay(22000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelCalifornia")
          .attr("y", 1030)
          .attr("x", 1710)
          .attr("dy", ".35em")
          .style("font-size", "20px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(22000).duration(2000)
          .text("California");

  svg.append("line")
          .attr("id", "lineCalifornia")
          .attr("x1", 1795)
          .attr("y1", 920)
          .attr("x2", 1795)
          .attr("y2", 1010)
          .transition().delay(22000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-california")
          .style("fill", "none")
          .transition().delay(24000).duration(2000)
          .attr("cx", 1795)
          .attr("cy", 900)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-california")
          .style("fill", "none")
          .transition().delay(24000).duration(0)
          .attr("cx", 1795)
          .attr("cy", 900)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-california")
          .transition().delay(22000).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(22100).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(22200).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}



function renderSevenTwo(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 900, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 900, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcSevenTwo")
    .append("svg")
    .attr("class", 'arcSevenResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(895).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcSeventhTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(20000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSeventh")
        .attr('fill', 'none')
        .transition()
        .delay(22000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelCalifornia")
          .attr("y", 1030)
          .attr("x", 1710)
          .attr("dy", ".35em")
          .style("font-size", "20px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(22000).duration(2000)
          .text("California");

  svg.append("line")
          .attr("id", "lineCalifornia")
          .attr("x1", 1795)
          .attr("y1", 920)
          .attr("x2", 1795)
          .attr("y2", 1010)
          .transition().delay(22000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-california")
          .style("fill", "none")
          .transition().delay(24000).duration(2000)
          .attr("cx", 1795)
          .attr("cy", 900)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-california")
          .style("fill", "none")
          .transition().delay(24000).duration(0)
          .attr("cx", 1795)
          .attr("cy", 900)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-california")
          .transition().delay(22000).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(22100).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(22200).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}


function renderSevenThree(innerRadius) {

    var dbl = innerRadius * 2;
  // var width = "100%", //1250,
  var width = 900, //1250,
    viewbox = `0 0 ${dbl} ${dbl}`,
    // height = "100%", //1250,
    height = 900, //1250,
    colors = d3.scale.category20();

  var svg = d3.select("#arcSevenThree")
    .append("svg")
    .attr("class", 'arcSevenResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");

  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(895).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "arcSeventhThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(20000).duration(2000).ease("linear")
          .style("stroke", "rgb(0,255,255)")
          // .style("stroke", "rgb(255,192,203)")
          .style("stroke-width", 5)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballSeventh")
        .attr('fill', 'none')
        .transition()
        .delay(22000)
        .duration(2000)
        .attr('r', 20)
        .style("fill", "rgb(0,255,255)")
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("text")
          .attr("id", "labelCalifornia")
          .attr("y", 1030)
          .attr("x", 1710)
          .attr("dy", ".35em")
          .style("font-size", "20px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(22000).duration(2000)
          .text("California");

  svg.append("line")
          .attr("id", "lineCalifornia")
          .attr("x1", 1795)
          .attr("y1", 920)
          .attr("x2", 1795)
          .attr("y2", 1010)
          .transition().delay(22000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  svg.append("circle")
          .attr("id", "circle-outer-california")
          .style("fill", "none")
          .transition().delay(24000).duration(2000)
          .attr("cx", 1795)
          .attr("cy", 900)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");


  svg.append("circle")
          .attr("id", "circle-inner-california")
          .style("fill", "none")
          .transition().delay(24000).duration(0)
          .attr("cx", 1795)
          .attr("cy", 900)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(0,255,255)")


  svg.append("circle")
          .attr("id", "circle-pulse-california")
          .transition().delay(22000).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(22100).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          .attr("r", 60)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(22200).duration(100)
          .attr("cx", 1795)
          .attr("cy", 895)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)


}




function zoomIn_Gacy(innerRadius) {
  const scaleFactor = 2;
  d3.select('#initiatearcRidgway')
    .transition().delay(8000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_Gacy_Two(innerRadius) {
  const scaleFactor = 2;
  d3.select('#initiatearcRidgwayTwo')
    .transition().delay(8000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}


function zoomIn_Gacy_Three(innerRadius) {
  const scaleFactor = 2;
  d3.select('#initiatearcRidgwayThree')
    .transition().delay(8000).duration(2000)
    .attr("transform", `translate(${innerRadius * scaleFactor},${innerRadius}) scale(${scaleFactor})`)
}




function renderRidgway(innerRadius){


  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 750, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height = 750, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcRidgway")
    .append("svg")
    .attr("class", 'arcRidgwayRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(745).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRidgway")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(255, 0, 0)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 5)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 10)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 15)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 25)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 30)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 35)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 40)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 45)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 50)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 55)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 60)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 65)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 70)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 75)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 80)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 85)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 90)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 95)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(7000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 100)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "circle-pulse-ridgway")
          .transition().delay(2000).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 300)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)



  svg.append("text")
          .attr("id", "labelRidgway")
          .attr("y", 50)
          .attr("x", 1300)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Gary Ridgway");

  svg.append("text")
          .attr("id", "labelRidgwayTwo")
          .attr("y", 100)
          .attr("x", 1200)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("America's Second Most Prolific Killer");


  svg.append("line")
          .attr("id", "lineRidgway")
          .attr("x1", 1490)
          .attr("y1", 150)
          .attr("x2", 1490)
          .attr("y2", 650)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


  svg.append("line")
          .attr("id", "lineSaltLakeCity")
          .attr("x1", 5)
          .attr("y1", 750)
          .attr("x2", 5)
          .attr("y2", 900)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  // svg.append("line")
  //         .attr("id", "lineSeattle")
  //         .attr("x1", 1490)
  //         .attr("y1", 750)
  //         .attr("x2", 1490)
  //         .attr("y2", 900)
  //         .transition().delay(2000).duration(2000)
  //         .attr("stroke-width", 2)
  //         .attr("stroke", "white");

  svg.append("text")
          .attr("id", "labelSaltLakeCity")
          .attr("y", 950)
          .attr("x", 5)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Salt Lake City, Utah");

  svg.append("text")
          .attr("id", "labelSeattle")
          .attr("y", 950)
          .attr("x", 1380)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Seattle, Washington");




  svg.append("circle")
          .attr("id", "ridgway-outer-circle")
          .style("fill", "none")
          .transition().delay(2000).duration(4000)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 100)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 0, 0)")
          .style("fill", "none");


}




function renderRidgwayTwo(innerRadius){


  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 750, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height = 750, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcRidgwayTwo")
    .append("svg")
    .attr("class", 'arcRidgwayResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(745).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRidgwayTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(255, 0, 0)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 5)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 10)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 15)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 25)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 30)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 35)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 40)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 45)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 50)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 55)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 60)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 65)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 70)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 75)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 80)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 85)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 90)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 95)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(7000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 100)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "circle-pulse-ridgway")
          .transition().delay(2000).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 300)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)



  svg.append("text")
          .attr("id", "labelRidgway")
          .attr("y", 50)
          .attr("x", 1300)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Gary Ridgway");

  svg.append("text")
          .attr("id", "labelRidgwayTwo")
          .attr("y", 100)
          .attr("x", 1200)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("America's Second Most Prolific Killer");


  svg.append("line")
          .attr("id", "lineRidgway")
          .attr("x1", 1490)
          .attr("y1", 150)
          .attr("x2", 1490)
          .attr("y2", 650)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


  svg.append("line")
          .attr("id", "lineSaltLakeCity")
          .attr("x1", 5)
          .attr("y1", 750)
          .attr("x2", 5)
          .attr("y2", 900)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  // svg.append("line")
  //         .attr("id", "lineSeattle")
  //         .attr("x1", 1490)
  //         .attr("y1", 750)
  //         .attr("x2", 1490)
  //         .attr("y2", 900)
  //         .transition().delay(2000).duration(2000)
  //         .attr("stroke-width", 2)
  //         .attr("stroke", "white");

  svg.append("text")
          .attr("id", "labelSaltLakeCity")
          .attr("y", 950)
          .attr("x", 5)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Salt Lake City, Utah");

  svg.append("text")
          .attr("id", "labelSeattle")
          .attr("y", 950)
          .attr("x", 1380)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Seattle, Washington");




  svg.append("circle")
          .attr("id", "ridgway-outer-circle")
          .style("fill", "none")
          .transition().delay(2000).duration(4000)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 100)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 0, 0)")
          .style("fill", "none");


}





function renderRidgwayThree(innerRadius){


  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 750, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height = 750, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcRidgwayThree")
    .append("svg")
    .attr("class", 'arcRidgwayResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(745).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRidgwayThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(255, 0, 0)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(3750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(4750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(5750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr("id", "ballRidgway")
        .attr('fill', 'none')
        .transition()
        .delay(6750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(255, 0, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 5)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 10)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 15)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 25)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 30)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 35)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 40)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 45)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 50)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(4750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 55)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 60)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 65)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 70)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(5750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 75)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 80)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");

  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6250).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 85)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6500).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 90)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(6750).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 95)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "ridgway-circle")
          .style("fill", "none")
          .transition().delay(7000).duration(250)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 100)
          .style("stroke", "black")
          .style("stroke-opacity", .5)
          .style("fill", "rgb(255, 0, 0)");


  svg.append("circle")
          .attr("id", "circle-pulse-ridgway")
          .transition().delay(2000).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 1)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2100).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 300)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 255, 0)")
          .style("fill", "none")
          .style("opacity", 1)
          .transition().delay(2200).duration(100)
          .attr("cx", 1500)
          .attr("cy", 750)
          // .attr("r", 0)
          .attr("stroke-width", 0)
          //.style("stroke", "blue")
          .style("fill", "none")
          .style("opacity", 0)



  svg.append("text")
          .attr("id", "labelRidgway")
          .attr("y", 50)
          .attr("x", 1300)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Gary Ridgway");

  svg.append("text")
          .attr("id", "labelRidgwayTwo")
          .attr("y", 100)
          .attr("x", 1200)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("America's Second Most Prolific Killer");


  svg.append("line")
          .attr("id", "lineRidgway")
          .attr("x1", 1490)
          .attr("y1", 150)
          .attr("x2", 1490)
          .attr("y2", 650)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


  svg.append("line")
          .attr("id", "lineSaltLakeCity")
          .attr("x1", 5)
          .attr("y1", 750)
          .attr("x2", 5)
          .attr("y2", 900)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 2)
          .attr("stroke", "white");

  // svg.append("line")
  //         .attr("id", "lineSeattle")
  //         .attr("x1", 1490)
  //         .attr("y1", 750)
  //         .attr("x2", 1490)
  //         .attr("y2", 900)
  //         .transition().delay(2000).duration(2000)
  //         .attr("stroke-width", 2)
  //         .attr("stroke", "white");

  svg.append("text")
          .attr("id", "labelSaltLakeCity")
          .attr("y", 950)
          .attr("x", 5)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Salt Lake City, Utah");

  svg.append("text")
          .attr("id", "labelSeattle")
          .attr("y", 950)
          .attr("x", 1380)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Seattle, Washington");




  svg.append("circle")
          .attr("id", "ridgway-outer-circle")
          .style("fill", "none")
          .transition().delay(2000).duration(4000)
          .attr("cx", 1500)
          .attr("cy", 750)
          .attr("r", 100)
          .attr("stroke-width", 5)
          .style("stroke", "rgb(255, 0, 0)")
          .style("fill", "none");


}














function renderGacy(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 500, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 500, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcGacy")
    .append("svg")
    .attr("class", 'arcGacyRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(495).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcGacy")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 7)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 14)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 21)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 28)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 35)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 42)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 49)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 56)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 63)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 70)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 77)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(5000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 84)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");


  svg.append("circle")
          .attr("id", "gacy-outer-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 84)
          .style("stroke", "black")
          .style("fill", "none");



}



function renderGacyTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 500, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 500, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcGacyTwo")
    .append("svg")
    .attr("class", 'arcGacyResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(495).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcGacy")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 7)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 14)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 21)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 28)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 35)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 42)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 49)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 56)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 63)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 70)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 77)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(5000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 84)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");


  svg.append("circle")
          .attr("id", "gacy-outer-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 84)
          .style("stroke", "black")
          .style("fill", "none");



}



function renderGacyThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 500, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 500, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcGacyThree")
    .append("svg")
    .attr("class", 'arcGacyResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(495).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcGacy")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(4750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })



  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 7)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 14)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 21)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 28)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 35)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 42)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 49)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 56)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 63)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4500).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 70)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(4750).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 77)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gacy-circle")
          .style("fill", "none")
          .transition().delay(5000).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 84)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");


  svg.append("circle")
          .attr("id", "gacy-outer-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 1000)
          .attr("cy", 500)
          .attr("r", 84)
          .style("stroke", "black")
          .style("fill", "none");



}













function renderGein(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 450, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 450, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcGein")
    .append("svg")
    .attr("class", 'arcGeinRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(445).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcGein")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          // .style("stroke", "rgb(150, 75, 20)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("circle")
          .attr("id", "gein-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 10)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gein-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");


  svg.append("circle")
          .attr("id", "gein-outer-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");



}




function renderGeinTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 450, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 450, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcGeinTwo")
    .append("svg")
    .attr("class", 'arcGeinResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(445).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcGein")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          // .style("stroke", "rgb(150, 75, 20)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("circle")
          .attr("id", "gein-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 10)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gein-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");


  svg.append("circle")
          .attr("id", "gein-outer-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");



}


function renderGeinThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 450, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 450, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcGeinThree")
    .append("svg")
    .attr("class", 'arcGeinResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(445).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcGein")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          // .style("stroke", "rgb(150, 75, 20)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

  svg.append("circle")
          .attr("id", "gein-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 10)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "gein-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 20)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");


  svg.append("circle")
          .attr("id", "gein-outer-circle")
          .style("fill", "none")
          .transition().delay(2250).duration(250)
          .attr("cx", 900)
          .attr("cy", 450)
          .attr("r", 20)
          .style("stroke", "black")
          .style("fill", "none");



}





function renderDahmer(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 550, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 550, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcDahmer")
    .append("svg")
    .attr("class", 'arcDahmerRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(545).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcDahmer")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          // .style("stroke", "rgb(150, 75, 20)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 8)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 16)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 24)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 32)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 40)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 48)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 56)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");



  svg.append("circle")
          .attr("id", "dahmer-outer-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 56)
          .style("stroke", "black")
          .style("fill", "none");


svg.append("text")
          .attr("id", "labelArcFour")
          .attr("y", 250)
          .attr("x", 400)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Ed Gein");


svg.append("text")
          .attr("id", "labelArcFourTwo")
          .attr("y", 200)
          .attr("x", 600)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("John Wayne Gacy");

svg.append("text")
          .attr("id", "labelArcFourThree")
          .attr("y", 150)
          .attr("x", 950)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Jeffrey Dahmer");


// svg.append("line")
//           .attr("id", "lineArcFour")
//           .attr("x1", 360)
//           .attr("y1", 150)
//           .attr("x2", 360)
//           .attr("y2", 325)
//           .transition().delay(2000).duration(2000)
//           .attr("stroke-width", 3)
//           .attr("stroke", "black");




svg.append("line")
          .attr("id", "lineStart")
          .attr("x1", 0)
          .attr("y1", 575)
          .attr("x2", 0)
          .attr("y2", 775)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");



svg.append("text")
          .attr("id", "labelStart")
          .attr("y", 800)
          .attr("x", 0)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Place of Birth");



svg.append("text")
          .attr("id", "labelDahmer")
          .attr("y", 800)
          .attr("x", 1090)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Milwaukee, WI");


svg.append("line")
          .attr("id", "lineDahmer")
          .attr("x1", 1100)
          .attr("y1", 650)
          .attr("x2", 1100)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


svg.append("text")
          .attr("id", "labelGacy")
          .attr("y", 800)
          .attr("x", 800)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Norwood Park, Chicaco");


svg.append("line")
          .attr("id", "lineGacy")
          .attr("x1", 850)
          .attr("y1", 650)
          .attr("x2", 850)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


svg.append("text")
          .attr("id", "labelGein")
          .attr("y", 800)
          .attr("x", 600)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Plainfield, WI");


svg.append("line")
          .attr("id", "lineGein")
          .attr("x1", 630)
          .attr("y1", 650)
          .attr("x2", 630)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


}




function renderDahmerTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 550, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 550, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcDahmerTwo")
    .append("svg")
    .attr("class", 'arcDahmerResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(545).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcDahmer")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          // .style("stroke", "rgb(150, 75, 20)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 8)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 16)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 24)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 32)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 40)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 48)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 56)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");



  svg.append("circle")
          .attr("id", "dahmer-outer-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 56)
          .style("stroke", "black")
          .style("fill", "none");


svg.append("text")
          .attr("id", "labelArcFour")
          .attr("y", 250)
          .attr("x", 400)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Ed Gein");


svg.append("text")
          .attr("id", "labelArcFourTwo")
          .attr("y", 200)
          .attr("x", 600)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("John Wayne Gacy");

svg.append("text")
          .attr("id", "labelArcFourThree")
          .attr("y", 150)
          .attr("x", 950)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Jeffrey Dahmer");


// svg.append("line")
//           .attr("id", "lineArcFour")
//           .attr("x1", 360)
//           .attr("y1", 150)
//           .attr("x2", 360)
//           .attr("y2", 325)
//           .transition().delay(2000).duration(2000)
//           .attr("stroke-width", 3)
//           .attr("stroke", "black");




svg.append("line")
          .attr("id", "lineStart")
          .attr("x1", 0)
          .attr("y1", 575)
          .attr("x2", 0)
          .attr("y2", 775)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");



svg.append("text")
          .attr("id", "labelStart")
          .attr("y", 800)
          .attr("x", 0)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Place of Birth");



svg.append("text")
          .attr("id", "labelDahmer")
          .attr("y", 800)
          .attr("x", 1090)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Milwaukee, WI");


svg.append("line")
          .attr("id", "lineDahmer")
          .attr("x1", 1100)
          .attr("y1", 650)
          .attr("x2", 1100)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


svg.append("text")
          .attr("id", "labelGacy")
          .attr("y", 800)
          .attr("x", 800)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Norwood Park, Chicaco");


svg.append("line")
          .attr("id", "lineGacy")
          .attr("x1", 850)
          .attr("y1", 650)
          .attr("x2", 850)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


svg.append("text")
          .attr("id", "labelGein")
          .attr("y", 800)
          .attr("x", 600)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Plainfield, WI");


svg.append("line")
          .attr("id", "lineGein")
          .attr("x1", 630)
          .attr("y1", 650)
          .attr("x2", 630)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");




}




function renderDahmerThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 550, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 550, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcDahmerThree")
    .append("svg")
    .attr("class", 'arcDahmerResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(545).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcDahmer")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().duration(2000).ease("linear")
          .style("stroke", "rgb(17, 255, 0)")
          // .style("stroke", "rgb(150, 75, 20)")
          .style("stroke-width", 10)
          .style("fill", "black") //"none"
          .style("opacity", 1)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(2750)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3000)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3250)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(3500)
        .duration(250)
        .attr('r', 20)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })


  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 8)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(2750).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 16)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3000).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 24)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3250).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 32)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 40)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(3750).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 48)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");

  svg.append("circle")
          .attr("id", "dahmer-circle")
          .style("fill", "none")
          .transition().delay(4000).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 56)
          .style("stroke", "black")
          .style("stroke-opacity", 1)
          .style("fill", "rgb(17, 255, 0)");



  svg.append("circle")
          .attr("id", "dahmer-outer-circle")
          .style("fill", "none")
          .transition().delay(2500).duration(250)
          .attr("cx", 1100)
          .attr("cy", 550)
          .attr("r", 56)
          .style("stroke", "black")
          .style("fill", "none");


svg.append("text")
          .attr("id", "labelArcFour")
          .attr("y", 250)
          .attr("x", 400)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Ed Gein");


svg.append("text")
          .attr("id", "labelArcFourTwo")
          .attr("y", 200)
          .attr("x", 600)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("John Wayne Gacy");

svg.append("text")
          .attr("id", "labelArcFourThree")
          .attr("y", 150)
          .attr("x", 950)
          .attr("dy", ".35em")
          .style("font-size", "36px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Jeffrey Dahmer");


// svg.append("line")
//           .attr("id", "lineArcFour")
//           .attr("x1", 360)
//           .attr("y1", 150)
//           .attr("x2", 360)
//           .attr("y2", 325)
//           .transition().delay(2000).duration(2000)
//           .attr("stroke-width", 3)
//           .attr("stroke", "black");




svg.append("line")
          .attr("id", "lineStart")
          .attr("x1", 0)
          .attr("y1", 575)
          .attr("x2", 0)
          .attr("y2", 775)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");



svg.append("text")
          .attr("id", "labelStart")
          .attr("y", 800)
          .attr("x", 0)
          .attr("dy", ".35em")
          .style("font-size", "28px")
          .style("font-weight", "bold")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Place of Birth");



svg.append("text")
          .attr("id", "labelDahmer")
          .attr("y", 800)
          .attr("x", 1090)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Milwaukee, WI");


svg.append("line")
          .attr("id", "lineDahmer")
          .attr("x1", 1100)
          .attr("y1", 650)
          .attr("x2", 1100)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


svg.append("text")
          .attr("id", "labelGacy")
          .attr("y", 800)
          .attr("x", 800)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Norwood Park, Chicaco");


svg.append("line")
          .attr("id", "lineGacy")
          .attr("x1", 850)
          .attr("y1", 650)
          .attr("x2", 850)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");


svg.append("text")
          .attr("id", "labelGein")
          .attr("y", 800)
          .attr("x", 600)
          .attr("dy", ".35em")
          .style("font-size", "24px")
          .attr('fill', 'rgb(255,255,255)')
          .transition().delay(2000).duration(2000)
          .text("Plainfield, WI");


svg.append("line")
          .attr("id", "lineGein")
          .attr("x1", 630)
          .attr("y1", 650)
          .attr("x2", 630)
          .attr("y2", 750)
          .transition().delay(2000).duration(2000)
          .attr("stroke-width", 3)
          .attr("stroke", "white");




}





function renderRandomOne(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 770, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 770, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcOneRandom")
    .append("svg")
    .attr("class", 'arcOneRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(765).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomOne")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomOneTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 770, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 770, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcOneRandomTwo")
    .append("svg")
    .attr("class", 'arcOneRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(765).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomOne")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomOneThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 770, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height = 770, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcOneRandomThree")
    .append("svg")
    .attr("class", 'arcOneRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(765).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomOne")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}






function renderRandomTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 590, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =590, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTwoRandom")
    .append("svg")
    .attr("class", 'arcTwoRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(585).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomTwoTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 590, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =590, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTwoRandomTwo")
    .append("svg")
    .attr("class", 'arcTwoRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(585).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomTwoThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 590, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =590, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTwoRandomThree")
    .append("svg")
    .attr("class", 'arcTwoRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(585).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTwo")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}





function renderRandomThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 930, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =930, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcThreeRandom")
    .append("svg")
    .attr("class", 'arcThreeRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(925).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomThreeTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 930, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =930, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcThreeRandomTwo")
    .append("svg")
    .attr("class", 'arcThreeRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(925).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomThreeThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 930, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =930, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcThreeRandomThree")
    .append("svg")
    .attr("class", 'arcThreeRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(925).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomThree")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomFour(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 640, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =640, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcFourRandom")
    .append("svg")
    .attr("class", 'arcFourRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(635).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomFour")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomFourTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 640, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =640, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcFourRandomTwo")
    .append("svg")
    .attr("class", 'arcFourRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(635).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomFour")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomFourThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 640, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =640, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcFourRandomThree")
    .append("svg")
    .attr("class", 'arcFourRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(635).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomFour")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}





function renderRandomFive(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 710, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =710, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcFiveRandom")
    .append("svg")
    .attr("class", 'arcFiveRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(705).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomFive")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomFiveTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 710, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =710, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcFiveRandomTwo")
    .append("svg")
    .attr("class", 'arcFiveRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(705).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomFive")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomFiveThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 710, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =710, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcFiveRandomThree")
    .append("svg")
    .attr("class", 'arcFiveRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(705).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomFive")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}




function renderRandomSix(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 820, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =820, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcSixRandom")
    .append("svg")
    .attr("class", 'arcSixRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(815).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomSix")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomSixTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 820, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =820, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcSixRandomTwo")
    .append("svg")
    .attr("class", 'arcSixRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(815).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomSix")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomSixThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 820, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =820, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcSixRandomThree")
    .append("svg")
    .attr("class", 'arcSixRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(815).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomSix")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(160, 32, 240)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}




function renderRandomSeven(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 880, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =880, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcSevenRandom")
    .append("svg")
    .attr("class", 'arcSevenRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(875).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomSeven")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomSevenTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 880, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =880, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcSevenRandomTwo")
    .append("svg")
    .attr("class", 'arcSevenRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(875).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomSeven")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomSevenThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 880, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =880, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcSevenRandomThree")
    .append("svg")
    .attr("class", 'arcSevenRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(875).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomSeven")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(5500).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6000)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}




function renderRandomEight(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 610, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =610, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcEightRandom")
    .append("svg")
    .attr("class", 'arcEightRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(605).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomEight")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomEightTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 610, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =610, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcEightRandomTwo")
    .append("svg")
    .attr("class", 'arcEightRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(605).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomEight")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomEightThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 610, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =610, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcEightRandomThree")
    .append("svg")
    .attr("class", 'arcEightRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(605).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomEight")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 255, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}





function renderRandomNine(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 680, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =680, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcNineRandom")
    .append("svg")
    .attr("class", 'arcNineRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(675).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomNine")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}




function renderRandomNineTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 680, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =680, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcNineRandomTwo")
    .append("svg")
    .attr("class", 'arcNineRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(675).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomNine")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomNineThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 680, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =680, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcNineRandomThree")
    .append("svg")
    .attr("class", 'arcNineRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(675).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomNine")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomTen(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 740, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =740, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTenRandom")
    .append("svg")
    .attr("class", 'arcTenRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(735).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTen")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}






function renderRandomTenTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 740, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =740, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTenRandomTwo")
    .append("svg")
    .attr("class", 'arcTenRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(735).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTen")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomTenThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 740, //1250,
    viewbox = `0 0 1600 ${dbl}`,
    height =740, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTenRandomThree")
    .append("svg")
    .attr("class", 'arcTenRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(735).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTen")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(0, 0, 255)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}






function renderRandomEleven(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 910, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =910, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcElevenRandom")
    .append("svg")
    .attr("class", 'arcElevenRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(905).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomEleven")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomElevenTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 910, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =910, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcElevenRandomTwo")
    .append("svg")
    .attr("class", 'arcElevenRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(905).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomEleven")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}


function renderRandomElevenThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 910, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =910, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcElevenRandomThree")
    .append("svg")
    .attr("class", 'arcElevenRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(905).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomEleven")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          // .style("stroke", "rgb(17, 255, 0)")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}





function renderRandomTwelve(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 850, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =850, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTwelveRandom")
    .append("svg")
    .attr("class", 'arcTwelveRandomRes')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(845).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTwelve")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomTwelveTwo(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 850, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =850, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTwelveRandomTwo")
    .append("svg")
    .attr("class", 'arcTwelveRandomResTwo')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(845).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTwelve")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}



function renderRandomTwelveThree(innerRadius){



  var dbl = innerRadius * 2;
  // var width = "100%", //1250,
    var width = 850, //1250,
    viewbox = `0 0 2000 ${dbl}`,
    height =850, //1250,
    colors = d3.scale.category20();



  //var svg = d3.select("gacyContainer").append("svg");
  var svg = d3.select("#arcTwelveRandomThree")
    .append("svg")
    .attr("class", 'arcTwelveRandomResThree')
    .attr('viewBox', viewbox)
    .append("g")
    .attr("transform", "translate(" + 0+ "," + 350 + ")");


  var dataArc = [
    {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI},
  ];


  var arc = d3.svg.arc().outerRadius(845).innerRadius(innerRadius);

  svg.select("g").remove();

  var path = svg.append("g")
      .selectAll("path.arc")
        .data(dataArc);

      path.enter()
        .append("path")
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
          .attr("id", "initiatearcRandomTwelve")
          .style("stroke", "none")
          .attr('d', arc)
          .transition().delay(6000).duration(500).ease("linear")
          .style("stroke", "rgb(255, 173, 0)")
          .style("stroke-width", 3)
          .style("fill", "black") //"none"
          .style("opacity", .5)
          .attrTween("d", function (d) {
              var start = {startAngle: -0.5 * Math.PI, endAngle: -0.5 * Math.PI} // <-A
              var end = d // {startAngle: -0.5 * Math.PI, endAngle: 0.5 * Math.PI}
              var interpolate = d3.interpolate(start, end); // <-B
              return function (t) {
                  return arc(interpolate(t)); // <-C
              };
          })
          //.transition().delay(2000).duration(2000).ease("linear")
          //.style("opacity", .3)


    path.enter()
      .append('circle')
        .attr("transform", `translate(${innerRadius},${innerRadius})`) //625,625
        //.attr("cx", d => arc.centroid(d)[0]) // Set the cx
        //.attr("cy", d => arc.centroid(d)[1])
        .attr('fill', 'none')
        .transition()
        .delay(6500)
        .duration(250)
        .attr('r', 20)
        .style("opacity", .5)
        .attr('fill', 'rgb(17, 255, 0)')
        .ease("linear")
        .attrTween("pathTween", function (d) {
            const startAngle = d.startAngle;
            const endAngle = d.endAngle;
            const start = {startAngle, endAngle: startAngle} // <-A
            const end = {startAngle: endAngle, endAngle}
            //console.log(start,end)
            const interpolate = d3.interpolate(start, end); // <-B
            const circ = d3.select(this) // Select the circle
            return function (t) {
                const cent = arc.centroid(interpolate(t)); // <-C
                //return cent[0]
                circ
                  .attr("cx", cent[0]) // Set the cx
                  .attr("cy", cent[1]) // Set the cy
            };
        })

}














function initiateArcOne() {

    renderOne(1000);
    setTimeout(() => zoomIn_new(1000), 2000)

}


function initiateArcOneTwo() {

    renderOneTwo(1000);
    setTimeout(() => zoomIn_new_two(1000), 2000)

}


function initiateArcOneThree() {

    renderOneThree(1000);
    setTimeout(() => zoomIn_new_three(1000), 2000)

}



// function initiateArcOneReset() {

//     resetVizArcOne();
//     renderOne(1000);
//     setTimeout(() => zoomIn_new(1000), 2000)

// }



function initiateArcTwo() {


  $("#progressOne").addClass('firstBarRes');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwo").addClass('secondBarRes');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillTwo = d3.select("#progressTwo").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillTwo.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


    renderTwo(700);
    renderThree(600);
    renderFour(500);
    renderFive(400);
    renderSix(800);
    renderSeven(900);

    // setTimeout(() => zoomIn_new_two(1000), 100)
/*    setTimeout(() => zoomIn_new_two_one(1000), 100)
    // setTimeout(() => zoomIn_new_three(700), 100)
    setTimeout(() => zoomIn_new_three_one(700), 100)
    setTimeout(() => zoomIn_new_four(600), 100)
    setTimeout(() => zoomIn_new_five(500), 100)
    setTimeout(() => zoomIn_new_six(400), 100)
    setTimeout(() => zoomIn_new_seven(800), 100)
    setTimeout(() => zoomIn_new_eight(900), 100)*/

}




function initiateArcTwoTwo() {


  $("#progressOneTwo").addClass('firstBarResTwo');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwoTwo").addClass('secondBarResTwo');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillTwo = d3.select("#progressTwoTwo").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillTwo.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


    renderTwoTwo(700);
    renderThreeTwo(600);
    renderFourTwo(500);
    renderFiveTwo(400);
    renderSixTwo(800);
    renderSevenTwo(900);

    setTimeout(() => zoomIn_new_two_two(1000), 100)
    setTimeout(() => zoomIn_new_three_two(700), 100)
    setTimeout(() => zoomIn_new_four_two(600), 100)
    setTimeout(() => zoomIn_new_five_two(500), 100)
    setTimeout(() => zoomIn_new_six_two(400), 100)
    setTimeout(() => zoomIn_new_seven_two(800), 100)
    setTimeout(() => zoomIn_new_eight_two(900), 100)

}



function initiateArcTwoThree() {


  $("#progressOneThree").addClass('firstBarResThree');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwoThree").addClass('secondBarResThree');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillTwo = d3.select("#progressTwoThree").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillTwo.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


    renderTwoThree(700);
    renderThreeThree(600);
    renderFourThree(500);
    renderFiveThree(400);
    renderSixThree(800);
    renderSevenThree(900);

    setTimeout(() => zoomIn_new_two_three(1000), 100)
    setTimeout(() => zoomIn_new_three_three(700), 100)
    setTimeout(() => zoomIn_new_four_three(600), 100)
    setTimeout(() => zoomIn_new_five_three(500), 100)
    setTimeout(() => zoomIn_new_six_three(400), 100)
    setTimeout(() => zoomIn_new_seven_three(800), 100)
    setTimeout(() => zoomIn_new_eight_three(900), 100)

}





function initiateArcThree() {


  $("#progressOne").addClass('firstBarRes');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwo").addClass('secondBarRes');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressThree").addClass('thirdBarRes');
  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});




  var barFillThree = d3.select("#progressThree").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillThree.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


  renderRidgway(750);
  setTimeout(() => zoomIn_Gacy(750), 2000);



}



function initiateArcThreeTwo() {


  $("#progressOneTwo").addClass('firstBarResTwo');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwoTwo").addClass('secondBarResTwo');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressThreeTwo").addClass('thirdBarResTwo');
  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});




  var barFillThree = d3.select("#progressThreeTwo").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillThree.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


  renderRidgwayTwo(750);
  setTimeout(() => zoomIn_Gacy_Two(750), 2000);



}



function initiateArcThreeThree() {


  $("#progressOneThree").addClass('firstBarResThree');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwoThree").addClass('secondBarResThree');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressThreeThree").addClass('thirdBarResThree');
  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(255, 255, 255)", "height": "10px", "border-radius": "5px", "width": "250px"});




  var barFillThree = d3.select("#progressThreeThree").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillThree.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)


  renderRidgwayThree(750);
  setTimeout(() => zoomIn_Gacy_Three(750), 2000);



}














function initiateArcFour() {


  $("#progressOne").addClass('firstBarRes');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwo").addClass('secondBarRes');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressThree").addClass('thirdBarRes');
  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressFour").addClass('fourthBarRes');
  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillFour = d3.select("#progressFour").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillFour.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)



  renderGacy(500);
  renderGein(450);
  renderDahmer(550);

  renderRandomOne(770);
  renderRandomTwo(590);
  renderRandomThree(930);
  renderRandomFour(640);
  renderRandomFive(710);
  renderRandomSix(820);
  renderRandomSeven(880);
  renderRandomEight(610);
  renderRandomNine(680);
  renderRandomTen(740);
  renderRandomEleven(910);
  renderRandomTwelve(850);


}



function initiateArcFourTwo() {


  $("#progressOneTwo").addClass('firstBarResTwo');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwoTwo").addClass('secondBarResTwo');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressThreeTwo").addClass('thirdBarResTwo');
  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressFourTwo").addClass('fourthBarResTwo');
  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillFour = d3.select("#progressFourTwo").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillFour.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)



  renderGacyTwo(500);
  renderGeinTwo(450);
  renderDahmerTwo(550);

  renderRandomOneTwo(770);
  renderRandomTwoTwo(590);
  renderRandomThreeTwo(930);
  renderRandomFourTwo(640);
  renderRandomFiveTwo(710);
  renderRandomSixTwo(820);
  renderRandomSevenTwo(880);
  renderRandomEightTwo(610);
  renderRandomNineTwo(680);
  renderRandomTenTwo(740);
  renderRandomElevenTwo(910);
  renderRandomTwelveTwo(850);


}





function initiateArcFourThree() {


  $("#progressOneThree").addClass('firstBarResThree');
  // $("#progressOne").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "50px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

  $("#progressTwoThree").addClass('secondBarResThree');
  // $("#progressTwo").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "350px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressThreeThree").addClass('thirdBarResThree');
  // $("#progressThree").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "700px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});

 $("#progressFourThree").addClass('fourthBarResThree');
  // $("#progressFour").css({"opacity": "1", "position": "absolute", "top": "25px", "left": "1000px", "background": "rgb(224, 231, 34)", "height": "10px", "border-radius": "5px", "width": "250px"});



  var barFillFour = d3.select("#progressFourThree").append("svg")
          // .attr("width", 250)
          // .attr("height", 5);

  barFillFour.append("rect")
              .transition().duration(6000).ease("linear")
              .attr("fill", "rgb(224, 231, 34)")
              // .attr("fill", "blue")
              .style("opacity", 1)
              .attr("width", 250)
              .attr("height", 10)
              .attr("rx", 5)
              .attr("top", 0)
              .attr("left", 5)



  renderGacyThree(500);
  renderGeinThree(450);
  renderDahmerThree(550);

  renderRandomOneThree(770);
  renderRandomTwoThree(590);
  renderRandomThreeThree(930);
  renderRandomFourThree(640);
  renderRandomFiveThree(710);
  renderRandomSixThree(820);
  renderRandomSevenThree(880);
  renderRandomEightThree(610);
  renderRandomNineThree(680);
  renderRandomTenThree(740);
  renderRandomElevenThree(910);
  renderRandomTwelveThree(850);


}
