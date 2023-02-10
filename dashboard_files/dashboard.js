'use strict';

$( function() {
  function createPrinterChart(ajx_json, ajx_colors) {
    Highcharts.chart('printer-chart', {
    credits: {
      enabled: false
    },
    chart: {
      type: 'variablepie',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    title: {
      text: ''
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y} <b>{point.name}</b>'
    },
    plotOptions: {
      variablepie: {
        allowPointSelect: true,
        cursor: 'pointer',
          dataLabels: {
            enabled: false,
          }
        }
    },
    colors: ajx_colors,
    series: [{
      minPointSize: 10,
      innerSize: '95%',
      zMin: 0,
      name: 'printers',
      data: ajx_json,
    }]
  });
  }

  if ($('.printer_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:printer_metrics'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.printer_metrics').css('background', 'none');
        $('.printer_metrics').html(msg.html);
        createPrinterChart(msg.ajx_json, msg.colors);
      },
      error: function () {
        $('.printer_metrics').css('background', 'none');
      },
    });
  }

  function createCartridgeChart(ajx_json, ajx_colors) {
    Highcharts.chart('cartridge-chart', {
    credits: {
      enabled: false
    },
    chart: {
      type: 'variablepie',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    title: {
      text: ''
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y} <b>{point.name}</b>'
    },
    plotOptions: {
      variablepie: {
        allowPointSelect: true,
        cursor: 'pointer',
          dataLabels: {
            enabled: false,
          }
        }
    },
    colors: ajx_colors,
    series: [{
      minPointSize: 10,
      innerSize: '95%',
      zMin: 0,
      name: 'cartridges',
      data: ajx_json,
    }]
  });
  }

  if ($('.cartridge_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:cartridge_metrics'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.cartridge_metrics').css('background', 'none');
        $('.cartridge_metrics').html(msg.html);
        createCartridgeChart(msg.ajx_json, msg.colors);
      },
      error: function () {
        $('.cartridge_metrics').css('background', 'none');
      },
    });
  }

  function createCeChart(ajx_json, ajx_colors) {
    Highcharts.chart('ce-chart', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'variablepie',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
      title: {
        text: ''
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y} <b>{point.name}</b>'
      },
      plotOptions: {
        variablepie: {
          allowPointSelect: true,
          cursor: 'pointer',
              dataLabels: {
                  enabled: false,
              }
          }
      },
      colors: ajx_colors,
      series: [{
        minPointSize: 10,
        innerSize: '95%',
        zMin: 0,
        name: 'countries',
        data: ajx_json,
      }]
    });
  }

  if ($('.ce_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:ce_metrics'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.ce_metrics').css('background', 'none');
        $('.ce_metrics').html(msg.html);
        createCeChart(msg.ajx_json, msg.colors);
      },
      error: function () {
        $('.ce_metrics').css('background', 'none');
      },
    });
  }

  function createComponentChart(ajx_json, ajx_colors, chart_css_id) {
    Highcharts.chart(chart_css_id, {
      credits: {
        enabled: false
      },
      chart: {
        type: 'variablepie',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
      title: {
        text: ''
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y} <b>{point.name}</b>'
      },
      plotOptions: {
        variablepie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          }
        }
      },
      colors: ajx_colors,
      series: [{
        minPointSize: 10,
        innerSize: '95%',
        zMin: 0,
        name: 'components',
        data: ajx_json,
      }]
    });
  }

  if ($('.processor_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceProcessor'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.processor_metrics').css('background', 'none');
        $('.processor_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceProcessor-chart');
      },
      error: function () {
        $('.processor_metrics').css('background', 'none');
      },
    });
  }

  if ($('.ddr_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceMemory'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.ddr_metrics').css('background', 'none');
        $('.ddr_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceMemory-chart');
      },
      error: function () {
        $('.ddr_metrics').css('background', 'none');
      },
    });
  }

  if ($('.hdd_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceHardDrive'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.hdd_metrics').css('background', 'none');
        $('.hdd_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceHardDrive-chart');
      },
      error: function () {
        $('.hdd_metrics').css('background', 'none');
      },
    });
  }

  if ($('.mb_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceMotherboard'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.mb_metrics').css('background', 'none');
        $('.mb_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceMotherboard-chart');
      },
      error: function () {
        $('.mb_metrics').css('background', 'none');
      },
    });
  }

  if ($('.video_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceGraphicCard'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.video_metrics').css('background', 'none');
        $('.video_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceGraphicCard-chart');
      },
      error: function () {
        $('.video_metrics').css('background', 'none');
      },
    });
  }

  if ($('.batteries_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceBattery'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.batteries_metrics').css('background', 'none');
        $('.batteries_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceBattery-chart');
      },
      error: function () {
        $('.batteries_metrics').css('background', 'none');
      },
    });
  }

  if ($('.case_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceCase'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.case_metrics').css('background', 'none');
        $('.case_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceCase-chart');
      },
      error: function () {
        $('.case_metrics').css('background', 'none');
      },
    });
  }

  if ($('.controller_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceControl'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.controller_metrics').css('background', 'none');
        $('.controller_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceControl-chart');
      },
      error: function () {
        $('.controller_metrics').css('background', 'none');
      },
    });
  }

  if ($('.dvd_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceDrive'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.dvd_metrics').css('background', 'none');
        $('.dvd_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceDrive-chart');
      },
      error: function () {
        $('.dvd_metrics').css('background', 'none');
      },
    });
  }

  if ($('.firmware_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceFirmware'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.firmware_metrics').css('background', 'none');
        $('.firmware_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceFirmware-chart');
      },
      error: function () {
        $('.firmware_metrics').css('background', 'none');
      },
    });
  }

  if ($('.sound_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceSoundCard'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.sound_metrics').css('background', 'none');
        $('.sound_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceSoundCard-chart');
      },
      error: function () {
        $('.sound_metrics').css('background', 'none');
      },
    });
  }

  if ($('.power_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DevicePowerSupply'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.power_metrics').css('background', 'none');
        $('.power_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DevicePowerSupply-chart');
      },
      error: function () {
        $('.power_metrics').css('background', 'none');
      },
    });
  }

  if ($('.pci_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DevicePci'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.pci_metrics').css('background', 'none');
        $('.pci_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DevicePci-chart');
      },
      error: function () {
        $('.pci_metrics').css('background', 'none');
      },
    });
  }

  if ($('.net_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceNetworkCard'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.net_metrics').css('background', 'none');
        $('.net_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceNetworkCard-chart');
      },
      error: function () {
        $('.net_metrics').css('background', 'none');
      },
    });
  }

  if ($('.monitor_metrics').length) {
    $.ajax({
      method: 'POST',
      url: url_data['service:component_metrics'],
      data: {device_type: 'DeviceMonitor'},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.monitor_metrics').css('background', 'none');
        $('.monitor_metrics').html(msg.html);
        createComponentChart(msg.ajx_json, msg.colors, 'DeviceMonitor-chart');
      },
      error: function () {
        $('.monitor_metrics').css('background', 'none');
      },
    });
  }

  (function() {
    $.ajax({
      method: 'POST',
      url: url_data['service:top_events'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.top_messages').css('background', 'none');
        $('.top_messages').html(msg.html);
      },
      error: function () {
        $('.top_messages').css('background', 'none');
      },
    });
  })();

  function createOSChart(ajx_json, ajx_colors) {
    Highcharts.chart('os-chart', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'variablepie',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
      title: {
        text: ''
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y} <b>{point.name}</b>'
      },
      plotOptions: {
        variablepie: {
          allowPointSelect: true,
          cursor: 'pointer',
              dataLabels: {
                  enabled: false,
              }
          }
      },
      colors: ajx_colors,
      series: [{
        minPointSize: 10,
        innerSize: '55%',
        zMin: 0,
        name: 'os_list',
        data: ajx_json,
      }]
    });
  }

  (function() {
    $.ajax({
      method: 'POST',
      url: url_data['service:os_metrics'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.os_metrics').css('background', 'none');
        $('.os_metrics').html(msg.html);
        createOSChart(msg.ajx_json, msg.colors);
      },
      error: function () {
        $('.os_metrics').css('background', 'none');
      },
    });
  })();

  function createAgentsChart(ajx_json, ajx_colors) {
    Highcharts.chart('agents-chart', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'variablepie',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      },
      title: {
        text: ''
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.y} <b>{point.name}</b>'
      },
      plotOptions: {
        variablepie: {
          allowPointSelect: true,
          cursor: 'pointer',
              dataLabels: {
                  enabled: false,
              }
          }
      },
      colors: ajx_colors,
      series: [{
        minPointSize: 10,
        innerSize: '55%',
        zMin: 0,
        name: 'agents_list',
        data: ajx_json,
      }]
    });
  }

  (function() {
    $.ajax({
      method: 'POST',
      url: url_data['service:agents_metrics'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.agents_metrics').css('background', 'none');
        $('.agents_metrics').html(msg.html);
        createAgentsChart(msg.ajx_json, msg.colors);
      },
      error: function () {
        $('.agents_metrics').css('background', 'none');
      },
    });
  })();

  (function () {
    $.ajax({
      method: 'POST',
      url: url_data['service:sensors_metrics'],
      data: {},
      beforeSend: function (xhr, settings) {
        let csrftoken = getCookie('csrftoken');
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
          xhr.setRequestHeader('X-CSRFToken', csrftoken);
        }
      },
      success: function (msg) {
        $('.sensors_metrics').css('background', 'none');
        $('.sensors_metrics').html(msg.html);
      },
      error: function () {
        $('.sensors_metrics').css('background', 'none');
      },
    });
  })();

  function create_chart_per_year(args) {
    const x = args.x;
    const y1 = args.y1;
    const y2 = args.y2;
    const y3 = args.y3;
    const title = args.title;

    Highcharts.chart('cart_charts_year', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'line'
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: x,
      },
      yAxis: {
        min: 0,
        title: {
          text: jsi10n._('Quantity, pieces'),
        },
      },
      series: [{
        name: args.y_cart_used_by_year,
        color: '#0066FF',
        data: y1,
      }, {
        name: args.y_cart_ref_by_year,
        color: '#7acd80',
        data: y2,
      }, {
        name: args.y_cart_dis_by_year,
        color: '#ff8021',
        data: y3,
      },
      ]
    });
  }

  function create_chart_per_month(args) {
    const x = args.x;
    const y1 = args.y1;
    const y2 = args.y2;
    const y3 = args.y3;
    const title = args.title;

    Highcharts.chart('cart_charts_month', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'line'
        //type: 'column'
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: x,
      },
      yAxis: {
        min: 0,
        title: {
          text: jsi10n._('Quantity, pieces'),
        },
      },
      series: [{
        name: args.y_cart_used_by_month,
        color: '#0066FF',
        data: y1,
      }, {
        name: args.y_cart_ref_by_month,
        color: '#7acd80',
        data: y2,
      }, {
        name: args.y_cart_dis_by_month,
        color: '#ff8021',
        data: y3,
      },]
    });
  }

  function create_printer_chart_per_year(args) {
    Highcharts.chart('prnter_charts_year', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'line'
        //type: 'column'
      },
      title: {
        text: args.pr_title_year,
      },
      xAxis: {
        categories: args.x,
      },
      yAxis: {
        min: 0,
        title: {
          text: jsi10n._('Quantity, pieces'),
        },
      },
      series: [{
        name: args.y_pr_inst_by_year,
        color: '#0066FF',
        data: args.y1,
      }, {
        name: args.y_pr_ref_by_year,
        color: '#7acd80',
        data: args.y2,
      }, {
        name: args.y_pr_rem_by_year,
        color: '#ff8021',
        data: args.y3,
      },]
    });
  }

  function create_printer_chart_per_month(args) {
    Highcharts.chart('prnter_charts_month', {
      credits: {
        enabled: false
      },
      chart: {
        type: 'line'
      },
      title: {
        text: args.pr_title_month,
      },
      xAxis: {
        categories: args.x,
      },
      yAxis: {
        min: 0,
        title: {
          text: jsi10n._('Quantity, pieces'),
        },
      },
      series: [{
        name: args.y_pr_inst_by_month,
        color: '#0066FF',
        data: args.y1,
      }, {
        name: args.y_pr_ref_by_month,
        color: '#7acd80',
        data: args.y2,
      }, {
        name: args.y_pr_rem_by_month,
        color: '#ff8021',
        data: args.y3,
      },
      ]
    });
  }

  $.ajax({
    method: 'POST',
    url: url_data['service:data_for_charts'],
    data: {},
    beforeSend: function (xhr, settings) {
      let csrftoken = getCookie('csrftoken');
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader('X-CSRFToken', csrftoken);
      }
    },
    success: function (msg) {
      $('.carts_charts').css('background', 'none');
      if (!msg.success) {
        return;
      }
      $('#cart_charts_year').show();
      $('#cart_charts_month').show();
      let use_cart_month = msg.use_cart_month;
      let use_cart_year = msg.use_cart_year;

      let repair_cart_year = msg.repair_cart_year;
      let repair_cart_month = msg.repair_cart_month;

      let delete_cart_year = msg.delete_cart_year;
      let delete_cart_month = msg.delete_cart_month;
      let x = msg.months;
      let y1 = [];
      let y2 = [];
      let y3 = [];
      const current_date = new Date();
      const current_month = current_date.getMonth() + 1;
      const current_day = current_date.getDate();
      for(let i=1; i <= current_month; ++i) {
        y1.push(use_cart_year[i]);
        y2.push(repair_cart_year[i]);
        y3.push(delete_cart_year[i]);
      }
      let args1 = {};
      args1.x = x;
      args1.y1 = y1;
      args1.y2 = y2;
      args1.y3 = y3;
      args1.title = msg.cart_title_year;
      args1.y_cart_used_by_year = msg.y_cart_used_by_year;
      args1.y_cart_ref_by_year = msg.y_cart_ref_by_year;
      args1.y_cart_dis_by_year = msg.y_cart_dis_by_year;
      create_chart_per_year(args1);
      x = [];
      y1 = [];
      y2 = [];
      y3 = [];
      for(let i=1; i <= current_day; ++i) {
        x.push(i);
        y1.push(use_cart_month[i]);
        y2.push(repair_cart_month[i]);
        y3.push(delete_cart_month[i]);
      }
      let args2 = {};
      args2.x = x;
      args2.y1 = y1;
      args2.y2 = y2;
      args2.y3 = y3;
      args2.y_cart_used_by_month = msg.y_cart_used_by_month;
      args2.y_cart_ref_by_month = msg.y_cart_ref_by_month;
      args2.y_cart_dis_by_month = msg.y_cart_dis_by_month;
      args2.title = msg.cart_title_month;
      create_chart_per_month(args2);

    },
    error: function () {
      ;

    },
  });

  $.ajax({
    method: 'POST',
    url: url_data['service:data_for_printer_charts'],
    data: {},
    beforeSend: function (xhr, settings) {
      let csrftoken = getCookie('csrftoken');
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader('X-CSRFToken', csrftoken);
      }
    },
    success: function (msg) {
      $('.printers_charts').css('background', 'none');
      if (!msg.success) {
        return;
      }
      $('#prnter_charts_year').show();
      $('#prnter_charts_month').show();
      const use_printer_year = msg.use_printer_year;
      const repair_printer_year = msg.repair_printer_year;
      const delete_printer_year = msg.delete_printer_year;

      const use_printer_month = msg.use_printer_month;
      const repair_printer_month = msg.repair_printer_month;
      const delete_printer_month = msg.delete_printer_month;
      let x = msg.months;
      let y1 = [];
      let y2 = [];
      let y3 = [];
      const current_date = new Date();
      const current_month = current_date.getMonth() + 1;
      const current_day = current_date.getDate();

      for(let i=1; i <= current_month; ++i) {
        y1.push(use_printer_year[i]);
        y2.push(repair_printer_year[i]);
        y3.push(delete_printer_year[i]);
      }
      let args = {};
      args.x = x;
      args.y1 = y1;
      args.y2 = y2;
      args.y3 = y3;
      args.y_pr_inst_by_year = msg.y_pr_inst_by_year
      args.y_pr_ref_by_year = msg.y_pr_ref_by_year
      args.y_pr_rem_by_year = msg.y_pr_rem_by_year
      args.pr_title_year = msg.pr_title_year;
      create_printer_chart_per_year(args);
      x = [];
      y1 = [];
      y2 = [];
      y3 = [];
      for(let i=1; i <= current_day; ++i) {
        x.push(i);
        y1.push(use_printer_month[i]);
        y2.push(repair_printer_month[i]);
        y3.push(delete_printer_month[i]);
      }
      let args2 = {};
      args2.x = x;
      args2.y1 = y1;
      args2.y2 = y2;
      args2.y3 = y3;
      args2.pr_title_month = msg.pr_title_month;
      args2.y_pr_inst_by_month = msg.y_pr_inst_by_month;
      args2.y_pr_ref_by_month = msg.y_pr_ref_by_month;
      args2.y_pr_rem_by_month = msg.y_pr_rem_by_month;
      create_printer_chart_per_month(args2);
    },
    error: function () {
      ;

    },
  });
});