
$(function() {
    "use strict";

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "江河湖生态",
            value: 4,

        }, {
            label: "暴雨内涝",
            value: 6
        }, {
            label: "区域交通",
            value: 13
        }],
        resize: true,
        colors:['#2962FF', '#55ce63', '#2f3d4a']
    });

    // ============================================================== 
    // sales ratio
    // ============================================================== 

    //此处逻辑存在问题 未考虑月份交替的情况  后需更改！！！！！！！！！
    var d = new Date();
    var s = d.getDate();
    var today1=(d.getMonth()+1).toString()+"月"+(d.getDate()-6).toString()+"日";
    var today2=(d.getMonth()+1).toString()+"月"+(d.getDate()-5).toString()+"日";
    var today3=(d.getMonth()+1).toString()+"月"+(d.getDate()-4).toString()+"日";
    var today4=(d.getMonth()+1).toString()+"月"+(d.getDate()-3).toString()+"日";
    var today5=(d.getMonth()+1).toString()+"月"+(d.getDate()-2).toString()+"日";
    var today6=(d.getMonth()+1).toString()+"月"+(d.getDate()-1).toString()+"日";
    var today7=(d.getMonth()+1).toString()+"月"+d.getDate().toString()+"日";
    var chart = new Chartist.Line('.sales', {
        labels: [today1, today2,today3,today4,today5,today6,today7],
        series: [
            [6, 2, 4, 3, 9, 6, 4]
           
        ]
    }, {
        low: 0,
        high: 9,
        showArea: true,
        fullWidth: false,
        plugins: [
            Chartist.plugins.tooltip()
        ],
        axisY: {
            onlyInteger: true,
            scaleMinSpace: 40,
            offset: 20,
            labelInterpolationFnc: function(value) {
                return (value );
            }
        },

    });

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
    // Straight lines don't get a bounding box 
    // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on('draw', function(ctx) {
        if (ctx.type === 'area') {
            ctx.element.attr({
                x1: ctx.x1 + 0.001
            });
        }
    });

    // Create the gradient definition on created event (always after chart re-render)
    chart.on('created', function(ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 1,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(64, 196, 255, 1)'
        });
    });


    var chart = [chart];

    // ============================================================== 
    // campaign
    // ============================================================== 

    var chart = c3.generate({
        bindto: '#campaign',
        data: {
            columns: [
                ['江河湖生态', 4],
                ['暴雨内涝', 6],
                ['区域交通', 13],
               
            ],

            type: 'donut',
            tooltip: {
                show: true
            }
        },
        donut: {
            label: {
                show: false
            },
            width: 15,
        },

        legend: {
            hide: false
        },
        color: {
            pattern: ['#137eff', '#8b5edd', '#5ac146', '#eceff1']
        }
    });

    // ============================================================== 
    // weather
    // ============================================================== 
    var chart = c3.generate({
        bindto: '.weather-report',
        data: {
            columns: [
                ['Day 1', 21, 15, 30, 45, 15]
            ],
            type: 'area-spline'
        },
        axis: {
            y: {
                show: false,
                tick: {
                    count: 0,
                    outer: false
                }
            },
            x: {
                show: false,
            }
        },
        padding: {
            top: 0,
            right: -8,
            bottom: -28,
            left: -8,
        },
        point: {
            r: 2,
        },
        legend: {
            hide: true
        },
        color: {
            pattern: ['#5ac146']
        }

    });
    // ============================================================== 
    // Our Visitor
    // ============================================================== 
    var sparklineLogin = function() {
        $('#earnings').sparkline([6, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9, 10, 12, 10, 9, 11, 9], {
            type: 'bar',
            height: '40',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '8',
            barColor: '#137eff'
        });
    };
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();

    // ============================================================== 
    // world map
    // ==============================================================
    jQuery('#visitfromworld').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderOpacity: 0,
        borderWidth: 0,
        zoomOnScroll: false,
        color: 'rgba(223,226,233, 0.8)',
        regionStyle: {
            initial: {
                fill: 'rgba(223,226,233, 0.8)',
                'stroke-width': 1,
                'stroke': 'rgba(223,226,233, 0.8)'
            }
        },
        markerStyle: {
            initial: {
                r: 5,
                'fill': '#dfe2e9',
                'fill-opacity': 1,
                'stroke': '#dfe2e9',
                'stroke-width': 1,
                'stroke-opacity': 1
            },
        },
        enableZoom: true,
        hoverColor: '#79e580',
        markers: [{
            latLng: [21.00, 78.00],
            name: 'India : 9347',
            style: {
                fill: '#2961ff'
            }
        }, {
            latLng: [-33.00, 151.00],
            name: 'Australia : 250',
            style: {
                fill: '#2961ff'
            }
        }, {
            latLng: [36.77, -119.41],
            name: 'USA : 250',
            style: {
                fill: '#2961ff'
            }
        }, {
            latLng: [55.37, -3.41],
            name: 'UK   : 250',
            style: {
                fill: '#2961ff'
            }
        }, {
            latLng: [25.20, 55.27],
            name: 'UAE : 250',
            style: {
                fill: '#2961ff'
            }
        }],
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#93d5ed', '#93d5ee'],
        selectedColor: '#cbd0db',
        selectedRegions: [],
        showTooltip: true,
        onRegionClick: function(element, code, region) {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
            alert(message);
        }
    });
});