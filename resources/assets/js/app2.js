$(function () {
    /**
     * Adjust size for hidden charts
     * @param chart highcharts
     */
    console.log('hi');
    function adjustGraph(chart) {

        try {
            if (typeof (chart === 'undefined' || chart === null) && this instanceof jQuery) { // if no obj chart and the context is set

                this.find('.chart-container:visible').each(function () { // for only visible charts container in the curent context
                    $container = $(this); // context container
                    $container.find('div[id^="chart-"]').each(function () { // for only chart
                        $chart = $(this).highcharts(); // cast from JQuery to highcharts obj
                        $chart.setSize($container.width(), $chart.chartHeight, doAnimation = true); // adjust chart size with animation transition
                    });
                });
            } else {
                chart.setSize($('.chart-container:visible').width(), chart.chartHeight, doAnimation = true); // if chart is set, adjust
            }
        } catch (err) {
            // do nothing
        }
    }

    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            // resizeEnd call function with pass context body
            adjustGraph.call($('body'));

        }, 500);
    });

    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //     var isChart = $(this).attr('data-chart');
    //     var target = $(this).attr('href');
    //     if (isChart) {
    //         // call functio inside context target
    //         adjustGraph.call($(target));
    //     }
    // });
});
