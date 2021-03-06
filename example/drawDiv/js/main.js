(function(){
	'use strict';
var body = document.body,
	  //area = document.getElementById('content'),
		content = document.createElement('div'),
	/**
     * Areas
     */
    topArea = [
      11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
      11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
    ],
    middleArea = [
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,
      12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,
    ],
    bottomArea = [
      13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
      13,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,13,
      13,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,13,
      13,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,13,
      13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
    ];
  /**
   * Draw the divs
   */
  function drawDiv(divArea) {
    var i, e;
    for (i = 0; i < divArea.length; i++) {
      e = document.createElement('div');
      e.innerHTML = '';
      e.className = 't' + divArea[i];
      e.id = 'n' + i;
      content.appendChild(e);
    }

  }
  content.id ="content";
  body.appendChild(content);

  drawDiv(topArea);
  drawDiv(middleArea);
  drawDiv(bottomArea);
})();
