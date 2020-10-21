$(function() {
    "use strict";
    // ------------------------------
    // Basic pie chart
    // ------------------------------
    // based on prepared DOM, initialize echarts instance
        
        // ------------------------------
        // nightingale chart
        // ------------------------------
        // based on prepared DOM, initialize echarts instance
            var nightingaleChart = echarts.init(document.getElementById('nightingale-chart'));
            var option = {
                 

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: 共{c}个，占比 ({d}%)"
                },

                // Add legend
                legend: {
                    x: 'left',
                    y: 'top',
                    orient: 'horizontal',
                    data: ['地面站点','卫星','无人机','移动测量车','机器人','智能手机','光场相机']
                },

                color: ['#ffbc34', '#4fc3f7', '#212529', '#f62d51', '#2962FF', '#FFC400', '#006064', '#FF1744', '#1565C0', '#FFC400', '#64FFDA', '#607D8B'],
                

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: '保存图片',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: '详情',
                        type: 'pie',
                        radius: ['15%', '60%'],
                        center: ['50%', '57%'],
                        roseType: 'area',

                        // Funnel
                        width: '40%',
                        height: '78%',
                        x: '20%',
                        y: '17.5%',
                        max: 450,
                        sort: 'ascending',

                        data: [
                            {value: 428, name: '地面站点'},
                            {value: 665, name: '卫星'},
                            {value: 131, name: '无人机'},
                            {value: 23, name: '移动测量车'},
                            {value: 16, name: '机器人'},
                            {value: 6, name: '智能手机'},
                            {value: 36, name: '光场相机'}
                            
                        ]
                    }
                ]
            };
        nightingaleChart.setOption(option);
        //------------------------------------------------------
       // Resize chart on menu width change and window resize
       //------------------------------------------------------
        $(function () {

                // Resize chart on menu width change and window resize
                $(window).on('resize', resize);
                $(".sidebartoggler").on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                       
                        nightingaleChart.resize();
                    }, 200);
                }
            });
});