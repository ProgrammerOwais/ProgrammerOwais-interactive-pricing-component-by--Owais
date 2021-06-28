var slider    = document.querySelector('.slider');     //  Accessing range slider values
var pageViews = document.querySelector('.pageviews');   // Accessing page values through slider
var dollar    = document.querySelector('.dollar');      // dollar changing values
var month_year= document.querySelector('.month');       // changing month or year text
var discount = 0;
var defaulfset = "off";                      // for toggling button

pageViews.innerHTML = slider.value;         // Entering page values through range slider

if (defaulfset == "off") {                  // initail or 1st-toggle-button  postion

    defaulfset = "on"

    slider.oninput = function () {         // on changing input  or moving slider change the following values.

        pageViews.innerHTML = this.value;
        discount = 0;
        month_year.innerHTML = " / month"

        if(slider.value >= 1 && slider.value <= 50 ) {

            dollar.innerHTML = '$' + 8.00 ;
    
        }
    
        else if (slider.value >= 50 && slider.value < 100) {
    
            dollar.innerHTML = '$' + 12.00 ;
        }
        else if (slider.value >= 100 && slider.value < 500) {
         
            dollar.innerHTML = '$' + 16.00 ;
        }
        else if (slider.value >= 500 && slider.value < 1000) {
    
            dollar.innerHTML = '$' + 24.00 ;
            
        }
        else  {
    
            dollar.innerHTML = '$' + 36.00 ;
            
        }
    }
}


function practice() {                           // On clicking toggling button
    
    if (defaulfset == "off") {                  // change following values  as soon as first time toggle button clicked
                                                // , without moving slider.
        defaulfset = "on"

        discount = 0;                          // no discount for reading per month
        month_year.innerHTML = " / month"

        if(slider.value >= 1 && slider.value <= 50 ) {

            dollar.innerHTML = '$' + 8.00 ;
    
        }
    
        else if (slider.value >= 50 && slider.value < 100) {
    
            dollar.innerHTML = '$' + 12.00 ;
        }
        else if (slider.value >= 100 && slider.value < 500) {
         
            dollar.innerHTML = '$' + 16.00 ;
        }
        else if (slider.value >= 500 && slider.value < 1000) {
    
            dollar.innerHTML = '$' + 24.00 ;
            
        }
        else  {
    
            dollar.innerHTML = '$' + 36.00 ;
            
        }

        slider.oninput = function () {          // Change the following values as slider moves

            pageViews.innerHTML = this.value;
            discount = 0;                          // no discount for reading per month
            month_year.innerHTML = " / month"

            if(slider.value >= 1 && slider.value <= 50 ) {

                dollar.innerHTML = '$' + 8.00 ;
        
            }
        
            else if (slider.value >= 50 && slider.value < 100) {
        
                dollar.innerHTML = '$' + 12.00 ;
            }
            else if (slider.value >= 100 && slider.value < 500) {
             
                dollar.innerHTML = '$' + 16.00 ;
            }
            else if (slider.value >= 500 && slider.value < 1000) {
        
                dollar.innerHTML = '$' + 24.00 ;
                
            }
            else  {
        
                dollar.innerHTML = '$' + 36.00 ;
                
            } 

        }

    }

    else if (defaulfset == "on") {   // change following values  as soon as 2nd time toggle button clicked , without moving slider.

        defaulfset = "off"

            discount = 0.25;                 // discount formula = value *0.25 
            month_year.innerHTML = ' / year';  // discount is available for reading per year

            if(slider.value >= 1 && slider.value <= 50 ) {

                dollar.innerHTML = '$' + (8.00 -  (8.00 * discount));
        
            }
        
            else if (slider.value >= 50 && slider.value < 100) {
        
                dollar.innerHTML = '$' + (12.00 - (12.00 * discount));
            }
            else if (slider.value >= 100 && slider.value < 500) {
             
                dollar.innerHTML = '$' + (16.00 - (16.00 * discount));
            }
            else if (slider.value >= 500 && slider.value < 1000) {
        
                dollar.innerHTML = '$' + (24.00 - (24.00 * discount));
                
            }
            else  {
        
                dollar.innerHTML = '$' + (36.00 - (36.00 * discount));
                
            }

        slider.oninput = function () {        // change the following values as slider moves.
            pageViews.innerHTML = this.value;
            discount = 0.25;                 // discount formula = value *0.25 
            month_year.innerHTML = ' / year';  // discount is available for reading per year

            if(slider.value >= 1 && slider.value <= 50 ) {

                dollar.innerHTML = '$' + (8.00 -  (8.00 * discount));
        
            }
        
            else if (slider.value >= 50 && slider.value < 100) {
        
                dollar.innerHTML = '$' + (12.00 - (12.00 * discount));
            }
            else if (slider.value >= 100 && slider.value < 500) {
             
                dollar.innerHTML = '$' + (16.00 - (16.00 * discount));
            }
            else if (slider.value >= 500 && slider.value < 1000) {
        
                dollar.innerHTML = '$' + (24.00 - (24.00 * discount));
                
            }
            else  {
        
                dollar.innerHTML = '$' + (36.00 - (36.00 * discount));
                
            }
        }
    }
}





