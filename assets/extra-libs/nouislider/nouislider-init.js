$(function() {






    //测试滑动变值

    var nonLinearSlider = document.getElementById('nonlinear');

    noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: 'tap',
        start: [500, 4000],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [0],
            '1%': [0, 1],
            '50%': [100, 100],
            '70%': [1000, 1000],
            '85%': [10000, 10000],
            'max': [100000]
        }
    });
    var nodes = [
        document.getElementById('lower-value'), // 0
        document.getElementById('upper-value')  // 1
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle].innerHTML = values[handle] + '; ' ;
    });


    
});