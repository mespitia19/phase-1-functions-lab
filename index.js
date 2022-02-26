function distanceFromHqInBlocks(maxStreet) {
    if (maxStreet > 42)
        return maxStreet - 42
    else (maxStreet < 42)
        return 42 - maxStreet
}

function distanceFromHqInFeet(cornBall) {
    if (cornBall > 42)
    return ((cornBall - 42) * 264)
    else (cornBall < 42)
    return ((42 - cornBall) * 264)
}

function distanceTravelledInFeet(lanter, ups) {
    if (lanter > ups) {
    return (lanter - ups) * 264
    } else  (lanter < ups)
    return (ups - lanter) * 264
    }

    function calculatesFarePrice(lanter, ups) {
        let distance = distanceTravelledInFeet(lanter, ups);
        if (distance <= 400)
        return 0; 
        else if (distance > 400 && distance <= 2000)
        return (distance - 400) * .02;
        else if (distance > 2000 && distance <= 2500)
        return 25;
        else
        return 'cannot travel that far';
        
}
