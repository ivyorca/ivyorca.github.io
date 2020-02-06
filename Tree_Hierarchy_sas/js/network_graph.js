  var depthArray, dp1Array, c_id, searchField, root2, dataTable, root3,root1,network_data;

  const SAMPLE_MESSAGE = {
    version: "1",
    resultName: "result",
    rowCount: 6,
    availableRowCount: 6,
    data: [
      ["Node", "1C90190695(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "JOY**********D", "1", "1C90190695", "2018", "1000"],
      ["Node", "1G00180090(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "KEP**********D", "3", "1G00180090", "2018", "2000"],
      ["Node", "1N35190068(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "KEP**********D", "4", "1N35190068", "2018", "3000"],
      ["Node", "4W34201217(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "VIS**********.", "0", "4W34201217", "2018", "4000"],
      ["Node", "4Z54190794(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "KEP**********D", "2", "4Z54190794", "2018", "5000"],
      ["Node", "6D81T1F57U(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "ALL**********.", "1", "6D81T1F57U", "2018", "6000"],
      ["Node", "7N94201317(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "INS**********.", "1", "7N94201317", "2018", "7000"],
      ["Node", "9M34201217(UEN)", "(missing)", "(missing)", "(missing)", "(missing)", "PRO**********.", "1", "9M34201217", "2018", "9000"],
      ["Link", "1C90190695(UEN)_4W34201217(UEN)", "1C90190695(UEN)", "4W34201217(UEN)", "TO", "30.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"],
      ["Link", "1G00180090(UEN)_4Z54190794(UEN)", "1G00180090(UEN)", "4Z54190794(UEN)", "TO", "100.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"],
      ["Link", "1N35190068(UEN)_1G00180090(UEN)", "1N35190068(UEN)", "1G00180090(UEN)", "TO", "100.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"],
      ["Link", "4W34201217(UEN)_9M34201217(UEN)", "4W34201217(UEN)", "9M34201217(UEN)", "TO", "100.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"],
      ["Link", "4Z54190794(UEN)_1C90190695(UEN)", "4Z54190794(UEN)", "1C90190695(UEN)", "TO", "100.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"],
      ["Link", "6D81T1F57U(UEN)_4W34201217(UEN)", "6D81T1F57U(UEN)", "4W34201217(UEN)", "TO", "30.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"],
      ["Link", "7N94201317(UEN)_4W34201217(UEN)", "7N94201317(UEN)", "4W34201217(UEN)", "TO", "40.000000", "(missing)", "(missing)", "(missing)", "(missing)", "(missing)"]
    ],
    columns: [{
        name: "column",
        label: "Item Type",
        type: "string"
      },
      {
        name: "column",
        label: "id",
        type: "string"
      },
      {
        name: "column",
        label: "Source",
        type: "string"
      },
      {
        name: "column",
        label: "Target",
        type: "string"
      },
      {
        name: "column",
        label: "Direction",
        type: "string"
      },
      {
        name: "column",
        label: "Percentage Shareholding",
        type: "number"
      },
      {
        name: "column",
        label: "Enterprise Name",
        type: "string"
      },
      {
        name: "column",
        label: "Level",
        type: "string"
      },
      {
        name: "column",
        label: "UEN",
        type: "string"
      },
      {
        name: "column",
        label: "Year",
        type: "string"
      },
      {
        name: "column",
        label: "Value",
        type: "number"
      },
    ]
  };

var sample_dataTable = {"nodes":[{"Item Type":"Node","id":"1C90190695(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"JOY**********D","Level":"1","UEN":"1C90190695","Year":"2018","Value":"1000"},{"Item Type":"Node","id":"1G00180090(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"KEP**********D","Level":"3","UEN":"1G00180090","Year":"2018","Value":"2000"},{"Item Type":"Node","id":"1N35190068(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"KEP**********D","Level":"4","UEN":"1N35190068","Year":"2018","Value":"3000"},{"Item Type":"Node","id":"4W34201217(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"VIS**********.","Level":"0","UEN":"4W34201217","Year":"2018","Value":"4000"},{"Item Type":"Node","id":"4Z54190794(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"KEP**********D","Level":"2","UEN":"4Z54190794","Year":"2018","Value":"5000"},{"Item Type":"Node","id":"6D81T1F57U(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"ALL**********.","Level":"1","UEN":"6D81T1F57U","Year":"2018","Value":"6000"},{"Item Type":"Node","id":"7N94201317(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"INS**********.","Level":"1","UEN":"7N94201317","Year":"2018","Value":"7000"},{"Item Type":"Node","id":"9M34201217(UEN)","Source":"","Target":"","Direction":"","Percentage Shareholding":"","Enterprise Name":"PRO**********.","Level":"1","UEN":"9M34201217","Year":"2018","Value":"9000"}],"links":[{"Item Type":"Link","id":"1C90190695(UEN)_4W34201217(UEN)","Source":"1C90190695(UEN)","Target":"4W34201217(UEN)","Direction":"TO","Percentage Shareholding":"30.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""},{"Item Type":"Link","id":"1G00180090(UEN)_4Z54190794(UEN)","Source":"1G00180090(UEN)","Target":"4Z54190794(UEN)","Direction":"TO","Percentage Shareholding":"100.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""},{"Item Type":"Link","id":"1N35190068(UEN)_1G00180090(UEN)","Source":"1N35190068(UEN)","Target":"1G00180090(UEN)","Direction":"TO","Percentage Shareholding":"100.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""},{"Item Type":"Link","id":"4W34201217(UEN)_9M34201217(UEN)","Source":"4W34201217(UEN)","Target":"9M34201217(UEN)","Direction":"TO","Percentage Shareholding":"100.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""},{"Item Type":"Link","id":"4Z54190794(UEN)_1C90190695(UEN)","Source":"4Z54190794(UEN)","Target":"1C90190695(UEN)","Direction":"TO","Percentage Shareholding":"100.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""},{"Item Type":"Link","id":"6D81T1F57U(UEN)_4W34201217(UEN)","Source":"6D81T1F57U(UEN)","Target":"4W34201217(UEN)","Direction":"TO","Percentage Shareholding":"30.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""},{"Item Type":"Link","id":"7N94201317(UEN)_4W34201217(UEN)","Source":"7N94201317(UEN)","Target":"4W34201217(UEN)","Direction":"TO","Percentage Shareholding":"40.000000","Enterprise Name":"","Level":"","UEN":"","Year":"","Value":""}]}


function updateData(){
  console.log(network_data);
  network_data = network_data ? network_data:sample_dataTable;
  console.log(network_data);

  run(network_data);
}

  function convertData(arrayData, columnsInfo) {
    var len = arrayData.length;
    d_dataTable = [];
    let colname_arr = columnsInfo.map(a => a.label);
    var arr_len = colname_arr.length;
    for (var i = 0; i < len; i++) {
      var cols_array_toreduce = [];
      var data_array_toreduce = [];
      arr_len = arrayData[i].length;
      for (var j = 0; j < arr_len; j++) {
        cols_array_toreduce.push(colname_arr[j]);
        if (arrayData[i][j] == "(missing)") {
          data_array_toreduce.push("");
        } else {
          data_array_toreduce.push(arrayData[i][j]);
        }
      }
      var result = data_array_toreduce.reduce(function(result, field, index) {
        result[cols_array_toreduce[index]] = field;
        return result;
      }, {});
      d_dataTable.push(result);
    }

  const [nodes_arr, links_arr] = // Use "deconstruction" style assignment
    d_dataTable
      .reduce((result, element) => {
          result[element["Item Type"] == "Node" ? 0 : 1].push(element); // Determine and push to small/large arr
          return result;
        },
        [
          [],
          []
        ]);
    const graph_data = {
      nodes: nodes_arr,
      links: links_arr
    }
    // return JSON.stringify(graph_data);
    console.log(JSON.stringify(graph_data));
    // console.log(graph_data);

    return graph_data;
  }

  function run(graph) {
    d3.selectAll("g").remove();
    graph.links.forEach(function(d) {
          d.source = d.Source;
          d.target = d.Target;
    });


    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var simulation = d3.forceSimulation()
    .nodes(graph.nodes)
      .force("link", d3.forceLink(graph.links).id(function(d) {
        return d.id;
      }))
      //.force("charge", d3.forceManyBody().strength(-200))
      .force('charge', d3.forceManyBody()
        .strength(-200)
        .theta(0.8)
        .distanceMax(150)
      )
      // 		.force('collide', d3.forceCollide()
      //       .radius(d => 40)
      //       .iterations(2)
      //     )
      .force("center", d3.forceCenter(width / 2, height / 2));

    // console.log(graph.links)

    var link = svg.append("g")
      .style("stroke", "#aaa")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line");

    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("r", 2)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    var label = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
      .attr("class", "label")
      .text(function(d) {
        return d.id;
      });

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(graph.links);

    function ticked() {
      link
        .attr("x1", function(d) {
          return d.source.x;
        })
        .attr("y1", function(d) {
          return d.source.y;
        })
        .attr("x2", function(d) {
          return d.target.x;
        })
        .attr("y2", function(d) {
          return d.target.y;
        });

      node
        .attr("r", 16)
        .style("fill", "#efefef")
        .style("stroke", "#424242")
        .style("stroke-width", "1px")
        .attr("cx", function(d) {
          return d.x + 5;
        })
        .attr("cy", function(d) {
          return d.y - 3;
        });

      label
        .attr("x", function(d) {
          return d.x;
        })
        .attr("y", function(d) {
          return d.y;
        })
        .style("font-size", "10px").style("fill", "#333");


    }
  }

  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
    //  simulation.fix(d);
  }

  function dragged(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
    //  simulation.fix(d, d3.event.x, d3.event.y);
  }

  function dragended(d) {
    d.fx = d3.event.x
    d.fy = d3.event.y
    if (!d3.event.active) simulation.alphaTarget(0);
    //simulation.unfix(d);
  }
  var arrayData = SAMPLE_MESSAGE.data;
  var columnsInfo = SAMPLE_MESSAGE.columns;
  var data = convertData(arrayData, columnsInfo);
  run(data);

  function onDataReceived(event) {
    if (
      event &&
      event.hasOwnProperty("data") &&
      event.hasOwnProperty("columns") &&
      event.hasOwnProperty("resultName") &&
      event.data
    ) {
      eventHandlerFromVA(event);
    }
  }

  function eventHandlerFromVA(messageFromVA) {
    console.log(messageFromVA);
    var arrayData = messageFromVA.data;
    var columnsInfo = messageFromVA.columns;
    network_data=convertData(arrayData, columnsInfo);
    console.log(network_data);
    updateData();

  }
  if (!inIframe()) {
    // sample_va();
    onDataReceived(SAMPLE_MESSAGE);
  }
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  va.messagingUtil.setOnDataReceivedCallback(onDataReceived);
  updateData();
