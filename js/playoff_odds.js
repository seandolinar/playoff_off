//v1.0 from Appelman


                            var teamColors = {
                                'Diamondbacks': { 'color': '#A71930', 'abbr': 'ARZ', 'lg': 'N', 'div': 'W' },
                                'Braves': { 'color': '#002F5F', 'abbr': 'ATL', 'lg': 'N', 'div': 'E' },
                                'Orioles': { 'color': '#ED4C09', 'abbr': 'BAL', 'lg': 'A', 'div': 'E' },
                                'Red Sox': { 'color': '#C60C30', 'abbr': 'BOS', 'lg': 'A', 'div': 'E' },
                                'Cubs': { 'color': '#003279', 'abbr': 'CHC', 'lg': 'N', 'div': 'C' },
                                'White Sox': { 'color': '#C0C0C0', 'abbr': 'CHW', 'lg': 'A', 'div': 'C' },
                                'Reds': { 'color': '#C6011F', 'abbr': 'CIN', 'lg': 'N', 'div': 'C' },
                                'Indians': { 'color': '#D30335', 'abbr': 'CLE', 'lg': 'A', 'div': 'C' },
                                'Rockies': { 'color': '#333366', 'abbr': 'COL', 'lg': 'N', 'div': 'W' },
                                'Tigers': { 'color': '#DE4406', 'abbr': 'DET', 'lg': 'A', 'div': 'C' },
                                'Astros': { 'color': '#FF7F00', 'abbr': 'HOU', 'lg': 'A', 'div': 'W' },
                                'Royals': { 'color': '#74B4FA', 'abbr': 'KC', 'lg': 'A', 'div': 'C' },
                                'Angels': { 'color': '#B71234', 'abbr': 'LAA', 'lg': 'A', 'div': 'W' },
                                'Dodgers': { 'color': '#083C6B', 'abbr': 'LAD', 'lg': 'N', 'div': 'W' },
                                'Marlins': { 'color': '#F9423A', 'abbr': 'MIA', 'lg': 'N', 'div': 'E' },
                                'Brewers': { 'color': '#92754C', 'abbr': 'MIL', 'lg': 'N', 'div': 'C' },
                                'Twins': { 'color': '#072754', 'abbr': 'MIN', 'lg': 'A', 'div': 'C' },
                                'Mets': { 'color': '#FB4F14', 'abbr': 'NYM', 'lg': 'N', 'div': 'E' },
                                'Yankees': { 'color': '#808080', 'abbr': 'NYY', 'lg': 'A', 'div': 'E' },
                                'Athletics': { 'color': '#003831', 'abbr': 'OAK', 'lg': 'A', 'div': 'W' },
                                'Phillies': { 'color': '#BA0C2F', 'abbr': 'PHI', 'lg': 'N', 'div': 'E' },
                                'Pirates': { 'color': '#FDB829', 'abbr': 'PIT', 'lg': 'N', 'div': 'C' },
                                'Padres': { 'color': '#002147', 'abbr': 'SD', 'lg': 'N', 'div': 'W' },
                                'Giants': { 'color': '#F2552C', 'abbr': 'SF', 'lg': 'N', 'div': 'W' },
                                'Mariners': { 'color': '#005C5C', 'abbr': 'SEA', 'lg': 'A', 'div': 'W' },
                                'Cardinals': { 'color': '#C41E3A', 'abbr': 'STL', 'lg': 'N', 'div': 'C' },
                                'Rays': { 'color': '#9ECEEE', 'abbr': 'TB', 'lg': 'A', 'div': 'E' },
                                'Rangers': { 'color': '#003279', 'abbr': 'TEX', 'lg': 'A', 'div': 'W' },
                                'Blue Jays': { 'color': '#003DA5', 'abbr': 'TOR', 'lg': 'A', 'div': 'E' },
                                'Nationals': { 'color': '#BA122B', 'abbr': 'WAS', 'lg': 'N', 'div': 'E' }
                            }

                            var teams = Object.keys(teamColors)

                            var teamDiv = {
                                'AL': {
                                    'E': ['Red Sox', 'Yankees', 'Rays', 'Orioles', 'Blue Jays'],
                                    'C': ['White Sox', 'Royals', 'Tigers', 'Twins', 'Indians'],
                                    'W': ['Astros', 'Rangers', 'Athletics', 'Mariners', 'Angels']
                                },
                                'NL': {
                                    'E': ['Mets', 'Braves', 'Nationals', 'Phillies', 'Marlins'],
                                    'C': ['Pirates', 'Cubs', 'Cardinals', 'Reds', 'Brewers'],
                                    'W': ['Padres', 'Giants', 'Dodgers', 'Diamondbacks', 'Rockies']
                                }
                            }

                            var divDict = { 'E': 'East', 'C': 'Central', 'W': 'West' }

                            var yScaleOdds = {
                                max: 100, tickInterval: 25, format: '{value}%', toolTipFormat: '<div align="center">{series.name} {point.y: .1f}%</div>',
                                dataLabelFormat: '<div align="center">{series.name}<br>{point.y: .1f}%</div>', yAxisTitle: 'Probability', scaleYY: 1
                            }

                            var yScaleDict = {
                                poff: yScaleOdds, wc: yScaleOdds, div: yScaleOdds, doff: yScaleOdds, ds: yScaleOdds, cs: yScaleOdds, ws: yScaleOdds,

                                win_pct: {
                                    max: 1, tickInterval: .25, format: '{value: .3f}', toolTipFormat: '<div align="center">{series.name} {point.y: .3f}</div>',
                                    dataLabelFormat: '<div align="center">{series.name}<br>{point.y: .3f}</div>', yAxisTitle: 'Win Percetange', scaleYY: 100
                                },

                                w: {
                                    max: null, tickInterval: 10, format: '{value: .0f}', toolTipFormat: '<div align="center">{series.name} {point.y: .0f}</div>', dataLabelFormat: '<div align="center">{series.name}<br>{point.y: .0f}</div>',
                                    yAxisTitle: 'Wins', scaleYY: 1
                                },

                                exp_w: {
                                    max: null, tickInterval: 10, format: '{value: .0f}', toolTipFormat: '<div align="center">{series.name}<br>{point.y: .0f}</div>', dataLabelFormat: '<div align="center">{series.name}<br>{point.y: .0f}</div>',
                                    yAxisTitle: 'Expected Win Percetange', scaleYY: 1
                                }
                            }


                            var arrayConvert = function (seriesRaw) {

                                seriesEval = []
                                for (i in seriesRaw) {

                                    seriesEval.push([eval(seriesRaw[i][0]), seriesRaw[i][1]])
                                }
                                return seriesEval;

                            }


                            var getQueryVariable = function (variable) {
                                var query = window.location.search.substring(1);
                                var vars = query.split("&");
                                for (var i = 0; i < vars.length; i++) {
                                    var pair = vars[i].split("=");
                                    if (pair[0] == variable && pair[0] != '') { return pair[1]; }
                                }
                                return (false);
                            }

                            var lg = 'NL'
                            var div = 'C'
                            var stat = 'poff'

                            if (getQueryVariable('lg')) { lg = getQueryVariable('lg') }
                            if (getQueryVariable('div')) { div = getQueryVariable('div') }
                            if (getQueryVariable('stat')) { stat = getQueryVariable('stat') }

                            var teamArray = teamDiv[lg][div]

                            $(function () {
                                $("#lg").val(lg)
                                $("#div").val(div)
                                $("#stat").val(stat)
                            });

                            var title = function () {
                                return '2015 Playoff Odds, ' + lg + ' ' + divDict[div]
                            }

                            var dataLabelUpdate = function (item) {

                                return {

                                    enabled: true,
                                    align: 'left',
                                    x: 20,
                                    y: endObj[teamColors[item].abbr],
                                    verticalAlign: 'middle',
                                    backgroundColor: 'white',
                                    overflow: true,
                                    crop: false,
                                    format: yScaleDict[stat].dataLabelFormat,
                                    padding: 0,
                                    useHTML: true

                                }

                            }

                            $.getJSON("cs_baseball_poffs_2015.json", function (data) {

                                var dataOdds = data



                                $(function () {



                                    var chart = new Highcharts.Chart({
                                        chart: {
                                            type: 'line',
                                            renderTo: 'container',
                                            zoomType: ['x', 'y'],
                                            marginRight: 50,

                                            style: {

                                                fontFamily: ['Lato', 'Arial']
                                            },
                                            events: {
                                                load: function () {
                                                    this.renderer.image('http://www.fangraphs.com/blogs/wp-content/uploads/2015/07/FG_logo_white.png', 700, 7, 150, 25)
                                                .add();
                                                }
                                            }

                                        },
                                        title: {
                                            text: title(),
                                            align: 'left',
                                            x: 25,

                                        },
                                        subtitle: {
                                            text: null
                                        },
                                        legend: {
                                            enabled: false,
                                            verticalAlign: 'top',
                                            padding: 10,
                                            symbolHeight: 30,
                                            symbolRadius: 10,
                                            symbolWidth: 10,
                                            y: 20

                                        },
                                        credits: {
                                            enabled: false
                                        },
                                        exporting: { 
                                            url: 'http://export.highcharts.com', 
                                            buttons: { 
                                                contextButton: {
                                                    align: 'left',
                                                    verticalAlign: 'top',
                                                    y: -3,
                                                    x: -5,
                                                    width: 24,
                                                    symbolSize: 13,
                                                    menuItems: [{ 
                                                        text: 'Download Image', 
                                                        type: 'image/png',
                                                        onclick: function () { 
                                                            chart.exportChart(); 
                                                        }},null,null,null] 
                                                } 
                                            } 
                                        }, 
                                        xAxis: [{
                                            type: 'datetime',
                                            lineWidth: 1.5,
                                            lineColor: '#909090',
                                            tickColor: '#909090'
                                        },
                                        {
                                            opposite: true,
                                            lineWidth: 1.5,
                                            lineColor: '#909090',
                                            tickColor: '#909090'

                                        }],
                                        yAxis: [{
                                            min: 0,
                                            max: yScaleDict[stat].max,
                                            title: {
                                                text: yScaleDict[stat].yAxisTitle
                                            },
                                            labels: {
                                                format: yScaleDict[stat].format
                                            },
                                            lineWidth: 1.5,
                                            lineColor: '#909090',
                                            gridLineDashStyle: 'dot',
                                            gridLineColor: 'black',
                                            tickInterval: yScaleDict[stat].tickInterval

                                        }],
                                        tooltip: {
                                            useHTML: true,
                                            backgroundColor: 'black',
                                            borderWidth: 0,
                                            headerFormat: '<center>{point.x:%B %e} <br></center>',
                                            pointFormat: yScaleDict[stat].toolTipFormat,
                                            shape: 'callout',
                                            shared: false,
                                            style: {
                                                color: 'white',
                                                fontSize: '12px',
                                                padding: '8px'
                                            },
                                            shadow: false
                                        },

                                        plotOptions: {
                                            line: {
                                                marker: {
                                                    enabled: false,
                                                    lineColor: null
                                                },
                                                lineWidth: 4

                                            },
                                            series: {
                                                animation: {
                                                    duration: 0
                                                },
                                                events: {

                                                },
                                                marker: {

                                                },

                                                radius: 5
                                            },
                                            states: {
                                                hover: {
                                                    lineWidth: 8,
                                                    lineWidthPlus: 2,
                                                    halo: {
                                                        size: 5,
                                                        attributes: {
                                                            fill: function (event) {

                                                            }

                                                        }
                                                    }
                                                }
                                            },

                                        }




                                    });

                                    var updateChart = function (itemNo, item) {

                                        max = chart.series[itemNo].data.length - 1

                                        chart.series[itemNo].data[max].update({
                                            marker: {
                                                enabled: true,
                                                lineColor: 'black',
                                                fillColor: teamColors[item].color,
                                                lineWidth: 2,
                                                radius: 8,
                                            }
                                        });
                                        chart.series[itemNo].setData(arrayConvert(dataOdds[item][stat]), redraw = false)
                                        chart.series[itemNo].update({
                                            id: item,
                                            name: teamColors[item].abbr,
                                            color: teamColors[item].color,
                                            events: {
                                                mouseOver: function () {
                                                    this.update({
                                                        color: teamColors[item].color
                                                    });
                                                },
                                            }
                                        }, redraw = false);



                                    }


                                    $('#div').change(function () {



                                        div = this.value
                                        teamArray = teamDiv[lg][div]

                                        chart.setTitle({ text: title() });

                                        history.pushState(null, 'Title', "coolgraphs.aspx?lg=" + lg + '&div=' + div + '&stat=' + stat);

                                        $.each(teamArray, function (itemNo, item) {

                                            updateChart(itemNo, item)
                                        });

                                        chart.redraw();

                                        endObj = compareYY(chart.series)

                                        $.each(teamArray, function (itemNo, item) {
                                            max = chart.series[itemNo].data.length - 1

                                            chart.series[itemNo].data[max].update({

                                                dataLabels: dataLabelUpdate(item)
                                            });
                                        });



                                    });
                                    $('#lg').change(function () {

                                        lg = this.value
                                        teamArray = teamDiv[lg][div]

                                        chart.setTitle({ text: title() });
                                        chart.redraw();

                                        history.pushState(null, 'Title', "coolgraphs.aspx?lg=" + lg + '&div=' + div + '&stat=' + stat);

                                        $.each(teamArray, function (itemNo, item) {

                                            updateChart(itemNo, item)
                                        });

                                        chart.redraw();

                                        endObj = compareYY(chart.series)

                                        $.each(teamArray, function (itemNo, item) {
                                            max = chart.series[itemNo].data.length - 1

                                            chart.series[itemNo].data[max].update({

                                                dataLabels: dataLabelUpdate(item)
                                            })
                                        });
                                    });

                                    $('#stat').change(function () {

                                        stat = this.value
                                        teamArray = teamDiv[lg][div]

                                        chart.setTitle(title);

                                        chart.yAxis[0].update({
                                            max: yScaleDict[stat].max,
                                            tickInterval: yScaleDict[stat].tickInterval,
                                            labels: {
                                                format: yScaleDict[stat].format
                                            },
                                            title: {
                                                text: yScaleDict[stat].yAxisTitle
                                            }
                                        })

                                        history.pushState(null, 'Title', "coolgraphs.aspx?lg=" + lg + '&div=' + div + '&stat=' + stat);

                                        $.each(teamArray, function (itemNo, item) {

                                            chart.series[itemNo].setData(arrayConvert(dataOdds[item][stat]), redraw = false)
                                        });

                                        chart.redraw();
                                        endObj = compareYY(chart.series)

                                        $.each(teamArray, function (itemNo, item) {
                                            max = chart.series[itemNo].data.length - 1

                                            chart.series[itemNo].data[max].update({

                                                dataLabels: dataLabelUpdate(item)
                                            });

                                        });;

                                    });

                                    $.each(teamArray, function (itemNo, item) {

                                        chart.addSeries({

                                            id: item,
                                            name: teamColors[item].abbr,
                                            data: arrayConvert(dataOdds[item][stat]),
                                            color: teamColors[item].color,
                                            marker: {
                                                symbol: 'circle',
                                                lineColor: 'black',
                                                fill: 'rba(0,0,0,0)',
                                                lineWidth: 2
                                            },
                                            events: {
                                                mouseOver: function () {
                                                    this.update({
                                                        color: teamColors[item].color
                                                    });
                                                }
                                            }

                                        }, true);
                                    });

                                    endObj = compareYY(chart.series)

                                    $.each(teamArray, function (itemNo, item) {
                                        max = chart.series[itemNo].data.length - 1


                                        chart.series[itemNo].data[max].update({

                                            marker: {
                                                enabled: true,
                                                lineColor: 'black',
                                                fillColor: teamColors[item].color,
                                                lineWidth: 2,
                                                radius: 8,
                                            },

                                            dataLabels: dataLabelUpdate(item)

                                        }, redraw = true)

                                    });

                                });

                            });



                            function compareYY(series) {

                                count = series.length;
                                max = series[0].data.length - 1;
                                min = 3
                                max_top = 97
                                initialArray = []
                                endArray = []
                                diff = 5

                                for (var i = 0; i < count; i++) {
                                    itemObj = {}
                                    itemObj[series[i].name] = series[i].data[max].y * yScaleDict[stat].scaleYY
                                    initialArray.push(series[i].data[max].y * yScaleDict[stat].scaleYY)
                                    endArray.push(itemObj)

                                }

                                endArray.sort(function (a, b) {
                                    return b[Object.keys(b)] - a[Object.keys(a)]
                                })

                                initialArray.sort(function (a, b) {
                                    return b - a
                                })




                                var check = 0;
                                while (check < 4) {
                                    check = 0
                                    for (var i = 0; i < count - 1 ; i++) {



                                        y1 = endArray[i]
                                        y2 = endArray[i + 1]



                                        x1 = Math.min(Math.max(y1[Object.keys(y1)], min), max_top)
                                        x2 = Math.min(Math.max(y2[Object.keys(y2)], min), max_top)


                                        endArray[i][Object.keys(y1)] = x1
                                        endArray[i + 1][Object.keys(y2)] = x2


                                        if (Math.abs(x1 - x2) <= diff) {

                                            if (endArray[i][Object.keys(y1)] > max_top) {

                                                endArray[i + 1][Object.keys(y2)]--

                                            }
                                            else {

                                                endArray[i][Object.keys(y1)]++;
                                            }


                                            if (endArray[i + 1][Object.keys(y2)] < min) {

                                                endArray[i][Object.keys(y1)]++;
                                            }
                                            else {
                                                endArray[i + 1][Object.keys(y2)]--
                                            }

                                        }
                                        else {

                                            check++

                                        }


                                    }

                                }

                                endObj = {}
                                for (var i = 0; i < count; i++) {

                                    endObj[Object.keys(endArray[i])] = (initialArray[i] - endArray[i][Object.keys(endArray[i])]) * 5
                                }
                                return endObj


                            }