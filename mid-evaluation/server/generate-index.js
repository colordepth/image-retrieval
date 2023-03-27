const path = require("path");
const fs = require('fs');
const json = require('big-json');
const Annoy = require('annoy');

var sum = []

function read() {
    var annoyIndex2 = new Annoy(100, 'Angular');
  
    if (annoyIndex2.load("test.ann")) {
      var v1 = annoyIndex2.getItem(0);
      var v2 = annoyIndex2.getItem(1);
      console.log('Gotten vectors:', v1, v2);
  
        for (var i = 0; i < v1.length; ++i) {
          sum.push(v1[i] + v2[i]);
        }
  
        var neighbors = annoyIndex2.getNNsByVector(sum, 10, -1, false);
        console.log('Nearest neighbors to sum', neighbors);
  
        var neighborsAndDistances = annoyIndex2.getNNsByVector(sum, 10, -1, true);
        console.log('Nearest neighbors to sum with distances', neighborsAndDistances);
    }
  }
  
  read();