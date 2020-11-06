'use strict';

document.addEventListener('DOMContentLoaded', function() {
	
	
	var for_dropdown = document.querySelector('.for-dropdown');
	var dropdown = document.querySelector('.dropdown');

	
	for_dropdown.addEventListener('mouseover', function(){
		dropdown.style.display = 'block';
		});
	
	for_dropdown.addEventListener('mouseout', function(){
		dropdown.style.display = 'none';
		});

	var fixedTop = document.querySelector('.navbar-fixed-top');
	

	window.addEventListener('scroll', function() {
       	fixedTop.style.borderBottom = '5px solid grey';
    });

	var backToTop = document.querySelector('.back-to-top');
	// console.log(backToTop);
	
	backToTop.addEventListener('click', function(){
		console.log(backToTop);
		window.scroll(0,0);
	})

	var buttons = document.querySelectorAll('.read-more');
      	
    function showHide() {
	    	var textArea = this.previousElementSibling;
	      	if (textArea.style.display === 'none' || textArea.style.display === '') {

        
	        textArea.style.display = 'block';
	        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
	      } else {
	
	        textArea.style.display = 'none';
	        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
	      }
        };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
    
});

