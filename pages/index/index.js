import data from './data';

Page({
  data: {
    onInitChart(F2, config) {
      const chart = new F2.Chart(config);
      chart.source(data, {
        reportDateTimestamp: {
          type: 'timeCat',
          tickCount: 3,
          range: [0, 1],
          mask: 'YYYY-MM-DD'
        },
        rate: {
          tickCount: 5,
          formatter: function(v) {
            return (v * 100).toFixed(2) + '%';
          }
        }
      });

      chart.line()
        .position('reportDateTimestamp*rate').color('codeType');

      chart.interaction('pinch');
      chart.interaction('pan');
      chart.render();
      return chart;
    }
  },
});